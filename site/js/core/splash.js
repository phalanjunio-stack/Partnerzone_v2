/* ============================================================
   SPLASH — ORBITAL, copiado IGUAL da GALERIA CONTOUR
   ============================================================ */
window.Splash = (() => {
  let el = null;

  function mount() {
    if (el || document.getElementById("splash-overlay")) return;
    el = document.createElement("div");
    el.id = "splash-overlay";
    el.className = "splash-overlay";
    el.innerHTML = `
      <div class="stage">
        <div class="ring-outermost"></div>
        <div class="ring-outer"></div>
        <div class="ring-inner"></div>
        <div class="arc"></div>
        <div class="orbit-fast"><div class="dot"></div></div>
        <div class="orbit-slow"><div class="dot"></div></div>
        <div class="orbit-slow"><div class="dot"></div></div>
        <div class="orbit-slow"><div class="dot"></div></div>
        <div class="orbit-slow"><div class="dot"></div></div>
        <div class="core">
          <img src="assets/splash-logo.png" alt="Contourline"
               onerror="this.outerHTML='<div class=&quot;fallback&quot;>C</div>'">
        </div>
      </div>
      <div class="splash-title">Iniciando <em>PartnerZone</em></div>
      <div class="splash-ver">Portal de Parceiros · Contourline</div>
      <div class="splash-dots"><span></span><span></span><span></span></div>
      <div class="splash-footer">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
        Seus dados estão protegidos
      </div>
    `;
    (document.body || document.documentElement).appendChild(el);

    // some quando a página estiver pronta (tempo mínimo agradável)
    const start = performance.now();
    const go = () => setTimeout(hide, Math.max(0, 1400 - (performance.now() - start)));
    if (document.readyState === "complete") go();
    else window.addEventListener("load", go, { once: true });
  }

  function hide() {
    document.body.classList.add("entered");
    el = el || document.getElementById("splash-overlay");
    if (!el) return;
    el.classList.add("fading");
    setTimeout(() => { el && el.remove(); el = null; }, 600);
  }

  return { mount, hide };
})();
