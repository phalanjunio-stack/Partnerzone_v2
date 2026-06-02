/* ============================================================
   VIEWS + ROUTER (SPA) — uma página só (index.html), conteúdo
   trocado por hash (#/, #/equipamentos, #/categoria/HIPRO, ...)
   ============================================================ */
(() => {
  const ic = (n, c) => (window.svgIcon ? window.svgIcon(n, c) : '');

  /* ---------------- dados de exemplo das sub-páginas ---------------- */
  const SUPPORT = [
    { icon:'megaphone',    color:'#ef4444', title:'Divulgar nas redes sociais', desc:'Posts, stories, legendas e criativos prontos.' },
    { icon:'presentation', color:'#3b82f6', title:'Apresentar para minha equipe', desc:'Apresentações e materiais para treinamento interno.' },
    { icon:'trending',     color:'#10b981', title:'Vender melhor o tratamento', desc:'Argumentos comerciais, diferenciais e estudos.' },
    { icon:'printer',      color:'#f59e0b', title:'Materiais para imprimir', desc:'Folders, lâminas, banners e peças gráficas.' },
    { icon:'image',        color:'#7a57ff', title:'Imagens e vídeos do equipamento', desc:'Fotos, vídeos e arquivos visuais em alta.' },
    { icon:'pencil',       color:'#2f7ff2', title:'Solicitar material personalizado', desc:'Peça ao nosso time a criação de um material.', modal:true },
  ];
  const LIBRARY = [
    { name:'Documentos', count:43 }, { name:'Imagens', count:136 }, { name:'Materiais Gráficos', count:28 },
    { name:'Material Institucional', count:10 }, { name:'Redes Sociais', count:32 }, { name:'Vídeos', count:14 },
  ];
  const GAL_TYPE = {
    img: { color:'#10b981', icon:'image', label:'IMG' }, pdf: { color:'#ef4444', icon:'file', label:'PDF' },
    vid: { color:'#7a57ff', icon:'video', label:'VÍDEO' }, ppt: { color:'#f59e0b', icon:'ppt', label:'SLIDES' },
  };
  const GAL_NAMES = ['Aplicação HIPRO 01','Antes e Depois 03','Protocolo Facial','Lifting Pescoço','Sessão Clínica 12','Resultado 30 dias','Banner Campanha','Ficha Técnica','Story Instagram','Aplicação Corporal','Comparativo','Tratamento Papada','Detalhe Ponteira','Pós-tratamento','Folder A4','Reels Demonstração','Antes e Depois 07','Aplicação HIPRO 09'];
  const GAL_H = [220,300,180,260,200,330,190,240,280,210,310,200,250,230,290,180,260,210];
  const GAL_T = ['img','img','pdf','img','img','img','ppt','pdf','img','img','img','vid','img','img','pdf','vid','img','img'];
  const RELATED = [
    { name:'Aplicação HIPRO 02', size:'2.8 MB' }, { name:'Antes e Depois 04', size:'3.1 MB' },
    { name:'Protocolo Facial', size:'1.9 MB' }, { name:'Resultado 30 dias', size:'4.2 MB' },
  ];
  const eqOf = slug => (typeof EQUIPMENT !== 'undefined' ? EQUIPMENT : []).find(e => e.name.toLowerCase() === String(slug||'').toLowerCase());
  const NOVIDADES = [
    { ic:'video', t:'Reels — Antes e Depois HIPRO', s:'Vídeo · há 2 dias', tag:'Novo',       h:'#/pasta/HIPRO/Vídeos' },
    { ic:'image', t:'Pack de Stories Enygma',        s:'12 imagens · há 4 dias', tag:'Novo',  h:'#/pasta/Enygma/Imagens' },
    { ic:'ppt',   t:'Apresentação Comercial 2026',   s:'Slides · há 1 semana', tag:'Atualizado', h:'#/categoria/HIPRO' },
    { ic:'file',  t:'Protocolo Facial Trilift',      s:'PDF · há 1 semana', tag:'Novo',       h:'#/material/Protocolo%20Facial' },
  ];
  window.__NOVIDADES = NOVIDADES;

  /* rastreia acessos pra "Continue de onde parou" */
  function recordRecent(p) {
    let item = null;
    if (p[0] === 'categoria') item = { ic:'cpu',    t:p[1], s:'Equipamento',          h:'#/categoria/'+encodeURIComponent(p[1]) };
    else if (p[0] === 'pasta') item = { ic:'folder', t:p[2], s:(p[1]||'')+' · Pasta',  h:'#/pasta/'+encodeURIComponent(p[1]||'')+'/'+encodeURIComponent(p[2]||'') };
    else if (p[0] === 'material') item = { ic:'file', t:p[1], s:'Material',            h:'#/material/'+encodeURIComponent(p[1]) };
    if (!item || !item.t) return;
    try {
      let arr = JSON.parse(localStorage.getItem('cl-recent') || '[]');
      arr = arr.filter(x => x.h !== item.h); arr.unshift(item); arr = arr.slice(0, 8);
      localStorage.setItem('cl-recent', JSON.stringify(arr));
    } catch (_) {}
  }

  /* ============================ VIEWS ============================ */
  const Views = {
    /* ---------- INÍCIO ---------- */
    home() {
      const h = new Date().getHours();
      const greet = h < 12 ? 'Bom dia' : h < 18 ? 'Boa tarde' : 'Boa noite';
      return {
        title: 'Início',
        crumbs: `<i data-icon="home" data-cls="ic ic-sm"></i><span class="here">Início</span>`,
        html: `
        <div class="hero" data-enter>
          <div class="hero-top">
            <div class="avatar" style="background:var(--accent2-grad)">A</div>
            <div><h1>${greet}, Ana! <span class="wave">👋</span></h1><div class="sub">Bem-vinda ao PartnerZone Contourline</div></div>
            <div class="spacer"></div>
            <button class="btn" data-open-modal="modal-solicitar"><i data-icon="send" data-cls="ic ic-sm"></i>Solicitar material</button>
          </div>
          <div class="hero-quick">
            <a class="qchip" href="#/equipamentos"><i data-icon="package" data-cls="ic ic-sm"></i>Equipamentos</a>
            <a class="qchip" href="#/pasta/HIPRO/Imagens"><i data-icon="image" data-cls="ic ic-sm"></i>Imagens & vídeos</a>
            <a class="qchip" href="#/categoria/HIPRO"><i data-icon="grad" data-cls="ic ic-sm"></i>Treinamentos</a>
            <a class="qchip" data-open-modal="modal-solicitar"><i data-icon="headphones" data-cls="ic ic-sm"></i>Suporte</a>
            <a class="qchip" href="#/equipamentos"><i data-icon="trending" data-cls="ic ic-sm"></i>Mais baixados</a>
          </div>
          <div class="hero-stats">
            <div class="hstat"><span class="hi"><i data-icon="package" data-cls="ic ic-sm"></i></span><div><b>36</b><span>Equipamentos</span></div></div>
            <div class="hstat"><span class="hi"><i data-icon="folder" data-cls="ic ic-sm"></i></span><div><b>1.248</b><span>Materiais</span></div></div>
            <div class="hstat"><span class="hi"><i data-icon="download" data-cls="ic ic-sm"></i></span><div><b>327</b><span>Downloads no mês</span></div></div>
            <div class="hstat"><span class="hi"><i data-icon="ticket" data-cls="ic ic-sm"></i></span><div><b>2</b><span>Chamados abertos</span></div></div>
          </div>
        </div>

        <section class="section" id="recent-sec" data-enter hidden>
          <div class="section-head"><h2>Continue de onde parou</h2><span class="desc">Seus últimos acessos</span></div>
          <div class="recent-row" id="recent-row"></div>
        </section>

        <section class="section" data-enter>
          <div class="section-head"><h2>Novidades</h2><span class="desc">Campanhas e materiais novos</span></div>
          <div class="novidades">
            <a class="promo" href="#/categoria/HIPRO">
              <span class="promo-tag">CAMPANHA DO MÊS</span>
              <h3>Lançamento HIPRO 2026</h3>
              <p>Kit completo de divulgação: posts, reels, antes/depois e argumentos de venda prontos pra usar.</p>
              <span class="promo-cta">Ver materiais <i data-icon="arrowR" data-cls="ic ic-sm"></i></span>
            </a>
            <div class="novidade-list" id="novidades"></div>
          </div>
        </section>

        <section class="section" data-enter>
          <div class="section-head">
            <h2>Equipamentos</h2>
            <span class="desc">Explore nossos equipamentos</span>
            <div class="spacer"></div>
            <div class="toolbar">
              <button class="select">Todas as marcas <i data-icon="chevD" data-cls="ic ic-sm"></i></button>
            </div>
          </div>
          <div class="eq-rail">
            <div class="eq-row" id="eq-row"></div>
            <div class="eq-fade r"></div>
            <button class="rail-nav r"><i data-icon="chevR"></i></button>
          </div>
          <div class="row-end">
            <a class="btn ghost btn-sm" href="#/equipamentos">Ver todos os equipamentos <i data-icon="chevR" data-cls="ic ic-sm"></i></a>
          </div>
        </section>

        <div class="grid3">
          <div class="card" data-enter><div class="card-head"><i data-icon="folder"></i><h3>Materiais recentes</h3><a class="more">Ver todos</a></div><div class="rm-list" id="recent"></div></div>
          <div class="card" data-enter><div class="card-head"><i data-icon="trending"></i><h3>Estatísticas rápidas</h3></div><div id="stats"></div></div>
          <div class="card" data-enter><div class="card-head"><i data-icon="settings"></i><h3>Ações rápidas</h3></div><div id="actions"></div></div>
        </div>`,
        init: () => window.initHome && window.initHome(),
      };
    },

    /* ---------- BUSCAR / BIBLIOTECA DE MATERIAIS ---------- */
    buscar() {
      const eqs = (typeof EQUIPMENT !== 'undefined' ? EQUIPMENT : []);
      const eqCounts = [['HIPRO',892],['Folix',548],['Unyque Pro',476],['Trilift',402],['Enygma',388],['Crystal 3D',356]];
      const fgroup = (label) => `<div class="lf-group"><button class="lf-title">${label}<i data-icon="chevD" data-cls="ic ic-sm"></i></button></div>`;
      return {
        title: 'Buscar',
        crumbs: `<i data-icon="home" data-cls="ic ic-sm"></i><a href="#/">PartnerZone</a><span>›</span><span class="here">Buscar</span>`,
        html: `
        <div class="lib" data-enter>
          <div class="lib-head">
            <div><h1>Biblioteca de Materiais</h1><div class="sub">Encontre materiais por equipamento, marca, tipo ou objetivo.</div></div>
            <button class="btn" data-open-modal="modal-solicitar"><i data-icon="send" data-cls="ic ic-sm"></i>Solicitar material</button>
          </div>

          <div class="lib-searchrow">
            <label class="lib-search" data-cmdk><i data-icon="search"></i><input placeholder="Buscar por equipamento, categoria ou nome do arquivo..." readonly><span class="kbd">⌘ K</span></label>
            <div class="lib-count"><span class="lc-ic"><i data-icon="sliders" data-cls="ic ic-sm"></i></span><div><b id="lib-total">4.170</b><span>materiais encontrados</span></div></div>
          </div>

          <div class="lib-chips" id="lib-chips">
            <button class="lchip on" data-f="todos"><i data-icon="grid" data-cls="ic ic-sm"></i>Todos</button>
            <button class="lchip" data-f="novos"><span class="tagnew">Novo</span>Novos</button>
            <button class="lchip" data-f="mais"><i data-icon="trending" data-cls="ic ic-sm"></i>Mais baixados</button>
            <button class="lchip" data-f="vid"><i data-icon="video" data-cls="ic ic-sm"></i>Vídeos</button>
            <button class="lchip" data-f="img"><i data-icon="image" data-cls="ic ic-sm"></i>Imagens</button>
            <button class="lchip" data-f="pdf"><i data-icon="file" data-cls="ic ic-sm"></i>Documentos</button>
            <button class="lchip" data-f="social"><i data-icon="message" data-cls="ic ic-sm"></i>Redes Sociais</button>
          </div>

          <div class="lib-body">
            <aside class="lib-filters">
              <div class="lf-head"><b>Filtros</b><a id="lf-clear-top">Limpar filtros</a></div>
              <div class="lf-group open">
                <button class="lf-title">Equipamentos<i data-icon="chevD" data-cls="ic ic-sm"></i></button>
                <div class="lf-items">
                  ${eqCounts.map(([n,c]) => `<label class="lf-item"><span>${n}</span><b>${c}</b></label>`).join('')}
                  <a class="lf-more">Ver mais <i data-icon="chevD" data-cls="ic ic-sm"></i></a>
                </div>
              </div>
              ${['Marcas','Tipo de material','Formato','Status','Data','Tamanho do arquivo','Downloads'].map(fgroup).join('')}
              <button class="btn ghost lf-clear"><i data-icon="trash" data-cls="ic ic-sm"></i> Limpar todos os filtros</button>
            </aside>

            <div class="lib-results">
              <div class="lib-toolbar">
                <span class="lib-rc"><b id="lib-count">4.170</b> materiais encontrados</span>
                <div class="spacer"></div>
                <span class="lib-sort">Ordenar por:
                  <select id="lib-sort"><option>Mais recentes</option><option>Mais baixados</option><option>A → Z</option><option>Maior arquivo</option></select>
                </span>
                <div class="lib-density">
                  <div class="seg vseg" id="lib-view">
                    <button class="on" data-view="masonry" title="Masonry"><i data-icon="grid" data-cls="ic ic-sm"></i></button>
                    <button data-view="list" title="Lista"><i data-icon="list" data-cls="ic ic-sm"></i></button>
                  </div>
                  <div class="seg qseg" id="lib-quality" title="Qualidade dos thumbs conforme a conexão — Rápido = leve (internet ruim), HD = cheio">
                    <button class="on" data-q="200"><i data-icon="zap" data-cls="ic ic-sm"></i>Rápido</button>
                    <button data-q="270">Normal</button>
                    <button data-q="360">HD</button>
                  </div>
                  <input type="range" class="dslider" id="lib-size" min="170" max="400" step="2" value="200" title="Tamanho dos cards">
                </div>
              </div>
              <div class="masonry lib-grid" id="lib-grid"></div>
              <div class="lib-pager">
                <button class="pg"><i data-icon="chevL" data-cls="ic ic-sm"></i></button>
                <button class="pg on">1</button><button class="pg">2</button><button class="pg">3</button>
                <span class="pg-dots">…</span><button class="pg">174</button>
                <button class="pg"><i data-icon="chevR" data-cls="ic ic-sm"></i></button>
              </div>
            </div>
          </div>
        </div>`,
        init: () => window.initBuscar && window.initBuscar(),
      };
    },

    /* ---------- MARCA / CENTRAL DA MARCA (por marca) ---------- */
    marca(brandArg) {
      const BRANDS = {
        'Contourline': { logo:'C',  tag:'tecnologia para conquistar', cor:'#2f7ff2' },
        'Daeju':       { logo:'D',  tag:'ultrassom microfocado (HIFU)', cor:'#0ea5e9' },
        'Body Health': { logo:'BH', tag:'estética corporal e facial',  cor:'#0d9488' },
        'Lumenis':     { logo:'L',  tag:'energy to transform lives',   cor:'#e11d48' },
      };
      const brand = brandArg || 'Contourline';
      const info = BRANDS[brand] || { logo: brand.split(/\s+/).map(w => w[0]).join('').slice(0, 2).toUpperCase(), tag: 'identidade da marca', cor: '#2f7ff2' };
      const blogo = (cls = '') => `<div class="blogo ${cls}" style="--bcor:${info.cor}"><span class="bl-c">${info.logo}</span><span class="bl-word">${brand.toLowerCase()}<small>${info.tag}</small></span></div>`;
      const logosHref = '#/marca/' + encodeURIComponent(brand) + '/logos';
      const CATS = [
        ['image','Logos oficiais','Baixe todas as versões da marca em diferentes formatos.','Ver logos', logosHref],
        ['sliders','Cores da marca','Consulte nossa paleta oficial com códigos HEX e RGB.','Ver cores'],
        ['file','Tipografia','Fontes oficiais e diretrizes de uso em títulos e textos.','Ver tipografia'],
        ['grid','Aplicações prontas','Templates para redes sociais, apresentações e impressos.','Ver templates'],
        ['shield','Regras de uso','Saiba como aplicar a marca corretamente em qualquer meio.','Ver regras'],
      ];
      const LOGOS = [['Logo principal','main'],['Logo branca','white'],['Logo azul','blue'],['Símbolo isolado','sym'],['Versão horizontal','main'],['Versão vertical','vert']];
      const COLORS = [['Azul Contourline','#24336E'],['Branco','#FFFFFF'],['Azul escuro','#1B2655'],['Cinza claro','#F4F5F7'],['Azul claro','#3B82F6'],['Cinza médio','#6B7280'],['Azul suave','#E6ECFF'],['Cinza escuro','#1F2937']];
      const APPS = [['Post institucional','1080×1080'],['Story institucional','1080×1920'],['Capa apresentação','1920×1080'],['Assinatura de e-mail','PNG'],['Papel timbrado','A4'],['Template proposta','A4']];
      const RULES = [['check','ok','O que pode fazer','Veja exemplos de uso correto da marca.'],['x','no','O que não pode fazer','Evite usos incorretos que descaracterizam a marca.'],['crop','dash','Área de respiro','Respeite o espaço mínimo em volta da marca.'],['image','img','Uso sobre fundos','Saiba como aplicar em fundos claros, escuros e imagens.']];
      const DOWN = [['folder','Kit de logos','ZIP · 45 MB'],['file','Manual da marca','PDF · 8.2 MB'],['folder','Kit social media','ZIP · 120 MB'],['ppt','Templates editáveis','PPTX · 68 MB'],['folder','Ícones da marca','ZIP · 15 MB']];
      const xS = `<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M15 9l-6 6M9 9l6 6"/></svg>`;
      const okS = `<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="m8.5 12 2.5 2.5L16 9"/></svg>`;
      return {
        title: 'Marca ' + brand,
        crumbs: `<i data-icon="building" data-cls="ic ic-sm"></i><a href="#/">PartnerZone</a><span>›</span><a href="#/marca/Contourline">Institucional</a><span>›</span><span class="here">${brand}</span>`,
        html: `
        <div class="brand-page">
          <div class="brand-hero" data-enter>
            <div class="bh-main">
              <span class="bh-badge">CENTRAL DA MARCA</span>
              <h1>${brand}</h1>
              <p>Use a identidade visual ${brand} com consistência em apresentações, redes sociais, materiais impressos e comunicação comercial.</p>
              <div class="bh-actions">
                <button class="btn"><i data-icon="download" data-cls="ic ic-sm"></i> Baixar kit completo</button>
                <button class="btn ghost light"><i data-icon="file" data-cls="ic ic-sm"></i> Manual da marca</button>
                <button class="btn ghost light"><i data-icon="pencil" data-cls="ic ic-sm"></i> Solicitar adaptação</button>
              </div>
            </div>
            <div class="bh-side">
              <div class="bh-logo">${blogo('white big')}</div>
              <div class="bh-stats">
                <div class="bh-stat"><span class="bs-ic"><i data-icon="image" data-cls="ic ic-sm"></i></span><div><b>12</b><span>Logos Disponíveis</span></div></div>
                <div class="bh-stat"><span class="bs-ic"><i data-icon="sliders" data-cls="ic ic-sm"></i></span><div><b>8</b><span>Cores Oficiais</span></div></div>
                <div class="bh-stat"><span class="bs-ic"><i data-icon="grid" data-cls="ic ic-sm"></i></span><div><b>24</b><span>Templates Prontos</span></div></div>
                <div class="bh-stat"><span class="bs-ic"><i data-icon="download" data-cls="ic ic-sm"></i></span><div><b>120+</b><span>Downloads Este mês</span></div></div>
              </div>
            </div>
          </div>

          <div class="brand-cats" data-enter>
            ${CATS.map(c => `<a class="bcat"${c[4] ? ` href="${c[4]}"` : ''}><div class="bcat-ic">${svgIcon(c[0])}</div><h3>${c[1]}</h3><p>${c[2]}</p><span class="bcat-go">${c[3]} ${svgIcon('arrowR','ic ic-sm')}</span></a>`).join('')}
          </div>

          <section class="bcol portfolio-sec" data-enter>
            <div class="bcol-head"><h2>Portfólio</h2><span class="pf-hint">PDF institucional da marca — abre no visualizador e pode ser baixado</span></div>
            <div id="brand-portfolio" data-brand="${brand}"><div class="pf-loading">Carregando portfólio…</div></div>
          </section>

          <div class="brand-cols">
            <section class="bcol" data-enter>
              <div class="bcol-head"><h2>Logos oficiais</h2><a class="link-more" href="${logosHref}">Ver todos ${svgIcon('arrowR','ic ic-sm')}</a></div>
              <div class="logo-grid">
                ${LOGOS.map(l => `<div class="logo-card ${l[1]}"><div class="logo-box">${blogo(l[1] === 'sym' ? 'sym' : l[1] === 'white' ? 'white' : l[1] === 'blue' ? 'blue' : '')}</div><div class="logo-meta"><div><b>${l[0]}</b><span>PNG · SVG · PDF</span></div><button class="logo-dl">${svgIcon('download','ic ic-sm')}</button></div></div>`).join('')}
              </div>
            </section>

            <section class="bcol" data-enter>
              <div class="bcol-head"><h2>Cores oficiais</h2><a class="link-more">Ver todas ${svgIcon('arrowR','ic ic-sm')}</a></div>
              <div class="color-grid">
                ${COLORS.map(c => `<div class="color-card"><span class="color-sw" style="background:${c[1]}"></span><div class="color-meta"><b>${c[0]}</b><span>${c[1]}</span></div><button class="color-cp" title="Copiar">${svgIcon('file','ic ic-sm')}</button></div>`).join('')}
              </div>
            </section>

            <section class="bcol" data-enter>
              <div class="bcol-head"><h2>Aplicações em destaque</h2><a class="link-more">Ver todas ${svgIcon('arrowR','ic ic-sm')}</a></div>
              <div class="app-grid">
                ${APPS.map(a => `<div class="app-card"><div class="app-thumb">${svgIcon('image','ic ph')}</div><b>${a[0]}</b><span>${a[1]}</span></div>`).join('')}
              </div>
            </section>
          </div>

          <div class="brand-bottom">
            <section class="bcol wide" data-enter>
              <div class="bcol-head"><h2>Regras de uso</h2><a class="link-more">Ver todas ${svgIcon('arrowR','ic ic-sm')}</a></div>
              <div class="rules-grid">
                ${RULES.map(r => `<div class="rule-card ${r[1]}"><div class="rule-ic">${r[0] === 'check' ? okS : r[0] === 'x' ? xS : svgIcon(r[0])}</div><b>${r[2]}</b><p>${r[3]}</p></div>`).join('')}
              </div>
            </section>
            <section class="bcol wide" data-enter>
              <div class="bcol-head"><h2>Downloads rápidos</h2><a class="link-more">Ver todas ${svgIcon('arrowR','ic ic-sm')}</a></div>
              <div class="dl-grid">
                ${DOWN.map(d => `<div class="dl-card"><div class="dl-ic ${d[0]}">${svgIcon(d[0])}</div><b>${d[1]}</b><span>${d[2]}</span></div>`).join('')}
              </div>
            </section>
          </div>
        </div>`,
        init: () => { window.initBrandPortfolio && window.initBrandPortfolio(brand); },
      };
    },

    /* ---------- LOGOS DA MARCA (pasta · cards igual sistema real) ---------- */
    marcaLogos(brandArg) {
      const brand = brandArg || 'Contourline';
      const COR = { 'Contourline':'#2f7ff2','Daeju':'#0ea5e9','Body Health':'#0d9488','Lumenis':'#e11d48' }[brand] || '#2f7ff2';
      // miniaturas de amostra (o admin sobe os reais por cima) — wordmark estilizada em fundo quadriculado
      const wm = v => v === 'sym'
        ? `<div class="lm-wm sym" style="--lc:${COR}">${brand[0]}</div>`
        : `<div class="lm-wm ${v}" style="--lc:${COR}"><span class="lm-word">${brand.toLowerCase()}</span><span class="lm-by">by contourline</span></div>`;
      const SAMPLES = [
        { t:`Favicon ${brand}`,               size:'12.7 KB',  date:'01/06/2026', ext:'PNG', ar:1,   th: wm('sym')   },
        { t:`${brand} by Contourline`,        size:'776.1 KB', date:'01/06/2026', ext:'PNG', ar:2.7, th: wm('dark')  },
        { t:`${brand} by Contourline`,        size:'39.5 KB',  date:'01/06/2026', ext:'PNG', ar:2.7, th: wm('color') },
        { t:`${brand} by Contourline Branca`, size:'33.2 KB',  date:'01/06/2026', ext:'PNG', ar:2.4, th: wm('white') },
        { t:`${brand} by Contourline`,        size:'120 KB',   date:'01/06/2026', ext:'SVG', ar:2.7, th: wm('dark')  },
      ];
      return {
        title: 'Logos ' + brand,
        crumbs: `<i data-icon="building" data-cls="ic ic-sm"></i><a href="#/">PartnerZone</a><span>›</span><a href="#/marca/Contourline">Institucional</a><span>›</span><a href="#/marca/${encodeURIComponent(brand)}">${brand}</a><span>›</span><span class="here">Logos</span>`,
        html: `
        <div class="folder-page" data-enter>
          <div class="fp-top">
            <a class="fp-back" href="#/marca/${encodeURIComponent(brand)}"><svg class="ic ic-sm" viewBox="0 0 24 24"><path d="M19 12H5M11 6l-6 6 6 6"/></svg> Voltar para ${brand}</a>
          </div>
          <h1 class="fp-title">Logos</h1>
          <div class="fp-rule"></div>
          <div class="fp-search">
            <div class="search-field"><i data-icon="search"></i><input id="blogos-search" placeholder="Buscar em Logos..."></div>
            <button class="btn fp-add" id="blogos-add"><i data-icon="upload" data-cls="ic ic-sm"></i> Adicionar logo</button>
          </div>
          <div class="lib-toolbar">
            <span class="lib-rc"><b id="blogos-count">${SAMPLES.length}</b> logos</span>
            <div class="spacer"></div>
            <div class="lib-density">
              <div class="seg vseg" id="blogos-view">
                <button class="on" data-view="masonry" title="Masonry"><i data-icon="grid" data-cls="ic ic-sm"></i></button>
                <button data-view="list" title="Lista"><i data-icon="list" data-cls="ic ic-sm"></i></button>
              </div>
              <div class="seg qseg" id="blogos-quality" title="Qualidade dos thumbs conforme a conexão — Rápido = leve, HD = cheio">
                <button class="on" data-q="200"><i data-icon="zap" data-cls="ic ic-sm"></i>Rápido</button>
                <button data-q="270">Normal</button>
                <button data-q="360">HD</button>
              </div>
              <input type="range" class="dslider" id="blogos-size" min="170" max="420" step="2" value="240" title="Tamanho dos cards">
            </div>
          </div>
          <div class="masonry lg-grid" id="brand-logos" data-brand="${brand}"><div class="pf-loading">Carregando logos…</div></div>
        </div>`,
        init: () => { window.initBrandLogos && window.initBrandLogos(brand, SAMPLES); },
      };
    },

    /* ---------- CADASTRO DE EQUIPAMENTOS (admin · grava no SQL) ---------- */
    cadastro() {
      return {
        title: 'Cadastro de Equipamentos',
        crumbs: `<i data-icon="package" data-cls="ic ic-sm"></i><a href="#/">PartnerZone</a><span>›</span><span class="here">Cadastro de equipamentos</span>`,
        html: `
        <div class="adm" data-enter>
          <div class="adm-head">
            <div><h1>Cadastro de Equipamentos</h1><div class="sub">Marca · Modelo · Linha — gravado direto no banco de dados (SQL).</div></div>
            <button class="btn" id="equip-new"><i data-icon="plus" data-cls="ic ic-sm"></i> Novo equipamento</button>
          </div>
          <div class="adm-card" id="adm-list"><div class="sql-msg">Carregando banco…</div></div>
        </div>`,
        init: () => window.initCadastro && window.initCadastro(),
      };
    },

    /* ---------- BANCO DE DADOS / EDITOR SQL (admin) ---------- */
    sql() {
      return {
        title: 'Banco de dados (SQL)',
        crumbs: `<i data-icon="cpu" data-cls="ic ic-sm"></i><a href="#/">PartnerZone</a><span>›</span><span class="here">Banco de dados (SQL)</span>`,
        html: `
        <div class="sql" data-enter>
          <div class="sql-head">
            <div><h1>Banco de dados <span class="sql-badge">SQLite</span></h1>
              <div class="sub">SQL de verdade rodando no navegador — schema espelhando o sistema original (Supabase / PostgreSQL). Edite e execute.</div></div>
            <span class="up-admin"><i data-icon="shield" data-cls="ic ic-sm"></i> Admin</span>
          </div>
          <div class="sql-body">
            <aside class="sql-tables">
              <div class="st-head">Tabelas</div>
              <div id="sql-tables" class="st-list"></div>
              <button class="btn ghost btn-sm" id="sql-reset"><i data-icon="trash" data-cls="ic ic-sm"></i> Resetar banco</button>
            </aside>
            <div class="sql-main">
              <div class="sql-editor">
                <textarea id="sql-q" spellcheck="false">SELECT * FROM materiais LIMIT 20;</textarea>
                <div class="sql-bar"><span class="sql-hint">Ctrl/⌘ + Enter para executar</span><div class="spacer"></div>
                  <button class="btn" id="sql-run"><i data-icon="play" data-cls="ic ic-sm"></i> Executar</button></div>
              </div>
              <div class="sql-quick" id="sql-quick"></div>
              <div class="sql-result" id="sql-result"><div class="sql-msg">Carregando banco de dados…</div></div>
            </div>
          </div>
        </div>`,
        init: () => window.initSql && window.initSql(),
      };
    },

    /* ---------- TODOS OS EQUIPAMENTOS ---------- */
    equipamentos() {
      return {
        title: 'Equipamentos',
        crumbs: `<i data-icon="package" data-cls="ic ic-sm"></i><a href="#/">PartnerZone</a><span>›</span><span class="here">Equipamentos</span>`,
        html: `
        <div class="page-head" data-enter>
          <a class="iconbtn" href="#/" title="Voltar"><svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M11 6l-6 6 6 6"/></svg></a>
          <div><h1>Todos os equipamentos</h1><div class="sub">Explore toda a linha Contourline e acesse os materiais de cada equipamento.</div></div>
          <div class="spacer"></div>
          <button class="select">Todas as marcas <i data-icon="chevD" data-cls="ic ic-sm"></i></button>
        </div>
        <div class="eq-grid" id="eq-grid" data-enter></div>`,
        init: () => { window.renderEquipmentGrid && window.renderEquipmentGrid(); },
      };
    },

    /* ---------- CATEGORIA (equipamento) ---------- */
    categoria(slug) {
      const e = eqOf(slug) || { name: slug || 'HIPRO', tag: '', img: 'assets/equipamentos/Hipro.png' };
      const name = e.name;
      const heroImg = encodeURI(e.img || '');   // hero usa SEMPRE a foto limpa do produto (não a capa recortada do card)
      const heroBg = localStorage.getItem('cl-eq-hero:' + name) || '';   // banner próprio do topo (opcional, admin)
      const heroStyle = xfStyle(name, 3, localStorage.getItem('cl-eq-heropos:' + name) || '50% 50%');
      return {
        title: name,
        crumbs: `<i data-icon="folder" data-cls="ic ic-sm"></i><a href="#/">PartnerZone</a><span>›</span><span class="here">${name}</span>`,
        html: `
        <div class="cat-hero${heroBg ? ' has-bg' : ''}" data-enter>
          ${heroBg ? `<img class="cat-hero-bg" src="${heroBg}" alt="" style="${heroStyle}">` : ''}
          <div class="cat-hero-actions">
            <a class="cat-back" href="#/equipamentos"><svg class="ic ic-sm" viewBox="0 0 24 24"><path d="M19 12H5M11 6l-6 6 6 6"/></svg> Voltar para categorias</a>
            <button class="cat-bookmark" title="Favoritar"><i data-icon="bookmark" data-cls="ic"></i></button>
          </div>
          <div class="cat-hero-main">
            <div class="cat-badges">
              <span class="cat-badge">EQUIPAMENTO</span>
              ${e.marca ? `<span class="cat-badge alt">${e.marca}</span>` : ''}
              ${e.linha ? `<span class="cat-badge alt">${e.linha}</span>` : ''}
            </div>
            <h1>${name}</h1>
            <div class="lead">${e.tag || 'Equipamento Contourline'}</div>
            <div class="desc">${e.desc || 'Tecnologia avançada que entrega resultados visíveis desde a primeira sessão, com segurança e conforto.'}</div>
            <div class="cat-stats">
              <div class="cat-stat"><div class="si"><i data-icon="folder" data-cls="ic ic-sm"></i></div><div style="display:flex;flex-direction:column;gap:1px"><b>${e.pastas||6}</b><span>Pastas</span></div></div>
              <div class="cat-stat"><div class="si"><i data-icon="file" data-cls="ic ic-sm"></i></div><div style="display:flex;flex-direction:column;gap:1px"><b>${e.count||163}</b><span>Materiais</span></div></div>
              <div class="cat-stat"><div class="si"><i data-icon="download" data-cls="ic ic-sm"></i></div><div style="display:flex;flex-direction:column;gap:1px"><b>${e.downloads||'12.4K'}</b><span>Downloads</span></div></div>
            </div>
          </div>
          <div class="cat-hero-img"><img src="${heroImg}" alt="${name}"></div>
        </div>
        <div class="cat-searchbar" data-enter>
          <div class="search-field"><i data-icon="search"></i><input placeholder="Buscar em ${name}..."></div>
          <button class="btn ghost" style="height:54px"><i data-icon="sliders" data-cls="ic ic-sm"></i> Filtros</button>
        </div>
        <section class="cat-section" data-enter>
          <h2>Central de apoio</h2>
          <div class="sub">Escolha o que você precisa fazer e encontre os materiais certos.</div>
          <div class="support-grid" id="central"></div>
        </section>
        <section class="cat-section" data-enter>
          <h2>Biblioteca do ${name}</h2>
          <div class="sub">Navegue pelas pastas e encontre o que precisa.</div>
          <div class="lib-grid" id="biblioteca"></div>
        </section>
        <div class="cat-cta" data-enter>
          <svg class="ic" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M12 16v-4M12 8h.01"/></svg>
          <p>Não encontrou o que precisa? Solicite um material personalizado para o <a class="link" href="#">time Contourline</a>.</p>
          <button class="btn btn-sm" data-open-modal="modal-solicitar"><i data-icon="send" data-cls="ic ic-sm"></i> Solicitar material</button>
        </div>`,
        init: () => {
          const central = document.getElementById('central');
          if (central) central.innerHTML = SUPPORT.map(c => `
            <div class="support-card" style="--sc:${c.color}" ${c.modal ? 'data-open-modal="modal-solicitar"' : ''}>
              <div class="support-ic">${ic(c.icon)}</div><h3>${c.title}</h3><p>${c.desc}</p>
              <div class="go">${ic('arrowR','ic ic-sm')}</div>
            </div>`).join('');
          const lib = document.getElementById('biblioteca');
          if (lib) lib.innerHTML = LIBRARY.map(f => `
            <a class="lib-card" href="#/pasta/${encodeURIComponent(name)}/${encodeURIComponent(f.name)}">
              <div class="lib-top"><div class="lib-folder">${ic('folder')}</div><span class="chev">${ic('chevR','ic ic-sm')}</span></div>
              <div><h3>${f.name}</h3><span>${f.count} materiais</span></div>
            </a>`).join('');
        },
      };
    },

    /* ---------- PASTA (galeria masonry) ---------- */
    pasta(cat, folder) {
      cat = cat || 'HIPRO'; folder = folder || 'Imagens';
      return {
        title: folder + ' — ' + cat,
        crumbs: `<i data-icon="folder" data-cls="ic ic-sm"></i><a href="#/">PartnerZone</a><span>›</span><a href="#/categoria/${encodeURIComponent(cat)}">${cat}</a><span>›</span><span class="here">${folder}</span>`,
        html: `
        <div class="folder-head" data-enter>
          <div class="folder-ic"><i data-icon="image"></i></div>
          <div class="meta"><h1>${folder}</h1><div class="chips"><span class="fchip">136 materiais</span><span class="fchip muted">${cat}</span></div></div>
          <a class="back" href="#/categoria/${encodeURIComponent(cat)}"><svg class="ic ic-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5M11 6l-6 6 6 6"/></svg> Voltar para ${cat}</a>
        </div>
        <div class="folder-toolbar" data-enter>
          <div class="search-field"><i data-icon="search"></i><input placeholder="Buscar em ${folder}..."></div>
          <div class="seg"><button class="on"><i data-icon="grid" data-cls="ic ic-sm"></i></button><button><i data-icon="list" data-cls="ic ic-sm"></i></button></div>
          <button class="btn ghost" style="height:48px"><i data-icon="sliders" data-cls="ic ic-sm"></i> Filtros</button>
        </div>
        <div class="masonry" id="gallery" data-enter></div>`,
        init: () => {
          const EYE = '<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7-10-7-10-7z"/><circle cx="12" cy="12" r="3"/></svg>';
          const gal = document.getElementById('gallery'); if (!gal) return;
          gal.innerHTML = GAL_NAMES.map((nm, i) => {
            const t = GAL_TYPE[GAL_T[i % GAL_T.length]] || GAL_TYPE.img;
            const h = GAL_H[i % GAL_H.length];
            const size = ['1.2 MB','3.4 MB','820 KB','12 MB','2.1 MB','45 MB'][i % 6];
            return `<div class="mat-card" data-masonry-item style="--mc:${t.color}">
              <div class="mat-thumb" style="height:${h}px">${ic(t.icon, 'ic ph')}</div>
              <span class="mat-type">${ic(t.icon, 'ic')} ${t.label}</span>
              <div class="mat-actions"><button title="Preview">${EYE}</button><button title="Baixar">${ic('download')}</button></div>
              <a class="mat-grad" href="#/material/${encodeURIComponent(nm)}"><h3>${nm}</h3><span>${size}</span></a>
            </div>`;
          }).join('');
          if (window.UI && UI.masonry) UI.masonry(gal, { min: 240, gap: 16 });
        },
      };
    },

    /* ---------- MATERIAL (detalhe) ---------- */
    material(nm) {
      nm = nm || 'Aplicação HIPRO 01';
      return {
        title: nm,
        crumbs: `<i data-icon="folder" data-cls="ic ic-sm"></i><a href="#/categoria/HIPRO">HIPRO</a><span>›</span><a href="#/pasta/HIPRO/Imagens">Imagens</a><span>›</span><span class="here">${nm}</span>`,
        html: `
        <a class="mat-back" href="#/pasta/HIPRO/Imagens" data-enter><svg class="ic ic-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5M11 6l-6 6 6 6"/></svg> Voltar para Imagens</a>
        <div class="material-layout">
          <div class="preview" data-enter><i data-icon="image" data-cls="ic ph"></i><div class="zoom"><i data-icon="search" data-cls="ic ic-sm"></i> Ampliar</div></div>
          <div class="info-card" data-enter>
            <span class="info-type"><i data-icon="image" data-cls="ic ic-sm"></i> IMAGEM · JPG</span>
            <h1>${nm}</h1>
            <p class="desc">Imagem em alta resolução demonstrando a aplicação do HIPRO em protocolo facial. Ideal para apresentações e redes sociais.</p>
            <div class="meta-list">
              <div class="meta-row"><i data-icon="file" data-cls="ic ic-sm"></i><span class="k">Tipo</span><span class="v">Imagem (JPG)</span></div>
              <div class="meta-row"><i data-icon="package" data-cls="ic ic-sm"></i><span class="k">Tamanho</span><span class="v">3.4 MB</span></div>
              <div class="meta-row"><i data-icon="download" data-cls="ic ic-sm"></i><span class="k">Downloads</span><span class="v">1.243</span></div>
              <div class="meta-row"><i data-icon="trending" data-cls="ic ic-sm"></i><span class="k">Versão</span><span class="v">v2</span></div>
              <div class="meta-row"><i data-icon="folder" data-cls="ic ic-sm"></i><span class="k">Pasta</span><span class="v">HIPRO › Imagens</span></div>
            </div>
            <div class="tags"><span class="tag">HIPRO</span><span class="tag">Aplicação</span><span class="tag">Facial</span><span class="tag">Clínica</span></div>
            <div class="info-actions">
              <button class="btn"><i data-icon="download" data-cls="ic ic-sm"></i> Baixar material</button>
              <div class="row">
                <button class="icon-btn-lg fav" id="fav"><i data-icon="heart"></i></button>
                <button class="icon-btn-lg" style="flex:1;width:auto"><svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="m8.6 13.5 6.8 4M15.4 6.5l-6.8 4"/></svg></button>
              </div>
            </div>
          </div>
        </div>
        <div class="related" data-enter><h2>Materiais relacionados</h2><div class="related-row" id="related"></div></div>`,
        init: () => {
          const el = document.getElementById('related');
          if (el) el.innerHTML = RELATED.map(r => `
            <a class="rel-card" href="#/material/${encodeURIComponent(r.name)}">
              <div class="rel-thumb">${ic('image', 'ic ph')}</div>
              <div class="cap"><h3>${r.name}</h3><span>Imagem · ${r.size}</span></div>
            </a>`).join('');
          const fav = document.getElementById('fav');
          fav?.addEventListener('click', () => { fav.classList.toggle('on'); window.Sound && (Sound.favorite ? Sound.favorite(fav.classList.contains('on')) : Sound.click()); });
        },
      };
    },
  };

  /* ============================ ROUTER ============================ */
  function parseHash() {
    const h = location.hash.replace(/^#\/?/, '');
    return h.split('/').filter(Boolean).map(decodeURIComponent);
  }
  function resolve(p) {
    if (!p.length || p[0] === 'home')   return Views.home();
    if (p[0] === 'buscar')              return Views.buscar();
    if (p[0] === 'sql')                 return Views.sql();
    if (p[0] === 'marca')               return p[2] === 'logos' ? Views.marcaLogos(p[1]) : Views.marca(p[1]);
    if (p[0] === 'cadastro')            return Views.cadastro();
    if (p[0] === 'equipamentos')        return Views.equipamentos();
    if (p[0] === 'categoria')           return Views.categoria(p[1]);
    if (p[0] === 'pasta')               return Views.pasta(p[1], p[2]);
    if (p[0] === 'material')            return Views.material(p[1]);
    return Views.home();
  }
  function route() {
    const parts = parseHash();
    recordRecent(parts);
    const view = resolve(parts);
    const main = document.getElementById('view');
    const crumbs = document.getElementById('crumbs');
    if (!main) return;
    main.innerHTML = view.html;
    if (crumbs) { crumbs.innerHTML = view.crumbs; window.renderIcons && renderIcons(crumbs); }
    document.title = view.title + ' — PartnerZone';
    window.renderIcons && renderIcons(main);     // ícones [data-icon] do conteúdo estático
    view.init && view.init();                    // preenche listas dinâmicas + listeners da view
    // re-dispara as animações de entrada
    document.body.classList.remove('entered'); void main.offsetWidth; document.body.classList.add('entered');
    // sobe ao topo + fecha sidebar mobile
    document.querySelector('.main')?.scrollTo?.({ top: 0 }); window.scrollTo && window.scrollTo(0, 0);
    document.getElementById('sidebar')?.classList.remove('open');
    document.getElementById('scrim')?.classList.remove('show');
    Sound && Sound.click && Sound.click();
  }

  window.__route = route;   // exposto p/ re-render externo (ex: após salvar banner do topo)
  window.addEventListener('hashchange', route);
  document.addEventListener('DOMContentLoaded', () => {
    window.initShell && window.initShell();   // shell uma vez
    route();                                   // primeira rota
  });
})();
