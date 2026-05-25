---
id: manual-03-interdependencia
title: Interdependência dos Cadastros
section: 3
slug: interdependencia
source: frontend/src/pages/manual-usuario.tsx (Section #interdependencia) + MANUAL_LAYERS
tags: [conceitos, hierarquia, dependencias, analogias]
related_screens: [/usuarios, /members, /equipes, /indicadores, /vincular-indicadores]
last_updated: 2026-05-19
---

# 3. Entendendo a Interdependência dos Cadastros

Cada elemento criado serve de base para o próximo, formando uma estrutura organizacional coesa.

**Fluxo de dependências:**
`Usuários → Pessoas → Equipes → Indicadores`

## Camada 1 — Convidar Usuários (Acessos ao Sistema)

- **Onde:** `Administração → Usuários` (`/usuarios`)
- **O que é:** ponto de partida técnico. Crie os contextos de usuário para cada pessoa que terá acesso, definindo nome, e-mail e tipo de acesso.
- **Analogia:** é como criar as credenciais de acesso ao prédio da empresa. Sem isso, ninguém consegue entrar no sistema.

## Camada 2 — Cadastrar Pessoas (Estrutura Organizacional)

- **Onde:** `Cadastros Básicos → Funcionários` (`/members`)
- **O que é:** registre os colaboradores como entidades organizacionais com matrícula, cargo, data de admissão e equipe.
- **Analogia:** é como criar a ficha funcional da pessoa, onde constam cargo, lotação e função na empresa.

## Camada 3 — Criar Equipes / UGBs (Unidades Gerenciais Básicas)

- **Onde:** `Cadastros Básicos → Equipes` (`/equipes`)
- **O que é:** as equipes são os grupos de trabalho da organização. Cada uma tem um gestor responsável e serve de base para vincular indicadores.
- **Analogia:** é como montar os departamentos ou células de trabalho e definir quem é o líder de cada uma.

## Camada 4 — Indicadores e Responsabilização (Metas e Performance)

- **Onde:** `Cadastros → Indicadores` (`/indicadores`) + `Vinculações → Vincular Indicadores` (`/vincular-indicadores`)
- **O que é:** crie os indicadores de desempenho e vincule-os às equipes ou gestores, estabelecendo metas.
- **Analogia:** é como definir as metas de performance de cada time e responsabilizar os líderes pelo resultado.

## Como o agente deve usar essa estrutura

- Quando o usuário pergunta "por que preciso cadastrar pessoa antes de equipe?" — explique pela camada/analogia.
- Quando ele relata erro do tipo "equipe sem gestor", diagnostique olhando se a Camada 2 (Pessoas) tem o gestor cadastrado.
- Diferença importante: **Usuário (login)** ≠ **Pessoa (registro organizacional)**. Um usuário pode existir sem ser uma Pessoa (e vice-versa).
