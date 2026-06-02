/* ============================================================
   SOUND — efeitos de UI sintetizados (Web Audio, sem arquivos)
   ============================================================ */
window.Sound = (() => {
  let ctx = null, master = null, gestured = false, hoverThrottle = 0;
  let enabled = localStorage.getItem('cl-sound') !== 'off';

  ['click','keydown','pointerdown','touchstart'].forEach(ev =>
    window.addEventListener(ev, () => { gestured = true; }, { once: true, capture: true }));

  function ac() {
    if (!gestured) return null;
    if (!ctx) {
      try {
        ctx = new (window.AudioContext || window.webkitAudioContext)();
        master = ctx.createGain(); master.gain.value = 0.32; master.connect(ctx.destination);
      } catch { return null; }
    }
    if (ctx.state === 'suspended') ctx.resume().catch(()=>{});
    return ctx;
  }
  function note(type, freq, start, dur, peak = .22, attack = .008, freqEnd = null) {
    const a = ac(); if (!a) return;
    const o = a.createOscillator(), g = a.createGain();
    o.type = type; o.frequency.setValueAtTime(freq, start);
    if (freqEnd != null) o.frequency.exponentialRampToValueAtTime(freqEnd, start + dur);
    g.gain.setValueAtTime(.0001, start);
    g.gain.linearRampToValueAtTime(peak, start + attack);
    g.gain.exponentialRampToValueAtTime(.0001, start + dur);
    o.connect(g); g.connect(master); o.start(start); o.stop(start + dur + .02);
  }
  function noise(start, dur, gain = .15) {
    const a = ac(); if (!a) return;
    const buf = a.createBuffer(1, a.sampleRate * dur, a.sampleRate), d = buf.getChannelData(0);
    for (let i = 0; i < d.length; i++) d[i] = (Math.random()*2-1) * (1 - i/d.length);
    const s = a.createBufferSource(); s.buffer = buf;
    const g = a.createGain(); g.gain.setValueAtTime(gain, start);
    const f = a.createBiquadFilter(); f.type = 'lowpass'; f.frequency.value = 1400;
    s.connect(f); f.connect(g); g.connect(master); s.start(start); s.stop(start + dur);
  }

  const api = {
    hover() { if (!enabled) return; const n = Date.now(); if (n - hoverThrottle < 80) return; hoverThrottle = n;
      const a = ac(); if (!a) return; note('sine', 1568, a.currentTime, .09, .08, .006); },
    click() { if (!enabled) return; const a = ac(); if (!a) return; const t = a.currentTime;
      note('sine', 880, t, .11, .16, .005); note('sine', 440, t+.002, .15, .09, .008); },
    open() { if (!enabled) return; const a = ac(); if (!a) return; const t = a.currentTime;
      note('sine', 300, t, .16, .26, .04, 620); note('sine', 1760, t+.1, .1, .04, .006); },
    close() { if (!enabled) return; const a = ac(); if (!a) return; const t = a.currentTime;
      note('sine', 600, t, .18, .26, .012, 300); },
    success() { if (!enabled) return; const a = ac(); if (!a) return; const t = a.currentTime;
      note('sine', 523, t, .2, .24, .01); note('sine', 659, t+.09, .22, .24, .01); note('sine', 784, t+.18, .26, .22, .012); },
    switch(toLight) { if (!enabled) return; const a = ac(); if (!a) return; const t = a.currentTime;
      noise(t, .004, toLight ? .5 : .42);
      note('sine', toLight ? 1800 : 900, t, .08, .12, .002, toLight ? 3200 : 420);
      noise(t + .06, .003, .2); },
    isOn() { return enabled; },
    toggle() { enabled = !enabled; localStorage.setItem('cl-sound', enabled ? 'on' : 'off'); if (enabled) api.success(); return enabled; },
  };

  // hook global: hover/click automáticos
  document.addEventListener('mouseover', e => {
    if (e.target.closest('.eq-card, .qa, .rm-item, .nav-item, .theme-opt, .link-more')) api.hover();
  }, true);
  document.addEventListener('click', e => {
    const el = e.target.closest('button, a, .nav-item, .qa');
    if (!el || el.disabled) return;
    if (el.closest('.modal-head .x')) return api.close();
    if (el.closest('.nav-item, [data-open-modal]')) return api.open();
    api.click();
  }, true);

  return api;
})();
