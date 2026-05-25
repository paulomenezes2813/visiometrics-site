---
id: manual-05-modulos-sistema
title: Módulos do Sistema (catálogo comercial)
section: 5
slug: modulos
source: frontend/src/pages/manual-usuario.tsx (Section #modulos) + MANUAL_MODULOS_EXTRA
tags: [modulos, catalogo-comercial, pacote, addon, core, gating]
related_screens: [/sistema/modulos, /5s, /certificacoes, /acompanhamento/dashboard, /auditoria-gestao/visao, /maturidade/visualizacao, /ecl, /vizo, /processos, /inteligencia-operacional]
last_updated: 2026-05-21
---

# 5. Módulos do Sistema (catálogo comercial)

O Visiometrics é vendido em **10 módulos** organizados em 3 categorias:

| Categoria | Significado | Cor (badge) |
|---|---|---|
| **Núcleo (`core`)** | Incluído em qualquer plano. Não vende sozinho. | Azul |
| **Pacote** | Vendido individualmente como produto principal. | Violeta |
| **Add-on** | Vendido como upgrade em cima de outro pacote. | Amarelo |

> Para ver o que está ativo na sua empresa e solicitar novos módulos: **Sistema → Meus Módulos** (`/sistema/modulos`).

---

## Núcleo

### `core` — Núcleo Visiometrics
Cadastros básicos (usuários, funcionários, equipes, processos), indicadores, dashboards, ações de melhoria e gamificação (selos). **Incluído em qualquer plano.**

- **Telas:** Usuários, Funcionários, Equipes, Processos, Indicadores, Ações de Melhoria, Selos

---

## Pacotes

### `methodology_5s` — 5S
Programa 5S de organização e qualidade nos ambientes físicos. Ambientes, checklists, auditorias e ranking.

- **Acesso:** `/5s`
- **Telas:** Ambientes 5S, Checklists e Auditorias, Resultados e Histograma, Feedback e Ações, Biblioteca 5S

### `operational_assessment` — Acompanhamento Operacional
Avaliações em campo com **foto e áudio**, tópicos de observação e dashboard de acompanhamento por equipe.

- **Acesso:** `/acompanhamento/dashboard`
- **Telas:** Configuração, Avaliação em Campo, Dashboard e Análise

### `management_audit` — Auditoria da Gestão
Auditoria in loco da gestão, dashboard de resultados e benchmarking entre unidades.

- **Acesso:** `/auditoria-gestao/visao`
- **Telas:** Visão Geral, Auditoria In Loco, Dashboard, Benchmarking, Configurações

### `certification` — Certificação & Treinamentos
Trilhas, turmas, instrutores, avaliações teóricas/práticas, relatórios e materiais de treinamento.

- **Acesso:** `/certificacoes`
- **Telas:** Documentos, Certificações, Turmas, Acompanhamento, Gestão do Instrutor, Relatórios

### `leadership_maturity` — Matriz de Maturidade
Classificação de funcionários em **4 quadrantes (Habilidade × Vontade)**, avaliação entre pares, absenteísmo e planos de ação por quadrante.

- **Acesso:** `/maturidade/visualizacao`
- **Telas:** Configuração, Avaliação entre Pares, Absenteísmo e Ocorrências, Visualização da Matriz

### `leadership_ecl` — ECL — Líderes
**Educação Continuada do Líder**: avaliação invertida, ciclos, diagnóstico, cascata hierárquica, PDI e trilha de conteúdos.

- **Acesso:** `/ecl`
- **Telas:** Ciclos de Avaliação, Diagnóstico, Cascata Hierárquica, PDI dos Líderes, Prontuário do Líder, Trilha de Conteúdos

### `quality_collaborative` — Cadeia / Qualidade Colaborativa
**Vizo** (relações cliente↔fornecedor, ações Vizo, ocorrências) **+ Feedback Direto** (ranking, painéis de cliente e fornecedor).

- **Acesso:** `/vizo`
- **Telas:** Vizo Gestão, Registrar Ocorrência, Painel do Cliente, Painel do Fornecedor, Ranking, Ações Vizo

---

## Add-ons

### `document_management` — Gestão de Documentos
Anexos e versionamento de documentos de processo. Add-on opcional.

- **Acesso:** `/processos`
- **Telas:** Documentos por Processo, Versionamento

### `advanced_intelligence` — Inteligência Avançada (IA)
**Inteligência Operacional, Análise de Eficácia, Consulta de Dados e Organograma.** Add-on premium que enriquece qualquer pacote.

- **Acesso:** `/inteligencia-operacional`
- **Telas:** Inteligência Operacional, Análise de Eficácia, Consulta de Dados, Organograma

---

## Como o agente deve usar este conteúdo

- Quando perguntam "quais módulos existem?", listar pelos 3 grupos (Núcleo, Pacotes, Add-ons).
- Para "tenho acesso a X?", direcionar a `/sistema/modulos`.
- Para "como compro X?", explicar que é via solicitação ao comercial pelo botão "Solicitar este módulo" em `/sistema/modulos`, ou direto pelo email `comercial@visiometrics.com.br`.
- Diferença importante:
  - **Pacote**: vende sozinho.
  - **Add-on**: vende como upgrade — agente deve sugerir Add-ons depois que o cliente já tem ≥ 1 Pacote.
- O **Núcleo** *não* deve aparecer como opção comprável — está implícito em qualquer plano.
- Quando o cliente desativa um Pacote, **as telas dele somem da sidebar e qualquer rota direta** (`/5s`, `/maturidade/visualizacao`, etc) mostra uma tela de upsell pedindo para falar com o comercial.
- A camada de gating é **dupla**: backend bloqueia com `403` (`ModuleGuard` + `@RequiresModule`), frontend esconde sidebar e rotas (`useHasModule` + `<RequireModule>`).
