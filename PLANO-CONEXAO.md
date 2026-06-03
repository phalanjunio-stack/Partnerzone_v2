# Plano de Conexão — Servidor (cérebro) ↔ PartnerZone (vitrine)

> Documento de arquitetura para **alimentar o PartnerZone a partir do Servidor** (fonte única).
> Escrito a partir da **leitura do código real** (schema do banco, rotas, scripts).
>
> **Data:** 2026-06-03 · **Status:** REALINHADO ao servidor real · **Idioma:** PT-BR
> **Companion (lado de dentro):** `…\sitelocal\PLANO-CENTRAL.md`

> ### ⚠️ Correção importante (pós "busca outra vez")
> A 1ª versão deste doc lia o servidor **errado** (`central-server-app`, schema em inglês:
> users/files/projects). **O cérebro de verdade** — o `:3001` com `/admin` que você usa — é
> **`…\sitelocal\server.js` + `…\sitelocal\src\catalog.js`** (banco `catalogo.db`, tabelas em
> **português**). E nele **o cadastro-mãe JÁ EXISTE quase todo** (marcas, equipamentos,
> pessoas, clínicas/doutores, arquivos, entregas, ingest de cartão). Tudo abaixo já reflete isso.

---

## 1. Objetivo (em uma frase)

Fazer o **PartnerZone** (site do cliente) mostrar **exatamente o que o Servidor liberar**,
puxando do cadastro que **já existe** no servidor — sem duplicar dado nem lógica, e sem o
funcionário cadastrar nada "na mão" no site.

---

## 2. Recomendação (resumo executivo)

> **"O Servidor é o cérebro; o PartnerZone é a vitrine publicada."**

Como o **PartnerZone é público (GitHub Pages)** e o **Servidor é local (`:3001`)**, o site não
alcança o servidor pela internet. Solução: o servidor **PUBLICA** um `catalog.json` com o que o
cliente pode ver, e o site **lê** esse arquivo. Sem hospedar servidor, sem custo, **sem chave no
site**. (Detalhe do bloqueio na §4.)

---

## 3. Estado atual (REAL)

