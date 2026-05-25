---
id: manual-02-fluxo-implementacao
title: Fluxo de Implementação Recomendado
section: 2
slug: fluxo
source: frontend/src/pages/manual-usuario.tsx (Section #fluxo) + MANUAL_FLUXO
tags: [onboarding, setup, sequencia-obrigatoria, dependencias]
related_screens: [/processos, /members, /equipes, /indicadores, /vincular-indicadores, /inserir-dados]
last_updated: 2026-05-19
---

# 2. Fluxo de Implementação Recomendado

> **Importante:** para garantir o funcionamento correto do sistema, recomenda-se seguir
> esta ordem de configuração. Cada passo é pré-requisito para o seguinte.

## Os 6 passos na ordem certa

### Passo 1 — Cadastrar Processos
- **Onde:** `Cadastros Básicos → Processos` (`/processos`)
- **Por quê:** tudo no Visione começa com um processo. Indicadores e certificações estão sempre ligados a um processo de negócio.

### Passo 2 — Cadastrar Pessoas
- **Onde:** `Cadastros Básicos → Funcionários` (`/members`)
- **Por quê:** registre todos os membros da organização. Funcionários podem ser posteriormente designados como gestores.

### Passo 3 — Criar Equipes
- **Onde:** `Cadastros Básicos → Equipes` (`/equipes`)
- **Por quê:** com os gestores e funcionários cadastrados, monte as equipes (UGBs) e atribua seus respectivos gestores.

### Passo 4 — Cadastrar Indicadores
- **Onde:** `Cadastros Básicos → Indicadores` (`/indicadores`)
- **Por quê:** crie os indicadores de desempenho que serão medidos, associando cada um a um processo.

### Passo 5 — Vincular Indicadores
- **Onde:** `Vinculações → Vincular Indicadores` (`/vincular-indicadores`)
- **Por quê:** um indicador só começa a ser medido quando é vinculado a uma equipe ou gestor, e uma meta é definida.

### Passo 6 — Inserir Dados
- **Onde:** `Operacional → Inserir Dados` (`/inserir-dados`)
- **Por quê:** com tudo configurado, as equipes podem começar a inserir os dados de medição dos seus indicadores.

## Regras que o agente deve aplicar

1. **Nunca recomendar pular passos** — a sequência é prerequisito.
2. Se o usuário relata erro do tipo "não consigo criar X", verificar se os passos anteriores foram concluídos.
3. Equipes não funcionam sem Pessoas; Indicadores não funcionam sem Processos; Vínculos não funcionam sem Indicadores + Equipes.
