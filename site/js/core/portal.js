/* ============================================================
   PORTAL — autenticação do cliente (Fase 2, via Supabase).
   A Área do Cliente é PRIVADA: cada cliente loga (e-mail+senha) e a RLS do
   Supabase devolve só os dados dele. O anon key é público-safe (a segurança
   é server-side). Config vem de content/portal-config.json (a Central publica).
   Carrega o supabase-js sob demanda (não pesa pra quem só vê a vitrine).
   ============================================================ */
window.Portal = (() => {
  const CDN = "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2";
  let sb = null, cfg = null, _init = null;

  function loadScript(src) {
    return new Promise((res, rej) => {
      if (window.supabase) return res();
      const s = document.createElement("script");
      s.src = src; s.onload = () => res(); s.onerror = () => rej(new Error("não carregou o supabase-js"));
      document.head.appendChild(s);
    });
  }

  function init() {
    if (_init) return _init;
    _init = (async () => {
      try {
        const r = await fetch("content/portal-config.json?_=" + Date.now(), { cache: "no-cache" });
        if (r.ok) cfg = await r.json();
      } catch (_) { /* sem config ainda */ }
      if (!cfg || !cfg.url || !cfg.anonKey) return null;        // ainda não configurado
      try {
        await loadScript(CDN);
        sb = window.supabase.createClient(cfg.url, cfg.anonKey, {
          auth: { persistSession: true, autoRefreshToken: true, storageKey: "cl-portal-auth" },
        });
      } catch (_) { sb = null; }
      return sb;
    })();
    return _init;
  }

  async function configured() { await init(); return !!sb; }

  async function session() {
    await init(); if (!sb) return null;
    try { const { data } = await sb.auth.getSession(); return data.session || null; } catch (_) { return null; }
  }

  async function login(email, password) {
    await init();
    if (!sb) return { error: { message: "A área do cliente ainda está sendo configurada." } };
    return sb.auth.signInWithPassword({ email: (email || "").trim(), password: password || "" });
  }

  async function logout() { await init(); if (sb) { try { await sb.auth.signOut(); } catch (_) {} } }

  async function user() {
    await init(); if (!sb) return null;
    try { const { data } = await sb.auth.getUser(); return data.user || null; } catch (_) { return null; }
  }

  /* perfil do cliente logado — a RLS (cli_self) devolve só a própria linha */
  async function client() {
    await init(); if (!sb) return null;
    try { const { data, error } = await sb.from("clientes").select("*"); if (error) return null; return (data || [])[0] || null; }
    catch (_) { return null; }
  }

  /* acesso bruto ao client supabase (pra outras áreas: contrato, boletos, etc.) */
  async function db() { await init(); return sb; }

  return { init, configured, session, login, logout, user, client, db };
})();
