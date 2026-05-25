---
id: manual-08-dicas-uso
title: Dicas de Uso, Melhores Práticas e Permissões
section: 8
slug: dicas
source: frontend/src/pages/manual-usuario.tsx (Section #dicas) + MANUAL_DICAS_FAZER + MANUAL_DICAS_EVITAR
tags: [boas-praticas, anti-padroes, permissoes, roles, seguranca]
related_screens: []
last_updated: 2026-05-19
---

# 8. Dicas de Uso e Melhores Práticas

## ✅ Faça assim

1. Siga a sequência recomendada de cadastros (`Processos → Pessoas → Equipes → Indicadores → Vínculos → Dados`).
2. Use nomes descritivos e padronizados.
3. Defina metas realistas e desafiadoras.
4. Mantenha os dados atualizados regularmente.
5. Use os selos para reconhecer conquistas.
6. Comunique-se regularmente com as equipes.
7. Monitore os gráficos para identificar tendências.

## ❌ Evite fazer

1. Não pule etapas do fluxo de implementação.
2. Não crie indicadores sem vincular a processos.
3. Não defina metas irreais.
4. Não deixe de inserir dados regularmente.
5. Não ignore funcionários sem acesso ao sistema.
6. Não esqueça de treinar os usuários.
7. Não negligencie o acompanhamento das ações.

## Segurança e Permissões

Roles reconhecidas pelo sistema (`UserType` no backend):

| Role | Capacidades |
|---|---|
| **SUPERADMIN** *(meta-tenancy)* | Acesso ao Console de Módulos (`/superadmin/modulos`) para ativar/desativar pacotes em qualquer empresa do sistema. Acesso total à empresa onde está logado. |
| **ADMIN** | Acesso total à própria empresa. Pode gerenciar usuários (`/usuarios`) e ver o catálogo de módulos (`/sistema/modulos`). |
| **MANAGER / GESTOR** | Dashboard do gestor. Inserir dados das equipes. Aprovar avaliações da Matriz (modo gestor). MANAGER e GESTOR são equivalentes — variação regional. |
| **EMPLOYEE / USER** | Painel da própria equipe. Visualização limitada. Responde avaliações quando designado. EMPLOYEE e USER são equivalentes. |

## Como o agente deve usar este conteúdo

- Em respostas operacionais, citar a regra "faça/evite" que se aplica.
- Em perguntas sobre permissões, **não** se limitar à tabela do manual — completar com SUPERADMIN.
- Quando o usuário descreve um problema, checar se ele está cometendo algum dos anti-padrões da lista "Evite fazer".
