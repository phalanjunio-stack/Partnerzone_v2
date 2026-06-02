# GDD — PartnerZone (Contourline)
### Documento de estrutura para mockup do novo site

> **O que é este documento:** o mapa completo do sistema atual (árvore de caminhos, páginas, navegação, dados, funções e identidade visual). Use como base/briefing para gerar o mockup do **novo** site no ChatGPT (ou em qualquer ferramenta de design).

---

## 1. Visão geral

**PartnerZone** é o **portal de parceiros da Contourline** (fabricante de equipamentos de estética/saúde). O parceiro logado acessa **materiais de marketing/treinamento por equipamento** (documentos, imagens, vídeos, artes), gerencia sua **conta de cliente** (contrato, boletos, equipamentos, suporte) e pode **solicitar materiais**. Há ainda uma área **administrativa** para a equipe de marketing gerenciar conteúdo, clientes e integrações.

**⚠️ O sistema tem 3 frentes (não é só catálogo):**
1. **Catálogo** — materiais por equipamento (uso do parceiro).
2. **Clientes / CRM** — cadastro do cliente, contratos, boletos, equipamentos instalados, documentos (área do cliente + gestão no admin).
3. **Interno / Equipe** — funcionários/usuários com papéis e departamentos; + módulos relacionados de **Frota/BUSCADOR** (equipamentos instalados) e **Vendas/BI**.

- **Público:** parceiros/distribuidores/clientes Contourline (usuários logados) + equipe interna (admin/editor).
- **Idioma:** Português (Brasil).
- **Acesso:** requer login. Conteúdo é protegido por papel (viewer / editor / admin).
- **URL de produção:** `https://partnerzone.contourline.com.br/partnerzone`

## 2. Stack & arquitetura (atual)

- **Frontend/Backend:** Next.js (App Router, React, Server Components) — base path `/partnerzone`.
- **Banco/Auth/Storage:** Supabase (Postgres + Auth + Storage), com RLS por papel.
- **Integrações de conteúdo:** Google Drive e Dropbox (sincronizam arquivos → materiais).
- **UI:** Tailwind + tokens CSS `--pz-*`, ícones `lucide-react`, animações `framer-motion`.

---

## 3. Árvore de navegação (SITEMAP) ⭐

Estrutura da **sidebar** (fixa, 260px, azul Contourline) + topbar. Itens marcados por nível de acesso.

```
PartnerZone  (/partnerzone)
│
├─ [Topbar] breadcrumb · indicador "Online" · menu do usuário (avatar) / botão "Entrar"
│
├─ NAVEGAÇÃO ───────────────────────────────  (todos)
│   ├─ 🏠 Início ................... /partnerzone
│   ├─ 📄 Solicitações ............. /partnerzone/solicitacoes
│   ├─ 🔍 Buscar ................... /partnerzone/search
│   ├─ ♥  Favoritos ............... /partnerzone/favorites
│   └─ 🏢 Institucional  (expansível, logado)
│        └─ Todas as categorias ... /partnerzone/categories
│             └─ Equipamento ....... /partnerzone/categories/{slug}        (ex.: /hipro)
│                  └─ Pasta ........ /partnerzone/categories/{slug}-{pasta} (ex.: /hipro-documentos)
│                       └─ Material  /partnerzone/material/{id}
│
├─ ÁREA DO CLIENTE ─────────────────────────  (logado)
│   ├─ 👤 Minha Conta ............. /partnerzone/conta
│   ├─ ✍  Contrato ............... /partnerzone/conta/contrato
│   ├─ 🧾 Boletos ................. /partnerzone/conta/boletos
│   ├─ 🔧 Meus Equipamentos ....... /partnerzone/conta/equipamentos
│   ├─ 🛟 Suporte ................. /partnerzone/conta/suporte
│   ├─ (perfil) .................. /partnerzone/conta/perfil
│   └─ (documentos) .............. /partnerzone/conta/documentos
│
├─ ADMINISTRAÇÃO ───────────────────────────  (admin/editor)
│   ├─ ⚙  Painel Admin ........... /partnerzone/admin
│   ├─ 🖼  Capas Equipamentos ..... /partnerzone/admin/covers
│   ├─ ⬆  Upload Material ........ /partnerzone/admin/upload
│   ├─ 📄 Solicitações ........... /partnerzone/admin/solicitacoes
│   ├─ 📊 Analytics .............. /partnerzone/admin/analytics
│   ├─ 🗂  Categorias ............. /partnerzone/admin/categories
│   ├─ 📦 Materiais .............. /partnerzone/admin/materials
│   ├─ 👥 Usuários ............... /partnerzone/admin/users
│   ├─ 🧑‍💼 Clientes .............. /partnerzone/admin/clientes
│   ├─ ⏳ Clientes pendentes ..... /partnerzone/admin/clientes-pendentes
│   ├─ 📝 Cadastros .............. /partnerzone/admin/cadastros
│   ├─ 📁 Documentos ............. /partnerzone/admin/documentos
│   ├─ 🔵 Dropbox (sync) ......... /partnerzone/admin/dropbox
│   └─ 🟢 Google Drive (sync) .... /partnerzone/admin/google-drive
│
└─ 🔐 Login (tela isolada, sem sidebar) ..... /partnerzone/login
```

