/* ============================================================
   SPLASH — PartnerZone (logo REAL + bolinhas pulando)
   ============================================================ */
window.Splash = (() => {
  let el = null;

  /* remove o fundo branco do PNG da logo + recorta (mostra a logo real sobre o navy) */
  function processLogo(cb) {
    try { const c = localStorage.getItem("cl-pz-splash3"); if (c) { cb(c); return; } } catch (_) {}
    try { localStorage.removeItem("cl-pz-splash"); localStorage.removeItem("cl-pz-splash2"); } catch (_) {}
    const im = new Image();
    im.onload = () => {
      try {
        const W = im.naturalWidth, H = im.naturalHeight;
        const cv = document.createElement("canvas"); cv.width = W; cv.height = H;
        const x = cv.getContext("2d"); x.drawImage(im, 0, 0);
        const d = x.getImageData(0, 0, W, H), p = d.data;
        // tira só o fundo branco/franja NEUTRA com rampa larga e suave (anti-serrilhado limpo).
        // pixels coloridos (texto azul + anel) NÃO são tocados => ficam 100% nítidos.
        for (let i = 0; i < p.length; i += 4) {
          const r = p[i], g = p[i + 1], b = p[i + 2], mn = Math.min(r, g, b), sat = Math.max(r, g, b) - mn;
          if (sat < 34) {
            let a = 255;
            if (mn >= 247) a = 0;                                            // branco puro => some
            else if (mn > 210) a = Math.round(255 * (247 - mn) / (247 - 210)); // rampa suave 210..247
            if (a < p[i + 3]) p[i + 3] = a;
          }
        }
        x.putImageData(d, 0, 0);
        let x0 = W, y0 = H, x1 = 0, y1 = 0, f = false;
        for (let yy = 0; yy < H; yy++) for (let xx = 0; xx < W; xx++) if (p[(yy * W + xx) * 4 + 3] > 30) { f = true; if (xx < x0) x0 = xx; if (xx > x1) x1 = xx; if (yy < y0) y0 = yy; if (yy > y1) y1 = yy; }
        if (!f) { cb(im.src); return; }
        const pad = Math.round(Math.min(W, H) * 0.03);
        x0 = Math.max(0, x0 - pad); y0 = Math.max(0, y0 - pad); x1 = Math.min(W - 1, x1 + pad); y1 = Math.min(H - 1, y1 + pad);
        const cw = x1 - x0 + 1, ch = y1 - y0 + 1;
        const cc = document.createElement("canvas"); cc.width = cw; cc.height = ch;
        cc.getContext("2d").putImageData(x.getImageData(x0, y0, cw, ch), 0, 0);
        const out = cc.toDataURL("image/png");
        try { localStorage.setItem("cl-pz-splash3", out); } catch (_) {}
        cb(out);
      } catch (e) { cb(im.src); }
    };
    im.onerror = () => cb(null);
    im.src = "assets/partnerzone-logo.png";
  }

  function mount() {
    if (el || document.getElementById("splash-overlay")) return;
    el = document.createElement("div");
    el.id = "splash-overlay";
    el.className = "splash-overlay";
    el.innerHTML = `
      <div class="sp-aura"></div>
      <div class="sp-particles"></div>
      <div class="sp-logobox">
        <img class="sp-logoimg" alt="PartnerZone">
        <div class="sp-fallback">PartnerZone</div>
      </div>
      <div class="sp-dots"><span></span><span></span><span></span><span></span><span></span></div>
      <div class="sp-sub">Portal de Parceiros · Contourline</div>
      <div class="sp-foot">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
        Seus dados estão protegidos
      </div>
    `;
    (document.body || document.documentElement).appendChild(el);

    processLogo(src => {
      if (!el) return;
      const img = el.querySelector(".sp-logoimg");
      if (src && img) { img.src = src; el.classList.add("has-logo"); }
      // se falhar, o fallback "PartnerZone" continua visível
    });

    const start = performance.now();
    const go = () => setTimeout(hide, Math.max(0, 1700 - (performance.now() - start)));
    if (document.readyState === "complete") go();
    else window.addEventListener("load", go, { once: true });
  }

  function hide() {
    document.body.classList.add("entered");
    el = el || document.getElementById("splash-overlay");
    if (!el) return;
    el.classList.add("fading");
    setTimeout(() => { el && el.remove(); el = null; }, 650);
  }

  return { mount, hide };
})();
