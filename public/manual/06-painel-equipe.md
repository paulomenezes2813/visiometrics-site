---
id: manual-06-painel-equipe
title: Painel da Equipe — Guia Detalhado
section: 6
slug: painel-equipe
source: frontend/src/pages/manual-usuario.tsx (Section #painel-equipe) + MANUAL_PAINEL_ACOES
tags: [painel-equipe, ugb, cores-status, acoes-equipe]
related_screens: [/painel-equipe]
last_updated: 2026-05-19
---

# 6. Painel da Equipe — Guia Detalhado

O Painel da Equipe é o **coração do sistema para as equipes operacionais**.

## Significado das cores nos cards

| Cor | Significado |
|---|---|
| 🟦 **Azul** | Meta atingida ou superada |
| 🟥 **Vermelho** | Meta não atingida |
| ⬜ **Cinza** | Sem dados ou meta indefinida |

> Essa convenção é usada em todas as visualizações de indicadores do produto — gráficos de barra, painéis, dashboard do gestor, etc.

## Ações disponíveis no painel

| Ação | O que faz |
|---|---|
| **Gerenciar Selos** | Conceder ou remover selos de reconhecimento da equipe. |
| **Enviar Programação** | Upload do arquivo de programação semanal da equipe. |
| **Enviar Mensagem** | Recados e comunicados para o mural da equipe. |
| **Gerenciar Treinamentos** | Atribuir ou remover treinamentos da equipe. |
| **Ações de Melhoria** | Criar e acompanhar ações de melhoria para a equipe. |

## Como o agente deve usar este conteúdo

- Quando o usuário pergunta sobre cores em um gráfico/painel, sempre referenciar essa tabela (azul/vermelho/cinza).
- Para perguntas operacionais ("como reconheço um colaborador?") direcionar para Selos / `/painel-equipe`.
- "Sem dados" (cinza) ≠ "Sem meta" — ambos viram cinza, mas a causa raiz é diferente: faltou registro vs. faltou definição de meta.