**Regras de exibição da sidebar:**
- `Navegação` → sempre.
- `Institucional`, `Área do Cliente` → só **logado**.
- `Administração` → só **admin/editor**.
- Rodapé da sidebar: avatar + nome + **Sair**.

---

## 4. Páginas (detalhe rápido)

| Rota | Página | O que mostra / faz |
|---|---|---|
| `/partnerzone` | **Início (Dashboard)** | Saudação "Olá, {nome}" + busca com autocomplete; **grade de Equipamentos** (cards com foto) + **filtro por marca** + toggle grade/lista; seção **Materiais Recentes**. |
| `/partnerzone/categories` | **Todos os Equipamentos** | Grade de todos os equipamentos + filtro por marca. |
| `/partnerzone/categories/{slug}` | **Equipamento** | Breadcrumb; título + descrição; contadores (materiais/pastas); busca no escopo; **pastas** (Documentos, Imagens, Materiais Gráficos, Material Institucional, Redes Sociais, Vídeos); materiais diretos. |
| `/partnerzone/categories/{slug}-{pasta}` | **Pasta** | Mesma tela, um nível abaixo: lista os materiais da pasta. |
| `/partnerzone/material/{id}` | **Material** | Detalhe do arquivo: preview, tipo, tamanho, downloads, tags, versão, botão **Baixar** e **Favoritar**. |
| `/partnerzone/search` | **Buscar** | Busca de materiais (full-text + "smart search"), filtros, resultados. |
| `/partnerzone/favorites` | **Favoritos** | Materiais favoritados pelo usuário. |
| `/partnerzone/solicitacoes` | **Solicitações** | Pedidos de materiais sob demanda do usuário + status. |
| `/partnerzone/conta` | **Minha Conta** | Painel do cliente (resumo). |
| `/partnerzone/conta/contrato` | **Contrato** | Dados/arquivo do contrato. |
| `/partnerzone/conta/boletos` | **Boletos** | Faturas/boletos do cliente. |
| `/partnerzone/conta/equipamentos` | **Meus Equipamentos** | Equipamentos que o cliente possui/instalou. |
| `/partnerzone/conta/suporte` | **Suporte** | Canal/abertura de suporte. |
| `/partnerzone/conta/perfil` | **Perfil** | Editar nome, e-mail, senha, avatar. |
| `/partnerzone/login` | **Login** | Autenticação (tela isolada, sem sidebar). |
| `/partnerzone/admin/*` | **Admin** | Painel + gestão de conteúdo, clientes e integrações (ver sitemap). |

---

## 5. Modelo de dados (entidades principais)

