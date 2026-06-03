#!/usr/bin/env node
/* ============================================================
   publish-catalog.js — "passo 2" do Publicar.
   Pega o catalog.json gerado pelo SERVIDOR (sitelocal\data\catalog.json),
   valida, copia pro site (site/content/catalog.json) e publica
   (git push -> GitHub Pages). O servidor gera; aqui vai ao ar.

   Uso:
     node scripts/publish-catalog.js                 (origem padrão + push)
     node scripts/publish-catalog.js <caminho.json>  (origem custom)
     node scripts/publish-catalog.js --no-push        (só copia, não publica)
   ============================================================ */
const fs = require("node:fs");
const path = require("node:path");
const { execSync } = require("node:child_process");

const ROOT = path.join(__dirname, "..");                       // …\NOVODESIGN
const DEST = path.join(ROOT, "site", "content", "catalog.json");
const SRC =
  process.argv.find((a) => a.toLowerCase().endsWith(".json")) ||
  process.env.CATALOG_SRC ||
  "C:\\Users\\Contourline\\Documents\\sitelocal\\data\\catalog.json";
const NO_PUSH = process.argv.includes("--no-push");
const FORCE = process.argv.includes("--force");

const die = (m) => { console.error("✗ " + m); process.exit(1); };

if (!fs.existsSync(SRC)) die("catalog.json de origem não encontrado:\n  " + SRC +
  "\n  (gere no servidor primeiro, ou passe o caminho: node scripts/publish-catalog.js <arquivo>)");

let cat;
try { cat = JSON.parse(fs.readFileSync(SRC, "utf8")); }
catch (e) { die("JSON inválido em " + SRC + " — " + e.message); }

// validação mínima — NÃO publica lixo (protege a vitrine do cliente)
if (!cat || typeof cat !== "object") die("conteúdo não é um objeto JSON.");
if (!(cat.schemaVersion >= 1)) die("schemaVersion ausente ou < 1. O site só ativa schemaVersion>=1. Abortado (nada publicado).");
if (!Array.isArray(cat.equipamentos) || !cat.equipamentos.length) die("sem equipamentos[] — nada pra publicar.");
const nMat = Array.isArray(cat.materials) ? cat.materials.length : 0;

// trava ANTI-INTERIM: não publica urls de rede local nem versão muito incompleta (--force ignora)
const mats = Array.isArray(cat.materials) ? cat.materials : [];
if (mats.length && !FORCE) {
  const lan = mats.filter(m => m.url && /localhost|127\.0\.0\.1|\.local|:\/\/(?:10\.|192\.168\.|172\.(?:1[6-9]|2\d|3[01])\.)/i.test(m.url));
  const vazio = mats.filter(m => !m.url).length;
  if (lan.length) die(`${lan.length} materiais com url de REDE LOCAL (ex.: ${lan[0].url}).\n  Parece a versão INTERIM — esses links não abrem no site público.\n  Publique só a versão final (liberados + urls reais). (--force ignora)`);
  if (vazio > mats.length * 0.3) die(`${vazio}/${mats.length} materiais SEM url — versão incompleta? (--force ignora)`);
}

// copia pro site
fs.mkdirSync(path.dirname(DEST), { recursive: true });
fs.copyFileSync(SRC, DEST);
console.log(`✓ copiado -> ${DEST}`);
console.log(`  schemaVersion ${cat.schemaVersion} · ${cat.equipamentos.length} equipamentos · ${nMat} materiais · gerado ${cat.generatedAt || "?"}`);

if (NO_PUSH) { console.log("• --no-push: copiei mas NÃO publiquei. Rode `git push` quando quiser."); process.exit(0); }

// publica (deploy via GitHub Pages)
try {
  const rel = path.relative(ROOT, DEST).replace(/\\/g, "/");
  const changed = execSync(`git status --porcelain "${rel}"`, { cwd: ROOT }).toString().trim();
  if (!changed) { console.log("• catalog.json sem mudança — nada novo a publicar."); process.exit(0); }
  execSync(`git add "${rel}"`, { cwd: ROOT, stdio: "inherit" });
  execSync(`git commit -m "publish(catalog): atualiza vitrine (${cat.equipamentos.length} equip, ${nMat} materiais)"`, { cwd: ROOT, stdio: "inherit" });
  execSync("git push origin main", { cwd: ROOT, stdio: "inherit" });
  console.log("\n✓ PUBLICADO. GitHub Pages atualiza em ~1-2 min. O site troca pros dados reais sozinho.");
} catch (e) {
  die("falha no git (configurado/autenticado?): " + (e.message || e));
}
