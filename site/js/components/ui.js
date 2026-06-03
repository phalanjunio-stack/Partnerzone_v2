/* ============================================================
   UI — splash, ripple, drag-to-scroll, modal, masonry
   ============================================================ */
window.UI = (() => {

  /* ---------- SPLASH: some quando a página está pronta ---------- */
  function hideSplash() {
    const sp = document.getElementById('splash');
    document.body.classList.add('entered');           // dispara animações de entrada
    if (!sp) return;
    sp.classList.add('hide');
    setTimeout(() => sp.remove(), 650);
  }
  function initSplash() {
    const start = performance.now();
    const go = () => {
      const wait = Math.max(0, 1100 - (performance.now() - start));  // tempo mínimo agradável
      setTimeout(hideSplash, wait);
    };
    if (document.readyState === 'complete') go();
    else window.addEventListener('load', go);
  }

  /* ---------- RIPPLE ---------- */
  function initRipple() {
    document.addEventListener('pointerdown', e => {
      const el = e.target.closest('.btn, .tab, .iconbtn, .qa, .rail-nav');
      if (!el) return;
      const r = el.getBoundingClientRect();
      const size = Math.max(r.width, r.height);
      const s = document.createElement('span');
      s.className = 'ripple';
      s.style.width = s.style.height = size + 'px';
      s.style.left = (e.clientX - r.left - size/2) + 'px';
      s.style.top = (e.clientY - r.top - size/2) + 'px';
      if (getComputedStyle(el).position === 'static') el.style.position = 'relative';
      el.appendChild(s);
      s.addEventListener('animationend', () => s.remove());
    });
  }

  /* ---------- DRAG-TO-SCROLL (horizontal, com inércia) ---------- */
  function dragScroll(el) {
    if (!el) return;
    let down = false, startX = 0, startLeft = 0, lastX = 0, vx = 0, lastT = 0, raf = 0, moved = false;
    const onDown = e => {
      moved = false;   // reseta sempre (inclusive em botões), pra não bloquear o clique seguinte
      if (e.target.closest('button, input, textarea, select, [data-add-equip]')) return;   // não atrapalha cliques nos botões dos cards
      down = true; el.classList.add('dragging');
      startX = e.clientX; startLeft = el.scrollLeft; lastX = e.clientX; lastT = performance.now(); vx = 0;
      cancelAnimationFrame(raf);
    };
    const onMove = e => {
      if (!down) return;
      const dx = e.clientX - startX;
      if (Math.abs(dx) > 4) moved = true;
      el.scrollLeft = startLeft - dx;
      const now = performance.now(), dt = now - lastT || 16;
      vx = (e.clientX - lastX) / dt; lastX = e.clientX; lastT = now;
    };
    const onUp = () => {
      if (!down) return; down = false; el.classList.remove('dragging');
      let v = vx * 16;
      const momentum = () => {
        if (Math.abs(v) < 0.4) return;
        el.scrollLeft -= v; v *= 0.93; raf = requestAnimationFrame(momentum);
      };
      momentum();
    };
    el.addEventListener('pointerdown', onDown);
    window.addEventListener('pointermove', onMove);
    window.addEventListener('pointerup', onUp);
    // evita clique acidental após arrastar
    el.addEventListener('click', e => { if (moved) { e.preventDefault(); e.stopPropagation(); } }, true);
  }

  /* ---------- DRAG-TO-SCROLL VERTICAL (segura e joga pra cima, com inércia) ---------- */
  function dragScrollY(el) {
    if (!el) return;
    let down = false, startY = 0, startTop = 0, lastY = 0, vy = 0, lastT = 0, raf = 0, moved = false;
    const onDown = e => {
      if (e.target.closest('input, textarea, button, .qm-chip')) return;   // não atrapalha chips/campos
      down = true; moved = false; el.classList.add('dragging');
      startY = e.clientY; startTop = el.scrollTop; lastY = e.clientY; lastT = performance.now(); vy = 0;
      cancelAnimationFrame(raf);
    };
    const onMove = e => {
      if (!down) return;
      const dy = e.clientY - startY;
      if (Math.abs(dy) > 4) moved = true;
      el.scrollTop = startTop - dy;
      const now = performance.now(), dt = now - lastT || 16;
      vy = (e.clientY - lastY) / dt; lastY = e.clientY; lastT = now;
    };
    const onUp = () => {
      if (!down) return; down = false; el.classList.remove('dragging');
      let v = vy * 16;
      const momentum = () => {
        if (Math.abs(v) < 0.4) return;
        el.scrollTop -= v; v *= 0.93; raf = requestAnimationFrame(momentum);
      };
      momentum();
    };
    el.addEventListener('pointerdown', onDown);
    window.addEventListener('pointermove', onMove);
    window.addEventListener('pointerup', onUp);
  }

  /* ---------- MODAL ---------- */
  function openModal(id) {
    const m = document.getElementById(id); if (!m) return;
    m.classList.add('open'); document.body.style.overflow = 'hidden';
    const inner = m.querySelector('.modal-inner');           // rolar arrastando com o mouse (1x)
    if (inner && inner.dataset.dsy !== '1') { inner.dataset.dsy = '1'; dragScrollY(inner); }
  }
  function closeModal(m) {
    m.classList.remove('open'); document.body.style.overflow = '';
  }
  function initModals() {
    document.addEventListener('click', e => {
      const opener = e.target.closest('[data-open-modal]');
      if (opener) { openModal(opener.dataset.openModal); return; }
      const closer = e.target.closest('[data-close-modal]');
      if (closer) { closeModal(closer.closest('.modal-bd')); return; }
      const bd = e.target.classList?.contains('modal-bd') ? e.target : null;
      if (bd) closeModal(bd);
    });
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') document.querySelectorAll('.modal-bd.open').forEach(closeModal);
    });
    // tabs dentro de modal
    document.addEventListener('click', e => {
      const tab = e.target.closest('.tab'); if (!tab) return;
      tab.parentElement.querySelectorAll('.tab').forEach(t => t.classList.remove('on'));
      tab.classList.add('on');
    });
  }

  /* ---------- MASONRY (esquerda → direita) ----------
     Coloca cada item, NA ORDEM, na coluna mais curta no momento.
     => 1ª linha enche da esquerda pra direita, depois equilibra. */
  function masonry(container, { min = 230, gap = 16 } = {}) {
    if (!container) return;
    const items = Array.from(container.querySelectorAll('[data-masonry-item]'));
    if (!items.length) return;
    const layout = () => {
      const cols = Math.max(1, Math.floor((container.clientWidth + gap) / (min + gap)));
      container.innerHTML = '';
      const colEls = [], heights = [];
      for (let i = 0; i < cols; i++) {
        const c = document.createElement('div'); c.className = 'masonry-col';
        container.appendChild(c); colEls.push(c); heights.push(0);
      }
      items.forEach(it => {
        let target = 0;
        for (let i = 1; i < cols; i++) if (heights[i] < heights[target] - 0.5) target = i; // mais curta; empate => mais à esquerda
        colEls[target].appendChild(it);
        heights[target] += (it.dataset.h ? +it.dataset.h : it.offsetHeight) + gap;
      });
    };
    layout();
    let t; window.addEventListener('resize', () => { clearTimeout(t); t = setTimeout(layout, 120); });
    return layout;
  }

  /* ---------- SMOKE-GLOW: aura + halo + 4 faíscas orbitando ---------- */
  function smokeGlow(btn) {
    if (!btn || btn.dataset.sg === '1') return;
    btn.dataset.sg = '1'; btn.classList.add('smoke-glow');
    const frag = document.createDocumentFragment();
    const aura = document.createElement('span'); aura.className = 'sg-aura'; frag.appendChild(aura);
    const halo = document.createElement('span'); halo.className = 'sg-halo'; frag.appendChild(halo);
    [{ang:35,d:1.8,del:0},{ang:125,d:2.1,del:.4},{ang:215,d:1.7,del:.7},{ang:305,d:2,del:.2}].forEach(s => {
      const sp = document.createElement('span'); sp.className = 'sg-spark';
      sp.style.cssText = `--ang:${s.ang}deg;--d:${s.d}s;--del:${s.del}s`; frag.appendChild(sp);
    });
    btn.insertBefore(frag, btn.firstChild);
  }

  /* ---------- FAB "voltar ao topo" (com o glow azul/roxo) ---------- */
  function scrollTop() {
    if (document.getElementById('fab-top')) return;
    const b = document.createElement('button');
    b.id = 'fab-top'; b.className = 'fab-top'; b.title = 'Voltar ao topo';
    b.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><polyline points="18 15 12 9 6 15"/></svg>';
    document.body.appendChild(b);
    const pos = () => Math.max(window.scrollY || 0, document.documentElement.scrollTop || 0, document.querySelector('.main')?.scrollTop || 0);
    const onScroll = () => b.classList.toggle('show', pos() > 300);
    window.addEventListener('scroll', onScroll, { passive: true });
    document.addEventListener('scroll', onScroll, { passive: true, capture: true });
    b.addEventListener('click', () => {
      try { window.scrollTo({ top: 0, behavior: 'smooth' }); } catch {}
      document.querySelector('.main')?.scrollTo?.({ top: 0, behavior: 'smooth' });
      document.scrollingElement?.scrollTo?.({ top: 0, behavior: 'smooth' });
    });
    onScroll();
  }

  /* ---------- TOASTS / AVISOS (pílula flutuante) ----------
     Toast.show(msg, {type, duration, closable})  → handle
     handle.update({type, msg, duration})         → muda em tempo real
     handle.success(msg) / .error(msg) / .close()
     Atalhos: Toast.loading(msg), Toast.success(msg), Toast.error(msg), Toast.info(msg) */
  const ICONS_T = {
    success: '<svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>',
    error:   '<svg viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>',
    warn:    '<svg viewBox="0 0 24 24"><path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>',
    info:    '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><line x1="12" y1="11" x2="12" y2="16"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>',
  };
  const X_SVG = '<svg viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>';

  function toastWrap() {
    let w = document.getElementById('toast-wrap');
    if (!w) { w = document.createElement('div'); w.id = 'toast-wrap'; w.className = 'toast-wrap'; document.body.appendChild(w); }
    return w;
  }
  function iconFor(type) {
    if (type === 'loading') return '<span class="t-spin"></span>';
    return ICONS_T[type] || ICONS_T.info;
  }
  function showToast(msg, opts = {}) {
    let { type = 'info', duration, closable = true } = opts;
    if (duration === undefined) duration = (type === 'loading') ? 0 : 4000;
    const wrap = toastWrap();
    const el = document.createElement('div');
    el.className = `toast t-${type}`; el.style.position = 'relative';
    const render = () => {
      el.innerHTML =
        `<span class="t-ic">${iconFor(type)}</span>` +
        `<span class="t-msg">${msg}</span>` +
        (closable ? `<span class="t-x" role="button" aria-label="Fechar">${X_SVG}</span>` : '');
      el.querySelector('.t-x')?.addEventListener('click', () => close());
    };
    render();
    wrap.appendChild(el);
    requestAnimationFrame(() => el.classList.add('in'));

    let timer = 0;
    const arm = () => { if (timer) clearTimeout(timer); if (duration > 0) timer = setTimeout(close, duration); };
    arm();

    let closed = false;
    function close() {
      if (closed) return; closed = true; if (timer) clearTimeout(timer);
      el.classList.remove('in'); el.classList.add('out');
      setTimeout(() => el.remove(), 420);
    }
    function update(o = {}) {
      if (closed) return handle;
      if (o.type) { el.className = `toast t-${o.type} in`; type = o.type; }
      if (o.msg !== undefined) msg = o.msg;
      render();
      if (o.duration !== undefined) { duration = o.duration; arm(); }
      else if (type !== 'loading' && duration === 0) { duration = 4000; arm(); }
      return handle;
    }
    const handle = {
      update, close,
      success: m => update({ type: 'success', msg: m ?? msg, duration: 3500 }),
      error:   m => update({ type: 'error',   msg: m ?? msg, duration: 5000 }),
      info:    m => update({ type: 'info',    msg: m ?? msg, duration: 4000 }),
    };
    return handle;
  }
  const Toast = {
    show: showToast,
    loading: (m, o) => showToast(m, { ...o, type: 'loading' }),
    success: (m, o) => showToast(m, { ...o, type: 'success' }),
    error:   (m, o) => showToast(m, { ...o, type: 'error' }),
    warn:    (m, o) => showToast(m, { ...o, type: 'warn' }),
    info:    (m, o) => showToast(m, { ...o, type: 'info' }),
  };

  function init() { initRipple(); initModals(); scrollTop(); }   /* splash agora é o módulo Splash */
  return { init, dragScroll, dragScrollY, openModal, closeModal, masonry, hideSplash, smokeGlow, scrollTop, Toast };
})();
window.Toast = window.UI.Toast;
