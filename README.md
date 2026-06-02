# NOVODESIGN — Novo site PartnerZone (build paralelo)

Site novo, **paralelo e independente** do sistema da Contourline. Mesma **árvore** (ver `docs/PartnerZone-GDD.md`), mas **100% nosso**: o **catálogo** vem do **Google Drive** (conteúdo real) e **clientes/funcionários** usam **dados de exemplo**. Construído a partir dos **mockups do ChatGPT**.

## 🗂️ Mapa das pastas

```
NOVODESIGN/
├── README.md          ← este arquivo (o plano)
├── docs/              ← referência: GDD + prompt do ChatGPT + decisões
│   ├── PartnerZone-GDD.md
│   └── PROMPT-ChatGPT-mockup.md
│
├── mockups/           ← HTMLs CRUS que vierem do ChatGPT (só referência visual)
│                         ex.: 01-login.html, 02-inicio.html, 03-equipamento.html...
│
├── site/              ← 🏗️ O SITE REAL (onde o Claude implementa)
│   ├── (telas .html)  ← login, index (Início), equipamento, pasta, material, busca,
│   │                     favoritos, conta, boletos, admin...
│   ├── css/           ← estilos (tokens de cor, componentes)
│   ├── js/
│   │   ├── core/      ← navegação + carregador de dados (lê content/catalog.json)
│   │   ├── components/← sidebar, topbar, card de equipamento, card de pasta...
│   │   └── pages/     ← lógica de cada tela
│   └── assets/
│       └── equipamentos/  ← fotos dos equipamentos
│
├── content/           ← 📦 DADOS
│   ├── catalog.json            ← equipamentos → pastas → materiais (GERADO do Drive)
│   ├── clientes.sample.json    ← exemplo (CRM) — clientes/funcionários NÃO vêm do Drive
│   └── funcionarios.sample.json
│
└── scripts/
    └── sync-drive.js  ← lê o Google Drive (G:\Meu Drive\1. MARKETING\01. Equipamentos)
                          e gera content/catalog.json (+ copia thumbnails)
```

## 🔄 Fluxo de trabalho

1. **ChatGPT** gera as telas (HTML) → você salva em **`mockups/`**.
2. **Claude** transforma os mockups no site real em **`site/`**.
3. **`scripts/sync-drive.js`** lê o **Drive** → gera **`content/catalog.json`** (catálogo real: 26 equipamentos, ~12k arquivos, filtrando só PDF/PNG/JPG/MP4).
4. O site carrega o `catalog.json` e mostra **equipamentos → pastas → materiais** reais.
5. **Clientes/funcionários** usam os `*.sample.json` (dados de exemplo).

## 🧱 Stack (proposta — ajustável)

Site **estático** (HTML + Tailwind + JS) + **script Node** pra ler o Drive. Simples, fiel aos mockups do ChatGPT, sem framework pesado. Dá pra migrar pra Next.js depois, se precisar.

## ✅ O que mostra real x exemplo

| Parte | Fonte | Real? |
|---|---|---|
| Catálogo (equipamentos, pastas, materiais) | Google Drive | ✅ Real |
| Clientes (CRM, contratos, boletos) | `content/*.sample.json` | 🟡 Exemplo |
| Funcionários (usuários, papéis) | `content/*.sample.json` | 🟡 Exemplo |

---
*Estrutura criada em `C:\Users\Contourline\Documents\PARTNEZONE\NOVODESIGN`. Próximo passo: trazer os mockups do ChatGPT pra `mockups/`.*
