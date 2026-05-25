// Visione — interações leves (sem dependências)
(function () {
  // Ano atual no footer
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  // Fade-in das seções
  const targets = document.querySelectorAll('.hero, .section, .closing');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' },
    );
    targets.forEach((t) => io.observe(t));
  } else {
    targets.forEach((t) => t.classList.add('is-visible'));
  }

  // Item ativo no menu conforme scroll
  const linkMap = new Map();
  document.querySelectorAll('.nav__links a').forEach((a) => {
    const id = a.getAttribute('href');
    if (id && id.startsWith('#')) linkMap.set(id.slice(1), a);
  });

  if (linkMap.size && 'IntersectionObserver' in window) {
    const sectionIds = Array.from(linkMap.keys());
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        // pega a seção mais visível
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!visible) return;
        const activeId = visible.target.id;
        linkMap.forEach((link, id) => {
          link.classList.toggle('is-active', id === activeId);
        });
      },
      { threshold: [0.25, 0.5, 0.75], rootMargin: '-80px 0px -50% 0px' },
    );
    sections.forEach((s) => observer.observe(s));
  }

  // Cortinas — qualquer seção .manifesto[data-open] com toggles internos
  document.querySelectorAll('.manifesto[data-open]').forEach((section) => {
    const toggles = section.querySelectorAll('.manifesto__toggle');
    const topToggle = section.querySelector(
      '.manifesto__toggle:not(.manifesto__toggle--bottom)',
    );
    const topLabel = topToggle?.querySelector('.manifesto__toggle-label');

    const openLabel = section.dataset.openLabel || 'Recolher';
    const closedLabel = section.dataset.closedLabel || 'Ler completo';

    toggles.forEach((btn) => {
      btn.addEventListener('click', () => {
        const isOpen = section.dataset.open === 'true';
        const next = !isOpen;
        section.dataset.open = String(next);

        if (topToggle) topToggle.setAttribute('aria-expanded', String(next));
        if (topLabel) topLabel.textContent = next ? openLabel : closedLabel;

        // Ao recolher pelo botão do final, volta ao topo da seção
        if (!next && btn.classList.contains('manifesto__toggle--bottom')) {
          section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });

    // Se a URL chegar com âncora dessa seção, abre automaticamente
    if (section.id && window.location.hash === '#' + section.id) {
      section.dataset.open = 'true';
      if (topToggle) topToggle.setAttribute('aria-expanded', 'true');
      if (topLabel) topLabel.textContent = openLabel;
    }
  });
})();
