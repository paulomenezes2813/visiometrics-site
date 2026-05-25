---
id: manual-04-estrutura-menus
title: Estrutura dos Menus
section: 4
slug: menus
source: frontend/src/pages/manual-usuario.tsx (Section #menus) + MANUAL_MENUS + MANUAL_MENUS_MODULOS + MANUAL_MENUS_SUPERADMIN
tags: [navegacao, sidebar, menus, gating-modulos]
related_screens: ["/", /painel-equipe, /inserir-dados, /usuarios, /sistema/modulos, /sistema/config, /sistema/manual, /processos, /members, /equipes, /indicadores, /vincular-indicadores, /vincular-processos, /visualizacao, /acoes-melhoria, /inteligencia-operacional, /analise-eficacia, /consulta-dados, /organograma, /selos, /biblioteca-selos, /5s, /certificacoes, /acompanhamento/dashboard, /auditoria-gestao/visao, /maturidade/visualizacao, /ecl, /vizo, /feedback/visao, /superadmin/modulos]
last_updated: 2026-05-21
---

# 4. Estrutura dos Menus

A sidebar do Visione é organizada em **grupos funcionais**. Há 3 categorias:

1. **Grupos sempre disponíveis (Núcleo)** — todos os clientes têm.
2. **Grupos por módulo** — só aparecem se a empresa tem o `moduleKey` ativo (gating real no banco em `company_modules`).
3. **Grupos SUPERADMIN** — só para usuários com `userType=SUPERADMIN` (operação interna Visiometrics).

---

## 1. Grupos sempre disponíveis (Núcleo)

### Painel Principal
| Tela | Caminho |
|---|---|
| Dashboard do Gestor | `/` |
| Painel da Equipe | `/painel-equipe` |
| Inserir Dados | `/inserir-dados` |

### Administração
| Tela | Caminho |
|---|---|
| Usuários | `/usuarios` |

### Cadastros Básicos
| Tela | Caminho |
|---|---|
| Processos | `/processos` |
| Funcionários | `/members` |
| Equipes | `/equipes` |
| Indicadores | `/indicadores` |

### Vinculações
| Tela | Caminho |
|---|---|
| Vincular Indicadores | `/vincular-indicadores` |
| Vincular Processos | `/vincular-processos` |

### Operacional
| Tela | Caminho |
|---|---|
| Inserir Dados | `/inserir-dados` |
| Visualização | `/visualizacao` |
| Ações de Melhoria | `/acoes-melhoria` |

### Análise Avançada *(módulo `advanced_intelligence`)*
| Tela | Caminho |
|---|---|
| Inteligência Operacional | `/inteligencia-operacional` |
| Análise de Eficácia | `/analise-eficacia` |

### Consultas *(módulo `advanced_intelligence`)*
| Tela | Caminho |
|---|---|
| Consultar Dados | `/consulta-dados` |
| Organograma | `/organograma` |

### Gamificação *(parte do Núcleo)*
| Tela | Caminho |
|---|---|
| Cadastro de Selos | `/selos` |
| Biblioteca de Selos | `/biblioteca-selos` |

### Sistema
| Tela | Caminho |
|---|---|
| Meus Módulos | `/sistema/modulos` |
| Configurações | `/sistema/config` |
| Manual do Usuário | `/sistema/manual` |

---

## 2. Grupos por módulo (aparecem se a empresa tem o módulo ativo)

| Grupo | `moduleKey` | Telas-chave |
|---|---|---|
| Módulo 5S | `methodology_5s` | `/5s`, `/ambientes-5s`, `/auditorias-5s`, `/5s/resultados`, `/5s/histograma` |
| Certificação & Treinamentos | `certification` | `/certificacoes`, `/certificacao/turmas`, `/certificacao/acompanhamento`, `/treinamentos` |
| Acompanhamento Operacional | `operational_assessment` | `/acompanhamento/config`, `/acompanhamento/avaliacao`, `/acompanhamento/dashboard` |
| Auditoria da Gestão | `management_audit` | `/auditoria-gestao/visao`, `/auditoria-gestao/in-loco`, `/auditoria-gestao/dashboard`, `/auditoria-gestao/benchmarking` |
| Matriz de Maturidade | `leadership_maturity` | `/maturidade`, `/maturidade/avaliacao-pares`, `/maturidade/absenteismo`, `/maturidade/visualizacao` |
| ECL — Líderes | `leadership_ecl` | `/ecl`, `/ecl/configuracao`, `/ecl/ciclos`, `/ecl/diagnostico`, `/ecl/cascata`, `/pdis`, `/ecl/prontuario`, `/ecl/conteudos` |
| Cadeia / Qualidade Colaborativa | `quality_collaborative` | `/vizo`, `/feedback/visao`, `/feedback/ocorrencia`, `/feedback/painel-cliente`, `/feedback/painel-fornecedor`, `/feedback/ranking` |

---

## 3. Grupos SUPERADMIN

| Grupo | Tela | Caminho |
|---|---|---|
| Superadmin | Console de Módulos | `/superadmin/modulos` |

---

## Como o agente deve usar este conteúdo

- Quando o usuário pergunta "onde fica X?", responda com o **grupo de menu E a URL**.
- Se o usuário não vê um item esperado:
  1. **Primeiro hipótese**: módulo não habilitado para a empresa (ver `/sistema/modulos`).
  2. **Segunda hipótese**: usuário não tem role suficiente (ex: Console Superadmin precisa `userType=SUPERADMIN`).
  3. Só assumir bug em terceiro lugar.
- O **add-on `advanced_intelligence`** controla DOIS grupos da sidebar (Análise Avançada + Consultas) — desativá-lo esconde os 4 itens.
- O Núcleo (`core`) **não pode ser desativado** — é a base de qualquer plano.
