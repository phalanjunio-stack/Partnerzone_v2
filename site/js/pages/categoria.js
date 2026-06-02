/* ============================================================
   CATEGORIA — Central de apoio + Biblioteca (dados de exemplo)
   ============================================================ */
(() => {
  const ic = (n, c) => (window.svgIcon ? window.svgIcon(n, c) : '');

  const SUPPORT = [
    { icon:'megaphone',    color:'#ef4444', title:'Divulgar nas redes sociais', desc:'Posts, stories, legendas e criativos prontos.' },
    { icon:'presentation', color:'#3b82f6', title:'Apresentar para minha equipe', desc:'Apresentações e materiais para treinamento interno.' },
    { icon:'trending',     color:'#10b981', title:'Vender melhor o tratamento', desc:'Argumentos comerciais, diferenciais e estudos.' },
    { icon:'printer',      color:'#f59e0b', title:'Materiais para imprimir', desc:'Folders, lâminas, banners e peças gráficas.' },
    { icon:'image',        color:'#7a57ff', title:'Imagens e vídeos do equipamento', desc:'Fotos, vídeos e arquivos visuais em alta.' },
    { icon:'pencil',       color:'#2f7ff2', title:'Solicitar material personalizado', desc:'Peça ao nosso time a criação de um material.', modal:true },
  ];

  const LIBRARY = [
    { name:'Documentos', count:43 },
    { name:'Imagens', count:136 },
    { name:'Materiais Gráficos', count:28 },
    { name:'Material Institucional', count:10 },
    { name:'Redes Sociais', count:32 },
    { name:'Vídeos', count:14 },
  ];

  function render() {
    const central = document.getElementById('central');
    if (central) central.innerHTML = SUPPORT.map(c => `
      <div class="support-card" style="--sc:${c.color}" ${c.modal ? 'data-open-modal="modal-solicitar"' : ''}>
        <div class="support-ic">${ic(c.icon)}</div>
        <h3>${c.title}</h3>
        <p>${c.desc}</p>
        <div class="go">${ic('arrowR','ic ic-sm')}</div>
      </div>`).join('');

    const lib = document.getElementById('biblioteca');
    if (lib) lib.innerHTML = LIBRARY.map(f => `
      <a class="lib-card" href="pasta.html">
        <div class="lib-top">
          <div class="lib-folder">${ic('folder')}</div>
          <span class="chev">${ic('chevR','ic ic-sm')}</span>
        </div>
        <div><h3>${f.name}</h3><span>${f.count} materiais</span></div>
      </a>`).join('');
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', render);
  else render();
})();
