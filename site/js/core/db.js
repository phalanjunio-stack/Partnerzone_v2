/* ============================================================
   DB — SQLite REAL no navegador (sql.js / WASM)
   Espelha o schema do sistema original (Supabase/Postgres),
   simplificado pro demo. Persiste no localStorage.
   ============================================================ */
window.DB = (() => {
  const KEY = 'cl-sqlite-v5';   /* bump quando o schema muda → re-seed */
  const CDN = 'https://cdn.jsdelivr.net/npm/sql.js@1.10.3/dist/';
  let SQL = null, db = null, ready = null;

  function loadScript(src) {
    return new Promise((res, rej) => {
      const s = document.createElement('script'); s.src = src;
      s.onload = res; s.onerror = () => rej(new Error('Falha ao baixar ' + src));
      document.head.appendChild(s);
    });
  }
  const q = v => v == null ? 'NULL' : `'${String(v).replace(/'/g, "''")}'`;

  function persist() {
    try {
      const bin = db.export(); let s = ''; const CH = 0x8000;
      for (let i = 0; i < bin.length; i += CH) s += String.fromCharCode.apply(null, bin.subarray(i, i + CH));
      localStorage.setItem(KEY, btoa(s));
    } catch (e) { console.warn('persist falhou', e); }
  }

  const pad = (p, n) => p + String(n).padStart(4, '0');   // PLANO DE IDs: user0001, marca0001, equi0001…

  function seed() {
    db.run(`
      CREATE TABLE usuarios (id TEXT PRIMARY KEY, nome TEXT, email TEXT UNIQUE, role TEXT DEFAULT 'viewer', departamento TEXT, criado_em TEXT);
      CREATE TABLE marcas (id TEXT PRIMARY KEY, nome TEXT, cor TEXT);
      CREATE TABLE equipamentos (id TEXT PRIMARY KEY, codigo TEXT UNIQUE NOT NULL, marca_id TEXT, modelo TEXT, linha TEXT, tag TEXT, materiais INTEGER);
      CREATE TABLE categorias (id TEXT PRIMARY KEY, nome TEXT, slug TEXT);
      CREATE TABLE materiais (id TEXT PRIMARY KEY, titulo TEXT, equip_id TEXT, categoria TEXT, tipo TEXT, formato TEXT, tamanho TEXT, downloads INTEGER DEFAULT 0, novo INTEGER DEFAULT 0, status TEXT DEFAULT 'publicado', criado_em TEXT);
      CREATE TABLE clientes (id TEXT PRIMARY KEY, nome TEXT, email TEXT, cidade TEXT, estado TEXT, status TEXT DEFAULT 'active', criado_em TEXT);
      CREATE TABLE cliente_equipamentos (cliente_id TEXT, equip_id TEXT);
      CREATE TABLE solicitacoes (id TEXT PRIMARY KEY, usuario_id TEXT, nome TEXT, email TEXT, assunto TEXT, tipo TEXT DEFAULT 'solicitar', status TEXT DEFAULT 'pending', criado_em TEXT);
      CREATE TABLE cadastros (id TEXT PRIMARY KEY, nome TEXT, email TEXT, telefone TEXT, ja_cliente INTEGER DEFAULT 0, status TEXT DEFAULT 'pending', criado_em TEXT);
      CREATE TABLE favoritos (usuario_id TEXT, material_id TEXT);
      CREATE TABLE downloads (id TEXT PRIMARY KEY, usuario_id TEXT, material_id TEXT, criado_em TEXT);
    `);

    // marcas → marca0001…
    const MARC = (typeof MARCAS !== 'undefined' ? MARCAS : ['Contourline']);
    const marcaId = {};
    MARC.forEach((m, i) => { const id = pad('marca', i + 1); marcaId[m] = id; db.run(`INSERT INTO marcas (id,nome,cor) VALUES (${q(id)},${q(m)},'#2f7ff2');`); });

    // equipamentos → equi0001… (referencia marca pelo ID)
    const EQ = (typeof EQUIPMENT !== 'undefined' ? EQUIPMENT : []);
    const equipId = {};
    EQ.forEach((e, i) => { const id = pad('equi', i + 1); equipId[e.name] = id;
      db.run(`INSERT INTO equipamentos (id,codigo,marca_id,modelo,linha,tag,materiais)
        VALUES (${q(id)},${q(e.codigo)},${q(marcaId[e.marca] || '')},${q(e.name)},${q(e.linha || 'Estética')},${q(e.tag)},${e.count || 0});`); });

    // categorias → cat0001…
    const CATS = ['Redes Sociais','Treinamento','Documentos','Materiais Gráficos','Vídeos','Imagens','Impressos','Institucional'];
    CATS.forEach((c, i) => db.run(`INSERT INTO categorias (id,nome,slug) VALUES (${q(pad('cat', i + 1))},${q(c)},${q(c.toLowerCase().replace(/[^a-z]/g, '-'))});`));

    // materiais → mat0001… (referencia equipamento pelo equip_id)
    const MAT = (typeof MATERIALS !== 'undefined' ? MATERIALS : []);
    const fmt = ar => ar > 1.15 ? '16:9' : ar < 0.85 ? '9:16' : '1:1';
    MAT.forEach((m, i) => db.run(`INSERT INTO materiais (id,titulo,equip_id,categoria,tipo,formato,tamanho,downloads,novo,status,criado_em)
      VALUES (${q(pad('mat', i + 1))},${q(m.t)},${q(equipId[m.eq] || '')},${q(m.tag)},${q(m.type)},${q(fmt(m.ar))},${q(m.size)},${m.dl},${m.novo ? 1 : 0},'publicado',date('now','-' || ${i} || ' day'));`));

    db.run(`
      INSERT INTO usuarios (id,nome,email,role,departamento,criado_em) VALUES
        ('user0001','Ana Martins','ana@contourline.com.br','admin','marketing',date('now','-90 day')),
        ('user0002','Dr. Carlos Lima','carlos@clinicabella.com','viewer','clinica',date('now','-30 day')),
        ('user0003','Marina Souza','marina@contourline.com.br','editor','marketing',date('now','-60 day')),
        ('user0004','Dra. Paula Reis','paula@esteticapr.com','viewer','clinica',date('now','-10 day'));
      INSERT INTO clientes (id,nome,email,cidade,estado,status,criado_em) VALUES
        ('cli0001','Clínica Bella Estética','carlos@clinicabella.com','São Paulo','SP','active',date('now','-30 day')),
        ('cli0002','Estética Paula Reis','paula@esteticapr.com','Belo Horizonte','MG','active',date('now','-10 day')),
        ('cli0003','Instituto Derme & Corpo','contato@dermecorpo.com','Curitiba','PR','pending',date('now','-3 day'));
      INSERT INTO solicitacoes (id,usuario_id,nome,email,assunto,tipo,status,criado_em) VALUES
        ('sol0001','user0002','Dr. Carlos Lima','carlos@clinicabella.com','Preciso de fotos novas do HIPRO','solicitar','pending',date('now','-2 day')),
        ('sol0002','user0004','Dra. Paula Reis','paula@esteticapr.com','Link de download quebrado','reportar','in_progress',date('now','-1 day'));
      INSERT INTO cadastros (id,nome,email,telefone,ja_cliente,status,criado_em) VALUES
        ('cad0001','Dr. João Pereira','joao@clinicajp.com','(31) 99999-0000',1,'pending',date('now','-1 day')),
        ('cad0002','Renata Alves','renata@spaestetica.com','(11) 98888-1111',0,'contacted',date('now','-5 day'));
    `);
    // vínculos por ID (cliente_id + equip_id)
    [['cli0001','HIPRO'],['cli0001','Enygma'],['cli0002','HIPRO'],['cli0002','Trilift'],['cli0003','Crystal 3D']]
      .forEach(([c, n]) => db.run(`INSERT INTO cliente_equipamentos (cliente_id,equip_id) VALUES (${q(c)},${q(equipId[n] || '')});`));
    // downloads por ID (usuario_id + material_id)
    [['user0002', pad('mat', 1)], ['user0002', pad('mat', 5)], ['user0004', pad('mat', 3)]]
      .forEach(([u, m], i) => db.run(`INSERT INTO downloads (id,usuario_id,material_id,criado_em) VALUES (${q(pad('dl', i + 1))},${q(u)},${q(m)},date('now','-' || ${i} || ' day'));`));
  }

  function init() {
    if (ready) return ready;
    ready = (async () => {
      await loadScript(CDN + 'sql-wasm.js');
      SQL = await initSqlJs({ locateFile: f => CDN + f });
      const saved = localStorage.getItem(KEY);
      if (saved) { const bin = Uint8Array.from(atob(saved), c => c.charCodeAt(0)); db = new SQL.Database(bin); }
      else { db = new SQL.Database(); seed(); persist(); }
      return db;
    })();
    return ready;
  }

  return {
    init,
    exec: sql => db.exec(sql),                       // [{columns,values}]
    run: sql => { db.run(sql); persist(); },
    affected: () => db.getRowsModified(),
    tables: () => { const r = db.exec("SELECT name FROM sqlite_master WHERE type='table' AND name NOT LIKE 'sqlite_%' ORDER BY name"); return r[0] ? r[0].values.map(v => v[0]) : []; },
    count: t => { try { const r = db.exec(`SELECT count(*) FROM "${t}"`); return r[0] ? r[0].values[0][0] : 0; } catch (_) { return 0; } },
    reset: () => { localStorage.removeItem(KEY); db = new SQL.Database(); seed(); persist(); },
    persist,
    // próximo ID do plano: nextId('equipamentos','equi') → equi0010
    nextId: (table, prefix) => {
      try {
        const r = db.exec(`SELECT id FROM "${table}"`);
        const nums = (r[0] ? r[0].values : []).map(v => parseInt(String(v[0]).replace(/\D/g, ''), 10) || 0);
        return prefix + String((nums.length ? Math.max(...nums) : 0) + 1).padStart(4, '0');
      } catch (_) { return prefix + '0001'; }
    },
  };
})();
