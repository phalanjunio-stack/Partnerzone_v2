/* ============================================================
   MATERIAL — relacionados + favoritar
   ============================================================ */
(() => {
  const ic = (n, c) => (window.svgIcon ? window.svgIcon(n, c) : '');
  const RELATED = [
    { name: 'Aplicação HIPRO 02', size: '2.8 MB' },
    { name: 'Antes e Depois 04', size: '3.1 MB' },
    { name: 'Protocolo Facial', size: '1.9 MB' },
    { name: 'Resultado 30 dias', size: '4.2 MB' },
  ];

  function render() {
    const el = document.getElementById('related');
    if (el) el.innerHTML = RELATED.map(r => `
      <a class="rel-card" href="material.html">
        <div class="rel-thumb">${ic('image', 'ic ph')}</div>
        <div class="cap"><h3>${r.name}</h3><span>Imagem · ${r.size}</span></div>
      </a>`).join('');

    const fav = document.getElementById('fav');
    fav?.addEventListener('click', () => {
      fav.classList.toggle('on');
      if (window.Sound) Sound.favorite ? Sound.favorite(fav.classList.contains('on')) : Sound.click();
    });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', render);
  else render();
})();
