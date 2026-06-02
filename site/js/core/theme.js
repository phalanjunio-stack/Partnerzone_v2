/* ============================================================
   THEME — Escuro / Claro / Automático ([data-theme] no <html>)
   ============================================================ */
window.Theme = (() => {
  const KEY = 'cl-theme';
  const ICONS = {
    dark: '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>',
    light: '<circle cx="12" cy="12" r="4.5"/><path d="M12 2v2M12 20v2M4.2 4.2l1.5 1.5M18.3 18.3l1.5 1.5M2 12h2M20 12h2M4.2 19.8l1.5-1.5M18.3 5.7l1.5-1.5"/>',
    auto: '<rect x="2.5" y="4" width="19" height="13" rx="2"/><path d="M8 21h8M12 17v4"/>',
  };
  const LABELS = { dark: 'Escuro', light: 'Claro', auto: 'Automático' };

  const get = () => localStorage.getItem(KEY) || 'dark';
  function set(t) {
    if (!ICONS[t]) t = 'dark';
    const prev = get();
    localStorage.setItem(KEY, t);
    document.documentElement.setAttribute('data-theme', t);
    if ((prev === 'light') !== (t === 'light')) window.Sound?.switch(t === 'light');
    render();
  }
  function svg(name) { return `<svg class="ic" viewBox="0 0 24 24">${ICONS[name]}</svg>`; }
  const check = '<svg class="ic ic-sm check" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>';

  function mount(container) {
    container.innerHTML = `
      <button class="iconbtn" id="theme-btn" title="Tema"><span class="ti">${svg(get() === 'light' ? 'light' : get() === 'auto' ? 'auto' : 'dark')}</span></button>
      <div class="theme-menu">
        ${['dark','light','auto'].map(t => `
          <button class="theme-opt" data-theme="${t}">${svg(t)}<span>${LABELS[t]}</span>${check}</button>`).join('')}
      </div>`;
    const btn = container.querySelector('#theme-btn');
    btn.addEventListener('click', e => { e.stopPropagation(); container.classList.toggle('open'); });
    container.querySelectorAll('.theme-opt').forEach(o =>
      o.addEventListener('click', () => { set(o.dataset.theme); container.classList.remove('open'); }));
    document.addEventListener('click', e => { if (!container.contains(e.target)) container.classList.remove('open'); });
    render();
  }

  function render() {
    const cur = get();
    document.querySelectorAll('.theme-opt').forEach(o => o.classList.toggle('active', o.dataset.theme === cur));
    const btn = document.getElementById('theme-btn');
    const ti = btn?.querySelector('.ti');
    if (ti) ti.innerHTML = svg(cur);
    else if (btn) btn.innerHTML = svg(cur);
  }

  document.documentElement.setAttribute('data-theme', get());
  return { get, set, mount };
})();
