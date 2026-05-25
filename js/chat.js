// ============================================================
// Visione — Chat widget
// Lê knowledge-base.json e responde via match por keywords.
// Sem dependências externas.
// ============================================================

(function () {
  const KB_URL = 'knowledge-base.json';
  let kb = null;
  let isOpen = false;
  let isThinking = false;
  let messagesEl, inputEl, sendBtnEl, suggestionsEl, windowEl, fabEl;

  // ---------- Utilidades ------------------------------------
  function normalize(text) {
    return (text || '')
      .toLowerCase()
      .normalize('NFD')
      .replace(/[̀-ͯ]/g, '') // remove acentos
      .replace(/[^a-z0-9\s]/g, ' ')    // limpa pontuação
      .replace(/\s+/g, ' ')
      .trim();
  }

  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, (c) => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;',
    }[c]));
  }

  // ---------- Busca por keywords ----------------------------
  function findBestAnswer(userText) {
    if (!kb) return null;
    const norm = normalize(userText);
    if (!norm) return null;

    const tokens = norm.split(' ').filter((t) => t.length > 1);

    let best = null;
    let bestScore = 0;

    for (const topic of kb.topics) {
      let score = 0;
      const kws = (topic.keywords || []).map((k) => normalize(k));

      // 1) Match de keyword inteira (substring) — peso alto
      for (const kw of kws) {
        if (norm.includes(kw)) score += kw.split(' ').length * 3;
      }

      // 2) Match de palavras isoladas em keywords ou na pergunta
      const haystack = normalize(
        (topic.question || '') + ' ' + (topic.keywords || []).join(' '),
      );
      for (const tk of tokens) {
        if (haystack.includes(' ' + tk + ' ') || haystack.startsWith(tk + ' ') || haystack.endsWith(' ' + tk)) {
          score += 1;
        }
      }

      if (score > bestScore) {
        bestScore = score;
        best = topic;
      }
    }

    // exige score mínimo pra evitar matches falsos
    return bestScore >= 2 ? best : null;
  }

  // ---------- Render ----------------------------------------
  function addMessage({ role, text, category }) {
    const div = document.createElement('div');
    div.className = 'vm-msg vm-msg--' + role;

    if (role === 'bot' && category) {
      const tag = document.createElement('span');
      tag.className = 'vm-msg__tag';
      tag.textContent = category;
      div.appendChild(tag);
    }

    const body = document.createElement('div');
    body.innerHTML = escapeHtml(text)
      .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>') // **negrito**
      .replace(/\n/g, '<br />');
    div.appendChild(body);

    messagesEl.appendChild(div);
    messagesEl.scrollTo({ top: messagesEl.scrollHeight, behavior: 'smooth' });
  }

  function showTyping() {
    const el = document.createElement('div');
    el.className = 'vm-typing';
    el.id = 'vm-typing';
    el.innerHTML = '<span></span><span></span><span></span>';
    messagesEl.appendChild(el);
    messagesEl.scrollTo({ top: messagesEl.scrollHeight, behavior: 'smooth' });
  }

  function hideTyping() {
    const el = document.getElementById('vm-typing');
    if (el) el.remove();
  }

  function renderSuggestions(list) {
    suggestionsEl.innerHTML = '';
    list.forEach((q) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'vm-chip';
      btn.textContent = q;
      btn.addEventListener('click', () => {
        suggestionsEl.innerHTML = '';
        handleSubmit(q);
      });
      suggestionsEl.appendChild(btn);
    });
  }

  // ---------- Fluxo -----------------------------------------
  async function handleSubmit(rawText) {
    if (isThinking) return;
    const text = (rawText || '').trim();
    if (!text) return;

    addMessage({ role: 'user', text });
    inputEl.value = '';
    inputEl.style.height = 'auto';
    sendBtnEl.disabled = true;
    isThinking = true;

    showTyping();
    // simula tempo de processamento (UX)
    const delay = 500 + Math.random() * 600;
    await new Promise((r) => setTimeout(r, delay));
    hideTyping();

    const match = findBestAnswer(text);

    if (match) {
      addMessage({
        role: 'bot',
        text: match.answer,
        category: match.category,
      });
    } else {
      const fallback =
        (kb && kb.fallback && kb.fallback.no_match) ||
        'Não consegui responder. Quer que eu encaminhe para o time?';
      addMessage({ role: 'bot', text: fallback });
    }

    isThinking = false;
    sendBtnEl.disabled = false;
    inputEl.focus();
  }

  function autoResize(el) {
    el.style.height = 'auto';
    el.style.height = Math.min(el.scrollHeight, 96) + 'px';
  }

  function open() {
    isOpen = true;
    windowEl.dataset.open = 'true';
    fabEl.setAttribute('aria-expanded', 'true');
    setTimeout(() => inputEl.focus(), 240);
  }

  function close() {
    isOpen = false;
    windowEl.dataset.open = 'false';
    fabEl.setAttribute('aria-expanded', 'false');
  }

  // ---------- Bootstrap -------------------------------------
  function build() {
    // FAB
    fabEl = document.createElement('button');
    fabEl.className = 'vm-chat-fab';
    fabEl.type = 'button';
    fabEl.setAttribute('aria-label', 'Abrir chat de ajuda');
    fabEl.setAttribute('aria-expanded', 'false');
    fabEl.innerHTML = `
      <span class="vm-chat-fab__pulse"></span>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
      </svg>
    `;

    // Janela
    windowEl = document.createElement('div');
    windowEl.className = 'vm-chat-window';
    windowEl.dataset.open = 'false';
    windowEl.setAttribute('role', 'dialog');
    windowEl.setAttribute('aria-label', 'Assistente Visione');
    windowEl.innerHTML = `
      <header class="vm-chat-header">
        <div class="vm-chat-header__avatar">V</div>
        <div class="vm-chat-header__title">
          <span class="vm-chat-header__name">Assistente Visione</span>
          <span class="vm-chat-header__status">online</span>
        </div>
        <button class="vm-chat-header__close" type="button" aria-label="Fechar chat">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"/>
            <line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>
      </header>
      <div class="vm-chat-messages" id="vm-msgs"></div>
      <div class="vm-chat-suggestions" id="vm-suggestions"></div>
      <div class="vm-chat-input">
        <div class="vm-chat-input__wrap">
          <textarea
            class="vm-chat-input__field"
            id="vm-input"
            rows="1"
            placeholder="Pergunte sobre o Visione…"
            autocomplete="off"
          ></textarea>
          <button class="vm-chat-input__send" id="vm-send" type="button" aria-label="Enviar pergunta" disabled>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="12" y1="19" x2="12" y2="5"/>
              <polyline points="5 12 12 5 19 12"/>
            </svg>
          </button>
        </div>
      </div>
      <div class="vm-chat-footer">
        Respostas baseadas no nosso material. Dúvidas mais específicas →
        <a href="mailto:comercial@visione.com.br">falar com o comercial</a>.
      </div>
    `;

    document.body.appendChild(windowEl);
    document.body.appendChild(fabEl);

    messagesEl = windowEl.querySelector('#vm-msgs');
    suggestionsEl = windowEl.querySelector('#vm-suggestions');
    inputEl = windowEl.querySelector('#vm-input');
    sendBtnEl = windowEl.querySelector('#vm-send');

    // Eventos
    fabEl.addEventListener('click', () => (isOpen ? close() : open()));
    windowEl
      .querySelector('.vm-chat-header__close')
      .addEventListener('click', close);

    inputEl.addEventListener('input', () => {
      autoResize(inputEl);
      sendBtnEl.disabled = inputEl.value.trim().length === 0;
    });

    inputEl.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        if (!sendBtnEl.disabled) handleSubmit(inputEl.value);
      }
    });

    sendBtnEl.addEventListener('click', () => handleSubmit(inputEl.value));

    // ESC fecha
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && isOpen) close();
    });
  }

  async function init() {
    build();
    try {
      const res = await fetch(KB_URL);
      kb = await res.json();
    } catch (e) {
      console.error('[vm-chat] falha ao carregar knowledge-base.json', e);
      kb = { topics: [], fallback: { no_match: 'Não consegui carregar a base.' } };
    }

    const greeting =
      (kb.fallback && kb.fallback.greeting) ||
      'Olá! Como posso ajudar?';
    addMessage({ role: 'bot', text: greeting });

    const sugg = kb.suggested_questions || [];
    renderSuggestions(sugg.slice(0, 4));
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
