/* ============================================================
   PASTA — galeria MASONRY (esquerda → direita)
   ============================================================ */
(() => {
  const ic = (n, c) => (window.svgIcon ? window.svgIcon(n, c) : '');
  const EYE = '<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7-10-7-10-7z"/><circle cx="12" cy="12" r="3"/></svg>';

  const TYPE = {
    img: { color:'#10b981', icon:'image', label:'IMG' },
    pdf: { color:'#ef4444', icon:'file',  label:'PDF' },
    vid: { color:'#7a57ff', icon:'video', label:'VÍDEO' },
    ppt: { color:'#f59e0b', icon:'ppt',   label:'SLIDES' },
  };

  // dados de exemplo (depois vêm do Drive) — alturas variadas p/ o masonry
  const NAMES = ['Aplicação HIPRO 01','Antes e Depois 03','Protocolo Facial','Lifting Pescoço',
    'Sessão Clínica 12','Resultado 30 dias','Banner Campanha','Ficha Técnica','Story Instagram',
    'Aplicação Corporal','Comparativo','Tratamento Papada','Detalhe Ponteira','Pós-tratamento',
    'Folder A4','Reels Demonstração','Antes e Depois 07','Aplicação HIPRO 09'];
  const HEIGHTS = [220,300,180,260,200,330,190,240,280,210,310,200,250,230,290,180,260,210];
  const TYPES = ['img','img','pdf','img','img','img','ppt','pdf','img','img','img','vid','img','img','pdf','vid','img','img'];

  const ITEMS = NAMES.map((name, i) => ({
    name, h: HEIGHTS[i % HEIGHTS.length], type: TYPES[i % TYPES.length],
    size: ['1.2 MB','3.4 MB','820 KB','12 MB','2.1 MB','45 MB'][i % 6],
  }));

  function render() {
    const gal = document.getElementById('gallery');
    if (!gal) return;
    gal.innerHTML = ITEMS.map(it => {
      const t = TYPE[it.type] || TYPE.img;
      return `<div class="mat-card" data-masonry-item style="--mc:${t.color}">
        <div class="mat-thumb" style="height:${it.h}px">${ic(t.icon, 'ic ph')}</div>
        <span class="mat-type">${ic(t.icon, 'ic')} ${t.label}</span>
        <div class="mat-actions">
          <button title="Preview">${EYE}</button>
          <button title="Baixar">${ic('download')}</button>
        </div>
        <a class="mat-grad" href="material.html"><h3>${it.name}</h3><span>${it.size}</span></a>
      </div>`;
    }).join('');
    // distribui em colunas, da ESQUERDA p/ DIREITA (coluna mais curta na ordem do DOM)
    if (window.UI && UI.masonry) UI.masonry(gal, { min: 240, gap: 16 });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', render);
  else render();
})();
