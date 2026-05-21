# Visiometrics — Site institucional

Landing page estática do **Visiometrics**, um sistema operacional de
maturidade organizacional. O site apresenta a filosofia do produto,
as 5 dimensões observadas, o catálogo de módulos e inclui um chat de
ajuda no canto da tela, alimentado por uma base de conhecimento local.

> Premissa central: *“Resultados sustentáveis nascem da evolução
> simultânea da operação, da liderança e da cultura.”*

## Stack

- **HTML + CSS + JS puros** — zero build, zero dependências de runtime
- **Google Fonts** — Plus Jakarta Sans (display) e Inter (corpo)
- **Chat widget** — vanilla JS, lê `knowledge-base.json` por `fetch`
- **Acessibilidade** — `aria-*`, foco gerenciado, `prefers-reduced-motion`

## Estrutura

```
.
├── index.html             # Página única (hero, problema, filosofia, dimensões, módulos, depoimentos, etc)
├── styles.css             # Design system + componentes
├── script.js              # Smooth scroll, IntersectionObserver, item ativo no menu
├── chat.css               # Estilo do widget de chat (FAB + janela)
├── chat.js                # Lógica do chat (busca por keyword)
├── knowledge-base.json    # 25 tópicos Q&A — material de referência
└── VisioMetrics_Documentacao.docx  # Documento filosófico original
```

## Como rodar localmente

```bash
# Opção 1 — abrir o HTML direto
open index.html
# ⚠️ Nesse modo, o chat NÃO carrega — navegadores bloqueiam fetch em file://

# Opção 2 — servidor estático (recomendado)
python3 -m http.server 4321
# abrir http://localhost:4321
```

## Knowledge base

O `knowledge-base.json` é **o material de referência da plataforma**.
Tem estrutura própria para:

1. **Hoje** — alimentar o chat local (busca por keywords)
2. **Amanhã** — virar contexto de uma LLM real (Claude, GPT, Gemini)

Campos principais:

| Campo | Função |
| --- | --- |
| `meta` | Metadados do produto (nome, contato, versão) |
| `guidelines_for_agent` | Diretrizes de tom para o agente |
| `topics[]` | 25 tópicos com `keywords`, `question`, `answer`, `category` |
| `fallback` | Saudação e mensagem padrão sem match |
| `suggested_questions[]` | Chips iniciais clicáveis |

Para adicionar um tópico novo, basta acrescentar um item em `topics[]`
e listar palavras-chave em `keywords` (sem acentos, em minúsculas).

## Deploy

Como é 100% estático, qualquer provedor serve:

```bash
# Cloudflare Pages — drag & drop da pasta inteira em pages.cloudflare.com
# Vercel
npx vercel --prod
# Netlify
npx netlify deploy --dir . --prod
# GitHub Pages — habilitar Settings → Pages → Source: main / root
```

## Filosofia em uma frase

> *“O Visiometrics transforma gestão em consciência organizacional.”*
