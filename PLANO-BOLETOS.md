# Plano — BOLETOS (financeiro)

> Como organizar os boletos. **Princípio: boleto é PRIVADO por cliente** (≠ catálogo, que é
> público). Por isso NÃO entra no `catalog.json`. Companion de `PLANO-CONEXAO.md` / `SYNC-CHATS.md`.

## Diferença-chave (não esquecer)
- **Catálogo** (equip/áudio/material) = **público**, todo cliente vê igual → `catalog.json`.
- **Boleto / Área do Cliente** (Minha Conta, Contrato, Boletos, Meus Equipamentos) = **privado
  por cliente** → precisa **login** + **backend seguro**. NUNCA no `catalog.json` público.

## Fase A — organizar o FINANCEIRO (sem cliente/login) · 🟧 Central
A telinha simples ("o dono quer fácil"): **1) escolhe cliente · 2) arrasta o PDF · 3) pronto.**
- **Tabela `boletos`** (na Central): `id, cliente_id → clinica/doutor, competencia (YYYY-MM),
  valor, vencimento, status (em_aberto|pago|vencido), arquivo_pdf, criado_em`.
- **Menu "Financeiro › Boletos":** lista (filtro cliente/mês/status) + "Novo boleto" (upload PDF +
  cliente; competência/valor/vencimento **opcionais**).
- **Drive:** `00. ORGANIZADO\FINANCEIRO\BOLETOS\<cliente>\<YYYY-MM>.pdf` (cria em ORGANIZADO, respeita a regra).
- **Começar do zero** (não importar os boletos antigos do Drive agora; migrar depois se valer).

## Fase B — o CLIENTE ver (login + área segura) · 🟦 PartnerZone
- Página `#/boletos` (já tem o item no menu) mostra **só os boletos do cliente logado**
  (em aberto / pago / vencido + baixar o PDF).
- Exige **login do cliente** + fetch seguro (provável **Supabase** + RLS — o que o 🟧 já tem
  pensado pra Fase 2). NÃO dá pra fazer com o site estático público sozinho.

## Divisão
- 🟧 **Central:** tabela + telinha do financeiro (Fase A).
- 🟦 **PartnerZone:** página Boletos do cliente + login (Fase B).
- Decisão pendente do dono p/ Fase B: como o cliente loga (e-mail+senha / link mágico / etc.).
