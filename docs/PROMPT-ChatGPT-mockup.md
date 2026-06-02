# Prompt pronto — gerar o mockup do novo PartnerZone no ChatGPT

> Copie tudo abaixo da linha e cole no ChatGPT. Ele vai gerar as telas em HTML, uma por vez.

---

Você é um **designer de produto sênior + dev front-end**. Crie o **mockup de alta fidelidade** (HTML + Tailwind CSS via CDN, responsivo, pronto pra abrir no navegador) de um **portal de parceiros B2B** chamado **PartnerZone (Contourline)**. Tudo em **português**. Gere **uma tela por vez** e me pergunte antes de ir pra próxima.

## O que é o produto
Portal da **Contourline** (fabricante de equipamentos de estética/saúde). Parceiros logados acessam **materiais de marketing/treinamento por equipamento**; gerenciam sua **conta** (contrato, boletos, equipamentos, suporte); a **equipe interna** administra conteúdo, clientes e usuários.

## 3 módulos / públicos
1. **Catálogo** (parceiro): equipamentos → pastas → materiais.
2. **Clientes / CRM** (cliente): cadastro, contrato, boletos, equipamentos instalados, documentos.
3. **Interno / Equipe** (admin): gestão de conteúdo, clientes e usuários (papéis viewer/editor/admin + departamentos).

## Árvore de navegação (sidebar fixa à esquerda)
```
NAVEGAÇÃO            Início · Solicitações · Buscar · Favoritos
  └ Institucional →  Todas as categorias → Equipamento → Pasta → Material
ÁREA DO CLIENTE      Minha Conta · Contrato · Boletos · Meus Equipamentos · Suporte
ADMINISTRAÇÃO        Painel · Capas · Upload · Solicitações · Analytics ·
                     Categorias · Materiais · Usuários · Clientes · Drive/Dropbox
(Login = tela isolada, sem sidebar)
```
Regras: "Área do Cliente" só logado; "Administração" só admin/editor.

## Hierarquia de conteúdo (o coração do site)
**Marca → Equipamento → Pasta → Material (arquivo)**
- Pastas padrão por equipamento: Documentos, Imagens, Materiais Gráficos, Material Institucional, Redes Sociais, Vídeos.
- Marcas (filtro): Body Health, Contourline, Lumenis, Visbody, Cynosure Lutronic, Eurofeedback.
- Equipamentos (exemplos): HIPRO, Crystal 3D, Enygma, Focuskin, Folix, Multishape, Supreme Pro, Unyque Pro, Iconyc, Hive Pro, Raytrace, Creator 600, UltraLift, X-Tonus, Trilift, Stellar, Splendor X, Inkie Laser.

## Telas pra criar (nesta ordem)
1. **Login** — limpo, centralizado, com a marca.
2. **Início (Dashboard)** — saudação "Olá, {nome}"; barra de busca com autocomplete; **grade de equipamentos** (cards com foto + nome) com **filtro por marca** e toggle grade/lista; seção **"Materiais recentes"**.
3. **Equipamento** — breadcrumb; título + descrição; contadores (X materiais · Y pastas); busca no escopo; **grade das 6 pastas** (card com ícone de pasta + nome + contagem).
4. **Pasta** — lista de **materiais** (card ou linha) com tipo, tamanho, botão **Preview** e **Baixar**.
5. **Material** — preview grande; infos (tipo, tamanho, downloads, tags, versão); **Baixar** + **Favoritar**.
6. **Busca** — campo + filtros (tipo, equipamento) + resultados.
7. **Área do Cliente**: **Minha Conta** (resumo), **Contrato**, **Boletos** (lista de faturas com status), **Meus Equipamentos** (nº série + garantia), **Suporte**.
8. **Admin**: **Painel** (cards de métricas), **Upload de material**, **Lista de clientes** (tabela).

## Estilo visual
- **Marca:** azul Contourline **#24336E** (sidebar escura, texto branco). Accent **#24336E** (hover #1B2655).
- **Fundo:** claro (#F4F5F7 / branco); **cards** brancos arredondados (rounded-2xl), sombras suaves, bordas sutis (preto 8%).
- **Status:** sucesso #10B981 · aviso #F59E0B · erro #EF4444 · info #3B82F6.
- **Layout:** sidebar fixa **260px** + topbar **56px** (branca, com breadcrumb, indicador "Online" e avatar do usuário) + conteúdo com respiro.
- **Tipografia:** sans-serif moderna; **ícones outline** (estilo Lucide/Feather).
- **Microinterações:** hover sutil (cards sobem levemente), entrada suave/escalonada.
- **Tom:** profissional, limpo, **"premium clínico"**. Pode **modernizar** o visual, mantendo a marca (azul) e a estrutura.

## Regras de saída
- **1 arquivo HTML por tela**, com Tailwind via CDN (`<script src="https://cdn.tailwindcss.com"></script>`), pronto pra abrir no navegador.
- Conteúdo de exemplo **realista** (use os equipamentos/marcas acima). Fotos = placeholders cinza com o nome do equipamento.
- **Responsivo** (desktop + mobile com sidebar colapsável).
- Comece pela tela **2 (Início/Dashboard)** e me pergunte antes de seguir.
