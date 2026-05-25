---
id: manual-07-formularios
title: Campos e Formulários
section: 7
slug: formularios
source: frontend/src/pages/manual-usuario.tsx (Section #formularios)
tags: [formularios, campos-obrigatorios, processos, pessoas, indicadores]
related_screens: [/processos, /members, /indicadores]
last_updated: 2026-05-19
---

# 7. Campos e Formulários

## Cadastro de Processos

- **Campos obrigatórios:**
  - Nome
  - Classificação (`Humanos`, `Técnicos` ou `Gerenciais`)
- **Campos opcionais:**
  - Descrição

## Cadastro de Pessoas (Funcionários)

- **Campos obrigatórios:**
  - Nome completo
- **Campos opcionais:**
  - E-mail de acesso
  - Matrícula
  - Data de admissão

> Observação: o e-mail de acesso é opcional aqui, mas obrigatório se a pessoa precisar fazer login (= virar `User`).

## Cadastro de Indicadores

- **Campos básicos:**
  - Nome e processo vinculado
  - Método de medição: **Direto** ou **Checklist**
  - Unidade, valor de referência e frequência de medição

## Como o agente deve usar este conteúdo

- Quando o usuário pede "como cadastro X", referenciar diretamente esses campos.
- Quando há erro de validação ("campo obrigatório"), conferir se faltou um dos campos marcados como obrigatórios aqui.
- Importante para o agente: a `Classificação` de um Processo é um valor enumerado restrito (Humanos / Técnicos / Gerenciais) — não aceitar valores livres.
- Indicador com método **Checklist** depende de itens de checklist cadastrados; indicador **Direto** aceita valor numérico simples.
