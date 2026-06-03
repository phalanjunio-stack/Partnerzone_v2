/* ============================================================
   SPLASH — PartnerZone (navy premium · anel + wordmark + glow)
   ============================================================ */
window.Splash = (() => {
  let el = null;

  function mount() {
    if (el || document.getElementById("splash-overlay")) return;
    el = document.createElement("div");
    el.id = "splash-overlay";
    el.className = "splash-overlay";
    el.innerHTML = `
      <div class="sp-aura"></div>
      <div class="sp-particles"></div>
      <div class="sp-logo">
        <div class="sp-ring">
          <svg viewBox="0 0 120 120" aria-hidden="true">
            <defs>
              <linearGradient id="sp-grad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stop-color="#4cc4ff"/>
                <stop offset=".5" stop-color="#3b82f6"/>
                <stop offset="1" stop-color="#7c5cff"/>
              </linearGradient>
            </defs>
            <circle class="sp-ring-base" cx="60" cy="60" r="43" fill="none" stroke="url(#sp-grad)" stroke-width="13" stroke-linecap="round"/>
            <circle class="sp-ring-spin" cx="60" cy="60" r="43" fill="none" stroke="#d6ecff" stroke-width="4.5" stroke-linecap="round" stroke-dasharray="32 238"/>
          </svg>
          <span class="sp-ring-glow"></span>
        </div>
        <div class="sp-word">PartnerZone</div>
      </div>
      <div class="sp-bar"><i></i></div>
      <div class="sp-sub">Portal de Parceiros · Contourline</div>
      <div class="sp-foot">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
        Seus dados estão protegidos
      </div>
    `;
    (document.body || document.documentElement).appendChild(el);

    // some quando a página estiver pronta (tempo mínimo agradável)
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
