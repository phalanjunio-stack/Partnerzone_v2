# Decisões de design — site novo (NOVODESIGN)

Lista viva das regras/escolhas de design. Vou seguindo isto ao construir o `site/`.

## Confirmado

1. **Temas: 3 (Escuro / Claro / Automático).**
   - Motor portado do `sitelocal` (`theme.js`): `data-theme` no `<html>` + variáveis CSS por tema + `localStorage`.
   - Switcher (botão sol → dropdown com as 3 opções).
   - Som de "interruptor" ao trocar claro↔escuro (sintetizado, Web Audio).

2. **Ícones: SEMPRE de traçado (outline), nunca preenchidos ou coloridos.**
   - Estilo Lucide/Feather, `stroke="currentColor"`, sem `fill`.
   - Herdam a cor do texto → **recolorem automaticamente ao trocar de tema** ("muda o tema, muda tudo").
   - ❌ Evitar ícones coloridos/cheios (ex.: paleta colorida, chama laranja).

3. **Linha de equipamentos = rolagem horizontal por arrastar (drag-to-scroll).**
   - Segurar + arrastar o mouse rola a fileira; com inércia/suavidade.
   - Permite ver todos os equipamentos direto na linha (além do botão "Ver todos").

4. **Efeitos de menu** (portados do `sitelocal`): transição de página elástica, hover que levanta cards, dropdown animado, glow/ripple, e sons de UI (hover/click/abrir).

5. **Estrutura/navegação:** conforme o GDD (`docs/PartnerZone-GDD.md`).

6. **Galerias = Masonry (efeito favorito do usuário), SEMPRE da esquerda pra direita.**
   - Onde: tudo com muitas fotos/vídeos/arquivos — pastas **Imagens** e **Vídeos**, listas de materiais, **documentos/arquivos de suporte ao cliente**.
   - ⚠️ ARMADILHA conhecida: CSS `column-count` preenche **de cima pra baixo** (coluna por coluna) = ordem de leitura ERRADA. **NÃO usar.**
   - ✅ Usar **masonry em JS**: cada item (na ordem do DOM) entra na **coluna mais curta** do momento → a 1ª linha enche **da esquerda pra direita (1,2,3…)**, depois equilibra as alturas. Responsivo (nº de colunas conforme a largura). `grid masonry` nativo do CSS ainda não é confiável (2026).
   - Cards de **altura uniforme** (equipamentos) NÃO usam masonry — grade/linha normal.

