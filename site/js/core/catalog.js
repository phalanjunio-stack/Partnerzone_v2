/* ============================================================
   CATALOG — lê content/catalog.json (gerado pelo SERVIDOR) e
   alimenta EQUIPMENT / MATERIALS / MARCAS. Fallback nos exemplos.
   Contrato v1: sitelocal\CONTRATO-CATALOG.md  ·  só o servidor escreve, o site só lê.
   Teste: abrir com ?catalog=example pra usar content/catalog.example.json
   ============================================================ */
window.Catalog = (() => {
  let data = null;

  function srcUrl() {
    try { if (new URLSearchParams(location.search).get("catalog") === "example") return "content/catalog.example.json"; } catch (_) {}
    return "content/catalog.json";
  }

  async function load() {
    const bust = (typeof BUILD !== "undefined" ? BUILD : "1");
    const u = srcUrl() + "?_=" + bust;
    try {
      const ctrl = new AbortController();
      const to = setTimeout(() => ctrl.abort(), 2500);          // nunca trava o boot
      const r = await fetch(u, { signal: ctrl.signal, cache: "no-cache" });
      clearTimeout(to);
      if (r.ok) { const j = await r.json(); if (j && typeof j === "object") data = j; }
    } catch (_) { /* sem catálogo -> mantém exemplos */ }
    return data;
  }

  const DEF_AR = { vid: 1.78, img: 1, png: 1, social: 0.8, pdf: 0.71, ppt: 1.5, zip: 1, audio: 1 };
  function mapType(m) {
    const f = (m.formato || "").toLowerCase();
    switch (m.tipo) {
      case "vid":   return "vid";
      case "audio": return "audio";
      case "doc":   return (f === "pptx" || f === "ppt") ? "ppt" : (f === "zip" ? "zip" : "pdf");
      case "arte":  return (f === "png") ? "png" : "img";
      case "img":   return (m.pasta || "").toLowerCase().includes("rede") ? "social" : "img";
      default:      return "img";
    }
  }

  /* aplica o catálogo (só shape novo: schemaVersion>=1) sobre os globais — mutações in-place,
     pra não quebrar quem já guarda referência de EQUIPMENT/MATERIALS. */
  function applyToGlobals() {
    const c = data;
    if (!c || !(c.schemaVersion >= 1)) return false;   // shape antigo/ausente -> mantém os exemplos

    const marcaName = {}; (c.marcas || []).forEach(b => { if (b && b.slug) marcaName[b.slug] = b.name; });
    const sampleImg = {};
    if (typeof EQUIPMENT !== "undefined") EQUIPMENT.forEach(e => { if (e.name) sampleImg[e.name.toLowerCase()] = e.img; });

    // ---- EQUIPMENT ----
    if (Array.isArray(c.equipamentos) && c.equipamentos.length && typeof EQUIPMENT !== "undefined") {
      const mapped = c.equipamentos.map(e => ({
        codigo: (e.slug || e.name || "").toUpperCase(),
        name:   e.name || e.slug || "",
        marca:  marcaName[e.marca] || e.marca || "",
        linha:  e.segmento === "med" ? "MED" : "Estética",
        tag:    e.tag || "",
        count:  e.materialCount || 0,
        img:    sampleImg[(e.name || "").toLowerCase()] || (e.cover ? "content/" + e.cover : ""),
        desc:   e.desc || "",
        pastas: Array.isArray(e.pastas) ? e.pastas.length : 0,
        downloads: "",
        _cat:   e,
      }));
      EQUIPMENT.splice(0, EQUIPMENT.length, ...mapped);
    }

    // ---- MARCAS (lista de nomes) ----
    if (Array.isArray(c.marcas) && c.marcas.length && typeof MARCAS !== "undefined") {
      MARCAS.splice(0, MARCAS.length, ...c.marcas.map(b => b.name).filter(Boolean));
    }

    // ---- MATERIALS ----
    if (Array.isArray(c.materials) && c.materials.length && typeof MATERIALS !== "undefined") {
      const eqName = {}; (c.equipamentos || []).forEach(e => { if (e.slug) eqName[e.slug] = e.name; });
      if (typeof MAT_TYPES !== "undefined" && !MAT_TYPES.audio)
        MAT_TYPES.audio = { badge: "MP3", c: "#22c55e", ic: "music", kind: "Áudio" };
      const mapped = c.materials.map(m => {
        const type = mapType(m);
        return {
          t:    m.titulo || "",
          eq:   eqName[m.equipamento] || m.equipamento || "",
          tag:  (m.tags && m.tags[0]) || m.pasta || "",
          type,
          size: m.tamanho || "",
          dl:   m.dl || 0,
          novo: !!m.novo,
          ar:   DEF_AR[type] || 1,
          url:  m.url || "",
          thumb: m.thumb || "",
          _cat: m,
        };
      });
      MATERIALS.splice(0, MATERIALS.length, ...mapped);
    }

    // ---- ÁUDIO (acervo da página /audio) — materials tipo:"audio" viram TRACKS do player ----
    if (typeof TRACKS !== "undefined" && Array.isArray(c.materials)) {
      const audios = c.materials.filter(m => m.tipo === "audio");
      if (audios.length) {
        const eqNameA = {}; (c.equipamentos || []).forEach(e => { if (e.slug) eqNameA[e.slug] = e.name; });
        TRACKS.splice(0, TRACKS.length, ...audios.map(m => ({
          id:    m.id || m.titulo,
          title: m.titulo || "",
          tag:   (m.tags && m.tags[0]) || m.pasta || "Áudio",
          eq:    eqNameA[m.equipamento] || m.equipamento || "",
          src:   m.url || "",
        })));
      }
    }
    return true;
  }

  async function boot() { await load(); return applyToGlobals(); }

  return { load, applyToGlobals, boot, raw: () => data, active: () => !!(data && data.schemaVersion >= 1) };
})();