| Peça | O que é | Stack real | Onde roda | Caminho |
|---|---|---|---|---|
| 🧠 **Servidor** (cérebro) | API + painel `/admin` + ingest do cartão | **Node/Express + better-sqlite3** | Local, **porta 3001** | `…\sitelocal\server.js` · DB em `…\sitelocal\src\catalog.js` |
| 🖥️ **Central** (paralelo) | "Central Server" novo (Electron) — schema em inglês | Electron + React | Local, porta 3010 | `…\sitelocal\central-server-app\` |
| 👥 **PartnerZone** | Site do cliente (vitrine) | SPA estática (hash router) | GitHub Pages (público) | `…\PARTNEZONE\NOVODESIGN\site\` |
| ☁️ **App original** | Next.js + Supabase de produção | Next.js | Nuvem | `…\PARTNEZONE\Contourline\` *(NÃO MEXER)* |

> 🔴 **Há DOIS servidores no `sitelocal`** (ver §10, decisão 1). Este plano trata o
> **`server.js` (:3001, tabelas PT)** como o cérebro, porque é o `/admin` que você usa.

### 3.1 Tabelas REAIS do cérebro (`src/catalog.js` → `catalogo.db`)

`marcas` · `equipamentos` · `pessoas` · `ias` · `clinicas` · `doutores` · `doutor_clinica`
· `locais` · `tipos_evento` · `dispositivos` · `eventos` · `projetos` · `arquivos`
· `arquivo_locais` · `entregas` · `downloads` · `backups` · `logs` · `cartoes_sd`
· `ingest_jobs` · `permissoes` · `temas` · `areas_corpo` · `linhas` · `perfis`
· `tipos_conteudo` · `aspects` · `arquivo_equipamentos` · `arquivo_temas` · `arquivo_areas`
· `colecoes` · `colecao_itens` · `usuarios` · `permissoes_modulos`

### 3.2 O cadastro-mãe JÁ EXISTE (era o que eu achava que faltava — não falta!)

| Cadastro que você pediu | Tabela real | Observação |
|---|---|---|
| **Marcas** | `marcas` | nome, status, ordem |
| **Equipamentos** (catálogo) | `equipamentos` | tem `marca_id` **e `pasta_drive`** (liga à pasta no Drive) |
| **Pessoas / funcionários** | `pessoas` | nome, `papeis`, email, pc_principal |
| **Clientes** | `clinicas` + `doutores` (+ `doutor_clinica`) | o cliente é **clínica/doutor** (negócio médico) |
| **Materiais** | `arquivos` | já tem `marca_id`, `equipamento_id`, `clinica_id`, `doutor_id`, `tags_json` |
| **Entrega pro cliente** | `entregas` | projeto/arquivo → clínica/doutor + equipamento/marca, `status`, `postado_em` |
| **Ingest do cartão** | `cartoes_sd` + `ingest_jobs` | o "enfia o cartão → reconhece" já está modelado |

### 3.3 O que REALMENTE falta (o gap verdadeiro)

1. **Conceito "liberado pra vitrine/PartnerZone"** — ainda **não existe**. (Hoje só há `entregas`
   pro cliente médico, não "mostrar no site".) → ver §6.
2. **Gerador de `catalog.json` com os materiais REAIS** (não só contagem). Hoje
   `…\NOVODESIGN\scripts\sync-drive.js` lê o Drive e gera **estrutura + contagem** (26 equipamentos).
3. **O site consumir o `catalog.json`** — hoje o PartnerZone ainda renderiza `EQUIPMENT`/`MATERIALS`
   de exemplo (`site/js/app.js`) + overlay no `localStorage`.

---

## 4. O problema central (continua valendo)

> **Um site público (GitHub Pages) NÃO alcança um servidor local (`localhost:3001`).**

Saídas: **1) Publicar** `catalog.json` *(recomendado)* · **2) Rede local** (site fala direto com
o `:3001`, só dentro da empresa) · **3) Hub na nuvem** (Supabase — Fase 2, só se precisar).

---

## 5. Arquitetura proposta

```
 FUNCIONÁRIO            SERVIDOR :3001 (cérebro · SQLite)              CLIENTE
  cartão ─ingest───►  cartoes_sd · ingest_jobs · arquivos
  /admin ─cadastra─►  marcas · equipamentos · pessoas
                      clinicas/doutores · entregas
                                  │  [ liberar p/ vitrine ] + [ Publicar ]
                                  ▼
                            catalog.json  ──────────►  PartnerZone 👀 (só lê)