7. **Splash de abertura — ORBITAL, copiado IGUAL da GALERIA CONTOUR** (`GALERIA CONTOUR/galeria-contourline/electron/splash.html`): fundo gradiente azul (#020b18→#0D2B4E→#1A4A80), 3 anéis (tracejado girando 28s + interno + externo), arco girando rápido, 1 dot azul orbitando (2.8s) + 4 dots brancos/azuis em órbita lenta (16s, espalhados), logo Contourline "respirando" (o `icon.png` real, copiado p/ `site/assets/splash-logo.png`), título "Iniciando PartnerZone", 3 dots saltitando, rodapé "Seus dados estão protegidos". Em `css/splash.css` + `js/core/splash.js` (`Splash.mount()` no início do `<body>` + auto-hide no `load`, fade, `body.entered`). Em TODAS as páginas. **Importante:** o usuário quer ESTE (orbital da galeria), NÃO o cubo 3D do sitelocal (achou feio).

8. **Formulários de ação rápida = POPUP (modal), não página inteira.**
   - Solicitar material, Reportar problema, Abrir chamado de suporte, Enviar feedback → abrem em **modal** sobre a tela atual (backdrop com blur + animação fade/scale), sem perder o contexto.
   - O formulário de Solicitação (abas "Solicitar Novo Material" / "Reportar Problema") vira modal.
   - **Sugestão aceita p/ confirmar:** a página "Solicitações" do menu vira o **histórico/status** das solicitações (pendente/respondida/concluída) + botão "Nova solicitação" que abre o modal.

9. **Modais com borda que BRILHA GIRANDO (azul + roxo)** — efeito do `sitelocal/public/css/components/video-classify-modal.css`.
   - Borda em **conic-gradient rotacionando** (`@property --angle` + `@keyframes orbit`, ~4.4s) + **halo desfocado** (blur ~22px) girando junto, em azul (#00AEFF / #0084FF) + roxo (#7A57FF).
   - Aplicar nos modais/popups (formulários de ação rápida, lightbox, etc.). Portável (CSS puro).

10. **Cores: GRADIENTES, não chapado.**
    - Base = **azul → azul ESCURO** (degradê sempre puxando pro escuro) → profundidade em superfícies, sidebar, cards, botões.
    - **Roxo = accent SECUNDÁRIO:** o degradê **azul+roxo** entra em pontos especiais (borda dos modais, alguns menus/popups secundários, badges "premium") — **NÃO** na navegação principal, que segue o azul Contourline.
    - Tudo adapta aos 3 temas (escuro = glow mais forte; claro = mais sutil).

11. **Refinamentos (revisão da tela Início):**
    - Sem indicador "ONLINE" na topbar.
    - Ícones de tema: lua/sol/monitor de **traçado** (sem fill).
    - **Hover estilo Central Contourline** (`sitelocal/.../contourline-central-server.css`): banho de accent no fundo + **borda acende em azul** (`--accent-border`) + glow suave. Aplicado em ícones, itens de menu, ações rápidas e materiais. Ícones seguem monocromáticos (currentColor). [Em aberto: usar cores de accent em alguns ícones — dourado pastas #F5C451, azul/roxo — como a Central.]
    - Dropdowns abrem **fluido, com stagger** (itens entram em sequência) — nada brusco.
    - No tema **claro a sidebar também clareia** (texto escuro; item ativo continua azul).
    - **Recolher menu**: botão `<<` colapsa a sidebar pra rail de ~80px (só ícones, tooltip no hover); clicar no logo expande; estado salvo no localStorage. (Recurso de desktop >900px.)

12. **CONTRASTE em todos os temas (regra fixa — vigiar sempre):** ao trocar de tema, NADA pode sumir/ficar ilegível. Conferir os 3 temas (escuro/claro/auto) em toda tela nova.
    - ⚠️ NUNCA usar seletor `[data-theme=...]` largo — ele casa com qualquer elemento que tenha o atributo (ex.: as opções `data-theme` do switcher) e injeta tokens errados localmente. **Sempre `:root[data-theme=...]`.** (Foi o bug que escondia a opção "Escuro" no tema claro.)

13. **Hover "acende" vivo — SMOKE-GLOW portado do sitelocal** (`layout.css`): aura difusa (pulsa) + halo (gira) + **4 faíscas orbitando**, injetadas por JS (`UI.smokeGlow`). Botão de **tema = âmbar/sol** (rgb 245,158,11); demais ícones = **azul** (43,131,255). O ícone do tema fica num `<span class="ti">` pra o re-render não apagar as faíscas.
14. **Seta "voltar ao topo"** (`.fab-top`, portado do sitelocal): círculo azul→roxo com glow, **no canto inferior DIREITO** (right/bottom 26px), aparece ao rolar (>300px), clique = scroll suave ao topo (`UI.scrollTop`).
15. **Fluidez (60–140fps):** efeitos em `transform`/`opacity` (GPU) + easings suaves + `scroll-behavior: smooth`. Tudo abre com animação (data-enter, modal, dropdown).
16. **Toasts / avisos flutuantes (pílula no topo-centro)** — pedido pelo usuário (2 referências: "Sincronizando com Google Drive…" e "Índice iniciado — pode levar alguns minutos.").
    - `Toast` em `ui.js` + estilos em `effects.css`. Pílula (`border-radius:999px`) com ícone à esquerda, mensagem, e × pra fechar. Adapta aos 3 temas (`var(--surface)`/`--border`/`--text`).
    - Tipos: **loading** (aro azul girando, NÃO fecha sozinho — fica até terminar), **success** (bolha verde + check que se desenha), **error** (vermelho), **warn** (âmbar), **info** (azul). Auto-dismiss padrão 4s (loading = 0).
    - Handle vivo: `const t = Toast.loading('Sincronizando…'); t.update({type:'success', msg:'Índice iniciado…'})` → a MESMA pílula vira o check verde (igual ao fluxo das imagens). Atalhos: `Toast.success/error/warn/info(msg)`.
    - Demo ligada: na Início dispara a sequência sincronizar→sucesso 1x por sessão; enviar solicitação mostra toast de sucesso.
17. **Modais: glow fino girando + SEM barra + rolar arrastando com o mouse** (ajuste do modal de Solicitação que já existia — NÃO era pra criar coleção).
    - **Borda de luz** azul→roxo girando (`.modal::before` conic-gradient `@property --ang`), **traçado bem fino (~1.5px, ≤2px)** + halo desfocado atrás.
    - **Sem barra de rolagem nativa** (aquela cinza feia): scroll movido pro `.modal-inner` (`.modal` vira flex e a borda de luz fica parada), barra escondida (`scrollbar-width:none` + `::-webkit-scrollbar{display:none}`) + máscara de fade no topo/base.
    - **Rolar = segura e arrasta COM O MOUSE** (`UI.dragScrollY`, com inércia) — ligado automático em todo modal no `UI.openModal`. O drag ignora pointerdown em input/textarea/button pra não atrapalhar digitação.
    - ⚠️ **O brilho ESTAVA parado** porque o bloco `prefers-reduced-motion` zerava a duração de TODA animação (`1e-5s`). Como o produto pede movimento, **removemos esse corte** — o brilho (e splash, smoke-glow, spinner) voltam a girar. (No preview headless a timeline congela e o `currentTime` não avança, mas no navegador real gira.)
18. **Busca global no topo (topbar)** — pedido com print ("Buscar acessos, documentos, sistemas ou setores…" + atalho ⌘K).
    - Pílula `.topsearch` (`flex:1; max-width:540px`) com lupa de traçado + atalho `⌘ K`. Em TODAS as páginas (index/categoria/pasta/material). Some abaixo de 760px (a busca do hero/menu mobile cuida). Contraste conferido nos 3 temas.
19. **Linha de equipamentos — SEM máscara de fade nas bordas.** Depois de várias idas e vindas (sempre-ligado → condicional ao scroll), o usuário se incomodou com a máscara aparecer num lado e não no outro conforme a rolagem. Decisão final: **removida** — cards sempre nítidos em qualquer posição. Mantém só scrollbar escondida + drag.
    - ⚠️ O **glow do hover cortava na borda**. Duas causas encadeadas: (1) `overflow-x:auto` recorta nos 4 lados e a folga (16px) era menor que o glow (~23px); (2) **`scroll-snap-align:start` puxava o 1º card pra colar na borda esquerda**, engolindo o padding (folga virava 0). Fix final: `padding: 40px 28px` + `margin: -18px 0` (corte colado na borda do conteúdo, sem linha solta no branco) + **`scroll-padding-inline: 28px`** (o snap respeita a folga). Resultado: 1º card descansa a 28px do corte > 23px do glow → não corta. ⚠️ NÃO usar margem horizontal negativa (joga o corte pro meio do branco = linha dura flutuando).
20. **Cards de equipamento: proporção FIXA 4:5** (largura 230px). Os controles de proporção/tamanho foram REMOVIDOS a pedido do usuário ("pode tirar tudo isso, deixa só no 4:5"). `.eq-thumb { aspect-ratio: 4/5 }`, sem var/slider/seg.
    - Botão **"Ver todos os equipamentos"** repaginado: pílula com hover de accent (borda acende + glow + seta desliza).
21. **Capa do equipamento = responsiva (cover) + ponto focal escolhido pelo ADMIN (igual print).**
    - A imagem do card usa `object-fit: cover` (sempre preenche, responsiva) + `object-position` controlável.
    - Botão **"Editar capa"** (admin) aparece no hover do card → abre modal **picker de 9 regiões** (grade 3×3 sobre a foto): clicar numa região define o ponto focal (Topo/Centro/Base × esq/centro/dir), com **check** na selecionada + **rótulo** flutuante ("Centro" etc.). Botão **"Trocar capa"** (upload de imagem).
    - Salva por equipamento no localStorage (`cl-eq-pos:<nome>`, `cl-eq-cover:<nome>`) e re-renderiza na hora. Funciona na Início e na página "Todos os equipamentos".
    - **Upload otimizado:** qualquer imagem (PNG/JPG/WebP, qualquer tamanho) é redimensionada p/ 1400px + comprimida em WebP via canvas antes de salvar (senão fotos grandes estouram a cota de ~5MB do localStorage). `setItem` em try/catch com toast de erro.
    - **2ª imagem (hover):** opcional, "Imagem ao passar o mouse" no mesmo modal (ex: foto de lado / com modelo). Salva em `cl-eq-cover2:<nome>`; o card ganha `.has-hover` + uma camada `.img2` que faz **crossfade** ao passar o mouse (+ zoom leve de 1.04 sempre). Efeito tipo e-commerce.
22. **Página "Ver todos os equipamentos".** Grade responsiva (`auto-fill, minmax(210px,1fr)`) com todos os cards (mesmo componente da Início). Agora é a rota `#/equipamentos` do SPA.
23. **SPA — TUDO num `index.html` só (pedido do usuário: "não ficar mudando html por html").**
    - Um shell único (sidebar + topbar + 2 modais) em `index.html`; o conteúdo troca por **hash router** (`js/views.js`): `#/` (Início), `#/equipamentos`, `#/categoria/:nome`, `#/pasta/:cat/:pasta`, `#/material/:nome`. Sem reload — navegação instantânea.
    - `app.js` separado em `initShell()` (roda 1x: nav, tema, som, sidebar, recolher, picker de capa, delegação de cards, enviar solicitação) e `initHome()` (por rota: equipamentos row + controles + sync toast). As views (`Views.home/equipamentos/categoria/pasta/material`) retornam `{title, crumbs, html, init}`; o router injeta no `#view`, refaz ícones/crumbs, re-dispara `data-enter` e chama `init`.
    - Crumbs e `<title>` dinâmicos por rota. Categoria/Material pegam o nome do próprio hash.
    - As páginas antigas (`categoria/equipamentos/pasta/material.html`) viraram **redirects** pro hash equivalente (links antigos continuam válidos). Os JS de página (`js/pages/*.js`) foram absorvidos pelas views.
    - **Editar o shell agora é 1 lugar só.** CSS continua em vários arquivos (todos linkados no index).
24. **Toasts no TOPO-CENTRO** (`.toast-wrap` top:18px, centralizado). [Histórico: testei no canto inferior direito, mas o usuário preferiu "em cima" — bem visível ao salvar.] O **salvar capa** SEMPRE fecha o modal + mostra o toast verde "Capa salva!" (mesmo em edge-case sem `curName`).
25. **Rodapé rico (copiado da Galeria Contourline — `GALERIA CONTOUR/.../components/Footer.tsx`).** No shell (`.main`, depois do `#view`), aparece em todas as rotas. Gradiente azul `linear-gradient(160deg,#061237,#0D2B4E,#1A4A80)`, 3 colunas: (1) marca (logo burst + "contourline" + título "PartnerZone Contourline" + descrição + badge com escudo "Acesso exclusivo para parceiros"); (2) **LINKS RÁPIDOS** (Equipamentos, Materiais, Solicitar material[modal], Central de apoio, Privacidade[toast]) com ícone + chevron e hover; (3) card destaque com gradiente + dots + banner com cadeado "Seus materiais de marketing, organizados com segurança." Barra inferior: "Sistema interno..." + "© 2026 Contourline...". Sempre escuro (independe do tema). Responsivo → 1 coluna < 960px.

## Melhorias propostas (a confirmar)
Carregamento: ⭐ skeleton loaders · ⭐ blur-up + lazy-load de imagens.
Busca: ⭐ command palette (Ctrl/⌘+K) · buscas recentes + sugestões.
Galeria: ⭐ lightbox (tela cheia + ←→ + zoom) · preview de vídeo no hover · filtros/ordenação com chips.
Organização: coleções · vistos recentemente · ⭐ seleção múltipla → baixar .zip · badges Novo/Recomendado.
Polimento: toasts · empty states ilustrados · preferências salvas · acessibilidade (reduzir movimento).

## Em aberto (confirmar)

- **Barra "Rápido / Normal / HD" + slider** (2ª referência do usuário): de onde é e o que controla? (tamanho/densidade dos cards? qualidade das miniaturas?) — aguardando.

## Paleta (do mockup do ChatGPT — tema escuro)
- Fundo escuro azulado, sidebar mais escura, accent azul Contourline. Cards com leve borda/realce.
- (Definir os HEX exatos quando o HTML do mockup chegar em `mockups/`.)
