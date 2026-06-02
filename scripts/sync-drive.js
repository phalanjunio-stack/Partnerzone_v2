#!/usr/bin/env node
/* ============================================================
   sync-drive.js — lê o Google Drive (Drive Stream) e gera o
   catálogo real: equipamentos -> pastas -> contagem de materiais.
   Uso: node scripts/sync-drive.js
   Saída: site/content/catalog.json
   ============================================================ */
const fs = require("node:fs");
const path = require("node:path");

const DRIVE = process.env.DRIVE_EQUIP || "G:\\Meu Drive\\1. MARKETING\\01. Equipamentos";
const OUT = path.join(__dirname, "..", "site", "content", "catalog.json");

const SKIP_EXT = new Set([".ini", ".db", ".tmp", ".lnk"]);

const clean = (s) => s.replace(/^\d+[.\-)\s]+/, "").replace(/['`]/g, "").trim();
const slug = (s) =>
  clean(s).toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

function countFiles(dir, depth = 0) {
  let n = 0, entries;
  try { entries = fs.readdirSync(dir, { withFileTypes: true }); } catch { return 0; }
  for (const e of entries) {
    if (e.name.startsWith(".")) continue;
    if (e.isDirectory()) { if (depth < 6) n += countFiles(path.join(dir, e.name), depth + 1); }
    else if (!SKIP_EXT.has(path.extname(e.name).toLowerCase())) n++;
  }
  return n;
}

function main() {
  if (!fs.existsSync(DRIVE)) {
    console.error("✗ Drive não encontrado:", DRIVE);
    console.error("  (Drive Stream montado? ou defina DRIVE_EQUIP=...)");
    process.exit(1);
  }
  const dirs = fs.readdirSync(DRIVE, { withFileTypes: true })
    .filter((d) => d.isDirectory() && !d.name.startsWith("."));

  const equipamentos = dirs.map((d) => {
    const full = path.join(DRIVE, d.name);
    let subs = [];
    try { subs = fs.readdirSync(full, { withFileTypes: true }).filter((s) => s.isDirectory() && !s.name.startsWith(".")); } catch {}
    const pastas = subs.map((s) => ({ name: clean(s.name), count: countFiles(path.join(full, s.name)) }));
    return { name: clean(d.name), slug: slug(d.name), folder: d.name, materialCount: countFiles(full), pastas };
  }).sort((a, b) => a.name.localeCompare(b.name, "pt-BR"));

  fs.mkdirSync(path.dirname(OUT), { recursive: true });
  fs.writeFileSync(OUT, JSON.stringify(
    { generatedAt: new Date().toISOString(), source: DRIVE, total: equipamentos.length, equipamentos }, null, 2));

  const totalFiles = equipamentos.reduce((s, e) => s + e.materialCount, 0);
  console.log(`✓ ${equipamentos.length} equipamentos · ${totalFiles} materiais -> ${OUT}`);
  equipamentos.slice(0, 8).forEach((e) => console.log(`   • ${e.name}: ${e.materialCount} materiais, ${e.pastas.length} pastas`));
}
main();