```

**Princípios:** 1) fonte única = Servidor · 2) PartnerZone só lê · 3) cliente vê só o liberado
· 4) nada sensível no `catalog.json`.

---

## 6. O que CRIAR (pouca coisa — o resto já existe)

Não precisa criar `brands/equipment/clients` (já são `marcas/equipamentos/clinicas+doutores`).
Só falta a **camada "vitrine"**. Três opções (escolher uma):

- **(A) Flag no arquivo** — mais simples:
  ```sql
  ALTER TABLE arquivos ADD COLUMN publicar_site INTEGER NOT NULL DEFAULT 0;
  ALTER TABLE arquivos ADD COLUMN site_titulo   TEXT;   -- título amigável p/ cliente
  ALTER TABLE arquivos ADD COLUMN site_url      TEXT;   -- URL pública (Drive/CDN)
  ```
- **(B) Reusar `entregas`** com `tipo = 'partnerzone'` (entrega "pro site" em vez de pro doutor).
- **(C) Uma `colecao` "PartnerZone"** (já existe `colecoes` + `colecao_itens`) = a vitrine é uma coleção.

> Recomendo **(A)** pela simplicidade do publish; (C) é elegante se você já usa coleções.

Cadastros que faltam **tela** (dado já existe): CRUD de **Marcas/Equipamentos/Clientes** no `/admin`
(provável que parte já exista — confirmar no painel).

---

## 7. A ponte — `catalog.json`

### 7.1 Formato (mapeado pras colunas REAIS)

```json
{
  "generatedAt": "2026-06-03T...",
  "brands":    [{ "id": 1, "nome": "Contourline", "status": "ativo" }],
  "equipment": [{ "id": 10, "nome": "HIPRO", "marca_id": 1, "modelo": "...", "pasta_drive": "..." }],
  "materials": [{ "id": "arq_123", "titulo": "HIPRO | Institucional", "equipamento_id": 10,
                  "marca_id": 1, "tipo": "video", "url": "https://…", "tamanho": "128 MB" }],
  "categories": ["Vídeos", "Fotos", "Apresentações", "Antes e Depois"]
}
```

### 7.2 Fluxo do "Publicar"
1. Funcionário marca materiais como **liberados** (flag §6) no `/admin`.
2. Servidor gera `catalog.json` lendo `marcas` + `equipamentos` + `arquivos (publicar_site=1)`.
3. Grava em `…\NOVODESIGN\site\content\catalog.json` → `git push` → GitHub Pages publica.
4. PartnerZone, no load, faz `fetch('content/catalog.json')` e renderiza isso (fallback: exemplo).

> `sync-drive.js` já faz metade (lê Drive → estrutura+contagem). Evoluir pra listar **arquivos
> reais** + respeitar a flag de liberação.

---

## 8. Fases (revisadas — Fase 0 encolheu!)

| Fase | Entrega | Status |
|---|---|---|
| **0 — Cadastro-mãe** | marcas/equip/pessoas/clientes | **~80% PRONTO** (existe no `catalog.js`). Falta só: camada "vitrine" (§6) + telas de CRUD que faltarem |
| **1 — Publicar** | flag liberar + gerar `catalog.json` real + site consumir | **é o coração do trabalho agora** |
| **2 — Nuvem (se precisar)** | Supabase p/ cliente logar, favoritos ao vivo | opcional |

**Início recomendado:** travar a §10 (qual servidor) → camada "vitrine" (§6) → publish (Fase 1).

---

## 9. O que será TOCADO / NÃO TOCADO

| ✅ Pode mexer (é teu) | 🚫 NÃO tocar |
|---|---|
| `…\NOVODESIGN\site` (PartnerZone) · `sitelocal` (Servidor :3001) | `…\PARTNEZONE\Contourline` · `…\Contourline-design` · `…\Contourline-main` |

---

## 10. Decisões em aberto (preciso de você)

1. 🔴 **Qual servidor é o cérebro?** `server.js` (:3001, tabelas PT, `/admin` que você usa)
   **ou** `central-server-app` (Electron, :3010, schema EN)? Ou vão **fundir**? — *define onde
   nasce a camada vitrine.* (É o ponto que o outro chat também travou, §4 do PLANO-CENTRAL.)
2. **Acesso do cliente:** internet (→ publish) ou rede local (→ API direta)?
3. **Camada "vitrine":** flag em `arquivos` (A), `entregas` tipo site (B), ou `colecao` (C)?

---

## 11. Glossário

- **Servidor / cérebro** — `sitelocal\server.js` (:3001) + `src/catalog.js`, fonte da verdade.
- **PartnerZone** — site do cliente (NOVODESIGN); só vitrine, só leitura.
- **Publicar** — gerar `catalog.json` com o liberado e subir pro site.
- **Liberar pra vitrine** — marcar um material como visível pro cliente (flag a criar, §6).

---

## 12. Para o outro chat (contexto técnico — CORRIGIDO)

- **Cérebro real = `…\sitelocal\server.js`** (Node/Express + better-sqlite3), porta **3001**,
  painel `/admin`, DB em `…\sitelocal\src\catalog.js` (`catalogo.db`). Tabelas em **PT** já
  incluem `marcas`, `equipamentos` (com `marca_id`+`pasta_drive`), `pessoas`, `clinicas`,
  `doutores`, `arquivos` (com `marca_id`/`equipamento_id`/`cartao_origem`), `entregas`,
  `cartoes_sd`, `ingest_jobs`, `colecoes`, etc.
- **`central-server-app`** (Electron, :3010, schema EN users/files/projects) é um **build
  paralelo** — DECIDIR se é o canônico ou se funde com o `server.js` (decisão §10.1).
- **PartnerZone** = SPA estática (NOVODESIGN/site), deploy GitHub Pages. `scripts/sync-drive.js`
  já gera `catalog.json` (hoje: estrutura+contagem do Drive). Site ainda usa dados de exemplo.
- **NÃO MEXER**: `…\PARTNEZONE\Contourline` (Next.js+Supabase de produção) e `Contourline-design`.
- **Proposta**: publish estático (`catalog.json`) — o gap real é a **camada "liberado pra
  vitrine"** + gerar materiais reais + o site consumir.