```
═══ MÓDULO 1 — CATÁLOGO (parceiro) ═══
partnerzone_categories    EQUIPAMENTOS e PASTAS (hierárquico via parent_id; brand, slug, is_hidden)
partnerzone_materials     ARQUIVOS (title, category_id, file_path/name/size/type, thumbnail,
                           tags[], version, download_count, is_active,
                           drive_file_id/web_url, sync_source manual|drive|dropbox)
   ├─ partnerzone_material_versions   histórico de versões
   ├─ partnerzone_favorites           user_id, material_id
   └─ partnerzone_downloads           registro de downloads
partnerzone_requests      SOLICITAÇÕES (pedidos de material sob demanda)

═══ MÓDULO 2 — CLIENTES / CRM (cliente) ═══
partnerzone_customers     razao_social, nome_fantasia, cnpj, cpf, telefone, whatsapp,
                           endereço, cidade/estado/cep, status (active|inactive|suspended)
   ├─ partnerzone_contracts          contrato: número, tipo, status, datas, valor mensal/total,
   │                                  parcelas (total/pagas), pdf_url
   ├─ partnerzone_invoices           boletos: número, descrição, valor, vencimento, status
   ├─ partnerzone_customer_equipment equipamentos do cliente: nome, categoria, nº série,
   │                                  data compra, garantia, status (active|maintenance|inactive)
   └─ partnerzone_customer_documents documentos do cliente (nome, file_id, web_url — vindo do Drive)
partnerzone_signup_requests  pedidos de ACESSO (clientes pendentes de aprovação)

═══ MÓDULO 3 — FUNCIONÁRIOS / EQUIPE (interno) ═══
partnerzone_user_profiles full_name, department (marketing/vendas/clinical/admin/operacoes),
                           role (viewer|editor|admin), avatar_url, cargo
partnerzone_google_drive_auth   conexão OAuth do Google Drive

═══ MÓDULOS RELACIONADOS (mesmo banco) ═══
frota_clients / frota_models / frota_units      FROTA / BUSCADOR — equipamentos instalados
sales_orders / sales_products / sales_sellers   VENDAS / BI
```

**Hierarquia de conteúdo (chave do site):**
`Marca → Equipamento → Pasta (Documentos/Imagens/Vídeos…) → Material (arquivo)`

**Marcas (filtro):** Body Health · Contourline · Lumenis · Visbody · Cynosure Lutronic · Eurofeedback.

**Exemplos de equipamentos:** HIPRO (e variантes), Crystal 3D, Enygma, Focuskin, Folix, Multishape, Supreme Pro, Unyque Pro, Iconyc, Hive Pro, Raytrace, Reverso, Creator 600, UltraLift, X-Tonus, Trilift, Stellar, Splendor X, Nuera Tight, Inkie Laser/Light, BHS 156 Full, S30/M30, Fusion 3, Visbody, Lumenis.

---

## 6. Funcionalidades-chave

- **Autenticação + papéis** (viewer/editor/admin) via Supabase; conteúdo protegido por RLS.
- **Navegação por equipamento** → pastas → materiais, com breadcrumb.
- **Busca** com autocomplete + "smart search" (semântica).
- **Favoritos** por usuário.
- **Solicitações** de materiais sob demanda (com gestão no admin).
- **Download** de materiais (rastreado) + **preview** em modal.
- **Área do Cliente** (CRM): contrato, boletos, equipamentos do cliente, suporte, perfil.
- **Admin:** upload de materiais, capas de equipamentos, categorias, usuários, analytics, aprovação de clientes, e **sincronização com Google Drive/Dropbox** (puxa arquivos para virar materiais).

---

## 7. Identidade visual (atual)

- **Cor primária / sidebar:** azul Contourline **`#24336E`** (sidebar escura, texto branco).
- **Accent (botões/links):** `#24336E` (hover `#1B2655`).
- **Fundo/cards:** claro (`#E7E7E6` / branco), bordas sutis pretas 8–12%.
- **Status:** sucesso `#10B981`, aviso `#F59E0B`, erro `#EF4444`, info `#3B82F6`.
- **Layout:** sidebar fixa 260px (esquerda) + topbar 56px (branca, com breadcrumb e usuário) + conteúdo.
- **Movimento:** animações com mola (framer-motion), entrada em stagger, hover sutil nos cards.
- **Tom:** profissional, limpo, "premium clínico".

---

## 8. Notas para o NOVO site (mockup)

- Mantenha a **hierarquia Equipamento → Pasta → Material** — é o coração do produto.
- Os 3 níveis de acesso (parceiro / cliente / admin) definem o que aparece na navegação.
- Telas mais importantes para prototipar primeiro: **Início (grade de equipamentos)**, **Equipamento (pastas)**, **Material (preview/download)**, **Busca**, **Área do Cliente**.
- Cards de equipamento usam **foto do produto** + nome + (contagem). Pastas usam **ícone de pasta** + nome + contagem.
- Sugestão de prompt para o ChatGPT: *"Crie o mockup de um portal de parceiros (PartnerZone Contourline) com esta estrutura de navegação e telas. Mantenha a hierarquia Equipamento→Pasta→Material e os 3 níveis de acesso. Estilo: [cole aqui a seção 7]."*

---
*Documento gerado a partir do código-fonte do sistema (Next.js + Supabase) — reflete a estrutura real em produção.*
