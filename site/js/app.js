/* ============================================================
   APP — ícones (traçado), dados de exemplo e render da Início
   ============================================================ */
const BUILD = 'spa81';
try { console.log('%cPartnerZone • build ' + BUILD, 'background:#2f7ff2;color:#fff;padding:2px 8px;border-radius:4px;font-weight:700'); } catch (_) {}

/* ---- MODO CLIENTE × ADMIN ----------------------------------------------
   Cadastro mora na CENTRAL. O PartnerZone é vitrine do cliente (só lê).
   O designer entra no "modo admin" por ?admin=1 (fica salvo); ?admin=0 sai.
   No modo cliente os controles de admin somem (nav Administração, +equip,
   editar, +logo/arte/áudio). No modo admin tudo aparece (inclui capa/banner). */
const ADMIN = (() => {
  try {
    const q = new URLSearchParams(location.search);
    if (q.get('admin') === '1') localStorage.setItem('cl-admin', '1');
    else if (q.get('admin') === '0') localStorage.removeItem('cl-admin');
    return localStorage.getItem('cl-admin') === '1';
  } catch (_) { return false; }
})();
window.__admin = ADMIN;
try {
  const r = document.documentElement;
  r.classList.toggle('is-admin', ADMIN);
  r.classList.toggle('is-client', !ADMIN);
} catch (_) {}
if (ADMIN) try {
  const b = document.createElement('a');
  b.className = 'admin-badge'; b.href = '?admin=0' + (location.hash || '#/');
  b.title = 'Sair do modo admin (volta pra visão do cliente)';
  b.innerHTML = '🎨 modo admin · sair';
  (document.body || document.documentElement).appendChild(b);
} catch (_) {}

/* ---- Ícones (todos outline / currentColor) ---- */
const ICONS = {
  home:'<path d="M3 10.5 12 3l9 7.5"/><path d="M5 9.5V21h14V9.5"/><path d="M9.5 21v-6h5v6"/>',
  file:'<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5"/>',
  search:'<circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/>',
  heart:'<path d="M20.8 5.6a5 5 0 0 0-7.1 0L12 7.3l-1.7-1.7a5 5 0 1 0-7.1 7.1L12 21l8.8-8.3a5 5 0 0 0 0-7.1z"/>',
  building:'<rect x="4" y="3" width="16" height="18" rx="2"/><path d="M9 8h.01M15 8h.01M9 12h.01M15 12h.01M9 21v-4h6v4"/>',
  user:'<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>',
  signature:'<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5"/><path d="m9 15 2 2 4-4"/>',
  receipt:'<path d="M5 3v18l2-1.5L9 21l2-1.5L13 21l2-1.5L17 21l2-1.5V3l-2 1.5L15 3l-2 1.5L11 3 9 4.5 7 3z"/><path d="M8 8h8M8 12h8"/>',
  wrench:'<path d="M14.5 6a3.5 3.5 0 0 0-4.6 4.6L3 17.5 6.5 21l6.9-6.9A3.5 3.5 0 0 0 18 9.5l-2.3 2.3-1.5-1.5L16.5 8z"/>',
  buoy:'<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="3.5"/><path d="m5 5 4 4M15 15l4 4M19 5l-4 4M9 15l-4 4"/>',
  settings:'<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.6 1.6 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.6 1.6 0 0 0-2.7 1.1V21a2 2 0 0 1-4 0v-.1A1.6 1.6 0 0 0 6.7 19l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1A1.6 1.6 0 0 0 3 13.6H3a2 2 0 0 1 0-4h.1A1.6 1.6 0 0 0 4.6 7l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.6 1.6 0 0 0 2.7-1.1V3a2 2 0 0 1 4 0v.1A1.6 1.6 0 0 0 17.3 4.6l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.6 1.6 0 0 0-1.1 2.7H21a2 2 0 0 1 0 4h-.1a1.6 1.6 0 0 0-1.5 1z"/>',
  upload:'<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m8 9 4-4 4 4M12 5v11"/>',
  folder:'<path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>',
  users:'<circle cx="9" cy="8" r="3.5"/><path d="M3 21a6 6 0 0 1 12 0M16 5.5a3.5 3.5 0 0 1 0 6.8M21 21a6 6 0 0 0-4-5.6"/>',
  briefcase:'<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18"/>',
  cloud:'<path d="M7 18a4 4 0 0 1-.6-7.9 5 5 0 0 1 9.6-1.1A3.5 3.5 0 0 1 18 18z"/>',
  bell:'<path d="M6 9a6 6 0 0 1 12 0c0 5 2 6 2 6H4s2-1 2-6"/><path d="M10.5 20a2 2 0 0 0 3 0"/>',
  logout:'<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><path d="m16 17 5-5-5-5M21 12H9"/>',
  chevR:'<path d="m9 6 6 6-6 6"/>', chevL:'<path d="m15 6-6 6 6 6"/>', chevD:'<path d="m6 9 6 6 6-6"/>', chevsL:'<path d="m11 7-5 5 5 5M18 7l-5 5 5 5"/>',
  menu:'<path d="M4 6h16M4 12h16M4 18h16"/>',
  send:'<path d="m22 2-7 20-4-9-9-4z"/><path d="M22 2 11 13"/>',
  mail:'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
  phone:'<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L20 13l-1 4a2 2 0 0 1-2 1A16 16 0 0 1 3 6a2 2 0 0 1 2-2z"/>',
  cpu:'<rect x="6" y="6" width="12" height="12" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3"/>',
  image:'<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-5-5L5 21"/>',
  video:'<rect x="2" y="5" width="14" height="14" rx="2"/><path d="m16 9 6-3v12l-6-3z"/>',
  download:'<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m8 11 4 4 4-4M12 3v12"/>',
  sliders:'<path d="M4 21v-7M4 10V3M12 21v-9M12 8V3M20 21v-5M20 12V3M1 14h6M9 8h6M17 16h6"/>',
  grid:'<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/>',
  list:'<path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"/>',
  headphones:'<path d="M4 14a8 8 0 0 1 16 0"/><rect x="2" y="14" width="4" height="7" rx="1.5"/><rect x="18" y="14" width="4" height="7" rx="1.5"/>',
  grad:'<path d="m22 9-10-5L2 9l10 5 10-5z"/><path d="M6 11v5a6 3 0 0 0 12 0v-5"/>',
  message:'<path d="M21 12a8 8 0 0 1-11.5 7.2L3 21l1.8-6.5A8 8 0 1 1 21 12z"/>',
  package:'<path d="m12 3 8 4.5v9L12 21l-8-4.5v-9z"/><path d="M12 3v18M4 7.5l8 4.5 8-4.5"/>',
  trending:'<path d="m3 17 6-6 4 4 7-7"/><path d="M16 8h5v5"/>',
  ticket:'<path d="M3 8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2 2 2 0 0 0 0 4 2 2 0 0 1-2 2v0a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2 2 2 0 0 0 0-4z"/>',
  plus:'<circle cx="12" cy="12" r="9"/><path d="M12 8v8M8 12h8"/>',
  bookmark:'<path d="M6 3h12a1 1 0 0 1 1 1v17l-7-4-7 4V4a1 1 0 0 1 1-1z"/>',
  alignLeft:'<path d="M4 6h16M4 12h10M4 18h13"/>',
  volume:'<path d="M11 5 6 9H2v6h4l5 4z"/><path d="M16 8a5 5 0 0 1 0 8M19 5a9 9 0 0 1 0 14"/>',
  ppt:'<rect x="3" y="3" width="18" height="14" rx="2"/><path d="M8 21h8M12 17v4M8 8h5a2 2 0 0 1 0 4H8z"/>',
  megaphone:'<path d="m3 11 16-6v14L3 13z"/><path d="M3 11v2a2 2 0 0 0 2 2h2v-5H5a2 2 0 0 0-2 1z"/><path d="M8 15v3a2 2 0 0 0 4 0v-1"/>',
  presentation:'<path d="M2 4h20M3 4v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V4"/><path d="m9 20 3-3 3 3"/>',
  printer:'<path d="M6 9V3h12v6"/><path d="M6 18H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="7" rx="1.5"/>',
  pencil:'<path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4z"/>',
  arrowR:'<path d="M5 12h14M13 6l6 6-6 6"/>',
  check:'<path d="m20 6-11 11-5-5"/>',
  shield:'<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/>',
  lock:'<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>',
  trash:'<path d="M3 6h18M8 6V4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2m2 0v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/><path d="M10 11v6M14 11v6"/>',
  zap:'<path d="M13 2 3 14h9l-1 8 10-12h-9z"/>',
  smartphone:'<rect x="7" y="2" width="10" height="20" rx="2"/><path d="M11 18h2"/>',
  eye:'<path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7-10-7-10-7z"/><circle cx="12" cy="12" r="3"/>',
  clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/>',
  alert:'<path d="M10.3 3.3 2 19h20L13.7 3.3a2 2 0 0 0-3.4 0z"/><path d="M12 10v4M12 16.5v.5"/>',
  calendar:'<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',
  dots:'<circle cx="12" cy="5" r="1.4"/><circle cx="12" cy="12" r="1.4"/><circle cx="12" cy="19" r="1.4"/>',
  play:'<circle cx="12" cy="12" r="9"/><path d="m10 8.5 6 3.5-6 3.5z"/>',
  crop:'<path d="M6 2v14a2 2 0 0 0 2 2h14"/><path d="M2 6h14a2 2 0 0 1 2 2v14"/>',
  rotate:'<path d="M21 12a9 9 0 1 1-3-6.7L21 8"/><path d="M21 3v5h-5"/>',
  move:'<path d="M12 2v20M2 12h20M5 9 2 12l3 3M19 9l3 3-3 3M9 5l3-3 3 3M9 19l3 3 3-3"/>',
  expand:'<path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>',
  music:'<path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/>',
  play2:'<path d="M7 5v14l11-7z"/>',
  pause:'<path d="M8 5v14M16 5v14"/>',
  skipF:'<path d="M5 5v14l9-7z"/><path d="M16 5v14"/>',
  skipB:'<path d="M19 5v14l-9-7z"/><path d="M8 5v14"/>',
};
function svgIcon(name, cls='ic') { return `<svg class="${cls}" viewBox="0 0 24 24">${ICONS[name]||''}</svg>`; }
function renderIcons(root=document) { root.querySelectorAll('[data-icon]').forEach(el => {
  el.innerHTML = svgIcon(el.dataset.icon, el.dataset.cls || 'ic'); el.removeAttribute('data-icon'); }); }

/* ---- Navegação (conforme o GDD) ---- */
const NAV = [
  { label:'Navegação', items:[
    { icon:'home', text:'Início', route:'#/' },
    { icon:'file', text:'Solicitações', route:'#/solicitacoes' },
    { icon:'search', text:'Buscar', route:'#/buscar' },
    { icon:'heart', text:'Favoritos', route:'#/favoritos' },
    { icon:'music', text:'Áudios', route:'#/audio' },
    { icon:'building', text:'Institucional', dynamic:'marcas' },
  ]},
  { label:'Área do Cliente', items:[
    { icon:'user', text:'Minha Conta', route:'#/minha-conta' },
    { icon:'signature', text:'Contrato', route:'#/contrato' },
    { icon:'receipt', text:'Boletos', route:'#/boletos' },
    { icon:'wrench', text:'Meus Equipamentos', route:'#/meus-equipamentos' },
    { icon:'buoy', text:'Suporte', route:'#/suporte' },
  ]},
  { label:'Administração', admin:true, items:[
    { icon:'package', text:'Catálogo (equip.)', route:'#/cadastro' },
    { icon:'upload', text:'Upload', modal:'modal-upload' },
    { icon:'folder', text:'Materiais', route:'#/buscar' },
    { icon:'cpu', text:'Banco de dados (SQL)', route:'#/sql' },
    { icon:'users', text:'Usuários' },
    { icon:'briefcase', text:'Clientes' },
    { icon:'cloud', text:'Drive / Dropbox', sub:['Google Drive','Dropbox'] },
  ]},
];

/* ---- Dados de exemplo (depois vêm do Drive) ---- */
/* Cadastro de equipamento: CODIGO (chave estável — o sistema puxa por aqui) · MARCA · MODELO (name) · LINHA */
const EQUIPMENT = [
  { codigo:'HIPRO', name:'HIPRO', marca:'Daeju', linha:'MED', tag:'Tecnologia de Alta Performance', count:45, img:'assets/equipamentos/Hipro.png',
    desc:'Ultrassom microfocado (HIFU) de alta intensidade para lifting facial e corporal não invasivo, com resultados visíveis desde a primeira sessão.', pastas:6, downloads:'12.4K' },
  { codigo:'CRYSTAL3D', name:'Crystal 3D', marca:'Body Health', linha:'Estética', tag:'Remodelação Corporal', count:38, img:'assets/equipamentos/Crystal 3D.png',
    desc:'Plataforma de criofrequência para remodelação corporal — reduz gordura localizada e trata flacidez com conforto e segurança.', pastas:5, downloads:'9.7K' },
  { codigo:'ENYGMA', name:'Enygma', marca:'Body Health', linha:'Estética', tag:'Radiofrequência Avançada', count:32, img:'assets/equipamentos/enygma.png',
    desc:'Radiofrequência multipolar avançada para firmeza da pele, rejuvenescimento facial e tratamento de flacidez.', pastas:5, downloads:'8.1K' },
  { codigo:'FOCUSKIN', name:'Focuskin', marca:'Body Health', linha:'Estética', tag:'Plataforma Multitecnologia', count:28, img:'assets/equipamentos/Focuskin.png',
    desc:'Plataforma multitecnologia que combina diferentes ponteiras para protocolos faciais e corporais completos.', pastas:4, downloads:'6.9K' },
  { codigo:'FOLIX', name:'Folix', marca:'Body Health', linha:'Estética', tag:'Tratamento Capilar', count:24, img:'assets/equipamentos/Folix.png',
    desc:'Laser de baixa potência para estímulo capilar e tratamento da queda de cabelo, com protocolos seguros e indolores.', pastas:4, downloads:'5.4K' },
  { codigo:'MULTISHAPE', name:'Multishape', marca:'Body Health', linha:'Estética', tag:'Contorno Corporal', count:31, img:'assets/equipamentos/multishape.png',
    desc:'Sistema de contorno corporal que combina tecnologias para redução de medidas e tratamento de celulite.', pastas:5, downloads:'7.8K' },
  { codigo:'SUPREMEPRO', name:'Supreme Pro', marca:'Body Health', linha:'Estética', tag:'Multiplataforma', count:27, img:'assets/equipamentos/Supreme Pro.png',
    desc:'Multiplataforma estética versátil, reunindo várias tecnologias em um só equipamento para clínicas completas.', pastas:5, downloads:'6.2K' },
  { codigo:'UNYQUEPRO', name:'Unyque Pro', marca:'Body Health', linha:'Estética', tag:'Estética Avançada', count:22, img:'assets/equipamentos/Unyque Pro.png',
    desc:'Plataforma de estética avançada com recursos premium para protocolos faciais e corporais de alta performance.', pastas:4, downloads:'4.9K' },
  { codigo:'TRILIFT', name:'Trilift', marca:'Lumenis', linha:'Estética', tag:'Lifting Dinâmico', count:19, img:'assets/equipamentos/trilift.png',
    desc:'Tecnologia de lifting dinâmico que tonifica a musculatura facial e estimula firmeza, para um efeito lifting natural.', pastas:4, downloads:'3.7K' },
];
function eqByName(n) { return EQUIPMENT.find(e => e.name === n); }
function eqCodeOf(n) { const e = eqByName(n); return e ? e.codigo : n; }
const MARCAS = ['Contourline','Daeju','Body Health','Lumenis'];   // empresas/fabricantes (multi-marca)

/* ---- Biblioteca de Materiais (Buscar) ---- */
const MAT_TYPES = {
  vid:    { badge:'MP4',  c:'#7a57ff', ic:'play',    kind:'Vídeos' },
  pdf:    { badge:'PDF',  c:'#ef4444', ic:'file',    kind:'Documentos' },
  img:    { badge:'JPG',  c:'#10b981', ic:'image',   kind:'Imagens' },
  png:    { badge:'PNG',  c:'#3b86f7', ic:'image',   kind:'Imagens' },
  ppt:    { badge:'PPTX', c:'#f59e0b', ic:'ppt',     kind:'Documentos' },
  zip:    { badge:'ZIP',  c:'#2f7ff2', ic:'package', kind:'Materiais Gráficos' },
  social: { badge:'PNG',  c:'#06b6d4', ic:'message', kind:'Redes Sociais' },
};
/* ar = proporção REAL da imagem (largura/altura): >1 horizontal, <1 vertical, =1 quadrado.
   o card/thumb segue essa proporção (16:9≈1.78 · 3:2=1.5 · A4≈0.71 · 4:5=0.8 · 9:16≈0.56) */
const MATERIALS = [
  { t:'HIPRO | Vídeo institucional',     eq:'HIPRO',     tag:'Vídeo Institucional', type:'vid',    size:'128.4 MB', dl:152, novo:true,  ar:1.78 },
  { t:'HIPRO | Manual do usuário',       eq:'HIPRO',     tag:'Documentos',          type:'pdf',    size:'8.7 MB',   dl:320, novo:true,  ar:0.71 },
  { t:'HIPRO | Banner campanha',         eq:'HIPRO',     tag:'Materiais Gráficos',  type:'img',    size:'2.1 MB',   dl:98,  novo:true,  ar:1.78 },
  { t:'HIPRO | Post redes sociais',      eq:'HIPRO',     tag:'Redes Sociais',       type:'social', size:'1.2 MB',   dl:210, novo:true,  ar:0.8  },
  { t:'HIPRO | Apresentação comercial',  eq:'HIPRO',     tag:'Apresentações',       type:'ppt',    size:'15.3 MB',  dl:412, novo:false, ar:1.78 },
  { t:'HIPRO | Vídeo sala de espera',    eq:'HIPRO',     tag:'Sala de Espera',      type:'vid',    size:'56.7 MB',  dl:274, novo:true,  ar:1.5  },
  { t:'HIPRO | Kit materiais gráficos',  eq:'HIPRO',     tag:'Materiais Gráficos',  type:'zip',    size:'683.9 MB', dl:86,  novo:false, ar:1    },
  { t:'HIPRO | Folder informativo',      eq:'HIPRO',     tag:'Impressos',           type:'pdf',    size:'5.2 MB',   dl:143, novo:true,  ar:0.71 },
  { t:'Enygma | Antes e Depois 03',      eq:'Enygma',    tag:'Resultados',          type:'img',    size:'3.4 MB',   dl:188, novo:true,  ar:1    },
  { t:'Enygma | Reels demonstração',     eq:'Enygma',    tag:'Redes Sociais',       type:'vid',    size:'42.1 MB',  dl:96,  novo:false, ar:0.56 },
  { t:'Crystal 3D | Ficha técnica',      eq:'Crystal 3D',tag:'Documentos',          type:'pdf',    size:'1.9 MB',   dl:64,  novo:false, ar:0.71 },
  { t:'Trilift | Protocolo Facial',      eq:'Trilift',   tag:'Protocolos',          type:'pdf',    size:'2.7 MB',   dl:121, novo:true,  ar:0.71 },
  { t:'Folix | Story Instagram',         eq:'Folix',     tag:'Redes Sociais',       type:'social', size:'980 KB',   dl:77,  novo:false, ar:0.56 },
  { t:'Supreme Pro | Catálogo 2026',     eq:'Supreme Pro',tag:'Institucional',      type:'pdf',    size:'12.4 MB',  dl:233, novo:true,  ar:0.71 },
  { t:'Multishape | Vídeo aplicação',    eq:'Multishape',tag:'Treinamento',         type:'vid',    size:'88.2 MB',  dl:54,  novo:false, ar:1.78 },
  { t:'Focuskin | Pack de imagens',      eq:'Focuskin',  tag:'Imagens',             type:'zip',    size:'210 MB',   dl:39,  novo:true,  ar:1    },
  { t:'Enygma | Apresentação clínica',   eq:'Enygma',    tag:'Apresentações',       type:'ppt',    size:'9.8 MB',   dl:147, novo:false, ar:1.5  },
  { t:'HIPRO | Logo e identidade',       eq:'HIPRO',     tag:'Materiais Gráficos',  type:'zip',    size:'34.5 MB',  dl:301, novo:false, ar:1    },
];

/* ---- TAXONOMIA central (fonte única — admin edita aqui no futuro) ---- */
const TAXONOMY = [
  { id:'marca',       label:'Marca',            values:['Daeju','Body Health','Lumenis','Contourline'], single:true },
  { id:'equipamento', label:'Equipamento',      req:true,  values:null /* = nomes de EQUIPMENT */ },
  { id:'linha',       label:'Linha',            values:['Estética','MED'], single:true },
  { id:'categoria',   label:'Categoria',        req:true,  values:['Redes Sociais','Treinamento','Documentos','Materiais Gráficos','Vídeos','Imagens','Impressos','Institucional'] },
  { id:'tipo',        label:'Tipo de mídia',    req:true,  values:['Vídeo','Imagem','PDF','Apresentação','Arte editável','Áudio','Pacote (ZIP)'], single:true },
  { id:'tema',        label:'Tema / Condição',  values:['Celulite','Lipedema','Gordura localizada','Flacidez','Rejuvenescimento','Capilar'] },
  { id:'area',        label:'Área do corpo',    values:['Rosto','Pescoço','Barriga','Glúteos','Pernas','Braços','Corpo todo'] },
  { id:'perfil',      label:'Perfil / Público', values:['Profissional','Paciente','Modelo','Homem','Mulher'] },
  { id:'formato',     label:'Formato',          values:['9:16','4:5','1:1','16:9','A4'], single:true },
];
const TAX_FLAGS = ['Novo','Antes/Depois','Com IA','Editável','Destaque','Pronto p/ imprimir'];
function taxValues(dim) { return dim.values || (typeof EQUIPMENT !== 'undefined' ? EQUIPMENT.map(e => e.name) : []); }

const RECENT = [
  { type:'pdf', title:'Protocolo Corporal HIPRO', sub:'HIPRO · Documentos', size:'2.4 MB', when:'Há 2 horas' },
  { type:'img', title:'Imagens de Aplicação Enygma', sub:'Enygma · Imagens', size:'12.6 MB', when:'Há 5 horas' },
  { type:'vid', title:'Vídeo Treinamento Focuskin', sub:'Focuskin · Vídeos', size:'256 MB', when:'Há 1 dia' },
  { type:'pdf', title:'Manual do Usuário Crystal 3D', sub:'Crystal 3D · Documentos', size:'3.1 MB', when:'Há 1 dia' },
  { type:'ppt', title:'Apresentação Institucional 2024', sub:'Institucional · Gráficos', size:'8.7 MB', when:'Há 2 dias' },
];
const STATS = [
  { icon:'package', label:'Equipamentos cadastrados', value:'36' },
  { icon:'folder', label:'Materiais disponíveis', value:'1.248' },
  { icon:'download', label:'Downloads este mês', value:'327' },
  { icon:'ticket', label:'Chamados abertos', value:'2' },
];
const ACTIONS = [
  { icon:'plus', text:'Solicitar novo material', modal:'modal-solicitar' },
  { icon:'headphones', text:'Abrir chamado de suporte', modal:'modal-solicitar' },
  { icon:'wrench', text:'Ver meus equipamentos' },
  { icon:'grad', text:'Acessar treinamentos' },
  { icon:'message', text:'Enviar feedback', modal:'modal-solicitar' },
];

/* ---- Render ---- */
function renderNav() {
  const el = document.getElementById('nav');
  el.innerHTML = NAV.map((sec, si) => {
    const ac = sec.admin ? ' nav-admin' : '';   // grupo de admin -> some no modo cliente
    return `
    ${si ? `<div class="side-divider${ac}"></div>` : ''}
    <span class="nav-label${ac}">${sec.label}</span>
    ${sec.items.map(it => {
      // submenu dinâmico (ex.: 'marcas' = lista as marcas do sistema)
      const sub = it.dynamic === 'marcas'
        ? (typeof MARCAS !== 'undefined' ? MARCAS : []).map(m => ({ l: m, r: '#/marca/' + encodeURIComponent(m) }))
        : it.sub;
      const hasSub = sub && sub.length;
      return `
      <div class="nav-item${ac} ${hasSub?'has-sub':''}" title="${it.text}" ${it.route?`data-route="${it.route}"`:''} ${it.modal?`data-open-modal="${it.modal}"`:''}>
        ${svgIcon(it.icon)}<span>${it.text}</span>
        ${hasSub ? `<span class="chev">${svgIcon('chevR','ic ic-sm')}</span>` : ''}
      </div>
      ${hasSub ? `<div class="nav-sub">${sub.map(s=> typeof s==='string' ? `<a>${s}</a>` : `<a href="${s.r}">${s.l}</a>`).join('')}</div>` : ''}`;
    }).join('')}
  `;
  }).join('');
  // delegação: abre/fecha submenu (has-sub) ou navega (data-route)
  el.addEventListener('click', e => {
    const sub = e.target.closest('.nav-item.has-sub');
    if (sub) {
      e.preventDefault();
      sub.classList.toggle('open');
      const ns = sub.nextElementSibling;
      if (ns && ns.classList.contains('nav-sub')) ns.classList.toggle('show');
      Sound.click && Sound.click();
      return;
    }
    const r = e.target.closest('.nav-item[data-route]');
    if (r) { location.hash = r.dataset.route; Sound.click && Sound.click(); }
  });
  highlightNav();
  window.addEventListener('hashchange', highlightNav);
}
// destaca o item de menu da rota atual
function highlightNav() {
  const h = location.hash || '#/';
  const base = '#/' + (h.replace(/^#\/?/, '').split('/')[0]);   // #/, #/buscar, #/categoria...
  document.querySelectorAll('#nav .nav-item[data-route]').forEach(it => {
    const r = it.dataset.route;
    it.classList.toggle('active', r === base || (r === '#/' && base === '#/'));
  });
}
/* capa: ponto focal + imagem escolhidos pelo admin (salvos por equipamento) */
function eqPos(name)   { return localStorage.getItem('cl-eq-pos:' + name) || '50% 50%'; }
function eqCover(name, fallback) {
  const s = localStorage.getItem('cl-eq-cover:' + name) || fallback || '';
  return /^data:/.test(s) ? s : encodeURI(s);
}
function eqCover2(name) { return localStorage.getItem('cl-eq-cover2:' + name) || ''; }
function eqPos2(name)   { return localStorage.getItem('cl-eq-pos2:' + name) || eqPos(name); }
/* TRANSFORM (admin): posição (pan), zoom (escala), rotação — por equipamento e por slot.
   slot 1 = capa · 2 = hover · 3 = banner do topo. Guardado como JSON {x,y,s,r}. */
function eqXf(name, slot) {
  try { const j = JSON.parse(localStorage.getItem('cl-eq-xf:' + name + ':' + slot)); if (j && typeof j === 'object') return j; } catch (_) {}
  return null;
}
/* devolve o style inline: usa CSS vars (--ox/--oy/--os/--or) p/ o transform compor com o zoom de hover.
   se não houver transform salvo, cai no object-position legado. */
function xfStyle(name, slot, legacyPos) {
  const t = eqXf(name, slot);
  if (t) return `--ox:${t.x}%;--oy:${t.y}%;--os:${t.s};--or:${t.r}deg;object-position:50% 50%`;
  return `object-position:${legacyPos || '50% 50%'}`;
}
function eqInitials(e) {
  const name = (e.name || '').trim();
  const words = name.replace(/[^A-Za-zÀ-ÿ0-9 ]/g, '').split(/\s+/).filter(Boolean);
  const ini = (words.length >= 2 ? (words[0][0] + words[1][0]) : name.slice(0, 2)).toUpperCase();
  return `<span class="eq-ph2"><b>${ini || '–'}</b></span>`;   // sem foto -> sigla num gradiente (estilo Central)
}
function eqCardHTML(e) {
  const src = eqCover(e.name, e.img);
  const src2 = eqCover2(e.name);          // 2ª imagem (aparece no hover) — opcional
  return `
    <a class="eq-card${src2 ? ' has-hover' : ''}" href="#/categoria/${encodeURIComponent(e.name)}" data-eq="${e.name}" data-cod="${e.codigo || ''}">
      <div class="eq-thumb">
        ${src ? `<img src="${src}" alt="${e.name}" loading="lazy" style="${xfStyle(e.name, 1, eqPos(e.name))}">` : eqInitials(e)}
        ${src2 ? `<img class="img2" src="${src2}" alt="" loading="lazy" style="${xfStyle(e.name, 2, eqPos2(e.name))}">` : ''}
        <button class="eq-edit" title="Editar capa (admin)">${svgIcon('pencil','ic ic-sm')}</button>
        <button class="eq-cfg" title="Editar textos (admin)">${svgIcon('settings','ic ic-sm')}</button>
        <button class="fav">${svgIcon('bookmark','ic ic-sm')}</button>
      </div>
      <div class="eq-body">
        <h3>${e.name}</h3><p>${e.tag}</p>
        <span class="eq-count">${e.count} materiais</span>
      </div>
    </a>`;
}
const eqAddCard = `<button class="eq-card eq-add" data-add-equip><span class="eq-add-in">${svgIcon('plus','ic')}<b>Adicionar equipamento</b><small>Novo card</small></span></button>`;
function renderEquipment() {
  document.getElementById('eq-row').innerHTML = EQUIPMENT.map(eqCardHTML).join('') + eqAddCard;
}
function renderEquipmentGrid() {
  document.getElementById('eq-grid').innerHTML = EQUIPMENT.map(eqCardHTML).join('') + eqAddCard;
}
/* aplica edições/adições/ocultações de equipamentos salvas no localStorage (overlay sobre o EQUIPMENT base) */
function applyEquipEdits() {
  let ov = {}, ex = [], hid = [];
  try { ov = JSON.parse(localStorage.getItem('cl-equip-ov') || '{}'); } catch (_) {}
  try { ex = JSON.parse(localStorage.getItem('cl-equip-extra') || '[]'); } catch (_) {}
  try { hid = JSON.parse(localStorage.getItem('cl-equip-hidden') || '[]'); } catch (_) {}
  EQUIPMENT.forEach(e => { if (e.codigo && ov[e.codigo]) Object.assign(e, ov[e.codigo]); });
  ex.forEach(x => { if (!EQUIPMENT.some(e => e.codigo === x.codigo)) EQUIPMENT.push(x); });
  for (let i = EQUIPMENT.length - 1; i >= 0; i--) if (hid.includes(EQUIPMENT[i].codigo)) EQUIPMENT.splice(i, 1);
}
/* editor de CARD do equipamento (textos) + adicionar/excluir — admin */
function initEquipEditor() {
  const bd = document.getElementById('modal-eqcard'); if (!bd) return;
  const G = id => document.getElementById(id);
  let curCod = null;
  const reRender = () => {
    if (document.getElementById('eq-row')) renderEquipment();
    if (document.getElementById('eq-grid')) renderEquipmentGrid();
    if (location.hash.indexOf('#/categoria/') === 0 && window.__route) window.__route();
  };
  const fillMarcas = () => { const dl = G('eqc-marcas'); if (dl && typeof MARCAS !== 'undefined') dl.innerHTML = MARCAS.map(m => `<option value="${m}">`).join(''); };
  window.__editEquip = cod => {
    const e = EQUIPMENT.find(x => x.codigo === cod); if (!e) return;
    curCod = cod;
    G('eqc-title').textContent = 'Editar — ' + (e.name || '');
    G('eqc-name').value = e.name || ''; G('eqc-tag').value = e.tag || ''; G('eqc-count').value = e.count || 0;
    G('eqc-marca').value = e.marca || ''; G('eqc-linha').value = e.linha || 'Estética';
    G('eqc-del').hidden = false; G('eqc-img').hidden = false;
    fillMarcas(); UI.openModal('modal-eqcard');
  };
  window.__newEquip = () => {
    curCod = null;
    G('eqc-title').textContent = 'Novo equipamento';
    G('eqc-name').value = ''; G('eqc-tag').value = ''; G('eqc-count').value = 0; G('eqc-marca').value = ''; G('eqc-linha').value = 'Estética';
    G('eqc-del').hidden = true; G('eqc-img').hidden = true;   // imagem só depois de criar o card
    fillMarcas(); UI.openModal('modal-eqcard');
  };
  G('eqc-img').addEventListener('click', () => { const e = EQUIPMENT.find(x => x.codigo === curCod); if (e) { UI.closeModal(bd); window.__editCover && window.__editCover(e.name); } });
  G('eqc-save').addEventListener('click', () => {
    const name = (G('eqc-name').value || '').trim(); if (!name) { Toast.error('Dê um nome ao equipamento.'); return; }
    const data = { name, tag: (G('eqc-tag').value || '').trim(), count: +G('eqc-count').value || 0, marca: (G('eqc-marca').value || '').trim(), linha: G('eqc-linha').value };
    if (curCod) {
      const e = EQUIPMENT.find(x => x.codigo === curCod); if (e) Object.assign(e, data);
      let ov = {}; try { ov = JSON.parse(localStorage.getItem('cl-equip-ov') || '{}'); } catch (_) {}
      ov[curCod] = data; localStorage.setItem('cl-equip-ov', JSON.stringify(ov));
    } else {
      const cod = 'EQ' + Date.now(), e = Object.assign({ codigo: cod, img: '' }, data);
      EQUIPMENT.push(e);
      let ex = []; try { ex = JSON.parse(localStorage.getItem('cl-equip-extra') || '[]'); } catch (_) {}
      ex.push(e); localStorage.setItem('cl-equip-extra', JSON.stringify(ex));
    }
    UI.closeModal(bd); Sound.success && Sound.success(); Toast.success('Equipamento salvo!'); reRender();
  });
  G('eqc-del').addEventListener('click', () => {
    if (!curCod || !confirm('Remover este equipamento do card?')) return;
    let ex = []; try { ex = JSON.parse(localStorage.getItem('cl-equip-extra') || '[]'); } catch (_) {}
    if (ex.some(x => x.codigo === curCod)) { localStorage.setItem('cl-equip-extra', JSON.stringify(ex.filter(x => x.codigo !== curCod))); }
    else { let hid = []; try { hid = JSON.parse(localStorage.getItem('cl-equip-hidden') || '[]'); } catch (_) {} if (!hid.includes(curCod)) hid.push(curCod); localStorage.setItem('cl-equip-hidden', JSON.stringify(hid)); }
    const idx = EQUIPMENT.findIndex(x => x.codigo === curCod); if (idx >= 0) EQUIPMENT.splice(idx, 1);
    UI.closeModal(bd); Toast.info('Equipamento removido.'); reRender();
  });
}
function renderRecent() {
  document.getElementById('recent').innerHTML = RECENT.map(r => {
    const ic = { pdf:'file', img:'image', vid:'video', ppt:'ppt' }[r.type] || 'file';
    return `<div class="rm-item">
      <div class="rm-ic ${r.type}">${svgIcon(ic)}</div>
      <div class="meta"><b>${r.title}</b><span>${r.sub} · ${r.size} · ${r.when}</span></div>
      <button class="dl">${svgIcon('download','ic ic-sm')}</button>
    </div>`; }).join('');
}
function renderStats() {
  document.getElementById('stats').innerHTML = STATS.map(s => `
    <div class="stat"><div class="si">${svgIcon(s.icon)}</div><div class="meta">${s.label}</div><b>${s.value}</b></div>`).join('');
}
function renderActions() {
  document.getElementById('actions').innerHTML = ACTIONS.map(a => `
    <div class="qa" ${a.modal?`data-open-modal="${a.modal}"`:''}>${svgIcon(a.icon)}<span>${a.text}</span><span class="chev">${svgIcon('chevR','ic ic-sm')}</span></div>`).join('');
}

/* expõe helpers p/ as views (mesmo escopo global de scripts clássicos) */
window.renderIcons = renderIcons; window.svgIcon = svgIcon;

/* ============================================================
   SHELL — roda UMA vez (sidebar, topbar, modais, picker de capa)
   ============================================================ */
/* LOGO PARTNERZONE — remove o fundo branco do PNG e separa anel + wordmark (canvas) */
function processLogo(src) {
  return new Promise((res, rej) => {
    const im = new Image(); im.crossOrigin = 'anonymous';
    im.onload = () => {
      const W = im.naturalWidth, H = im.naturalHeight;
      const c = document.createElement('canvas'); c.width = W; c.height = H;
      const x = c.getContext('2d'); x.drawImage(im, 0, 0);
      let d; try { d = x.getImageData(0, 0, W, H); } catch (e) { return rej(e); }
      const p = d.data;
      // a logo JÁ é transparente: NÃO remover "branco" (isso quebra o texto claro do "Partner").
      // só medimos o alfa original pra achar o recorte e separar o anel da palavra.
      const colHas = new Uint8Array(W), rowHas = new Uint8Array(H);
      for (let y = 0; y < H; y++) for (let xx = 0; xx < W; xx++) if (p[(y * W + xx) * 4 + 3] > 30) { colHas[xx] = 1; rowHas[y] = 1; }
      let y0 = 0, y1 = H - 1; while (y0 < H && !rowHas[y0]) y0++; while (y1 > 0 && !rowHas[y1]) y1--;
      const ih = Math.max(1, y1 - y0 + 1);
      const gap = Math.max(6, Math.round(W * 0.012)); const segs = []; let s = -1, run = 0;
      for (let xx = 0; xx < W; xx++) {
        if (colHas[xx]) { if (s < 0) s = xx; run = 0; }
        else if (s >= 0) { run++; if (run >= gap) { segs.push([s, xx - run]); s = -1; run = 0; } }
      }
      if (s >= 0) segs.push([s, W - 1]);
      const crop = (x0, x1) => { const cw = Math.max(1, x1 - x0 + 1), cc = document.createElement('canvas'); cc.width = cw; cc.height = ih;
        cc.getContext('2d').drawImage(c, x0, y0, cw, ih, 0, 0, cw, ih); return cc.toDataURL('image/png'); };
      let mark, word;
      if (segs.length >= 2) { mark = crop(segs[0][0], segs[0][1]); word = crop(segs[1][0], segs[segs.length - 1][1]); }
      else if (segs.length === 1) { const a = segs[0][0], bb = segs[0][1], sq = Math.min(ih, bb - a + 1); mark = crop(a, a + sq - 1); word = crop(a, bb); }
      else { mark = src; word = src; }
      res({ mark, word });
    };
    im.onerror = rej; im.src = src;
  });
}
function initPartnerLogo() {
  const markEl = document.querySelector('.brand .brand-logo');
  const wordEl = document.querySelector('.brand .brand-name b');
  if (!markEl || !wordEl) return;
  const apply = o => { if (!o || !o.mark) return;
    markEl.innerHTML = `<img class="pz-mark" src="${o.mark}" alt="">`;
    wordEl.innerHTML = `<img class="pz-word" src="${o.word}" alt="PartnerZone">`;
    document.querySelector('.brand')?.classList.add('has-logo');
  };
  let cached = null; try { cached = JSON.parse(localStorage.getItem('cl-pz-logo-v2')); } catch (_) {}
  if (cached && cached.mark) { apply(cached); return; }
  processLogo('assets/partnerzone-logo.png?v=2')
    .then(o => { apply(o); try { localStorage.setItem('cl-pz-logo-v2', JSON.stringify(o)); } catch (_) {} })
    .catch(() => {});
}

function initShell() {
  applyEquipEdits();   // aplica edições/adições de equipamentos antes de renderizar
  renderNav();
  initPartnerLogo();
  renderIcons();                       // ícones dos placeholders do shell
  Theme.mount(document.getElementById('theme-switcher'));
  UI.smokeGlow && UI.smokeGlow(document.getElementById('theme-btn'));
  UI.init();

  // toggle de som
  const sb = document.getElementById('sound-btn');
  sb?.addEventListener('click', () => { const on = Sound.toggle(); sb.style.opacity = on ? '1' : '.45'; sb.title = on ? 'Som ativado' : 'Som desativado'; });

  // sidebar mobile
  const sidebar = document.getElementById('sidebar'), scrim = document.getElementById('scrim');
  document.querySelector('.menu-toggle')?.addEventListener('click', () => { sidebar.classList.add('open'); scrim.classList.add('show'); });
  scrim?.addEventListener('click', () => { sidebar.classList.remove('open'); scrim.classList.remove('show'); });

  // recolher menu (persistente)
  const setCollapsed = v => { sidebar.classList.toggle('collapsed', v); localStorage.setItem('cl-collapsed', v ? '1' : '0'); };
  if (localStorage.getItem('cl-collapsed') === '1') sidebar.classList.add('collapsed');
  document.querySelector('.brand .collapse')?.addEventListener('click', () => setCollapsed(!sidebar.classList.contains('collapsed')));
  document.querySelector('.brand-logo')?.addEventListener('click', () => { if (sidebar.classList.contains('collapsed')) setCollapsed(false); });

  // fecha autocomplete da busca do hero ao clicar fora
  document.addEventListener('click', e => {
    const search = document.getElementById('search');
    if (search && !search.contains(e.target)) search.classList.remove('open');
  });

  // enviar solicitação (modal do shell)
  document.getElementById('enviar-sol')?.addEventListener('click', () => {
    Sound.success();
    document.querySelectorAll('.modal-bd.open').forEach(m => UI.closeModal(m));
    Toast.success('Solicitação enviada com sucesso!');
  });

  // card de equipamento: fav / editar capa (delegação global; não navega)
  document.addEventListener('click', e => {
    const add = e.target.closest('[data-add-equip]');
    if (add) { e.preventDefault(); e.stopPropagation(); window.__newEquip?.(); return; }
    const fav = e.target.closest('.eq-card .fav');
    if (fav) { e.preventDefault(); e.stopPropagation(); fav.classList.toggle('on'); return; }
    const ed = e.target.closest('.eq-card .eq-edit');
    if (ed) { e.preventDefault(); e.stopPropagation();
      const name = ed.closest('.eq-card')?.dataset.eq;
      if (name) window.__editCover?.(name); return;
    }
    const cfg = e.target.closest('.eq-card .eq-cfg');
    if (cfg) { e.preventDefault(); e.stopPropagation();
      const cod = cfg.closest('.eq-card')?.dataset.cod;
      if (cod) window.__editEquip?.(cod);
    }
  });

  // links de info do rodapé (ex.: Privacidade) → toast
  document.addEventListener('click', e => {
    const info = e.target.closest('[data-foot-info]');
    if (info) { e.preventDefault(); Toast.info(info.dataset.footInfo); }
  });

  initCoverPicker();
  initCmdK();
  initUpload();
  initPdfModal();
  initImgModal();
  initFavModal();
  Sel.init();
  Player.init();
  initPlaylistModal();
  initEquipEditor();
  initUserBtn();
}

/* ============================================================
   COMMAND PALETTE (⌘K) — busca rápida de equipamentos e ações
   ============================================================ */
function initCmdK() {
  const bd = document.getElementById('cmdk'); if (!bd) return;
  const input = document.getElementById('cmdk-q');
  const list  = document.getElementById('cmdk-results');
  let items = [], filtered = [], active = 0;

  function build() {
    const acts = [
      { ic:'home',       label:'Início',                    sub:'Página', run:() => location.hash = '#/' },
      { ic:'search',     label:'Biblioteca de Materiais',   sub:'Página', run:() => location.hash = '#/buscar' },
      { ic:'package',    label:'Todos os equipamentos',     sub:'Página', run:() => location.hash = '#/equipamentos' },
      { ic:'send',       label:'Solicitar material',        sub:'Ação',   run:() => UI.openModal('modal-solicitar') },
      { ic:'headphones', label:'Abrir chamado de suporte',  sub:'Ação',   run:() => UI.openModal('modal-solicitar') },
    ];
    const eqs = (typeof EQUIPMENT !== 'undefined' ? EQUIPMENT : []).map(e =>
      ({ ic:'cpu', label:e.name, sub:e.tag || 'Equipamento', run:() => location.hash = '#/categoria/' + encodeURIComponent(e.name) }));
    items = acts.concat(eqs);
  }
  function render() {
    list.innerHTML = filtered.length ? filtered.map((it, i) => `
      <button class="cmdk-item ${i === active ? 'on' : ''}" data-i="${i}">
        <span class="ci-ic">${svgIcon(it.ic)}</span>
        <span class="ci-label">${it.label}</span>
        <span class="ci-sub">${it.sub}</span>
      </button>`).join('') : `<div class="cmdk-empty">Nada encontrado</div>`;
  }
  function filter() {
    const q = input.value.trim().toLowerCase();
    filtered = !q ? items.slice() : items.filter(it => (it.label + ' ' + it.sub).toLowerCase().includes(q));
    active = 0; render();
  }
  function open() {
    build(); input.value = ''; filter(); bd.classList.add('open');
    document.body.style.overflow = 'hidden'; setTimeout(() => input.focus(), 30);
  }
  function close() { bd.classList.remove('open'); document.body.style.overflow = ''; }
  function run(i) { const it = filtered[i]; if (!it) return; close(); Sound.click && Sound.click(); it.run(); }
  const scrollActive = () => list.querySelector('.cmdk-item.on')?.scrollIntoView({ block: 'nearest' });

  input.addEventListener('input', filter);
  list.addEventListener('click', e => { const b = e.target.closest('.cmdk-item'); if (b) run(+b.dataset.i); });
  bd.addEventListener('click', e => { if (e.target === bd) close(); });
  input.addEventListener('keydown', e => {
    if (e.key === 'ArrowDown') { e.preventDefault(); active = Math.min(active + 1, filtered.length - 1); render(); scrollActive(); }
    else if (e.key === 'ArrowUp') { e.preventDefault(); active = Math.max(active - 1, 0); render(); scrollActive(); }
    else if (e.key === 'Enter') { e.preventDefault(); run(active); }
    else if (e.key === 'Escape') { close(); }
  });
  document.addEventListener('keydown', e => {
    if ((e.metaKey || e.ctrlKey) && (e.key === 'k' || e.key === 'K')) { e.preventDefault(); bd.classList.contains('open') ? close() : open(); }
    else if (e.key === 'Escape' && bd.classList.contains('open')) close();
  });
  // a busca do topo é só um gatilho: clicar abre o palette
  document.querySelectorAll('.topsearch').forEach(ts => {
    const i = ts.querySelector('input'); if (i) i.readOnly = true;
    ts.addEventListener('click', e => { e.preventDefault(); open(); });
  });
  window.__openCmdK = open;
}

/* EDITOR DE IMAGEM (admin): posição (arrastar) · zoom (escala) · rotação — por slot.
   slot 1 = capa · 2 = hover · 3 = banner do topo. Guarda {x,y,s,r} em cl-eq-xf:NAME:slot */
function initCoverPicker() {
  const capaModal = document.getElementById('modal-capa'); if (!capaModal) return;
  const stage   = document.getElementById('cover-pick');
  const imgEl   = document.getElementById('cover-img');
  const empty   = document.getElementById('cover-empty');
  const tabs    = capaModal.querySelectorAll('.ctab');
  const addLabel= document.getElementById('cover-add-label');
  const clearBtn= document.getElementById('cover-clear');
  const emptySub= document.getElementById('cover-empty-sub');
  const zoom    = document.getElementById('xf-zoom');
  const rot     = document.getElementById('xf-rot');
  const zoomV   = document.getElementById('xf-zoom-v');
  const rotV    = document.getElementById('xf-rot-v');
  const ctrls   = document.getElementById('xf-controls');

  const SUB = { '1': 'A capa que aparece no card do equipamento.',
                '2': 'A foto que aparece ao passar o mouse — ex: de lado ou com modelo.',
                '3': 'Banner que vira o FUNDO do topo da página (ex: a arte com ondas).' };
  const ASPECT = { '1': '4 / 5', '2': '4 / 5', '3': '16 / 7' };   // o frame imita o destino real

  const NEW = () => ({ src: '', x: 0, y: 0, s: 1, r: 0, changed: false });
  let curName = null, editing = '1';
  let slots = { '1': NEW(), '2': NEW(), '3': NEW() };
  const cur = () => slots[editing];
  const clamp = (v, lo, hi) => Math.max(lo, Math.min(hi, v));

  // aplica o transform no preview + sincroniza sliders/labels
  function apply() {
    const c = cur();
    imgEl.style.transform = `translate(${c.x}%, ${c.y}%) scale(${c.s}) rotate(${c.r}deg)`;
    imgEl.style.objectPosition = '50% 50%';
    zoom.value = c.s; rot.value = c.r;
    zoomV.textContent = Math.round(c.s * 100) + '%';
    rotV.textContent = c.r + '°';
  }
  function refresh() {
    const c = cur(), has = !!c.src;
    stage.style.aspectRatio = ASPECT[editing];
    if (has) { imgEl.style.visibility = 'visible'; imgEl.src = c.src; apply(); }
    else { imgEl.style.visibility = 'hidden'; }
    empty.hidden = has;                         // placeholder sempre que o slot está vazio
    ctrls.style.display = has ? '' : 'none';    // controles só com imagem
    addLabel.textContent = has ? 'Trocar imagem' : 'Adicionar imagem';
    clearBtn.hidden = !(editing !== '1' && has);
    if (emptySub) emptySub.textContent = SUB[editing] || 'Clique para escolher a foto.';
    tabs.forEach(t => t.classList.toggle('on', t.dataset.img === editing));
  }

  tabs.forEach(t => t.addEventListener('click', () => { editing = t.dataset.img; refresh(); Sound.click && Sound.click(); }));
  empty.addEventListener('click', () => document.getElementById('cover-file').click());

  // ---- sliders ----
  zoom.addEventListener('input', () => { cur().s = +zoom.value; apply(); });
  rot.addEventListener('input',  () => { cur().r = +rot.value;  apply(); });

  // ---- arrastar pra posicionar (pan) ----
  let drag = null;
  imgEl.addEventListener('pointerdown', e => {
    if (!cur().src) return;
    e.preventDefault(); e.stopPropagation();   // impede o drag-scroll do modal de mexer junto
    const r = stage.getBoundingClientRect();
    drag = { px: e.clientX, py: e.clientY, w: r.width, h: r.height, x0: cur().x, y0: cur().y };
    stage.classList.add('dragging');
    imgEl.setPointerCapture && imgEl.setPointerCapture(e.pointerId);
  });
  imgEl.addEventListener('pointermove', e => {
    if (!drag) return;
    const c = cur();
    c.x = clamp(drag.x0 + (e.clientX - drag.px) / drag.w * 100, -300, 300);
    c.y = clamp(drag.y0 + (e.clientY - drag.py) / drag.h * 100, -300, 300);
    imgEl.style.transform = `translate(${c.x}%, ${c.y}%) scale(${c.s}) rotate(${c.r}deg)`;
  });
  const endDrag = () => { drag = null; stage.classList.remove('dragging'); };
  imgEl.addEventListener('pointerup', endDrag);
  imgEl.addEventListener('pointercancel', endDrag);

  // ---- roda do mouse = zoom ----
  stage.addEventListener('wheel', e => {
    if (!cur().src) return;
    e.preventDefault();
    const c = cur();
    c.s = clamp(+(c.s + (e.deltaY < 0 ? 0.06 : -0.06)).toFixed(2), 0.4, 4);
    apply();
  }, { passive: false });

  // ---- pad de posição (nudge) + centralizar ----
  document.getElementById('xf-pad').addEventListener('click', e => {
    const b = e.target.closest('button[data-nudge]'); if (!b) return;
    const c = cur(), n = b.dataset.nudge;
    if (n === 'c') { c.x = 0; c.y = 0; }
    else { const [dx, dy] = n.split(',').map(Number); c.x = clamp(c.x + dx, -300, 300); c.y = clamp(c.y + dy, -300, 300); }
    apply(); Sound.click && Sound.click();
  });
  // ---- girar 90° / resetar ----
  document.querySelector('.xf-quick').addEventListener('click', e => {
    const b = e.target.closest('button'); if (!b) return;
    const c = cur();
    if (b.id === 'xf-reset') { c.x = 0; c.y = 0; c.s = 1; c.r = 0; }
    else if (b.dataset.rot) { let r = c.r + (+b.dataset.rot); while (r > 180) r -= 360; while (r < -180) r += 360; c.r = r; }
    apply(); Sound.click && Sound.click();
  });

  // helper: lê + redimensiona (1400px) + comprime (WebP) → dataURL pequeno que cabe no storage
  function compressImg(file, cb) {
    if (!/^image\//.test(file.type)) { Toast.error('Selecione uma imagem (PNG, JPG ou WebP).'); return; }
    const rd = new FileReader();
    rd.onload = () => {
      const img = new Image();
      img.onload = () => {
        const MAX = 1400;
        let w = img.naturalWidth, h = img.naturalHeight;
        if (Math.max(w, h) > MAX) { const s = MAX / Math.max(w, h); w = Math.round(w * s); h = Math.round(h * s); }
        const c = document.createElement('canvas'); c.width = w; c.height = h;
        c.getContext('2d').drawImage(img, 0, 0, w, h);
        let out;
        try { out = c.toDataURL('image/webp', 0.82); } catch (_) {}
        if (!out || out.indexOf('data:image/webp') !== 0) out = c.toDataURL('image/jpeg', 0.85);
        cb(out);
      };
      img.onerror = () => Toast.error('Não consegui abrir essa imagem. Tente PNG ou JPG.');
      img.src = rd.result;
    };
    rd.onerror = () => Toast.error('Falha ao ler o arquivo.');
    rd.readAsDataURL(file);
  }

  document.getElementById('cover-file').addEventListener('change', e => {
    const f = e.target.files && e.target.files[0]; if (!f) return;
    compressImg(f, out => {
      const c = cur(); c.src = out; c.changed = true;
      c.x = 0; c.y = 0; c.s = 1; c.r = 0;   // imagem nova começa centralizada
      refresh();
    });
    e.target.value = '';   // permite re-selecionar o mesmo arquivo
  });
  clearBtn.addEventListener('click', () => { slots[editing] = NEW(); refresh(); });

  document.getElementById('cover-save').addEventListener('click', () => {
    let erro = null;
    if (curName) {
      const xf = c => JSON.stringify({ x: +c.x.toFixed(2), y: +c.y.toFixed(2), s: +c.s.toFixed(3), r: c.r | 0 });
      try {
        // slot 1 — capa
        const s1 = slots['1'];
        if (s1.changed && s1.src) localStorage.setItem('cl-eq-cover:' + curName, s1.src);
        localStorage.setItem('cl-eq-xf:' + curName + ':1', xf(s1));
        localStorage.removeItem('cl-eq-pos:' + curName);
        // slot 2 — hover
        const s2 = slots['2'];
        if (s2.src) { localStorage.setItem('cl-eq-cover2:' + curName, s2.src); localStorage.setItem('cl-eq-xf:' + curName + ':2', xf(s2)); }
        else { localStorage.removeItem('cl-eq-cover2:' + curName); localStorage.removeItem('cl-eq-xf:' + curName + ':2'); localStorage.removeItem('cl-eq-pos2:' + curName); }
        // slot 3 — banner do topo
        const s3 = slots['3'];
        if (s3.src) { localStorage.setItem('cl-eq-hero:' + curName, s3.src); localStorage.setItem('cl-eq-xf:' + curName + ':3', xf(s3)); }
        else { localStorage.removeItem('cl-eq-hero:' + curName); localStorage.removeItem('cl-eq-xf:' + curName + ':3'); localStorage.removeItem('cl-eq-heropos:' + curName); }
      } catch (err) { erro = err; }
      if (document.getElementById('eq-row'))  renderEquipment();
      if (document.getElementById('eq-grid')) renderEquipmentGrid();
      if (location.hash.indexOf('#/categoria/') === 0 && window.__route) window.__route();
    }
    document.querySelectorAll('.modal-bd.open').forEach(m => UI.closeModal(m));   // SEMPRE fecha
    if (erro) { Toast.error('Sem espaço pra salvar a imagem. Tente uma menor.'); return; }
    Sound.success && Sound.success();
    Toast.success(curName ? ('Imagem salva! — ' + curName) : 'Imagem salva!');
  });

  window.__editCover = (name) => {
    curName = name; editing = '1';
    const e = EQUIPMENT.find(x => x.name === name) || {};
    const load = (slot, src) => { const t = eqXf(name, slot) || { x: 0, y: 0, s: 1, r: 0 };
      return { src: src || '', x: t.x || 0, y: t.y || 0, s: t.s || 1, r: t.r || 0, changed: false }; };
    slots = {
      '1': load('1', eqCover(name, e.img)),
      '2': load('2', eqCover2(name)),
      '3': load('3', localStorage.getItem('cl-eq-hero:' + name) || ''),
    };
    refresh();
    UI.openModal('modal-capa');
  };
}

/* ============================================================
   PORTFÓLIO POR MARCA — PDF guardado em IndexedDB (não estoura o storage)
   + visualizador de PDF (igual o portfólio da Lumenis)
   ============================================================ */
function fmtBytes(n) {
  if (n >= 1048576) return (n / 1048576).toFixed(1) + ' MB';
  if (n >= 1024) return Math.round(n / 1024) + ' KB';
  return n + ' B';
}
const PortfolioDB = (() => {
  let dbp = null;
  function open() {
    if (dbp) return dbp;
    dbp = new Promise((res, rej) => {
      const r = indexedDB.open('cl-portfolios', 1);
      r.onupgradeneeded = () => { if (!r.result.objectStoreNames.contains('pdf')) r.result.createObjectStore('pdf'); };
      r.onsuccess = () => res(r.result);
      r.onerror = () => rej(r.error);
    });
    return dbp;
  }
  const tx = (mode, fn) => open().then(db => new Promise((res, rej) => {
    const t = db.transaction('pdf', mode), st = t.objectStore('pdf'); let out;
    out = fn(st); t.oncomplete = () => res(out && typeof out === 'object' && 'result' in out ? out.result : out); t.onerror = () => rej(t.error);
  }));
  return {
    get: brand => tx('readonly', st => st.get(brand)),
    set: (brand, rec) => tx('readwrite', st => st.put(rec, brand)),
    del: brand => tx('readwrite', st => st.delete(brand)),
  };
})();

/* logos por marca — array {id,title,size,dl,blob} guardado em IndexedDB */
const LogosDB = (() => {
  let dbp = null;
  function open() {
    if (dbp) return dbp;
    dbp = new Promise((res, rej) => {
      const r = indexedDB.open('cl-logos', 1);
      r.onupgradeneeded = () => { if (!r.result.objectStoreNames.contains('logos')) r.result.createObjectStore('logos'); };
      r.onsuccess = () => res(r.result);
      r.onerror = () => rej(r.error);
    });
    return dbp;
  }
  const tx = (mode, fn) => open().then(db => new Promise((res, rej) => {
    const t = db.transaction('logos', mode), st = t.objectStore('logos'); const out = fn(st);
    t.oncomplete = () => res(out && typeof out === 'object' && 'result' in out ? out.result : out); t.onerror = () => rej(t.error);
  }));
  return {
    get: brand => tx('readonly', st => st.get(brand)),
    set: (brand, arr) => tx('readwrite', st => st.put(arr, brand)),
  };
})();

/* analisa imagem: proporção (w/h) + se a "tinta" é clara (→ fundo escuro) */
function analyzeImg(file) {
  return new Promise(res => {
    const u = URL.createObjectURL(file), im = new Image();
    im.onload = () => {
      const ar = (im.naturalWidth && im.naturalHeight) ? im.naturalWidth / im.naturalHeight : 1.6;
      let darkBg = false;
      try {
        const S = 40, c = document.createElement('canvas'); c.width = S; c.height = S;
        const x = c.getContext('2d'); x.drawImage(im, 0, 0, S, S);
        const d = x.getImageData(0, 0, S, S).data; let s = 0, n = 0;
        for (let i = 0; i < d.length; i += 4) { if (d[i + 3] < 40) continue; s += 0.2126 * d[i] + 0.7152 * d[i + 1] + 0.0722 * d[i + 2]; n++; }
        if (n > 20) darkBg = (s / n) > 150;   // tinta clara → precisa de fundo escuro
      } catch (_) {}
      URL.revokeObjectURL(u); res({ ar: +ar.toFixed(3), darkBg });
    };
    im.onerror = () => { URL.revokeObjectURL(u); res({ ar: 1.6, darkBg: false }); };
    im.src = u;
  });
}
function dateBR() { const d = new Date(); const p = n => String(n).padStart(2, '0'); return p(d.getDate()) + '/' + p(d.getMonth() + 1) + '/' + d.getFullYear(); }
function safeName(s) { return (s || 'logo').replace(/[\\/:*?"<>|]/g, '_'); }
function fileName(it) { return safeName(it.title || it.t) + '.' + ((it.ext || 'png') + '').toLowerCase(); }

/* ---- FAVORITOS (coleções do usuário, no localStorage) ---- */
const Favorites = {
  read() { try { return JSON.parse(localStorage.getItem('cl-fav') || '{}'); } catch (_) { return {}; } },
  write(o) { try { localStorage.setItem('cl-fav', JSON.stringify(o)); } catch (_) { Toast.error('Sem espaço para salvar favoritos.'); } },
  create(n) { const o = this.read(); if (!o[n]) o[n] = []; this.write(o); },
  add(n, items) { const o = this.read(); const a = o[n] || []; const keys = new Set(a.map(favKey)); items.forEach(it => { if (!keys.has(favKey(it))) a.push(it); }); o[n] = a; this.write(o); },
  removeItem(n, key) { const o = this.read(); if (o[n]) o[n] = o[n].filter(it => favKey(it) !== key); this.write(o); },
  removeCollection(n) { const o = this.read(); delete o[n]; this.write(o); },
};
function favKey(it) { return it.kind + ':' + it.brand + ':' + (it.id || it.title); }
function favItem(x) {
  const b = { kind: x.kind, brand: x.brand, folder: x.folder || 'Logos', id: x.id, title: x.title || x.t, ext: x.ext, size: x.size, ar: x.ar, darkBg: !!x.darkBg };
  if (x.kind === 'wm') { b.variant = x.variant; b.color = x.color; b.word = x.word; b.wm = x.wm; }
  return b;
}

/* ---- DOWNLOAD (1 = direto · vários = ZIP) — sempre na melhor qualidade ---- */
let _jszip;
function loadJSZip() {
  if (_jszip) return _jszip;
  _jszip = new Promise((res, rej) => { const s = document.createElement('script');
    s.src = 'https://cdn.jsdelivr.net/npm/jszip@3.10.1/dist/jszip.min.js'; s.onload = () => res(window.JSZip); s.onerror = rej; document.head.appendChild(s); });
  return _jszip;
}
function downloadBlob(blob, name) {
  const u = URL.createObjectURL(blob), a = document.createElement('a');
  a.href = u; a.download = name; document.body.appendChild(a); a.click(); a.remove(); setTimeout(() => URL.revokeObjectURL(u), 5000);
}
/* desenha a wordmark de amostra num PNG (pra ter o que baixar) */
function wmToBlob(it) {
  return new Promise(res => {
    const ar = it.ar || 2.4, W = 1000, H = Math.max(320, Math.round(W / ar));
    const c = document.createElement('canvas'); c.width = W; c.height = H; const x = c.getContext('2d');
    x.fillStyle = it.darkBg ? '#0f1b30' : '#ffffff'; x.fillRect(0, 0, W, H);
    x.textAlign = 'center'; x.textBaseline = 'middle';
    x.fillStyle = it.variant === 'white' ? '#ffffff' : it.variant === 'color' ? (it.color || '#2f7ff2') : '#111827';
    if (it.variant === 'sym') { x.font = '800 ' + Math.round(H * 0.5) + 'px Inter, Arial, sans-serif'; x.fillText(((it.word || 'C')[0] || 'C').toUpperCase(), W / 2, H / 2); }
    else {
      x.font = '800 ' + Math.round(H * 0.2) + 'px Inter, Arial, sans-serif'; x.fillText((it.word || 'contourline').toUpperCase(), W / 2, H * 0.46);
      x.globalAlpha = .7; x.font = '500 ' + Math.round(H * 0.06) + 'px Inter, Arial, sans-serif'; x.fillText('by contourline', W / 2, H * 0.64); x.globalAlpha = 1;
    }
    c.toBlob(b => res(b), 'image/png');
  });
}
async function itemBlob(it) {
  if (it.kind === 'img') {
    if (it.blob) return it.blob;
    try { const arr = await LogosDB.get(it.brand) || []; const r = arr.find(x => x.id === it.id); return r ? r.blob : null; } catch (_) { return null; }
  }
  return wmToBlob(it);
}
async function downloadItems(items) {
  items = (items || []).filter(Boolean); if (!items.length) return;
  if (items.length === 1) {
    const blob = await itemBlob(items[0]); if (!blob) { Toast.error('Não consegui preparar o arquivo.'); return; }
    downloadBlob(blob, fileName(items[0])); Toast.success('Baixando ' + fileName(items[0])); return;
  }
  const t = Toast.loading('Compactando ' + items.length + ' arquivos…', { closable: true });
  try {
    const JSZip = await loadJSZip(); const zip = new JSZip(); const used = {};
    for (const it of items) { const blob = await itemBlob(it); if (!blob) continue;
      let nm = fileName(it); const base = nm; if (used[base]) nm = nm.replace(/(\.\w+)$/, '-' + (used[base] + 1) + '$1'); used[base] = (used[base] || 0) + 1;
      zip.file(nm, blob); }
    const out = await zip.generateAsync({ type: 'blob' }); downloadBlob(out, 'logos.zip');
    t.update({ type: 'success', msg: 'ZIP pronto — ' + items.length + ' arquivos.', duration: 3500 });
  } catch (_) { t.update({ type: 'error', msg: 'Falha ao compactar.', duration: 3500 }); }
}

/* ---- SELEÇÃO MÚLTIPLA + barra no rodapé ---- */
const Sel = {
  map: new Map(), bar: null, nEl: null, ctx: null,
  init() {
    this.bar = document.getElementById('selbar'); if (!this.bar) return;
    this.nEl = document.getElementById('selbar-n');
    document.getElementById('selbar-clear')?.addEventListener('click', () => this.clear());
    document.getElementById('selbar-dl')?.addEventListener('click', () => downloadItems([...this.map.values()]));
    document.getElementById('selbar-fav')?.addEventListener('click', () => openFavModal([...this.map.values()]));
  },
  attach(ctx) { this.ctx = ctx; this.map.clear(); this.sync(); },
  toggle(key, item) { if (this.map.has(key)) this.map.delete(key); else this.map.set(key, item); this.sync(); return this.map.has(key); },
  drop(key) { this.map.delete(key); this.sync(); },
  has(key) { return this.map.has(key); },
  clear() { this.map.clear(); this.sync(); this.ctx && this.ctx.refresh && this.ctx.refresh(); },
  sync() { const n = this.map.size; if (this.bar) { this.bar.classList.toggle('show', n > 0); if (this.nEl) this.nEl.textContent = n; const d = document.getElementById('selbar-dl'); if (d) d.innerHTML = svgIcon('download', 'ic ic-sm') + (n > 1 ? ' Baixar ZIP' : ' Baixar'); } },
};

/* ---- modal "Favoritar" (escolher/criar coleção) ---- */
let _favPending = [];
function renderFavList() {
  const el = document.getElementById('fav-list'); if (!el) return;
  const cols = Favorites.read(), names = Object.keys(cols);
  el.innerHTML = names.length ? names.map(n =>
    `<button class="favc-row" data-name="${n}"><span class="favc-ic">${svgIcon('heart')}</span><div class="favc-meta"><b>${n}</b><span>${cols[n].length} item(ns)</span></div><span class="favc-add">${svgIcon('plus','ic ic-sm')}</span></button>`).join('')
    : `<div class="fav-empty">Você ainda não tem coleções. Crie uma acima ☝</div>`;
  renderIcons(el);
}
function openFavModal(items) { _favPending = (items || []).filter(Boolean); renderFavList(); UI.openModal('modal-fav'); }
function initFavModal() {
  const bd = document.getElementById('modal-fav'); if (!bd) return;
  const create = () => { const inp = document.getElementById('fav-new-name'); const nm = (inp.value || '').trim(); if (!nm) return; Favorites.create(nm); inp.value = ''; renderFavList(); Sound.click && Sound.click(); };
  document.getElementById('fav-new-go')?.addEventListener('click', create);
  document.getElementById('fav-new-name')?.addEventListener('keydown', e => { if (e.key === 'Enter') create(); });
  document.getElementById('fav-list')?.addEventListener('click', e => {
    const row = e.target.closest('.favc-row'); if (!row) return;
    const name = row.dataset.name; Favorites.add(name, _favPending.map(favItem));
    Sound.success && Sound.success(); Toast.success(_favPending.length + ' item(ns) salvo(s) em "' + name + '"'); UI.closeModal(bd);
  });
}

/* pasta de Logos da marca — GALERIA MASONRY (fundo adaptável, seleção, favoritos) */
async function initBrandLogos(brand, samples) {
  const grid = document.getElementById('brand-logos'); if (!grid) return;
  const searchInp = document.getElementById('blogos-search');
  const countEl = document.getElementById('blogos-count');
  const sizeInp = document.getElementById('blogos-size');
  let uploaded = [];
  try { uploaded = (await LogosDB.get(brand)) || []; } catch (_) {}
  let view = 'masonry', size = +(sizeInp ? sizeInp.value : 240), urls = [], items = [];
  const release = () => { urls.forEach(u => URL.revokeObjectURL(u)); urls = []; };

  function listAll() {
    release();
    const up = uploaded.map(r => {
      const url = URL.createObjectURL(r.blob); urls.push(url);
      return { kind: 'img', key: 'img:' + brand + ':' + r.id, id: r.id, brand, folder: 'Logos', t: r.title, title: r.title,
        size: fmtBytes(r.size), date: r.date || '—', ext: r.ext || 'PNG', ar: r.ar || 1.4, darkBg: !!r.darkBg, url, blob: r.blob };
    });
    const sm = (samples || []).map(s => ({ kind: 'wm', key: 'wm:' + brand + ':' + s.id, id: s.id, brand, folder: 'Logos', t: s.t, title: s.t,
      size: s.size, date: s.date || '01/06/2026', ext: s.ext || 'PNG', ar: s.ar || 1.8, darkBg: !!s.darkBg, variant: s.variant, color: s.color, word: s.word, wm: s.th }));
    return up.concat(sm);
  }
  function itemHTML(x, i, h) {
    const thumb = x.kind === 'img' ? `<img src="${x.url}" alt="${x.t}" loading="lazy">` : x.wm;
    return `<div class="lg-item${Sel.has(x.key) ? ' sel' : ''}" data-i="${i}" title="${x.t}">
      <div class="lg-thumb ${x.darkBg ? 'dark' : 'light'}"${h ? ` style="height:${Math.round(h)}px"` : ''}>
        ${thumb}
        <span class="lg-ext">${x.ext}</span>
        <button class="lg-check" title="Selecionar">${svgIcon('check','ic ic-xs')}</button>
        <div class="lg-tools">
          <button class="lg-fav" title="Favoritar">${svgIcon('heart','ic ic-xs')}</button>
          ${x.kind === 'img' ? `<button class="lg-del" data-id="${x.id}" title="Remover">${svgIcon('trash','ic ic-xs')}</button>` : ''}
        </div>
      </div>
      <div class="lg-cap"><b>${x.t}</b><span>${x.size} · ${x.date}</span></div>
    </div>`;
  }
  function render() {
    if (!document.body.contains(grid)) return;
    const q = (searchInp && searchInp.value || '').trim().toLowerCase();
    items = listAll().filter(x => !q || x.t.toLowerCase().includes(q));
    if (countEl) countEl.textContent = items.length;
    if (!items.length) { grid.className = 'lg-grid'; grid.innerHTML = `<div class="pf-loading">Nenhum logo encontrado.</div>`; return; }
    if (view === 'list') {
      grid.className = 'lg-grid list';
      grid.innerHTML = items.map((x, i) => itemHTML(x, i)).join('');
    } else {
      grid.className = 'masonry lg-grid';
      const gap = 16, CAP = 52;
      const cols = Math.max(1, Math.floor((grid.clientWidth + gap) / (size + gap)));
      const colW = (grid.clientWidth - (cols - 1) * gap) / cols;
      grid.innerHTML = '';
      const colEls = [], heights = [];
      for (let i = 0; i < cols; i++) { const c = document.createElement('div'); c.className = 'masonry-col'; grid.appendChild(c); colEls.push(c); heights.push(0); }
      items.forEach((x, i) => {
        let t = 0; for (let k = 1; k < cols; k++) if (heights[k] < heights[t] - 0.5) t = k;
        const thumbH = Math.max(118, Math.min(colW / (x.ar || 1), 210));   // não deixa o card gigante p/ logo pequena
        const w = document.createElement('div'); w.innerHTML = itemHTML(x, i, thumbH);
        colEls[t].appendChild(w.firstElementChild); heights[t] += thumbH + CAP + gap;
      });
    }
    renderIcons(grid);
  }
  Sel.attach({ refresh: render });

  // busca
  searchInp && searchInp.addEventListener('input', render);
  // densidade / visualização (SÓ o tamanho do thumb — download é sempre full)
  document.getElementById('blogos-quality')?.addEventListener('click', e => {
    const b = e.target.closest('[data-q]'); if (!b) return;
    document.querySelectorAll('#blogos-quality [data-q]').forEach(x => x.classList.remove('on'));
    b.classList.add('on'); size = +b.dataset.q; if (sizeInp) sizeInp.value = size; Sound.click && Sound.click(); render();
  });
  sizeInp && sizeInp.addEventListener('input', () => {
    size = +sizeInp.value;
    document.querySelectorAll('#blogos-quality [data-q]').forEach(x => x.classList.toggle('on', +x.dataset.q === size));
    render();
  });
  document.getElementById('blogos-view')?.addEventListener('click', e => {
    const b = e.target.closest('[data-view]'); if (!b) return;
    document.querySelectorAll('#blogos-view [data-view]').forEach(x => x.classList.remove('on'));
    b.classList.add('on'); view = b.dataset.view; Sound.click && Sound.click(); render();
  });
  let rt; window.addEventListener('resize', () => { clearTimeout(rt); rt = setTimeout(() => { if (view === 'masonry') render(); }, 120); });

  // clique: selecionar · favoritar · remover · abrir lightbox
  grid.addEventListener('click', async e => {
    const card = e.target.closest('.lg-item'); if (!card) return;
    const it = items[+card.dataset.i]; if (!it) return;
    if (e.target.closest('.lg-check')) { e.stopPropagation(); card.classList.toggle('sel', Sel.toggle(it.key, it)); return; }
    if (e.target.closest('.lg-fav'))   { e.stopPropagation(); openFavModal([it]); return; }
    const del = e.target.closest('.lg-del');
    if (del) { e.stopPropagation();
      uploaded = uploaded.filter(r => r.id !== del.dataset.id);
      try { await LogosDB.set(brand, uploaded); } catch (_) {}
      Sel.drop(it.key); Toast.info('Logo removido.'); render(); return;
    }
    window.__openImg && window.__openImg(items, +card.dataset.i);
  });

  // admin: adicionar logo(s)
  document.getElementById('blogos-add')?.addEventListener('click', () => {
    const inp = document.createElement('input');
    inp.type = 'file'; inp.accept = 'image/png,image/svg+xml,image/jpeg,image/*'; inp.multiple = true;
    inp.onchange = async () => {
      const files = Array.from(inp.files || []); if (!files.length) return;
      for (let i = 0; i < files.length; i++) {
        const f = files[i], { ar, darkBg } = await analyzeImg(f);
        uploaded.unshift({ id: 'lg' + Date.now() + '-' + i, title: f.name.replace(/\.[^.]+$/, ''),
          size: f.size, ar, darkBg, ext: (f.name.split('.').pop() || 'PNG').toUpperCase().slice(0, 4), date: dateBR(), blob: f });
      }
      try { await LogosDB.set(brand, uploaded); Sound.success && Sound.success(); Toast.success(files.length + ' logo(s) adicionado(s)!'); }
      catch (_) { Toast.error('Não consegui salvar. Tente arquivos menores.'); }
      render();
    };
    inp.click();
  });

  render();
}

/* ---- FAVORITOS (página: coleções do usuário) ---- */
/* ============================================================
   MINHA CONTA — área privada do cliente (login Supabase + perfil).
   A vitrine (catálogo) é pública; ESTA área exige login. A RLS do Supabase
   garante que cada cliente só enxerga a própria linha (segurança server-side).
   ============================================================ */
function escHtml(s){ return String(s==null?'':s).replace(/[&<>"]/g, c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c])); }

async function initMinhaConta() {
  const root = document.getElementById('conta-page'); if (!root) return;
  root.innerHTML = `<div class="pf-loading">Carregando…</div>`;
  let ok = false;
  try { ok = await Portal.configured(); } catch (_) { ok = false; }
  if (!ok) return contaNotConfigured(root);
  let sess = null;
  try { sess = await Portal.session(); } catch (_) {}
  if (!sess) return renderLogin(root);
  let cli = null;
  try { cli = await Portal.client(); } catch (_) {}
  renderConta(root, cli, sess);
}
window.initMinhaConta = initMinhaConta;

function contaNotConfigured(root, titulo) {
  root.innerHTML = `
    <div class="login-card">
      <div class="login-logo"><span class="foot-burst">C</span></div>
      <h1 class="login-title">${escHtml(titulo || 'Área do Cliente')}</h1>
      <p class="login-sub">Esta área está sendo preparada e ficará disponível em breve. Em caso de dúvida, fale com a equipe Contourline.</p>
      <div class="conta-note">${svgIcon('lock','ic ic-sm')} Acesso exclusivo para parceiros autorizados.</div>
    </div>`;
  renderIcons(root);
}

function loginErroPT(msg) {
  const m = (msg||'').toLowerCase();
  if (m.includes('invalid login') || m.includes('credentials')) return 'E-mail ou senha incorretos.';
  if (m.includes('email not confirmed')) return 'E-mail ainda não confirmado. Fale com a equipe.';
  if (m.includes('configurada')) return msg;
  if (m.includes('network') || m.includes('fetch') || m.includes('failed')) return 'Falha de conexão. Verifique sua internet e tente de novo.';
  if (m.includes('rate') || m.includes('many')) return 'Muitas tentativas. Aguarde um instante e tente de novo.';
  return msg || 'Não foi possível entrar. Tente de novo.';
}

/* renderLogin(root, titulo?, sub?, onSuccess?)
   titulo   → título do card (padrão "Área do Cliente")
   sub      → subtítulo descritivo
   onSuccess → função chamada após login bem-sucedido (padrão: initMinhaConta) */
function renderLogin(root, titulo, sub, onSuccess) {
  const tit = titulo || 'Área do Cliente';
  const desc = sub || 'Entre com seu e-mail e senha para acessar sua conta, contrato, boletos e equipamentos.';
  const cb = onSuccess || initMinhaConta;
  root.innerHTML = `
    <div class="login-card">
      <div class="login-logo"><span class="foot-burst">C</span></div>
      <h1 class="login-title">${escHtml(tit)}</h1>
      <p class="login-sub">${escHtml(desc)}</p>
      <form class="login-form" id="login-form" autocomplete="on">
        <div class="field"><label>E-mail</label>
          <div class="input"><i data-icon="mail" data-cls="ic ic-sm"></i><input id="login-email" type="email" placeholder="seu@email.com" autocomplete="username" required></div></div>
        <div class="field"><label>Senha</label>
          <div class="input"><i data-icon="lock" data-cls="ic ic-sm"></i>
            <input id="login-pass" type="password" placeholder="Sua senha" autocomplete="current-password" required>
            <button type="button" class="login-eye" id="login-eye" title="Mostrar/ocultar senha"><i data-icon="eye" data-cls="ic ic-sm"></i></button>
          </div></div>
        <div class="login-err" id="login-err" hidden></div>
        <button class="btn login-btn" id="login-go" type="submit"><i data-icon="logout" data-cls="ic ic-sm"></i> Entrar</button>
      </form>
      <div class="conta-note">${svgIcon('shield','ic ic-sm')} Seus dados são protegidos. Cada cliente vê apenas as próprias informações.</div>
    </div>`;
  renderIcons(root);

  const form = document.getElementById('login-form');
  const errEl = document.getElementById('login-err');
  const btn = document.getElementById('login-go');
  const passEl = document.getElementById('login-pass');
  document.getElementById('login-eye')?.addEventListener('click', () => {
    passEl.type = passEl.type === 'password' ? 'text' : 'password';
  });
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('login-email').value;
    const pass = passEl.value;
    errEl.hidden = true; btn.disabled = true;
    const old = btn.innerHTML; btn.innerHTML = 'Entrando…';
    let res;
    try { res = await Portal.login(email, pass); }
    catch (ex) { res = { error: { message: 'network' } }; }
    if (res && res.error) {
      errEl.textContent = loginErroPT(res.error.message);
      errEl.hidden = false; btn.disabled = false; btn.innerHTML = old; renderIcons(btn);
      Sound && Sound.error && Sound.error();
      return;
    }
    Sound && Sound.success && Sound.success();
    window.initUserBtn?.();   // atualiza topbar com dados reais do cliente
    cb();   // sucesso → recarrega a área que chamou o login
  });
}

/* ============================================================
   TOPBAR: botão do usuário + modal de perfil  (spa80)
   ============================================================ */
async function initUserBtn() {
  const btn  = document.getElementById('user-btn'); if (!btn) return;
  const avEl = document.getElementById('user-av');
  const nmEl = document.getElementById('user-name');

  // preenche topbar com dados do Portal (se logado)
  try {
    if (Portal.configured() && Portal.session()) {
      const cli = Portal.client();
      if (cli) {
        const nome = (cli.nome || cli.email || 'Cliente').trim();
        const initials = (nome.split(/\s+/).slice(0,2).map(w=>w[0]||'').join('') || 'CL').toUpperCase();
        if (avEl) avEl.textContent = initials;
        if (nmEl) nmEl.textContent = nome.split(' ')[0]; // só primeiro nome
      }
    }
  } catch (_) {}

  // evita duplo-bind
  btn.removeEventListener('click', btn._pfHandler);
  btn._pfHandler = async () => {
    if (!Portal.configured()) return;
    const sess = Portal.session(); if (!sess) return;
    const cli  = Portal.client();
    await openPerfilModal(cli, sess);
  };
  btn.addEventListener('click', btn._pfHandler);
}
window.initUserBtn = initUserBtn;

async function openPerfilModal(cli, sess) {
  const body = document.getElementById('modal-perfil-body');
  if (!body) return;

  const email   = (cli && cli.email) || (sess && sess.user && sess.user.email) || '';
  const nome    = (cli && cli.nome)    || '';
  const tel     = (cli && cli.telefone) || '';
  const cidade  = (cli && cli.cidade)   || '';
  const initials = ((nome||email).trim().split(/\s+/).slice(0,2).map(w=>w[0]||'').join('') || 'CL').toUpperCase();

  body.innerHTML = `
    <div class="pf-head">
      <div class="pf-av">${escHtml(initials)}</div>
      <div>
        <div class="pf-name-display">${escHtml(nome || email)}</div>
        <div class="pf-email-display">${escHtml(email)}</div>
      </div>
    </div>
    <form class="pf-form" id="pf-form" autocomplete="off">
      <div class="acf-row">
        <label class="acf-label" for="pf-nome">Nome completo</label>
        <input class="acf-input" id="pf-nome" type="text" value="${escHtml(nome)}" placeholder="Seu nome" maxlength="80">
      </div>
      <div class="acf-row">
        <label class="acf-label" for="pf-tel">Telefone / WhatsApp</label>
        <input class="acf-input" id="pf-tel" type="tel" value="${escHtml(tel)}" placeholder="(11) 9xxxx-xxxx" maxlength="20">
      </div>
      <div class="acf-row">
        <label class="acf-label" for="pf-cidade">Cidade</label>
        <input class="acf-input" id="pf-cidade" type="text" value="${escHtml(cidade)}" placeholder="Ex: São Paulo" maxlength="60">
      </div>
      <p class="pf-note">As alterações ficam visíveis para a equipe da Contourline.</p>
      <div id="pf-err" class="acf-err" hidden></div>
      <div class="pf-actions">
        <button type="button" class="btn ghost btn-sm" id="pf-logout">Sair da conta</button>
        <button type="submit" class="btn primary" id="pf-save">Salvar</button>
      </div>
    </form>`;

  UI.openModal('modal-perfil');

  const form   = document.getElementById('pf-form');
  const errEl  = document.getElementById('pf-err');
  const saveBtn= document.getElementById('pf-save');

  // botão sair
  document.getElementById('pf-logout')?.addEventListener('click', async () => {
    UI.closeModal(document.getElementById('modal-perfil'));
    await Portal.logout();
    // limpa topbar de volta ao padrão
    const avEl = document.getElementById('user-av');
    const nmEl = document.getElementById('user-name');
    if (avEl) avEl.textContent = 'CL';
    if (nmEl) nmEl.textContent = 'Entrar';
    // redireciona para a home
    location.hash = '#/';
    if (window.__route) window.__route();
  });

  // salvar
  form.addEventListener('submit', async e => {
    e.preventDefault();
    errEl.hidden = true;
    const novoNome   = document.getElementById('pf-nome').value.trim();
    const novoTel    = document.getElementById('pf-tel').value.trim();
    const novaCidade = document.getElementById('pf-cidade').value.trim();
    if (!novoNome) { errEl.textContent = 'O nome não pode ficar em branco.'; errEl.hidden = false; return; }

    const old = saveBtn.innerHTML;
    saveBtn.disabled = true;
    saveBtn.innerHTML = '<span class="spinner-sm"></span> Salvando…';

    try {
      const sb = Portal.db();
      const { error } = await sb.from('clientes')
        .update({ nome: novoNome, telefone: novoTel, cidade: novaCidade })
        .eq('email', email.toLowerCase());

      if (error) throw error;

      // atualiza topbar imediatamente
      const initNew = (novoNome.split(/\s+/).slice(0,2).map(w=>w[0]||'').join('') || 'CL').toUpperCase();
      const avEl = document.getElementById('user-av');
      const nmEl = document.getElementById('user-name');
      if (avEl) avEl.textContent = initNew;
      if (nmEl) nmEl.textContent = novoNome.split(' ')[0];

      Sound && Sound.success && Sound.success();
      Toast.success('Perfil atualizado!');
      UI.closeModal(document.getElementById('modal-perfil'));
    } catch (err) {
      errEl.textContent = 'Erro ao salvar: ' + (err.message || 'tente novamente.');
      errEl.hidden = false;
      saveBtn.disabled = false;
      saveBtn.innerHTML = old;
    }
  });
}

function renderConta(root, cli, sess) {
  const email = (cli && cli.email) || (sess && sess.user && sess.user.email) || '';
  const nome  = (cli && cli.nome) || (email.split('@')[0] || 'Cliente');
  const initials = (nome.trim().split(/\s+/).slice(0,2).map(w=>w[0]||'').join('') || 'CL').toUpperCase();
  const statusMap = { active:'Ativo', ativo:'Ativo', inactive:'Inativo', inativo:'Inativo', pending:'Pendente', pendente:'Pendente' };
  const status = (cli && cli.status) || '';
  const stTxt = statusMap[(status||'').toLowerCase()] || (status || '—');
  const fields = [
    { ic:'user',      lab:'Nome',     val: cli && cli.nome },
    { ic:'mail',      lab:'E-mail',   val: email },
    { ic:'briefcase', lab:'Tipo',     val: cli && cli.tipo },
    { ic:'grad',      lab:'Segmento', val: cli && cli.segmento },
    { ic:'building',  lab:'Cidade',   val: cli && cli.cidade },
  ].filter(f => f.val);

  root.innerHTML = `
    <div class="conta-head">
      <div class="conta-avatar">${escHtml(initials)}</div>
      <div class="conta-id">
        <h1>${escHtml(nome)}</h1>
        <span class="conta-email">${escHtml(email)}</span>
      </div>
      ${status ? `<span class="conta-status st-${escHtml((status||'').toLowerCase())}">${escHtml(stTxt)}</span>` : ''}
    </div>
    <div class="conta-grid">
      <section class="conta-card">
        <div class="conta-card-head">${svgIcon('user','ic ic-sm')} <b>Meus dados</b></div>
        <div class="conta-fields">
          ${fields.map(f => `<div class="conta-f"><span class="cf-lab">${svgIcon(f.ic,'ic ic-sm')} ${f.lab}</span><span class="cf-val">${escHtml(f.val)}</span></div>`).join('')}
        </div>
      </section>
      <section class="conta-card">
        <div class="conta-card-head">${svgIcon('folder','ic ic-sm')} <b>Minhas áreas</b></div>
        <div class="conta-links">
          <a class="conta-link soon"><span>${svgIcon('signature','ic ic-sm')} Contrato</span><small>em breve</small></a>
          <a class="conta-link soon"><span>${svgIcon('receipt','ic ic-sm')} Boletos</span><small>em breve</small></a>
          <a class="conta-link soon"><span>${svgIcon('wrench','ic ic-sm')} Meus Equipamentos</span><small>em breve</small></a>
          <a class="conta-link" href="#/suporte"><span>${svgIcon('buoy','ic ic-sm')} Suporte</span>${svgIcon('chevR','ic ic-sm')}</a>
        </div>
      </section>
    </div>
    <div class="conta-foot">
      <button class="btn ghost" id="conta-sair">${svgIcon('logout','ic ic-sm')} Sair da conta</button>
    </div>`;
  renderIcons(root);
  document.getElementById('conta-sair')?.addEventListener('click', async () => {
    try { await Portal.logout(); } catch (_) {}
    Sound && Sound.click && Sound.click();
    initMinhaConta();
  });
}

/* ============================================================
   HELPERS de formatação BR (reutilizados em Boletos + Contrato)
   ============================================================ */
function brl(v) { return (v == null) ? '—' : Number(v).toLocaleString('pt-BR', { style:'currency', currency:'BRL' }); }
function dataBR(iso) { if (!iso) return '—'; const p = String(iso).slice(0,10).split('-'); return p.length === 3 ? `${p[2]}/${p[1]}/${p[0]}` : iso; }
function competLabel(ym) {
  if (!ym) return '—';
  const meses = ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'];
  const [a,m] = ym.split('-');
  return `${meses[(parseInt(m,10)||1)-1]}/${a}`;
}
function diasParaVencer(isoDate) {
  const hoje = new Date(); hoje.setHours(0,0,0,0);
  const d = new Date(String(isoDate).slice(0,10)+'T00:00:00'); return Math.round((d-hoje)/86400000);
}
function statusBoletoReal(b) {
  // recalcula 'vencido' pela data — não confia só no status do banco
  if ((b.status||'') === 'pago') return 'pago';
  const dias = diasParaVencer(b.vencimento);
  return dias < 0 ? 'vencido' : 'em_aberto';
}

/* ============================================================
   MEUS EQUIPAMENTOS — área privada do cliente (RLS Supabase)
   A tabela Supabase 'equipamentos' tem a policy eq_entitled:
   o SELECT já devolve só os modelos que este cliente tem direito.
   Cross-referência com o array local EQUIPMENT (catalog.json)
   para foto, descrição e contagem de materiais.
   Campos privados (nº série, garantia) ficam como "em breve"
   até a Central adicionar à tabela cliente_equipamentos.
   ============================================================ */
async function initMeusEquipamentos() {
  const root = document.getElementById('meuseq-page'); if (!root) return;
  root.innerHTML = `<div class="pf-loading">Carregando…</div>`;
  let ok = false;
  try { ok = await Portal.configured(); } catch (_) {}
  if (!ok) { contaNotConfigured(root, 'Meus Equipamentos'); return; }
  let sess = null;
  try { sess = await Portal.session(); } catch (_) {}
  if (!sess) { renderLogin(root, 'Meus Equipamentos', 'Veja os equipamentos vinculados à sua conta e acesse os materiais exclusivos.', initMeusEquipamentos); return; }
  let equips = [];
  try {
    const sb = await Portal.db();
    if (sb) {
      const { data, error } = await sb.from('equipamentos').select('slug,name,marca_nome,segmento,cover');
      if (!error && data) equips = data;
    }
  } catch (_) {}
  renderMeusEquipamentos(root, equips);
}
window.initMeusEquipamentos = initMeusEquipamentos;

/* localiza o equipamento no array global EQUIPMENT por slug ou nome (case-insensitive) */
function eqBySlug(slug) {
  const s = (slug||'').toLowerCase();
  return EQUIPMENT.find(e =>
    (e.codigo||'').toLowerCase() === s ||
    (e.name||'').toLowerCase() === s ||
    (e.name||'').toLowerCase().replace(/\s+/g,'') === s.replace(/\s+/g,'')
  ) || null;
}

function renderMeusEquipamentos(root, equips) {
  if (!equips.length) {
    root.innerHTML = `
      <div class="meuseq-blank">
        ${svgIcon('wrench','ic')}
        <b>Nenhum equipamento vinculado</b>
        <p>Seus equipamentos aparecem aqui assim que forem cadastrados pela equipe Contourline. Se você já tem um equipamento e não está vendo, fale com a gente.</p>
        <button class="btn ghost" data-open-modal="modal-solicitar">${svgIcon('buoy','ic ic-sm')} Falar com o suporte</button>
      </div>`;
    renderIcons(root); return;
  }

  root.innerHTML = `
    <div class="meuseq-header">
      <div>
        <h1 class="meuseq-title">Meus Equipamentos</h1>
        <p class="meuseq-sub">${equips.length} equipamento${equips.length!==1?'s':''} vinculado${equips.length!==1?'s':''} à sua conta</p>
      </div>
    </div>
    <div class="meuseq-grid" id="meuseq-grid"></div>
    <div class="conta-note" style="margin-top:18px">${svgIcon('shield','ic ic-sm')} Você vê apenas os equipamentos vinculados ao seu contrato.</div>`;

  const grid = root.querySelector('#meuseq-grid');
  grid.innerHTML = equips.map(eq => {
    const local = eqBySlug(eq.slug);
    const name  = eq.name || (local && local.name) || eq.slug;
    const tag   = eq.segmento || (local && local.tag) || '';
    const marca = eq.marca_nome || (local && local.marca) || '';
    const count = (local && local.count) || '';
    const img   = (local && eqCover(local.name, local.img)) || eq.cover || '';
    const href  = local ? `#/categoria/${encodeURIComponent(local.name)}` : '#/equipamentos';
    return `
      <div class="meuseq-card">
        <a class="meuseq-thumb" href="${href}">
          ${img
            ? `<img src="${escHtml(img)}" alt="${escHtml(name)}" loading="lazy">`
            : `<span class="eq-ph2"><b>${escHtml((name.replace(/[^A-Za-zÀ-ÿ0-9 ]/g,'').split(/\s+/).filter(Boolean).slice(0,2).map(w=>w[0]).join('')||'EQ').toUpperCase())}</b></span>`
          }
          <span class="meuseq-badge-eq">${svgIcon('lock','ic ic-sm')} Seu equipamento</span>
        </a>
        <div class="meuseq-body">
          <div class="meuseq-info">
            <h3>${escHtml(name)}</h3>
            <p>${escHtml(tag)}</p>
            ${marca ? `<small class="meuseq-marca">${escHtml(marca)}</small>` : ''}
          </div>
          <div class="meuseq-actions">
            ${count ? `<span class="meuseq-count">${svgIcon('folder','ic ic-sm')} ${count} materiais</span>` : ''}
            <a class="btn ghost btn-sm" href="${href}">${svgIcon('folder','ic ic-sm')} Ver materiais</a>
            <a class="btn ghost btn-sm" href="#/suporte">${svgIcon('buoy','ic ic-sm')} Suporte</a>
          </div>
          <div class="meuseq-privado">
            ${svgIcon('wrench','ic ic-sm')} <span>Nº série, garantia e manutenção — <b>em breve</b></span>
          </div>
        </div>
      </div>`;
  }).join('');

  renderIcons(root);

  // preenche o campo "Equipamento" no modal de solicitação ao clicar "Suporte"
  root.querySelectorAll('.meuseq-chamado').forEach(btn => {
    btn.addEventListener('click', () => {
      const eq = btn.dataset.eq || '';
      const inp = document.getElementById('modal-solicitar')?.querySelector('input[placeholder*="HIPRO"]');
      if (inp) inp.value = eq;
    });
  });
}

/* ============================================================
   BOLETOS — área privada do cliente (RLS Supabase)
   A Central (SQLite) já tem o schema e a telinha do admin.
   Quando a Central sincronizar boletos→Supabase, o SELECT aqui
   devolve os boletos do cliente logado (RLS filtra server-side).
   Enquanto não sincroniza → estado "em configuração" / vazio.
   ============================================================ */
async function initBoletos() {
  const root = document.getElementById('boletos-page'); if (!root) return;
  root.innerHTML = `<div class="pf-loading">Carregando…</div>`;
  let ok = false;
  try { ok = await Portal.configured(); } catch (_) {}
  if (!ok) { contaNotConfigured(root, 'Boletos'); return; }
  let sess = null;
  try { sess = await Portal.session(); } catch (_) {}
  if (!sess) { renderLogin(root, 'Boletos', 'Acesse seus boletos, vencimentos e faça o download dos PDFs.', initBoletos); return; }
  let boletos = [];
  try {
    const sb = await Portal.db();
    if (sb) {
      const { data, error } = await sb.from('boletos').select('*').order('vencimento', { ascending: false });
      if (!error && data) boletos = data;
    }
  } catch (_) {}
  renderBoletos(root, boletos);
}
window.initBoletos = initBoletos;

function renderBoletos(root, boletos) {
  // recalcular status real pela data
  const lista = boletos.map(b => ({ ...b, _st: statusBoletoReal(b) }));
  // filtros client-side (state)
  let filtroMes = '', filtroSt = 'todos';

  function applyFilters() {
    return lista.filter(b => {
      if (filtroMes && b.competencia !== filtroMes) return false;
      if (filtroSt !== 'todos' && b._st !== filtroSt) return false;
      return true;
    });
  }

  function renderLista() {
    const filtrado = applyFilters();
    const listEl = root.querySelector('#bo-list'); if (!listEl) return;
    if (!filtrado.length) {
      listEl.innerHTML = `<div class="bo-empty-filter">Nenhum boleto encontrado para este filtro.</div>`; return;
    }
    // agrupar por competencia
    const grupos = {};
    filtrado.forEach(b => {
      const g = b.competencia || 'Sem data';
      if (!grupos[g]) grupos[g] = [];
      grupos[g].push(b);
    });
    const gKeys = Object.keys(grupos).sort((a,b) => b.localeCompare(a));
    listEl.innerHTML = gKeys.map(g => {
      const items = grupos[g];
      return `<section class="boletos-group">
        <div class="bo-group-head"><b>${competLabel(g)}</b><span>${items.length} boleto${items.length>1?'s':''}</span></div>
        ${items.map(b => {
          const dias = diasParaVencer(b.vencimento);
          const vencTxt = b._st === 'vencido'
            ? `Venceu ${dataBR(b.vencimento)} · há ${Math.abs(dias)} dia${Math.abs(dias)!==1?'s':''}`
            : `Vence ${dataBR(b.vencimento)}${dias === 0 ? ' · <b style="color:var(--warning)">hoje</b>' : dias === 1 ? ' · amanhã' : ''}`;
          const stMap = { pago:['st-pago','check','Pago'], em_aberto:['st-aberto','clock','Em aberto'], vencido:['st-vencido','alert','Vencido'] };
          const [stCls, stIc, stTxt] = stMap[b._st] || ['st-aberto','clock','Em aberto'];
          return `<div class="boleto-row ${b._st==='vencido'?'is-vencido':''}">
            <div class="bo-main">
              <span class="bo-valor">${brl(b.valor)}</span>
              <span class="bo-venc">${svgIcon('calendar','ic ic-sm')} ${vencTxt}</span>
            </div>
            <span class="bo-status ${stCls}">${svgIcon(stIc,'ic ic-sm')} ${stTxt}</span>
            <button class="btn ghost btn-sm bo-pdf" data-boleto-id="${escHtml(b.id)}">${svgIcon('download','ic ic-sm')} Baixar PDF</button>
          </div>`;
        }).join('')}
      </section>`;
    }).join('');
    renderIcons(listEl);
    // attach PDF handlers
    listEl.querySelectorAll('.bo-pdf').forEach(btn => {
      btn.addEventListener('click', async () => {
        const id = btn.dataset.boletoId;
        const bo = lista.find(b => String(b.id) === String(id)); if (!bo || !bo.arquivo_pdf) { alert('PDF não disponível.'); return; }
        const old = btn.innerHTML; btn.disabled = true; btn.innerHTML = 'Gerando…';
        try {
          const sb = await Portal.db();
          const { data, error } = await sb.storage.from('boletos').createSignedUrl(bo.arquivo_pdf, 60);
          if (error || !data?.signedUrl) throw new Error('signed URL falhou');
          window.open(data.signedUrl, '_blank');
        } catch (_) { alert('Não consegui gerar o PDF agora. Tente de novo em instantes.'); }
        btn.disabled = false; btn.innerHTML = old; renderIcons(btn);
      });
    });
  }

  if (!lista.length) {
    root.innerHTML = `
      <div class="boletos-blank">
        ${svgIcon('receipt','ic')}
        <b>Nenhum boleto por aqui</b>
        <p>Quando a Contourline emitir um boleto pra você, ele aparece aqui — com valor, vencimento e o PDF pra baixar.</p>
        <button class="btn ghost" data-open-modal="modal-solicitar">${svgIcon('buoy','ic ic-sm')} Falar com a equipe</button>
      </div>`;
    renderIcons(root); return;
  }

  // resumo geral (ignora filtros — visão financeira real)
  const emAberto = lista.filter(b => b._st !== 'pago');
  const totalAberto = emAberto.reduce((s,b) => s+(Number(b.valor)||0), 0);
  const vencidos = lista.filter(b => b._st === 'vencido');
  const proxVenc = lista.filter(b => b._st === 'em_aberto' && b.vencimento)
    .sort((a,b) => a.vencimento.localeCompare(b.vencimento))[0];
  const proxDias = proxVenc ? diasParaVencer(proxVenc.vencimento) : null;
  const proxTxt = proxVenc ? `${dataBR(proxVenc.vencimento)} · em ${proxDias} dia${proxDias!==1?'s':''}` : 'Nenhum';
  const meses = [...new Set(lista.map(b => b.competencia).filter(Boolean))].sort((a,b)=>b.localeCompare(a));

  root.innerHTML = `
    <div class="boletos-summary">
      <div class="bo-stat ${totalAberto>0&&vencidos.length>0?'is-danger':totalAberto===0?'is-ok':''}">
        ${svgIcon('receipt','ic ic-sm')}
        <div><b>${brl(totalAberto)}</b><span>${totalAberto===0?'Tudo em dia ✓':'Total em aberto'}</span></div>
      </div>
      <div class="bo-stat">
        ${svgIcon('calendar','ic ic-sm')}
        <div><b>${proxTxt}</b><span>Próximo vencimento</span></div>
      </div>
      <div class="bo-stat ${vencidos.length>0?'is-danger':''}">
        ${svgIcon('alert','ic ic-sm')}
        <div><b>${vencidos.length}</b><span>Vencido${vencidos.length!==1?'s':''}</span></div>
      </div>
    </div>

    <div class="boletos-filters">
      <label class="bo-select">
        ${svgIcon('calendar','ic ic-sm')}
        <select id="bo-mes"><option value="">Todos os meses</option>
          ${meses.map(m=>`<option value="${escHtml(m)}">${competLabel(m)}</option>`).join('')}
        </select>
      </label>
      <div class="bo-chips">
        <button class="lchip on" data-st="todos">Todos</button>
        <button class="lchip" data-st="em_aberto">${svgIcon('clock','ic ic-sm')} Em aberto</button>
        <button class="lchip" data-st="pago">${svgIcon('check','ic ic-sm')} Pago</button>
        <button class="lchip" data-st="vencido">${svgIcon('alert','ic ic-sm')} Vencido</button>
      </div>
    </div>

    <div id="bo-list"></div>

    <div class="conta-note" style="margin-top:20px">${svgIcon('shield','ic ic-sm')} Você vê apenas os seus boletos. O PDF é gerado por link seguro e temporário.</div>`;

  renderIcons(root);
  renderLista();

  root.querySelector('#bo-mes')?.addEventListener('change', e => { filtroMes = e.target.value; renderLista(); });
  root.querySelectorAll('.bo-chips .lchip').forEach(c => {
    c.addEventListener('click', () => {
      filtroSt = c.dataset.st;
      root.querySelectorAll('.bo-chips .lchip').forEach(x => x.classList.toggle('on', x===c));
      renderLista();
    });
  });
}

/* ============================================================
   CONTRATO — área privada do cliente (RLS Supabase)
   A tabela 'contratos' será criada pela Central quando Fase B
   começar. Enquanto não existe, mostra "em configuração".
   ============================================================ */
async function initContrato() {
  const root = document.getElementById('contrato-page'); if (!root) return;
  root.innerHTML = `<div class="pf-loading">Carregando…</div>`;
  let ok = false;
  try { ok = await Portal.configured(); } catch (_) {}
  if (!ok) { contaNotConfigured(root, 'Contrato'); return; }
  let sess = null;
  try { sess = await Portal.session(); } catch (_) {}
  if (!sess) { renderLogin(root, 'Contrato', 'Acesse seu contrato, vigência e faça o download do PDF.', initContrato); return; }
  let contratos = [];
  try {
    const sb = await Portal.db();
    if (sb) {
      const { data, error } = await sb.from('contratos').select('*').order('vigencia_inicio', { ascending: false });
      if (!error && data) contratos = data;
    }
  } catch (_) {}
  renderContrato(root, contratos);
}
window.initContrato = initContrato;

function statusContratoReal(c) {
  const hoje = new Date(); hoje.setHours(0,0,0,0);
  if ((c.status||'') === 'cancelado') return 'cancelado';
  if (!c.vigencia_fim) return 'vigente';
  const fim = new Date(String(c.vigencia_fim).slice(0,10)+'T00:00:00');
  const dias = Math.round((fim-hoje)/86400000);
  if (dias < 0) return 'encerrado';
  if (dias <= 30) return 'a_vencer';
  return 'vigente';
}

function renderContrato(root, contratos) {
  if (!contratos.length) {
    root.innerHTML = `
      <div class="contrato-blank">
        ${svgIcon('signature','ic')}
        <b>Ainda não encontramos um contrato por aqui</b>
        <p>Se você já fechou com a Contourline, seu contrato pode estar em cadastro.<br>Fale com a gente que resolvemos rápido.</p>
        <button class="btn" data-open-modal="modal-solicitar">${svgIcon('buoy','ic ic-sm')} Falar com o suporte</button>
      </div>`;
    renderIcons(root); return;
  }

  // separa vigente (ou o mais recente) dos anteriores
  const comStatus = contratos.map(c => ({ ...c, _st: statusContratoReal(c) }));
  const vigente = comStatus.find(c => c._st === 'vigente' || c._st === 'a_vencer') || comStatus[0];
  const anteriores = comStatus.filter(c => c !== vigente);

  const stLabel = { vigente:'Vigente', a_vencer:'A vencer', encerrado:'Encerrado', cancelado:'Cancelado' };
  const stCls   = { vigente:'st-active', a_vencer:'st-pending', encerrado:'st-inactive', cancelado:'st-inactive' };
  const st = vigente._st || 'vigente';
  const fimDias = vigente.vigencia_fim ? diasParaVencer(vigente.vigencia_fim) : null;

  function pdfBtn(id, path, label) {
    return `<button class="btn ct-pdf" id="${id}" data-path="${escHtml(path||'')}">${svgIcon('download','ic ic-sm')} ${label}</button>`;
  }

  root.innerHTML = `
    <div class="conta-head">
      <div class="conta-avatar contrato-av">${svgIcon('signature','ic')}</div>
      <div class="conta-id">
        <h1>${escHtml(vigente.numero || 'Contrato')}</h1>
        <span class="conta-email">
          ${vigente.vigencia_inicio ? `Início ${dataBR(vigente.vigencia_inicio)}` : ''}
          ${vigente.vigencia_fim ? ` · até ${dataBR(vigente.vigencia_fim)}` : ''}
          ${vigente.valor_mensal ? ` · ${brl(vigente.valor_mensal)}/mês` : ''}
        </span>
      </div>
      <span class="conta-status ${stCls[st]||'st-active'}">${stLabel[st]||'Vigente'}${st==='a_vencer'&&fimDias!=null?` · ${fimDias}d`:''}</span>
    </div>

    <div class="conta-grid">
      <section class="conta-card">
        <div class="conta-card-head">${svgIcon('file','ic ic-sm')} <b>Resumo do contrato</b></div>
        <div class="conta-fields">
          ${vigente.numero ? `<div class="conta-f"><span class="cf-lab">${svgIcon('file','ic ic-sm')} Número</span><span class="cf-val">${escHtml(vigente.numero)}</span></div>` : ''}
          ${vigente.vigencia_inicio ? `<div class="conta-f"><span class="cf-lab">${svgIcon('check','ic ic-sm')} Início</span><span class="cf-val">${dataBR(vigente.vigencia_inicio)}</span></div>` : ''}
          ${vigente.vigencia_fim ? `<div class="conta-f"><span class="cf-lab">${svgIcon('check','ic ic-sm')} Término</span><span class="cf-val">${dataBR(vigente.vigencia_fim)}</span></div>` : ''}
          ${vigente.valor_mensal != null ? `<div class="conta-f"><span class="cf-lab">${svgIcon('receipt','ic ic-sm')} Valor mensal</span><span class="cf-val">${brl(vigente.valor_mensal)}</span></div>` : ''}
          ${vigente.periodicidade ? `<div class="conta-f"><span class="cf-lab">${svgIcon('folder','ic ic-sm')} Periodicidade</span><span class="cf-val">${escHtml(vigente.periodicidade)}</span></div>` : ''}
        </div>
      </section>

      <section class="conta-card">
        <div class="conta-card-head">${svgIcon('lock','ic ic-sm')} <b>Documento</b></div>
        <p class="ct-doc-hint">${vigente.assinado_em ? `Assinado em ${dataBR(vigente.assinado_em)}.` : 'Seu contrato em PDF.'}</p>
        ${vigente.arquivo_pdf ? pdfBtn('ct-dl-main', vigente.arquivo_pdf, 'Baixar PDF') : `<p class="cf-lab">PDF não disponível ainda.</p>`}
        <div class="conta-note" style="margin-top:12px">${svgIcon('shield','ic ic-sm')} Link de download privado e temporário (expira em segundos).</div>
      </section>
    </div>

    ${anteriores.length ? `
    <section class="conta-card contrato-hist" style="margin-top:16px">
      <div class="conta-card-head">${svgIcon('folder','ic ic-sm')} <b>Contratos anteriores</b></div>
      <div class="conta-links">
        ${anteriores.map(c => `
          <div class="conta-link contrato-ant">
            <span>${svgIcon('file','ic ic-sm')} ${escHtml(c.numero||'Contrato')} · ${dataBR(c.vigencia_inicio)}</span>
            ${c.arquivo_pdf ? `<button class="btn ghost btn-sm ct-pdf" data-path="${escHtml(c.arquivo_pdf)}">${svgIcon('download','ic ic-sm')}</button>` : ''}
          </div>`).join('')}
      </div>
    </section>` : ''}

    <div class="conta-foot" style="margin-top:22px">
      <button class="btn ghost" id="ct-sair">${svgIcon('logout','ic ic-sm')} Sair da conta</button>
    </div>`;

  renderIcons(root);

  // PDF download handler (signed URL 60s, bucket privado)
  async function handlePdf(btn) {
    const path = btn.dataset.path; if (!path) { alert('PDF não disponível.'); return; }
    const old = btn.innerHTML; btn.disabled = true; btn.innerHTML = 'Gerando…';
    try {
      const sb = await Portal.db();
      const { data, error } = await sb.storage.from('contratos').createSignedUrl(path, 60);
      if (error || !data?.signedUrl) throw new Error('falhou');
      window.open(data.signedUrl, '_blank');
    } catch (_) { alert('Não consegui gerar o PDF agora. Tente de novo.'); }
    btn.disabled = false; btn.innerHTML = old; renderIcons(btn);
  }
  root.querySelectorAll('.ct-pdf').forEach(b => b.addEventListener('click', () => handlePdf(b)));
  document.getElementById('ct-sair')?.addEventListener('click', async () => {
    try { await Portal.logout(); } catch (_) {}
    Sound && Sound.click && Sound.click();
    initContrato();
  });
}

/* ============================================================
   SUPORTE — área privada (lista de chamados + chat bidirecional)
   Tabelas Supabase:
     chamados(id UUID, cliente_email TEXT, titulo TEXT, categoria TEXT,
              prioridade TEXT, status TEXT, criado_em TIMESTAMPTZ)
     chamado_mensagens(id UUID, chamado_id UUID, autor TEXT,
                       texto TEXT, criado_em TIMESTAMPTZ)
   RLS (Central cria):
     chamados — cliente lê/cria onde cliente_email = auth.email()
     chamado_mensagens — cliente lê/cria via JOIN em chamados
   ============================================================ */

/* limpa polling de mensagens quando muda de rota */
let _suportePoll = null;
function clearSuportePoll() { if (_suportePoll) { clearInterval(_suportePoll); _suportePoll = null; } }
window.clearSuportePoll = clearSuportePoll;

async function initSuporte(chamadoId) {
  clearSuportePoll();
  const root = document.getElementById('suporte-page'); if (!root) return;
  root.innerHTML = `<div class="pf-loading">Carregando…</div>`;
  let ok = false;
  try { ok = await Portal.configured(); } catch (_) {}
  if (!ok) { contaNotConfigured(root, 'Suporte'); return; }
  let sess = null;
  try { sess = await Portal.session(); } catch (_) {}
  if (!sess) {
    const cb = chamadoId ? () => initSuporte(chamadoId) : initSuporte;
    renderLogin(root, 'Suporte', 'Abra chamados e acompanhe o atendimento da equipe Contourline.', cb);
    return;
  }
  let sb = null;
  try { sb = await Portal.db(); } catch (_) {}
  if (!sb) { contaNotConfigured(root, 'Suporte'); return; }
  if (chamadoId) {
    await renderSuporteDetalhe(root, sb, sess, chamadoId);
  } else {
    await renderSuporteLista(root, sb, sess);
  }
}
window.initSuporte = initSuporte;

/* ---- Lista de chamados ---- */
async function renderSuporteLista(root, sb, sess) {
  let chamados = [];
  try {
    const { data, error } = await sb.from('chamados')
      .select('id,titulo,categoria,prioridade,status,criado_em,atualizado_em')
      .order('atualizado_em', { ascending: false });
    if (!error && data) chamados = data;
  } catch (_) {}

  const stLabels = { aberto:'Aberto', em_atendimento:'Em atendimento', resolvido:'Resolvido', cancelado:'Cancelado' };
  const stIcons  = { aberto:'clock', em_atendimento:'users', resolvido:'check', cancelado:'alert' };
  const catMap   = { tecnico:'Técnico', comercial:'Comercial', financeiro:'Financeiro', outro:'Outro' };

  const listaHTML = chamados.length ? `
    <div class="suporte-list">
      ${chamados.map(ch => {
        const stTxt = stLabels[ch.status] || ch.status || '—';
        const stIc  = stIcons[ch.status] || 'clock';
        const cat   = catMap[(ch.categoria||'').toLowerCase()] || ch.categoria || '';
        const prio  = (ch.prioridade||'').toLowerCase() === 'urgente';
        return `<a class="ch-item" href="#/suporte/${escHtml(String(ch.id))}">
          <div class="ch-main">
            <span class="ch-titulo">${escHtml(ch.titulo || 'Chamado')}</span>
            <span class="ch-meta">
              ${cat ? `<span class="ch-cat">${escHtml(cat)}</span>` : ''}
              ${prio ? `<span class="ch-urgente">Urgente</span>` : ''}
              <span class="ch-data">${svgIcon('calendar','ic ic-xs')} ${dataBR(ch.criado_em)}</span>
            </span>
          </div>
          <div class="ch-right">
            <span class="ch-status ch-st-${escHtml(ch.status||'aberto')}">${svgIcon(stIc,'ic ic-sm')} ${escHtml(stTxt)}</span>
            ${svgIcon('chevR','ic ic-sm')}
          </div>
        </a>`;
      }).join('')}
    </div>` : `
    <div class="suporte-blank">
      ${svgIcon('buoy','ic')}
      <b>Nenhum chamado ainda</b>
      <p>Quando você precisar de ajuda, clique em "Abrir chamado" e a equipe Contourline entra em contato.</p>
    </div>`;

  root.innerHTML = `
    <div class="suporte-header">
      <div>
        <h1 class="suporte-title">Suporte</h1>
        <p class="suporte-sub">${chamados.length ? `${chamados.length} chamado${chamados.length!==1?'s':''} registrado${chamados.length!==1?'s':''}` : 'Nenhum chamado ainda'}</p>
      </div>
      <button class="btn" id="suporte-novo-btn">${svgIcon('plus','ic ic-sm')} Abrir chamado</button>
    </div>

    <div id="abrir-chamado-wrap" hidden>
      <div class="acf-card">
        <div class="acf-head">${svgIcon('buoy','ic ic-sm')} <b>Abrir chamado</b></div>
        <form class="acf-form" id="acf-form" autocomplete="off">
          <div class="field"><label>Assunto <span class="acf-req">*</span></label>
            <div class="input"><i data-icon="pencil" data-cls="ic ic-sm"></i>
            <input id="acf-titulo" type="text" placeholder="Descreva brevemente o problema" maxlength="120" required></div></div>
          <div class="acf-row">
            <div class="field"><label>Categoria</label>
              <select id="acf-cat" class="select-native">
                <option value="tecnico">Técnico</option>
                <option value="comercial">Comercial</option>
                <option value="financeiro">Financeiro</option>
                <option value="outro">Outro</option>
              </select></div>
            <div class="field"><label>Prioridade</label>
              <select id="acf-prio" class="select-native">
                <option value="normal">Normal</option>
                <option value="urgente">Urgente</option>
              </select></div>
          </div>
          <div class="field"><label>Mensagem inicial <span class="acf-req">*</span></label>
            <textarea id="acf-msg" rows="4" placeholder="Descreva em detalhes o que você precisa…" required></textarea></div>
          <div class="acf-err" id="acf-err" hidden></div>
          <div class="acf-actions">
            <button type="button" class="btn ghost" id="acf-cancelar">Cancelar</button>
            <button type="submit" class="btn" id="acf-enviar">${svgIcon('send','ic ic-sm')} Enviar chamado</button>
          </div>
        </form>
      </div>
    </div>

    ${listaHTML}
    <div class="conta-note" style="margin-top:18px">${svgIcon('shield','ic ic-sm')} Você vê apenas os seus chamados.</div>`;

  renderIcons(root);

  const wrap  = root.querySelector('#abrir-chamado-wrap');
  const btn   = root.querySelector('#suporte-novo-btn');
  const form  = root.querySelector('#acf-form');
  const errEl = root.querySelector('#acf-err');

  btn?.addEventListener('click', () => {
    wrap.hidden = !wrap.hidden;
    if (!wrap.hidden) { root.querySelector('#acf-titulo')?.focus(); Sound?.success?.(); }
    else Sound?.click?.();
  });
  root.querySelector('#acf-cancelar')?.addEventListener('click', () => { wrap.hidden = true; Sound?.click?.(); });

  form?.addEventListener('submit', async e => {
    e.preventDefault();
    const titulo    = (root.querySelector('#acf-titulo').value || '').trim();
    const categoria = root.querySelector('#acf-cat').value;
    const prioridade= root.querySelector('#acf-prio').value;
    const mensagem  = (root.querySelector('#acf-msg').value || '').trim();
    if (!titulo || !mensagem) return;

    const envBtn = root.querySelector('#acf-enviar');
    const old = envBtn.innerHTML; envBtn.disabled = true; envBtn.innerHTML = 'Enviando…';
    errEl.hidden = true;

    try {
      const email = sess.user?.email || '';
      const { data: ch, error: e1 } = await sb.from('chamados')
        .insert({ titulo, categoria, prioridade, status:'aberto', cliente_email: email })
        .select().single();
      if (e1 || !ch) throw e1 || new Error('Falha ao criar chamado');

      // mensagem automática com dados do cliente (a Central vê ao abrir o ticket)
      try {
        const cli = Portal.client?.() || null;
        let equips = [];
        try { const { data: eq } = await sb.from('equipamentos').select('name').limit(15); equips = eq || []; } catch (_) {}
        const linhas = [];
        if (cli?.nome)     linhas.push('Nome: ' + cli.nome);
        if (cli?.telefone) linhas.push('Telefone: ' + cli.telefone);
        if (cli?.cidade)   linhas.push('Cidade: ' + cli.cidade);
        if (equips.length) linhas.push('Equipamentos: ' + equips.map(e => e.name).filter(Boolean).join(', '));
        if (linhas.length) {
          await sb.from('chamado_mensagens')
            .insert({ chamado_id: ch.id, autor: '__sistema__', texto: '[Dados do cliente]\n' + linhas.join('\n') });
        }
      } catch (_) {}

      const { error: e2 } = await sb.from('chamado_mensagens')
        .insert({ chamado_id: ch.id, autor: email, texto: mensagem });
      if (e2) throw e2;
      Sound?.success?.();
      location.hash = '#/suporte/' + ch.id;
    } catch (_) {
      errEl.textContent = 'Não consegui abrir o chamado. Verifique sua conexão e tente novamente.';
      errEl.hidden = false;
      envBtn.disabled = false; envBtn.innerHTML = old; renderIcons(envBtn);
      Sound?.error?.();
    }
  });
}

/* ---- Detalhe do chamado + chat ---- */
async function renderSuporteDetalhe(root, sb, sess, chamadoId) {
  const myEmail = ((sess.user && sess.user.email) || '').toLowerCase();

  async function fetchMensagens() {
    const { data } = await sb.from('chamado_mensagens')
      .select('id,autor,texto,criado_em')
      .eq('chamado_id', chamadoId)
      .order('criado_em', { ascending: true });
    return data || [];
  }

  let chamado = null;
  let mensagens = [];
  let equips = [];
  try {
    const [chRes, msRes, eqRes] = await Promise.all([
      sb.from('chamados').select('*').eq('id', chamadoId).single(),
      fetchMensagens(),
      sb.from('equipamentos').select('name,slug').limit(15)
    ]);
    chamado   = chRes.data;
    mensagens = msRes;
    equips    = eqRes.data || [];
  } catch (_) {}

  if (!chamado) {
    root.innerHTML = `
      <div class="suporte-blank">
        ${svgIcon('buoy','ic')}
        <b>Chamado não encontrado</b>
        <p>Este chamado não existe ou você não tem permissão para acessá-lo.</p>
        <a class="btn ghost" href="#/suporte">${svgIcon('chevL','ic ic-sm')} Voltar ao Suporte</a>
      </div>`;
    renderIcons(root); return;
  }

  const stLabels = { aberto:'Aberto', em_atendimento:'Em atendimento', resolvido:'Resolvido', cancelado:'Cancelado' };
  const catMap   = { tecnico:'Técnico', comercial:'Comercial', financeiro:'Financeiro', outro:'Outro' };
  const isEncerrado = ['resolvido','cancelado'].includes((chamado.status||'').toLowerCase());
  const stTxt = stLabels[chamado.status] || chamado.status || '—';
  const cat   = catMap[(chamado.categoria||'').toLowerCase()] || chamado.categoria || '';
  const prio  = (chamado.prioridade||'').toLowerCase() === 'urgente';

  function renderThread(msgs) {
    const threadEl = root.querySelector('#cd-thread');
    if (!threadEl) return;
    // filtra msgs visíveis (exclui __sistema__ da thread — aparece só na ficha)
    const visiveis = msgs.filter(m => (m.autor||'') !== '__sistema__');
    if (!visiveis.length) {
      threadEl.innerHTML = `<div class="cd-empty-thread">Ainda não há mensagens neste chamado.</div>`;
      return;
    }
    threadEl.innerHTML = visiveis.map(m => {
      const mine = (m.autor||'').toLowerCase() === myEmail;
      return `<div class="msg ${mine ? 'mine' : 'deles'}">
        <div class="msg-bubble">${escHtml(m.texto)}</div>
        <div class="msg-meta">${mine ? 'Você' : 'Equipe Contourline'} · ${dataBR(m.criado_em)}</div>
      </div>`;
    }).join('');
    threadEl.scrollTop = threadEl.scrollHeight;
  }

  const replyBlock = isEncerrado ? `
    <div class="cd-resolvido">
      ${svgIcon('check','ic ic-sm')}
      <span>Chamado ${escHtml(stTxt.toLowerCase())} — você pode abrir um novo chamado se precisar.</span>
      <a href="#/suporte">${svgIcon('plus','ic ic-sm')} Novo chamado</a>
    </div>` : `
    <div class="cd-reply">
      <textarea class="cd-input" id="cd-input" rows="3" placeholder="Escreva uma mensagem… (Ctrl+Enter para enviar)" maxlength="2000"></textarea>
      <div class="cd-reply-actions">
        <span class="cd-hint">${svgIcon('lock','ic ic-sm')} Apenas você e a equipe veem estas mensagens</span>
        <button class="btn cd-send" id="cd-send">${svgIcon('send','ic ic-sm')} Enviar</button>
      </div>
      <div class="cd-err" id="cd-err" hidden></div>
    </div>`;

  // ficha de contexto do cliente
  const cli       = Portal.client?.() || null;
  const cliNome   = (cli && cli.nome)     || (chamado.cliente_email || myEmail).split('@')[0] || 'Cliente';
  const cliTel    = (cli && cli.telefone) || '';
  const cliCidade = (cli && cli.cidade)   || '';
  const cliInits  = (cliNome.trim().split(/\s+/).slice(0,2).map(w=>w[0]||'').join('') || 'CL').toUpperCase();
  const cliEmail  = chamado.cliente_email || myEmail;

  const equipsHtml = equips.length
    ? `<div class="cd-ctx-equips">${equips.map(e => `<span class="cd-ctx-chip">${escHtml(e.name||'')}</span>`).join('')}</div>`
    : '';

  const fichaHtml = `
    <div class="cd-ctx" id="cd-ctx">
      <button class="cd-ctx-toggle" id="cd-ctx-toggle" type="button">
        ${svgIcon('user','ic ic-sm')}
        <span>Dados do cliente</span>
        <i data-icon="chevD" data-cls="ic ic-xs cd-ctx-chev"></i>
      </button>
      <div class="cd-ctx-body" id="cd-ctx-body" hidden>
        <div class="cd-ctx-row">
          <div class="pf-av pf-av-sm">${escHtml(cliInits)}</div>
          <div class="cd-ctx-info">
            <div class="cd-ctx-nome">${escHtml(cliNome)}</div>
            <div class="cd-ctx-email">${escHtml(cliEmail)}</div>
            ${cliTel    ? `<div class="cd-ctx-line">${svgIcon('phone','ic ic-xs')} ${escHtml(cliTel)}</div>`    : ''}
            ${cliCidade ? `<div class="cd-ctx-line">${svgIcon('map','ic ic-xs')} ${escHtml(cliCidade)}</div>` : ''}
          </div>
        </div>
        ${equipsHtml}
      </div>
    </div>`;

  root.innerHTML = `
    <div class="chamado-detail">
      <a class="cd-back" href="#/suporte">${svgIcon('chevL','ic ic-sm')} Voltar ao Suporte</a>
      <div class="cd-header">
        <div class="cd-title-row">
          <h1 class="cd-titulo">${escHtml(chamado.titulo || 'Chamado')}</h1>
          <span class="ch-status ch-st-${escHtml(chamado.status||'aberto')}">${escHtml(stTxt)}</span>
        </div>
        <div class="cd-meta-row">
          ${cat ? `<span class="ch-cat">${escHtml(cat)}</span>` : ''}
          ${prio ? `<span class="ch-urgente">Urgente</span>` : ''}
          <span class="cd-data">${svgIcon('calendar','ic ic-sm')} Aberto em ${dataBR(chamado.criado_em)}</span>
        </div>
      </div>

      ${fichaHtml}

      <div class="cd-thread" id="cd-thread"></div>

      ${replyBlock}
    </div>`;

  // toggle da ficha
  root.querySelector('#cd-ctx-toggle')?.addEventListener('click', () => {
    const body = root.querySelector('#cd-ctx-body');
    const ctx  = root.querySelector('#cd-ctx');
    if (!body) return;
    body.hidden = !body.hidden;
    ctx?.classList.toggle('open', !body.hidden);
  });

  renderIcons(root);
  renderThread(mensagens);

  if (!isEncerrado) {
    const input  = root.querySelector('#cd-input');
    const sendBtn= root.querySelector('#cd-send');
    const errEl  = root.querySelector('#cd-err');

    async function enviarMensagem() {
      const texto = (input?.value || '').trim(); if (!texto) return;
      const old = sendBtn.innerHTML; sendBtn.disabled = true; sendBtn.innerHTML = 'Enviando…';
      errEl.hidden = true;
      try {
        const { error } = await sb.from('chamado_mensagens')
          .insert({ chamado_id: chamadoId, autor: myEmail, texto });
        if (error) throw error;
        input.value = '';
        mensagens = await fetchMensagens();
        renderThread(mensagens);
        Sound?.success?.();
      } catch (_) {
        errEl.textContent = 'Não consegui enviar. Verifique sua conexão e tente de novo.';
        errEl.hidden = false;
        Sound?.error?.();
      }
      sendBtn.disabled = false; sendBtn.innerHTML = old; renderIcons(sendBtn);
    }

    sendBtn?.addEventListener('click', enviarMensagem);
    input?.addEventListener('keydown', e => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') { e.preventDefault(); enviarMensagem(); }
    });

    /* polling: atualiza mensagens a cada 15s */
    _suportePoll = setInterval(async () => {
      if (!document.getElementById('cd-thread')) { clearSuportePoll(); return; }
      try {
        const fresh = await fetchMensagens();
        if (fresh.length !== mensagens.length) { mensagens = fresh; renderThread(mensagens); }
      } catch (_) {}
    }, 15000);
  }
}

/* ============================================================
   SOLICITAÇÕES — área privada do cliente
   Pede material novo (apresentação, vídeo, design…) com briefing
   e acompanha o andamento. Reutiliza padrões do Suporte.
   Tabela Supabase:
     solicitacoes(id, cliente_email, tipo_material, titulo,
                  equipamento, briefing, prazo, status,
                  arquivo_url, criado_em, atualizado_em)
   ============================================================ */
async function initSolicitacoes() {
  const root = document.getElementById('sol-page'); if (!root) return;
  root.innerHTML = `<div class="pf-loading">Carregando…</div>`;
  let ok = false;
  try { ok = await Portal.configured(); } catch (_) {}
  if (!ok) { contaNotConfigured(root, 'Solicitações'); return; }
  let sess = null;
  try { sess = await Portal.session(); } catch (_) {}
  if (!sess) {
    renderLogin(root, 'Solicitações', 'Solicite materiais personalizados e acompanhe o andamento das criações.', initSolicitacoes);
    return;
  }
  let sb = null;
  try { sb = await Portal.db(); } catch (_) {}
  if (!sb) { contaNotConfigured(root, 'Solicitações'); return; }
  let solic = [];
  try {
    const { data, error } = await sb.from('solicitacoes')
      .select('*')
      .order('atualizado_em', { ascending: false });
    if (!error && data) solic = data;
  } catch (_) {}
  renderSolicitacoes(root, sb, sess, solic);
}
window.initSolicitacoes = initSolicitacoes;

function renderSolicitacoes(root, sb, sess, solic) {
  const tipoMap = {
    apresentacao:'Apresentação', video:'Vídeo', design:'Design / Arte',
    foto:'Foto', social:'Redes Sociais', impresso:'Material Impresso', outro:'Outro',
  };
  const tipoIc = {
    apresentacao:'presentation', video:'video', design:'pencil',
    foto:'image', social:'message', impresso:'printer', outro:'file',
  };
  const stLabels = { recebida:'Recebida', em_analise:'Em análise', em_producao:'Em produção', entregue:'Entregue', cancelada:'Cancelada' };
  const stIcons  = { recebida:'clock', em_analise:'search', em_producao:'settings', entregue:'check', cancelada:'alert' };

  const listaHTML = solic.map((s, i) => {
    const tipo  = tipoMap[(s.tipo_material||'').toLowerCase()] || s.tipo_material || '—';
    const ic    = tipoIc[(s.tipo_material||'').toLowerCase()] || 'file';
    const stTxt = stLabels[s.status] || s.status || '—';
    const stI   = stIcons[s.status] || 'clock';
    return `<div class="sol-item">
      <div class="sol-row">
        <div class="sol-tipo-ic">${svgIcon(ic,'ic ic-sm')}</div>
        <div class="sol-main">
          <span class="sol-titulo">${escHtml(s.titulo || 'Solicitação')}</span>
          <span class="sol-meta">
            <span class="sol-tipo-label">${escHtml(tipo)}</span>
            ${s.equipamento ? `<span class="sol-eq">${escHtml(s.equipamento)}</span>` : ''}
            <span class="sol-data">${svgIcon('calendar','ic ic-xs')} ${dataBR(s.criado_em)}</span>
          </span>
        </div>
        <div class="sol-right">
          <span class="sol-status sol-st-${escHtml(s.status||'recebida')}">${svgIcon(stI,'ic ic-sm')} ${escHtml(stTxt)}</span>
          <button class="sol-expand-btn" title="Ver briefing">${svgIcon('chevD','ic ic-sm')}</button>
        </div>
      </div>
      <div class="sol-detail" hidden>
        ${s.briefing ? `<div class="sol-briefing"><span class="sol-d-label">Briefing</span><p>${escHtml(s.briefing)}</p></div>` : ''}
        ${s.prazo ? `<div class="sol-prazo">${svgIcon('calendar','ic ic-sm')} <span><b>Prazo desejado:</b> ${escHtml(s.prazo)}</span></div>` : ''}
        ${s.status === 'entregue' && s.arquivo_url ? `<a class="btn btn-sm" href="${escHtml(s.arquivo_url)}" target="_blank" rel="noopener">${svgIcon('download','ic ic-sm')} Baixar material entregue</a>` : ''}
      </div>
    </div>`;
  }).join('');

  root.innerHTML = `
    <div class="suporte-header">
      <div>
        <h1 class="suporte-title">Solicitações</h1>
        <p class="suporte-sub">${solic.length ? `${solic.length} solicitaç${solic.length!==1?'ões':'ão'} registrada${solic.length!==1?'s':''}` : 'Nenhuma solicitação ainda'}</p>
      </div>
      <button class="btn" id="sol-novo-btn">${svgIcon('plus','ic ic-sm')} Nova solicitação</button>
    </div>

    <div id="sol-form-wrap" hidden>
      <div class="acf-card">
        <div class="acf-head">${svgIcon('send','ic ic-sm')} <b>Nova solicitação de material</b></div>
        <form class="acf-form" id="sol-form" autocomplete="off">
          <div class="acf-row">
            <div class="field"><label>Tipo de material <span class="acf-req">*</span></label>
              <select id="sol-tipo" class="select-native">
                <option value="apresentacao">Apresentação</option>
                <option value="video">Vídeo</option>
                <option value="design">Design / Arte</option>
                <option value="foto">Foto</option>
                <option value="social">Redes Sociais</option>
                <option value="impresso">Material Impresso</option>
                <option value="outro">Outro</option>
              </select></div>
            <div class="field"><label>Equipamento relacionado <span class="sol-opt">(opcional)</span></label>
              <div class="input"><i data-icon="wrench" data-cls="ic ic-sm"></i>
              <input id="sol-eq" type="text" placeholder="Ex: HIPRO, Crystal 3D…"></div></div>
          </div>
          <div class="field"><label>Objetivo / título <span class="acf-req">*</span></label>
            <div class="input"><i data-icon="pencil" data-cls="ic ic-sm"></i>
            <input id="sol-titulo" type="text" placeholder="O que você precisa?" maxlength="120" required></div></div>
          <div class="field"><label>Briefing <span class="acf-req">*</span></label>
            <textarea id="sol-briefing" rows="5" placeholder="Objetivo, público-alvo, tom de voz, formato, onde vai ser usado, referências que você gosta…" required></textarea></div>
          <div class="field"><label>Prazo desejado <span class="sol-opt">(opcional)</span></label>
            <div class="input"><i data-icon="calendar" data-cls="ic ic-sm"></i>
            <input id="sol-prazo" type="text" placeholder="Ex: até 15/07/2026, semana que vem…"></div></div>
          <div class="acf-err" id="sol-err" hidden></div>
          <div class="acf-actions">
            <button type="button" class="btn ghost" id="sol-cancelar">Cancelar</button>
            <button type="submit" class="btn" id="sol-enviar">${svgIcon('send','ic ic-sm')} Enviar solicitação</button>
          </div>
        </form>
      </div>
    </div>

    ${solic.length
      ? `<div class="sol-list">${listaHTML}</div>`
      : `<div class="suporte-blank">
          ${svgIcon('send','ic')}
          <b>Nenhuma solicitação ainda</b>
          <p>Clique em "Nova solicitação" e peça apresentações, vídeos, artes ou qualquer material personalizado. Nossa equipe entra em contato com prazo e proposta.</p>
        </div>`}
    <div class="conta-note" style="margin-top:18px">${svgIcon('shield','ic ic-sm')} Você vê apenas as suas solicitações.</div>`;

  renderIcons(root);

  /* toggle form */
  const wrap   = root.querySelector('#sol-form-wrap');
  const novoBtn= root.querySelector('#sol-novo-btn');
  const form   = root.querySelector('#sol-form');
  const errEl  = root.querySelector('#sol-err');

  novoBtn?.addEventListener('click', () => {
    wrap.hidden = !wrap.hidden;
    if (!wrap.hidden) { root.querySelector('#sol-titulo')?.focus(); Sound?.success?.(); }
    else Sound?.click?.();
  });
  root.querySelector('#sol-cancelar')?.addEventListener('click', () => { wrap.hidden = true; Sound?.click?.(); });

  form?.addEventListener('submit', async e => {
    e.preventDefault();
    const tipo     = root.querySelector('#sol-tipo').value;
    const titulo   = (root.querySelector('#sol-titulo').value || '').trim();
    const eq       = (root.querySelector('#sol-eq').value || '').trim();
    const briefing = (root.querySelector('#sol-briefing').value || '').trim();
    const prazo    = (root.querySelector('#sol-prazo').value || '').trim();
    if (!titulo || !briefing) return;

    const envBtn = root.querySelector('#sol-enviar');
    const old = envBtn.innerHTML; envBtn.disabled = true; envBtn.innerHTML = 'Enviando…';
    errEl.hidden = true;

    try {
      const email = sess.user && sess.user.email ? sess.user.email : '';
      const ins = { tipo_material:tipo, titulo, briefing, status:'recebida', cliente_email:email };
      if (eq) ins.equipamento = eq;
      if (prazo) ins.prazo = prazo;
      const { error } = await sb.from('solicitacoes').insert(ins);
      if (error) throw error;
      Sound?.success?.();
      initSolicitacoes();   // recarrega com a nova solicitação no topo
    } catch (_) {
      errEl.textContent = 'Não consegui enviar a solicitação. Verifique sua conexão e tente novamente.';
      errEl.hidden = false;
      envBtn.disabled = false; envBtn.innerHTML = old; renderIcons(envBtn);
      Sound?.error?.();
    }
  });

  /* accordion: expandir / colapsar briefing */
  root.querySelector('.sol-list')?.addEventListener('click', e => {
    const btn = e.target.closest('.sol-expand-btn'); if (!btn) return;
    const row    = btn.closest('.sol-row');
    const detail = row && row.nextElementSibling;
    if (!detail || !detail.classList.contains('sol-detail')) return;
    const open = !detail.hidden;
    detail.hidden = open;
    btn.classList.toggle('open', !open);
    Sound?.click?.();
  });
}

async function initFavoritos() {
  const root = document.getElementById('fav-page'); if (!root) return;
  let urls = [];
  const cols = Favorites.read(), names = Object.keys(cols);
  // resolve blobs das imagens (do IndexedDB) p/ poder exibir/baixar
  const blobCache = {};
  async function blobFor(it) {
    if (it.kind !== 'img') return null;
    const k = it.brand; if (!(k in blobCache)) { try { blobCache[k] = await LogosDB.get(it.brand) || []; } catch (_) { blobCache[k] = []; } }
    const r = blobCache[k].find(x => x.id === it.id); return r ? r.blob : null;
  }
  if (!names.length) {
    root.innerHTML = `<div class="fav-blank"><span class="fav-blank-ic">${svgIcon('heart')}</span><b>Nenhuma coleção ainda</b><p>Selecione imagens em qualquer pasta e toque em <b>Favoritar</b> para criar suas coleções (tipo playlists).</p><a class="btn" href="#/marca/Lumenis/logos">${svgIcon('image','ic ic-sm')} Ver logos da Lumenis</a></div>`;
    renderIcons(root); return;
  }
  root.innerHTML = '';
  for (const name of names) {
    const list = cols[name];
    const sec = document.createElement('section'); sec.className = 'fav-col'; sec.dataset.name = name;
    sec.innerHTML = `<div class="fav-col-head"><div><h2>${name}</h2><span>${list.length} item(ns)</span></div>
      <div class="fav-col-actions">
        <button class="btn ghost fav-dlall">${svgIcon('download','ic ic-sm')} Baixar tudo</button>
        <button class="btn ghost fav-delcol">${svgIcon('trash','ic ic-sm')} Excluir</button>
      </div></div>
      <div class="masonry lg-grid fav-grid"></div>`;
    root.appendChild(sec);
    const grid = sec.querySelector('.fav-grid');
    // resolve thumbs
    const resolved = [];
    for (let i = 0; i < list.length; i++) {
      const it = { ...list[i] }; it.t = it.title;
      if (it.kind === 'img') { const b = await blobFor(it); if (b) { const u = URL.createObjectURL(b); urls.push(u); it.url = u; it.blob = b; } }
      resolved.push(it);
    }
    // masonry simples
    const gap = 16, CAP = 52, size = 240;
    const ncols = Math.max(1, Math.floor((grid.clientWidth + gap) / (size + gap)));
    const colW = (grid.clientWidth - (ncols - 1) * gap) / ncols;
    const colEls = [], heights = [];
    for (let i = 0; i < ncols; i++) { const c = document.createElement('div'); c.className = 'masonry-col'; grid.appendChild(c); colEls.push(c); heights.push(0); }
    resolved.forEach((x, i) => {
      let t = 0; for (let k = 1; k < ncols; k++) if (heights[k] < heights[t] - 0.5) t = k;
      const h = Math.max(118, Math.min(colW / (x.ar || 1.6), 210));
      const thumb = x.kind === 'img' ? (x.url ? `<img src="${x.url}" alt="">` : `<span class="lg-miss">${svgIcon('image','ic')}</span>`) : x.wm;
      const w = document.createElement('div');
      w.innerHTML = `<div class="lg-item" data-i="${i}">
        <div class="lg-thumb ${x.darkBg ? 'dark' : 'light'}" style="height:${Math.round(h)}px">${thumb}
          <span class="lg-ext">${x.ext || 'PNG'}</span>
          <div class="lg-tools"><button class="lg-dl" title="Baixar">${svgIcon('download','ic ic-xs')}</button><button class="lg-unfav" title="Remover da coleção">${svgIcon('trash','ic ic-xs')}</button></div>
        </div>
        <div class="lg-cap"><b>${x.title}</b><span>${x.size || ''} · ${x.brand}</span></div>
      </div>`;
      colEls[t].appendChild(w.firstElementChild); heights[t] += h + CAP + gap;
    });
    renderIcons(sec);
    // ações
    sec.querySelector('.fav-dlall').addEventListener('click', () => downloadItems(resolved));
    sec.querySelector('.fav-delcol').addEventListener('click', () => { if (confirm('Excluir a coleção "' + name + '"?')) { Favorites.removeCollection(name); Toast.info('Coleção excluída.'); initFavoritos(); } });
    grid.addEventListener('click', e => {
      const card = e.target.closest('.lg-item'); if (!card) return; const x = resolved[+card.dataset.i]; if (!x) return;
      if (e.target.closest('.lg-dl')) { e.stopPropagation(); downloadItems([x]); return; }
      if (e.target.closest('.lg-unfav')) { e.stopPropagation(); Favorites.removeItem(name, favKey(x)); Toast.info('Removido da coleção.'); initFavoritos(); return; }
      window.__openImg && window.__openImg(resolved, +card.dataset.i);
    });
  }
}

/* ---- PALETA AUTOMÁTICA: extrai as cores dominantes de um logo ---- */
function rgbHex(r, g, b) { return '#' + [r, g, b].map(v => v.toString(16).padStart(2, '0')).join('').toUpperCase(); }
function hexToRgb(h) { h = (h || '').replace('#', ''); if (h.length === 3) h = h.split('').map(c => c + c).join(''); const n = parseInt(h, 16) || 0; return [(n >> 16) & 255, (n >> 8) & 255, n & 255]; }
function hexName(hex) { const [r, g, b] = hexToRgb(hex); return colorName(r, g, b); }
function colorName(r, g, b) {
  const R = r / 255, G = g / 255, B = b / 255, mx = Math.max(R, G, B), mn = Math.min(R, G, B), l = (mx + mn) / 2, dd = mx - mn;
  if (dd < 0.07) { if (l > 0.93) return 'Branco'; if (l < 0.1) return 'Preto'; if (l > 0.6) return 'Cinza claro'; if (l < 0.3) return 'Cinza escuro'; return 'Cinza'; }
  let h; if (mx === R) h = ((G - B) / dd) % 6; else if (mx === G) h = (B - R) / dd + 2; else h = (R - G) / dd + 4;
  h *= 60; if (h < 0) h += 360;
  const hue = (h < 15 || h >= 345) ? 'Vermelho' : h < 45 ? 'Laranja' : h < 70 ? 'Amarelo' : h < 170 ? 'Verde' : h < 200 ? 'Ciano' : h < 255 ? 'Azul' : h < 290 ? 'Roxo' : 'Rosa';
  return hue + (l > 0.66 ? ' claro' : l < 0.34 ? ' escuro' : '');
}
function extractPalette(src, n = 8) {
  return new Promise(res => {
    const im = new Image();
    im.onload = () => {
      const S = 72, c = document.createElement('canvas'); c.width = S; c.height = S;
      const x = c.getContext('2d'); x.drawImage(im, 0, 0, S, S);
      let d; try { d = x.getImageData(0, 0, S, S).data; } catch (e) { return res([]); }
      const buckets = new Map();
      for (let i = 0; i < d.length; i += 4) {
        if (d[i + 3] < 60) continue;                         // ignora transparente
        const r = d[i], g = d[i + 1], b = d[i + 2];
        const key = (r >> 4) + ',' + (g >> 4) + ',' + (b >> 4);
        let e = buckets.get(key); if (!e) { e = { n: 0, r: 0, g: 0, b: 0 }; buckets.set(key, e); }
        e.n++; e.r += r; e.g += g; e.b += b;
      }
      let arr = [...buckets.values()].map(e => ({ n: e.n, r: Math.round(e.r / e.n), g: Math.round(e.g / e.n), b: Math.round(e.b / e.n) })).sort((a, b) => b.n - a.n);
      const out = [], dist = (a, b) => Math.abs(a.r - b.r) + Math.abs(a.g - b.g) + Math.abs(a.b - b.b);
      for (const cand of arr) { if (out.length >= n) break; if (out.every(o => dist(o, cand) > 44)) out.push(cand); }
      res(out.map(o => ({ hex: rgbHex(o.r, o.g, o.b), name: colorName(o.r, o.g, o.b), rgb: `rgb(${o.r}, ${o.g}, ${o.b})` })));
    };
    im.onerror = () => res([]); im.src = src;
  });
}
function imgDim(file) {
  return new Promise(res => { const u = URL.createObjectURL(file), im = new Image();
    im.onload = () => { const s = im.naturalWidth + '×' + im.naturalHeight; URL.revokeObjectURL(u); res(s); };
    im.onerror = () => { URL.revokeObjectURL(u); res(''); }; im.src = u; });
}

/* RECORTE: detecta a cor do FUNDO pelos 4 cantos e remove ela (→ transparente),
   com borda suave + autocrop. Funciona com fundo navy, branco, cinza... */
const _cutCache = {};
function cutoutBg(src) {
  if (_cutCache[src]) return Promise.resolve(_cutCache[src]);
  return new Promise(res => {
    const im = new Image();
    im.onload = () => {
      const W = im.naturalWidth, H = im.naturalHeight;
      const c = document.createElement('canvas'); c.width = W; c.height = H;
      const x = c.getContext('2d'); x.drawImage(im, 0, 0);
      let d; try { d = x.getImageData(0, 0, W, H); } catch (e) { return res(src); }
      const p = d.data;
      const samp = (sx, sy) => { let r = 0, g = 0, b = 0, n = 0; for (let yy = sy; yy < sy + 8; yy++) for (let xx = sx; xx < sx + 8; xx++) { const i = (yy * W + xx) * 4; r += p[i]; g += p[i + 1]; b += p[i + 2]; n++; } return [r / n, g / n, b / n]; };
      const cs = [samp(0, 0), samp(W - 8, 0), samp(0, H - 8), samp(W - 8, H - 8)];
      const bg = [0, 1, 2].map(k => cs.reduce((a, c) => a + c[k], 0) / 4);
      const T0 = 56, T1 = 100;   // <=T0 some · T0..T1 desbota (borda suave)
      for (let i = 0; i < p.length; i += 4) {
        const dist = Math.abs(p[i] - bg[0]) + Math.abs(p[i + 1] - bg[1]) + Math.abs(p[i + 2] - bg[2]);
        if (dist <= T0) p[i + 3] = 0;
        else if (dist < T1) { const a = Math.round(255 * (dist - T0) / (T1 - T0)); if (a < p[i + 3]) p[i + 3] = a; }
      }
      x.putImageData(d, 0, 0);
      // autocrop ao conteúdo opaco
      let x0 = W, y0 = H, x1 = 0, y1 = 0, found = false;
      for (let yy = 0; yy < H; yy++) for (let xx = 0; xx < W; xx++) {
        if (p[(yy * W + xx) * 4 + 3] > 30) { found = true; if (xx < x0) x0 = xx; if (xx > x1) x1 = xx; if (yy < y0) y0 = yy; if (yy > y1) y1 = yy; }
      }
      if (!found) return res(src);
      const pad = Math.round(Math.min(W, H) * 0.02);
      x0 = Math.max(0, x0 - pad); y0 = Math.max(0, y0 - pad); x1 = Math.min(W - 1, x1 + pad); y1 = Math.min(H - 1, y1 + pad);
      const cw = x1 - x0 + 1, ch = y1 - y0 + 1;
      const cc = document.createElement('canvas'); cc.width = cw; cc.height = ch;
      cc.getContext('2d').putImageData(x.getImageData(x0, y0, cw, ch), 0, 0);
      const out = cc.toDataURL('image/png');
      _cutCache[src] = out; res(out);
    };
    im.onerror = () => res(src);
    im.src = src;
  });
}
function initCatHero() {
  const wrap = document.querySelector('.cat-hero-img'); if (!wrap) return;
  const img = wrap.querySelector('img'); if (!img) return;
  const src = img.getAttribute('src'); if (!src) return;
  cutoutBg(src).then(out => { if (out && out !== src) { img.src = out; wrap.classList.add('cut'); } });
}

/* artes (aplicações) por marca — IndexedDB */
const ArtesDB = (() => {
  let dbp = null;
  function open() { if (dbp) return dbp;
    dbp = new Promise((res, rej) => { const r = indexedDB.open('cl-artes', 1);
      r.onupgradeneeded = () => { if (!r.result.objectStoreNames.contains('artes')) r.result.createObjectStore('artes'); };
      r.onsuccess = () => res(r.result); r.onerror = () => rej(r.error); });
    return dbp;
  }
  const tx = (mode, fn) => open().then(db => new Promise((res, rej) => {
    const t = db.transaction('artes', mode), st = t.objectStore('artes'); const out = fn(st);
    t.oncomplete = () => res(out && typeof out === 'object' && 'result' in out ? out.result : out); t.onerror = () => rej(t.error);
  }));
  return { get: brand => tx('readonly', st => st.get(brand)), set: (brand, arr) => tx('readwrite', st => st.put(arr, brand)) };
})();

/* CENTRAL DA MARCA — cada LOGO é uma "versão" com sua paleta + suas artes.
   Clicar num logo SELECIONA (não abre nada) e mostra cores + aplicações daquela versão. */
async function initBrandHub(brand) {
  const root = document.querySelector('.brand-page'); if (!root) return;
  const cor = root.dataset.cor || '#2f7ff2';
  const logoInit = root.dataset.logo || (brand[0] || 'C');
  const tag = root.dataset.tag || 'identidade da marca';
  const SAMPLE_LOOKS = [
    { id: 'principal', name: 'Logo principal', cls: '', ar: 2.5 },
    { id: 'branca', name: 'Logo branca', cls: 'white', ar: 2.5, darkBg: true },
    { id: 'azul', name: 'Logo azul', cls: 'blue', ar: 2.5 },
    { id: 'simbolo', name: 'Símbolo isolado', cls: 'sym', ar: 1.25 },
    { id: 'horizontal', name: 'Versão horizontal', cls: '', ar: 3 },
    { id: 'vertical', name: 'Versão vertical', cls: '', ar: 1.7 },
  ];
  const lockupHTML = cls => `<div class="blogo ${cls}" style="--bcor:${cor}"><span class="bl-c">${logoInit}</span><span class="bl-word">${(brand || '').toLowerCase()}<small>${tag}</small></span></div>`;
  const logosEl = document.getElementById('bh-logos');
  const colorsEl = document.getElementById('bh-colors');
  const appsEl = document.getElementById('bh-apps');
  if (!logosEl || !colorsEl || !appsEl) return;

  // stats REAIS do hero (conta o que está na página) — sem números fake
  const setStats = () => {
    const set = (id, n) => { const el = document.getElementById(id); if (el) el.textContent = n; };
    set('bs-logos', logosEl.querySelectorAll('.logo-card').length);
    set('bs-cores', colorsEl.querySelectorAll('.color-card').length);
    set('bs-apps', appsEl.querySelectorAll('.app-card').length);
  };

  // paleta padrão por versão (distinta) — o admin pode regerar do logo
  const DEF = {
    principal: [cor, '#1B2655', '#6B7280', '#F4F5F7', '#1F2937', '#FFFFFF'],
    azul:      ['#3B82F6', '#2447B0', '#1B2655', '#E6ECFF', '#0EA5E9', '#FFFFFF'],
    branca:    ['#0F1B30', '#1F2937', '#6B7280', '#C9D3E0', '#FFFFFF', '#000000'],
    simbolo:   [cor, '#E6ECFF', '#FFFFFF'],
    horizontal:[cor, '#24336E', '#6B7280', '#F4F5F7', '#1F2937', '#FFFFFF'],
    vertical:  [cor, '#1B2655', '#3B82F6', '#E6ECFF', '#1F2937', '#FFFFFF'],
  };
  const DEFAULT_APPS = [['Post institucional','1080×1080'],['Story institucional','1080×1920'],['Capa apresentação','1920×1080'],['Assinatura de e-mail','PNG'],['Papel timbrado','A4'],['Template proposta','A4']];
  const palKey = look => 'cl-pal:' + brand + ':' + look;
  const artKey = look => brand + '::' + look;
  let sel = 'principal', aurls = [], appsCache = [], lurls = [], uploadedLogos = [];

  function loadPal(look) {
    try { const p = JSON.parse(localStorage.getItem(palKey(look))); if (p && p.length) return { pal: p, custom: true }; } catch (_) {}
    return { pal: (DEF[look] || DEF.principal).map(h => ({ hex: h, name: hexName(h) })), custom: false };
  }
  function renderColors() {
    const { pal, custom } = loadPal(sel);
    colorsEl.innerHTML = pal.map((c, i) =>
      `<div class="color-card"><span class="color-sw" style="background:${c.hex}"></span><div class="color-meta"><b>${c.name || hexName(c.hex)}</b><span>${c.hex}</span></div>
        <button class="color-cp" data-hex="${c.hex}" title="Copiar HEX">${svgIcon('file','ic ic-sm')}</button>
        <button class="color-del" data-i="${i}" title="Apagar (admin)">${svgIcon('trash','ic ic-xs')}</button></div>`).join('')
      + (custom ? `<button class="bh-resetpal" id="bh-resetpal">${svgIcon('trash','ic ic-xs')} Voltar pra paleta padrão</button>` : '');
    renderIcons(colorsEl); setStats();
  }
  async function renderApps() {
    aurls.forEach(u => URL.revokeObjectURL(u)); aurls = [];
    try { appsCache = (await ArtesDB.get(artKey(sel))) || []; } catch (_) { appsCache = []; }
    if (appsCache.length) {
      appsEl.innerHTML = appsCache.map((a, i) => { const u = URL.createObjectURL(a.blob); aurls.push(u);
        return `<div class="app-card own" data-i="${i}"><div class="app-thumb img"><img src="${u}" alt="${a.title}"><button class="app-del" data-id="${a.id}" title="Remover">${svgIcon('trash','ic ic-xs')}</button></div><b>${a.title}</b><span>${a.dim || fmtBytes(a.size)}</span></div>`;
      }).join('');
    } else {
      const tint = (loadPal(sel).pal[0] || {}).hex || cor;   // placeholders tingidos na cor da versão
      appsEl.innerHTML = DEFAULT_APPS.map(a => `<div class="app-card"><div class="app-thumb" style="background:linear-gradient(155deg, ${tint}2e, var(--surface)); color:${tint}; border-color:${tint}33">${svgIcon('image','ic ph')}</div><b>${a[0]}</b><span>${a[1]}</span></div>`).join('');
    }
    renderIcons(appsEl); setStats();
  }
  function selectLook(look) {
    sel = look;
    logosEl.querySelectorAll('.logo-card').forEach(c => c.classList.toggle('sel', c.dataset.look === look));
    renderColors(); renderApps(); Sound.click && Sound.click();
  }
  function hasHidden() { try { return (JSON.parse(localStorage.getItem('cl-logohide:' + brand)) || []).length > 0; } catch (_) { return false; } }
  // MASONRY: cada card acompanha a proporção real do logo (mostra inteiro, sem cortar)
  async function renderLogos() {
    lurls.forEach(u => URL.revokeObjectURL(u)); lurls = [];
    try { uploadedLogos = (await LogosDB.get(brand)) || []; } catch (_) { uploadedLogos = []; }
    let hidden = []; try { hidden = JSON.parse(localStorage.getItem('cl-logohide:' + brand)) || []; } catch (_) {}
    const list = [];
    uploadedLogos.forEach(r => { const u = URL.createObjectURL(r.blob); lurls.push(u);
      list.push({ look: 'up:' + r.id, name: r.title, meta: (r.ext || 'PNG') + ' · ' + fmtBytes(r.size), ar: r.ar || 1.4, darkBg: !!r.darkBg, thumb: `<img src="${u}" alt="${r.title}">`, own: true }); });
    SAMPLE_LOOKS.filter(s => !hidden.includes(s.id)).forEach(s =>
      list.push({ look: s.id, name: s.name, meta: 'PNG · SVG · PDF', ar: s.ar, darkBg: !!s.darkBg, thumb: lockupHTML(s.cls), own: false }));
    if (!list.length) {
      logosEl.className = 'logo-grid';
      logosEl.innerHTML = `<div class="bh-logos-empty"><span class="pf-empty-ic">${svgIcon('upload','ic')}</span><b>Nenhum logo aqui</b>
        <span>Solte os logos da marca — a paleta de cores é gerada automaticamente de cada um.</span>
        <div class="bh-empty-btns"><button class="btn" id="bh-empty-add">${svgIcon('upload','ic ic-sm')} Adicionar logo</button>${hasHidden() ? `<button class="btn ghost" id="bh-restore">Restaurar padrões</button>` : ''}</div></div>`;
      renderIcons(logosEl); setStats(); return;
    }
    logosEl.className = 'logo-grid masonry';
    const gap = 12, CAP = 48, W = logosEl.clientWidth || 340;
    const cols = Math.max(1, Math.min(2, Math.floor((W + gap) / (168 + gap))));
    const colW = (W - (cols - 1) * gap) / cols;
    logosEl.innerHTML = '';
    const colEls = [], heights = [];
    for (let i = 0; i < cols; i++) { const c = document.createElement('div'); c.className = 'masonry-col'; logosEl.appendChild(c); colEls.push(c); heights.push(0); }
    list.forEach(x => {
      let t = 0; for (let k = 1; k < cols; k++) if (heights[k] < heights[t] - 0.5) t = k;
      const h = Math.max(84, Math.min(colW / (x.ar || 1.6), 230));
      const wrap = document.createElement('div');
      wrap.innerHTML = `<div class="logo-card${x.own ? ' up-logo' : ''}${x.look === sel ? ' sel' : ''}" data-look="${x.look}">
        <div class="logo-box${x.own ? ' img' : ''}" style="height:${Math.round(h)}px${x.darkBg ? ';background:#0f1b30' : ''}">${x.thumb}</div>
        <div class="logo-meta"><div><b>${x.name}</b><span>${x.meta}</span></div>
          <button class="logo-del" title="Apagar (admin)">${svgIcon('trash','ic ic-sm')}</button>
          <button class="logo-dl">${svgIcon('download','ic ic-sm')}</button></div></div>`;
      colEls[t].appendChild(wrap.firstElementChild); heights[t] += h + CAP + gap;
    });
    renderIcons(logosEl); setStats();
  }
  let bhrt; window.addEventListener('resize', () => { clearTimeout(bhrt); bhrt = setTimeout(() => { if (document.body.contains(logosEl)) renderLogos(); }, 150); });

  // LOGOS: clicar = selecionar · apagar (admin) · adicionar/restaurar (vazio) · download = aviso
  logosEl.addEventListener('click', async e => {
    if (e.target.closest('#bh-empty-add')) { document.getElementById('bh-addlogo')?.click(); return; }
    if (e.target.closest('#bh-restore')) { localStorage.removeItem('cl-logohide:' + brand); window.__route && window.__route(); return; }
    const del = e.target.closest('.logo-del');
    if (del) { e.stopPropagation(); const card = del.closest('.logo-card'), look = card.dataset.look;
      if (look.indexOf('up:') === 0) {
        const id = look.slice(3); uploadedLogos = uploadedLogos.filter(r => r.id !== id);
        try { await LogosDB.set(brand, uploadedLogos); } catch (_) {}
        localStorage.removeItem(palKey(look));
      } else {
        let hid = []; try { hid = JSON.parse(localStorage.getItem('cl-logohide:' + brand)) || []; } catch (_) {}
        if (!hid.includes(look)) { hid.push(look); localStorage.setItem('cl-logohide:' + brand, JSON.stringify(hid)); }
      }
      card.remove(); Toast.info('Logo removido.');
      await renderLogos();
      if (sel === look) { const first = logosEl.querySelector('.logo-card'); if (first) selectLook(first.dataset.look); else { colorsEl.innerHTML = ''; appsEl.innerHTML = ''; } }
      return;
    }
    if (e.target.closest('.logo-dl')) { e.stopPropagation(); Toast.info('Download do logo (demo).'); return; }
    const card = e.target.closest('.logo-card'); if (card) selectLook(card.dataset.look);
  });

  // ADICIONAR LOGO (admin) — vira uma versão + paleta automática
  document.getElementById('bh-addlogo')?.addEventListener('click', () => {
    const inp = document.createElement('input'); inp.type = 'file'; inp.accept = 'image/png,image/svg+xml,image/jpeg,image/*'; inp.multiple = true;
    inp.onchange = async () => {
      const files = [...(inp.files || [])]; if (!files.length) return;
      let arr = []; try { arr = (await LogosDB.get(brand)) || []; } catch (_) {}
      let firstId = null;
      for (let i = 0; i < files.length; i++) { const f = files[i], { ar, darkBg } = await analyzeImg(f);
        const id = 'lg' + Date.now() + '-' + i; if (!firstId) firstId = id;
        arr.unshift({ id, title: f.name.replace(/\.[^.]+$/, ''), ext: (f.name.split('.').pop() || 'PNG').toUpperCase().slice(0, 4), size: f.size, ar, darkBg, date: dateBR(), blob: f });
        try { const url = URL.createObjectURL(f); const pal = await extractPalette(url, 8); URL.revokeObjectURL(url); if (pal.length) localStorage.setItem(palKey('up:' + id), JSON.stringify(pal)); } catch (_) {}
      }
      try { await LogosDB.set(brand, arr); Sound.success && Sound.success(); Toast.success(files.length + ' logo(s) — paleta gerada!'); }
      catch (_) { Toast.error('Não consegui salvar. Tente arquivos menores.'); }
      await renderLogos();
      if (firstId) selectLook('up:' + firstId);
    };
    inp.click();
  });

  // CORES: copiar HEX · apagar cor (admin) · gerar do logo · reset
  colorsEl.addEventListener('click', e => {
    const cp = e.target.closest('.color-cp');
    if (cp) { navigator.clipboard && navigator.clipboard.writeText(cp.dataset.hex).then(() => Toast.success('Copiado: ' + cp.dataset.hex)).catch(() => {}); return; }
    const cd = e.target.closest('.color-del');
    if (cd) { const { pal } = loadPal(sel); pal.splice(+cd.dataset.i, 1); localStorage.setItem(palKey(sel), JSON.stringify(pal)); Toast.info('Cor removida.'); renderColors(); renderApps(); return; }
    if (e.target.closest('#bh-resetpal')) { localStorage.removeItem(palKey(sel)); Toast.info('Paleta padrão restaurada.'); renderColors(); renderApps(); }
  });
  document.getElementById('bh-genpal')?.addEventListener('click', () => {
    const inp = document.createElement('input'); inp.type = 'file'; inp.accept = 'image/*';
    inp.onchange = async () => { const f = inp.files && inp.files[0]; if (!f) return;
      const t = Toast.loading('Lendo as cores do logo…'); const url = URL.createObjectURL(f); const p = await extractPalette(url, 8); URL.revokeObjectURL(url);
      if (!p.length) { t.update({ type: 'error', msg: 'Não consegui ler as cores.', duration: 3000 }); return; }
      try { localStorage.setItem(palKey(sel), JSON.stringify(p)); } catch (_) {}
      Sound.success && Sound.success(); t.update({ type: 'success', msg: 'Paleta gerada — ' + p.length + ' cores!', duration: 3000 });
      renderColors(); renderApps();
    }; inp.click();
  });

  // APLICAÇÕES (artes da versão): adicionar · abrir lightbox · remover
  document.getElementById('bh-addart')?.addEventListener('click', () => {
    const inp = document.createElement('input'); inp.type = 'file'; inp.accept = 'image/*'; inp.multiple = true;
    inp.onchange = async () => { const files = [...(inp.files || [])]; if (!files.length) return;
      let arr = []; try { arr = (await ArtesDB.get(artKey(sel))) || []; } catch (_) {}
      for (let i = 0; i < files.length; i++) { const f = files[i], dim = await imgDim(f);
        arr.unshift({ id: 'art' + Date.now() + '-' + i, title: f.name.replace(/\.[^.]+$/, ''), ext: (f.name.split('.').pop() || 'PNG').toUpperCase().slice(0, 4), size: f.size, dim, blob: f }); }
      try { await ArtesDB.set(artKey(sel), arr); Sound.success && Sound.success(); Toast.success(files.length + ' arte(s) adicionada(s)!'); }
      catch (_) { Toast.error('Não consegui salvar. Tente arquivos menores.'); }
      renderApps();
    }; inp.click();
  });
  appsEl.addEventListener('click', async e => {
    const del = e.target.closest('.app-del');
    if (del) { e.stopPropagation(); const arr = appsCache.filter(a => a.id !== del.dataset.id); try { await ArtesDB.set(artKey(sel), arr); } catch (_) {} Toast.info('Arte removida.'); renderApps(); return; }
    const card = e.target.closest('.app-card.own'); if (card) { const a = appsCache[+card.dataset.i]; if (a) {
      const u = URL.createObjectURL(a.blob); aurls.push(u);
      window.__openImg && window.__openImg([{ kind: 'img', t: a.title, title: a.title, ext: a.ext || 'PNG', size: fmtBytes(a.size), date: a.dim || '', folder: 'Aplicações', url: u, blob: a.blob, brand, darkBg: false }], 0);
    } }
  });

  // INIT: esconde versões apagadas → prepende logos enviados → seleciona a 1ª
  (async () => {
    try { (JSON.parse(localStorage.getItem('cl-logohide:' + brand)) || []).forEach(id => logosEl.querySelector(`.logo-card[data-look="${id}"]`)?.remove()); } catch (_) {}
    await renderLogos();
    const first = logosEl.querySelector('.logo-card');
    if (first) {
      sel = logosEl.querySelector('.logo-card.sel')?.dataset.look || first.dataset.look;
      logosEl.querySelectorAll('.logo-card').forEach(c => c.classList.toggle('sel', c.dataset.look === sel));
      renderColors(); renderApps();
    } else {
      colorsEl.innerHTML = `<div class="pf-loading">Adicione um logo pra gerar as cores.</div>`;
      appsEl.innerHTML = `<div class="pf-loading">Adicione um logo (e artes) pra esta versão.</div>`;
    }
  })();
}

/* ============================================================
   ÁUDIO — acervo + player fixo no rodapé + playlists (cliente)
   ============================================================ */
const TRACKS = [
  { id: 'jingle', title: 'Jingle Contourline', tag: 'Vinheta institucional', eq: 'Contourline', src: 'assets/audio/contourline-jingle.mp3' },
  { id: 'unyque', title: 'Música Unyque Pro',  tag: 'Trilha do equipamento', eq: 'Unyque Pro',  src: 'assets/audio/unyque-pro.mp3' },
];
const AudioDB = (() => {
  let dbp = null;
  function open() { if (dbp) return dbp;
    dbp = new Promise((res, rej) => { const r = indexedDB.open('cl-audio', 1);
      r.onupgradeneeded = () => { if (!r.result.objectStoreNames.contains('tracks')) r.result.createObjectStore('tracks'); };
      r.onsuccess = () => res(r.result); r.onerror = () => rej(r.error); }); return dbp; }
  const tx = (mode, fn) => open().then(db => new Promise((res, rej) => {
    const t = db.transaction('tracks', mode), st = t.objectStore('tracks'); const out = fn(st);
    t.oncomplete = () => res(out && typeof out === 'object' && 'result' in out ? out.result : out); t.onerror = () => rej(t.error); }));
  return { get: () => tx('readonly', st => st.get('all')), set: arr => tx('readwrite', st => st.put(arr, 'all')) };
})();
/* gradientes pré-definidos p/ a CAPA da playlist (o cliente escolhe as cores) */
const GRADS = [
  ['#2f7ff2', '#7a57ff'], ['#e11d48', '#7a1fff'], ['#0ea5e9', '#22d3ee'],
  ['#16a34a', '#84cc16'], ['#f59e0b', '#ef4444'], ['#0d9488', '#3b82f6'],
  ['#ec4899', '#8b5cf6'], ['#111827', '#374151'],
];
const gradCss = i => { const g = GRADS[i] || GRADS[0]; return `linear-gradient(135deg, ${g[0]}, ${g[1]})`; };
const Playlists = {
  read() {
    let o; try { o = JSON.parse(localStorage.getItem('cl-playlists') || '{}'); } catch (_) { o = {}; }
    Object.keys(o).forEach(k => { if (Array.isArray(o[k])) o[k] = { grad: 0, tracks: o[k] }; });   // migra formato antigo
    return o;
  },
  write(o) { try { localStorage.setItem('cl-playlists', JSON.stringify(o)); } catch (_) { Toast.error('Sem espaço pra salvar.'); } },
  create(n, grad) { const o = this.read(); if (!o[n]) o[n] = { grad: grad || 0, tracks: [] }; this.write(o); },
  add(n, ids) { const o = this.read(); const pl = o[n] || { grad: 0, tracks: [] }; ids.forEach(id => { if (!pl.tracks.includes(id)) pl.tracks.push(id); }); o[n] = pl; this.write(o); },
  removeTrack(n, id) { const o = this.read(); if (o[n]) o[n].tracks = o[n].tracks.filter(t => t !== id); this.write(o); },
  remove(n) { const o = this.read(); delete o[n]; this.write(o); },
  tracks(n) { const o = this.read(); return o[n] ? o[n].tracks : []; },
};
function fmtTime(s) { s = Math.max(0, Math.floor(s || 0)); return Math.floor(s / 60) + ':' + String(s % 60).padStart(2, '0'); }
let _uploadedTracks = [];
async function loadAudioTracks() { try { _uploadedTracks = (await AudioDB.get()) || []; } catch (_) { _uploadedTracks = []; } return _uploadedTracks; }
function allTracks() { return _uploadedTracks.concat(TRACKS); }
function trackById(id) { return allTracks().find(t => t.id === id); }

const Player = {
  audio: null, bar: null, queue: [], idx: -1, urls: [], grad: 0,
  init() {
    this.audio = document.getElementById('player-audio'); this.bar = document.getElementById('player-bar'); if (!this.audio || !this.bar) return;
    document.getElementById('pl-toggle')?.addEventListener('click', () => this.toggle());
    document.getElementById('pl-prev')?.addEventListener('click', () => this.prev());
    document.getElementById('pl-next')?.addEventListener('click', () => this.next());
    document.getElementById('pl-close')?.addEventListener('click', () => this.stop());
    const seek = document.getElementById('pl-seek');
    seek?.addEventListener('input', () => { if (this.audio.duration) this.audio.currentTime = (+seek.value / 1000) * this.audio.duration; });
    const vol = document.getElementById('pl-vol'); vol?.addEventListener('input', () => { this.audio.volume = +vol.value / 100; });
    this.audio.addEventListener('timeupdate', () => this.tick());
    this.audio.addEventListener('ended', () => this.next());
    this.audio.addEventListener('play', () => this.render());
    this.audio.addEventListener('pause', () => this.render());
    this.audio.addEventListener('loadedmetadata', () => this.tick());
    // mini player (aparece fora da página de áudio)
    document.getElementById('mp-toggle')?.addEventListener('click', e => { e.stopPropagation(); this.toggle(); });
    document.getElementById('mini-player')?.addEventListener('click', e => { if (!e.target.closest('.mp-toggle')) location.hash = '#/audio'; });
  },
  srcFor(t) { if (t.src) return t.src; if (t.blob) { const u = URL.createObjectURL(t.blob); this.urls.push(u); return u; } return null; },
  load(i) { this.idx = i; const t = this.queue[i]; if (!t) return; const src = this.srcFor(t); if (!src) { Toast.error('Áudio indisponível.'); return; }
    this.audio.src = src; this.audio.play().catch(() => {}); this.placement(); this.render(); },
  play(track, queue, grad) { this.queue = (queue && queue.length ? queue : [track]); this.grad = grad || 0; const i = this.queue.findIndex(t => t.id === track.id); this.load(i < 0 ? 0 : i); Sound.click && Sound.click(); },
  toggle() { if (!this.queue.length) return; if (this.audio.paused) this.audio.play().catch(() => {}); else this.audio.pause(); },
  next() { if (this.idx + 1 < this.queue.length) this.load(this.idx + 1); else this.audio.pause(); },
  prev() { if (this.audio.currentTime > 3) this.audio.currentTime = 0; else if (this.idx > 0) this.load(this.idx - 1); else this.audio.currentTime = 0; },
  stop() { this.audio.pause(); this.audio.removeAttribute('src'); this.audio.load(); this.queue = []; this.idx = -1; this.placement(); this.render(); },
  // mostra o bar completo na página de áudio, e o MINI player fora dela
  placement() {
    const active = this.queue.length > 0, onAudio = location.hash.indexOf('#/audio') === 0;
    this.bar && this.bar.classList.toggle('show', active && onAudio);
    document.getElementById('mini-player')?.classList.toggle('show', active && !onAudio);
    document.body.classList.toggle('has-player', active && onAudio);
    document.body.classList.toggle('has-mini', active && !onAudio);
  },
  tick() { const a = this.audio, seek = document.getElementById('pl-seek');
    if (seek && a.duration && document.activeElement !== seek) seek.value = String((a.currentTime / a.duration) * 1000);
    const cur = document.getElementById('pl-cur'), dur = document.getElementById('pl-dur'); if (cur) cur.textContent = fmtTime(a.currentTime); if (dur) dur.textContent = fmtTime(a.duration); },
  render() { const t = this.queue[this.idx], paused = !this.audio || this.audio.paused;
    const tg = document.getElementById('pl-toggle'); if (tg) tg.innerHTML = svgIcon(paused ? 'play2' : 'pause', 'ic');
    const mtg = document.getElementById('mp-toggle'); if (mtg) mtg.innerHTML = svgIcon(paused ? 'play2' : 'pause', 'ic ic-sm');
    if (t) {
      const set = (id, v) => { const e = document.getElementById(id); if (e) e.textContent = v; };
      const sub = (t.tag || '') + (t.eq ? (' · ' + t.eq) : '');
      set('pl-title', t.title); set('pl-sub', sub); set('mp-title', t.title); set('mp-sub', sub);
      const cover = document.getElementById('mp-cover'); if (cover) cover.style.background = gradCss(this.grad);
    }
    document.querySelectorAll('.track-row, .plc-track').forEach(r => r.classList.toggle('playing', !!t && r.dataset.id === t.id && !paused));
  },
  isPlaying(id) { return this.queue[this.idx] && this.queue[this.idx].id === id && !this.audio.paused; },
};

/* modal "Adicionar à playlist" */
let _plPending = [];
function renderPlPicker() {
  const el = document.getElementById('plpick-list'); if (!el) return;
  const pls = Playlists.read(), names = Object.keys(pls);
  el.innerHTML = names.length ? names.map(n => `<button class="favc-row" data-name="${n}"><span class="favc-ic" style="background:${gradCss(pls[n].grad)};color:#fff;border:none">${svgIcon('music')}</span><div class="favc-meta"><b>${n}</b><span>${(pls[n].tracks || []).length} áudio(s)</span></div><span class="favc-add">${svgIcon('plus','ic ic-sm')}</span></button>`).join('') : `<div class="fav-empty">Crie uma playlist acima ☝</div>`;
  renderIcons(el);
}
function openPlaylistPicker(ids) { _plPending = ids || []; renderPlPicker(); UI.openModal('modal-playlist'); }
function initPlaylistModal() {
  const bd = document.getElementById('modal-playlist'); if (!bd) return;
  const create = () => { const inp = document.getElementById('plpick-new'); const n = (inp.value || '').trim(); if (!n) return; Playlists.create(n, Object.keys(Playlists.read()).length % GRADS.length); inp.value = ''; renderPlPicker(); Sound.click && Sound.click(); };
  document.getElementById('plpick-go')?.addEventListener('click', create);
  document.getElementById('plpick-new')?.addEventListener('keydown', e => { if (e.key === 'Enter') create(); });
  document.getElementById('plpick-list')?.addEventListener('click', e => {
    const row = e.target.closest('.favc-row'); if (!row) return;
    Playlists.add(row.dataset.name, _plPending); Sound.success && Sound.success(); Toast.success(_plPending.length + ' áudio(s) em "' + row.dataset.name + '"'); UI.closeModal(bd);
    if (location.hash.indexOf('#/audio') === 0 && window.__route) window.__route();
  });
}

/* página de Áudios */
async function initMusica() {
  const root = document.getElementById('audio-page'); if (!root) return;
  await loadAudioTracks();
  let selGrad = 0, audCat = 'todos';
  const catOf = t => (t.cat || t.tag || '').trim();   // categoria do áudio (p/ filtro)
  const trackRow = t => {
    const playing = Player.isPlaying(t.id);
    return `<div class="track-row${playing ? ' playing' : ''}" data-id="${t.id}">
      <button class="tr-play" title="Tocar">${svgIcon(playing ? 'pause' : 'play2', 'ic ic-sm')}</button>
      <div class="tr-ic">${svgIcon('music', 'ic ic-sm')}</div>
      <div class="tr-meta"><b>${t.title}</b><span>${t.tag || ''}${t.eq ? (' · ' + t.eq) : ''}</span></div>
      <div class="tr-actions">
        <button class="tr-add" title="Adicionar à playlist">${svgIcon('plus', 'ic ic-sm')}</button>
        ${t.own ? `<button class="tr-del" title="Remover (admin)">${svgIcon('trash', 'ic ic-xs')}</button>` : ''}
      </div></div>`;
  };
  const playlistCard = (n, pl) => {
    const tracks = (pl.tracks || []).map(trackById).filter(Boolean);
    return `<div class="playlist-card" data-pl="${n}">
      <div class="plc-head"><div class="plc-cover" style="background:${gradCss(pl.grad)}">${svgIcon('music', 'ic')}</div>
        <div class="plc-meta"><b>${n}</b><span>${tracks.length} áudio(s)</span></div>
        <button class="btn plc-play">${svgIcon('play2', 'ic ic-sm')} Tocar</button>
        <button class="plc-del" title="Excluir playlist">${svgIcon('trash', 'ic ic-sm')}</button></div>
      <div class="plc-tracks">${tracks.map(t => `<div class="plc-track" data-id="${t.id}"><button class="plct-play">${svgIcon('play2', 'ic ic-xs')}</button><span>${t.title}</span><button class="plct-rm" title="Tirar da playlist">${svgIcon('trash', 'ic ic-xs')}</button></div>`).join('') || '<div class="plc-empty">Vazia — use o + nos áudios pra adicionar.</div>'}</div>
    </div>`;
  };
  function render() {
    const all = allTracks(), pls = Playlists.read(), names = Object.keys(pls);
    const cats = [...new Set(all.map(catOf).filter(Boolean))].sort((a, b) => a.localeCompare(b, 'pt-BR'));
    if (audCat !== 'todos' && !cats.includes(audCat)) audCat = 'todos';
    const list = audCat === 'todos' ? all : all.filter(t => catOf(t) === audCat);
    root.innerHTML = `
      <section class="audio-sec">
        <div class="audio-head"><h2>Acervo de áudios <span class="audio-count">${all.length}</span></h2>
          <button class="bh-genbtn" id="audio-add"><i data-icon="upload" data-cls="ic ic-sm"></i> Adicionar áudio</button></div>
        ${cats.length > 1 ? `<div class="aud-filters" id="aud-filters">
          <button class="aud-chip${audCat === 'todos' ? ' on' : ''}" data-cat="todos">Todos <b>${all.length}</b></button>
          ${cats.map(c => `<button class="aud-chip${audCat === c ? ' on' : ''}" data-cat="${c}">${c} <b>${all.filter(t => catOf(t) === c).length}</b></button>`).join('')}
        </div>` : ''}
        <div class="track-list">${list.map(trackRow).join('') || '<div class="pf-loading">Nenhum áudio nessa categoria.</div>'}</div>
      </section>
      <section class="audio-sec">
        <div class="audio-head"><h2>Minhas playlists</h2></div>
        <div class="pl-newwrap">
          <div class="grad-pick" id="grad-pick"><span class="grad-lbl">Cor da capa:</span>${GRADS.map((g, i) => `<button class="grad-sw${i === selGrad ? ' on' : ''}" data-g="${i}" style="background:${gradCss(i)}" title="Cor da capa"></button>`).join('')}</div>
          <div class="pl-new"><div class="input"><i data-icon="music" data-cls="ic ic-sm"></i><input id="pl-new-name" placeholder="Nome da playlist (ex: Recepção, Procedimento)" autocomplete="off"></div><button class="btn" id="pl-new-go">Criar</button></div>
        </div>
        <div class="playlist-list">${names.length ? names.map(n => playlistCard(n, pls[n])).join('') : '<div class="pf-loading">Crie uma playlist (escolha a cor da capa) e adicione áudios com o + 🎵</div>'}</div>
      </section>`;
    renderIcons(root); Player.render();
  }
  function doCreate() { const inp = document.getElementById('pl-new-name'); const n = (inp.value || '').trim(); if (!n) return; Playlists.create(n, selGrad); inp.value = ''; render(); }
  function addAudio() {
    const inp = document.createElement('input'); inp.type = 'file'; inp.accept = 'audio/*'; inp.multiple = true;
    inp.onchange = async () => { const files = [...(inp.files || [])]; if (!files.length) return;
      files.forEach((f, i) => _uploadedTracks.unshift({ id: 'au' + Date.now() + '-' + i, title: f.name.replace(/\.[^.]+$/, ''), tag: 'Enviado', size: f.size, own: true, blob: f }));
      try { await AudioDB.set(_uploadedTracks); Sound.success && Sound.success(); Toast.success(files.length + ' áudio(s) adicionado(s)!'); } catch (_) { Toast.error('Não consegui salvar. Tente arquivos menores.'); }
      render();
    }; inp.click();
  }
  root.addEventListener('keydown', e => { if (e.target.id === 'pl-new-name' && e.key === 'Enter') doCreate(); });
  root.addEventListener('click', async e => {
    const chip = e.target.closest('.aud-chip');
    if (chip) { audCat = chip.dataset.cat; Sound.click && Sound.click(); render(); return; }
    const sw = e.target.closest('.grad-sw');
    if (sw) { selGrad = +sw.dataset.g; root.querySelectorAll('.grad-sw').forEach(s => s.classList.toggle('on', s === sw)); return; }
    if (e.target.closest('#audio-add')) { addAudio(); return; }
    if (e.target.closest('#pl-new-go')) { doCreate(); return; }
    const tr = e.target.closest('.track-row');
    if (tr) {
      if (e.target.closest('.tr-play')) { const t = trackById(tr.dataset.id); if (t) Player.play(t, allTracks()); return; }
      if (e.target.closest('.tr-add')) { openPlaylistPicker([tr.dataset.id]); return; }
      if (e.target.closest('.tr-del')) { _uploadedTracks = _uploadedTracks.filter(t => t.id !== tr.dataset.id); try { await AudioDB.set(_uploadedTracks); } catch (_) {} Toast.info('Áudio removido.'); render(); return; }
    }
    const pc = e.target.closest('.playlist-card'); if (!pc) return;
    const name = pc.dataset.pl, plData = Playlists.read()[name] || { grad: 0, tracks: [] };
    const grad = plData.grad || 0, tracks = (plData.tracks || []).map(trackById).filter(Boolean);
    if (e.target.closest('.plc-play')) { if (tracks.length) Player.play(tracks[0], tracks, grad); else Toast.info('Playlist vazia.'); return; }
    if (e.target.closest('.plc-del')) { if (confirm('Excluir a playlist "' + name + '"?')) { Playlists.remove(name); render(); } return; }
    const pt = e.target.closest('.plc-track'); if (!pt) return;
    if (e.target.closest('.plct-play')) { const t = trackById(pt.dataset.id); if (t) Player.play(t, tracks, grad); return; }
    if (e.target.closest('.plct-rm')) { Playlists.removeTrack(name, pt.dataset.id); render(); return; }
  });
  render();
}

/* LIGHTBOX de imagem (galeria) — visual grande + metadados + baixar + navegação */
function initImgModal() {
  const bd = document.getElementById('modal-img'); if (!bd) return;
  const canvas = document.getElementById('lbx-canvas');
  const G = id => document.getElementById(id);
  let list = [], idx = 0;
  function show() {
    const x = list[idx]; if (!x) return;
    G('lbx-counter').textContent = (idx + 1) + ' de ' + list.length;
    const fname = x.t + (x.ext ? ('.' + x.ext.toLowerCase()) : '');
    G('lbx-name').textContent = fname;
    G('lbx-file').textContent = fname;
    G('lbx-type').textContent = x.ext || '—';
    G('lbx-size').textContent = x.size || '—';
    G('lbx-date').textContent = x.date || '—';
    G('lbx-folder').textContent = x.folder || 'Logos';
    canvas.innerHTML = x.kind === 'img' ? `<img src="${x.url}" alt="${x.t}">` : `<div class="lbx-wm ${x.darkBg ? 'dark' : 'light'}">${x.wm}</div>`;
    bd.classList.toggle('solo', list.length < 2);
  }
  const move = d => { if (!list.length) return; idx = (idx + d + list.length) % list.length; show(); };
  G('lbx-prev')?.addEventListener('click', () => move(-1));
  G('lbx-next')?.addEventListener('click', () => move(1));
  G('lbx-dl')?.addEventListener('click', () => { const x = list[idx]; if (x) downloadItems([x]); });
  G('lbx-fav')?.addEventListener('click', () => { const x = list[idx]; if (x) openFavModal([x]); });
  document.addEventListener('keydown', e => {
    if (!bd.classList.contains('open')) return;
    if (e.key === 'ArrowLeft') move(-1); else if (e.key === 'ArrowRight') move(1);
  });
  window.__openImg = (arr, i) => { list = arr || []; idx = i || 0; show(); UI.openModal('modal-img'); };
}

/* visualizador de PDF (modal) — usa o leitor nativo do navegador via <iframe> */
function initPdfModal() {
  const bd = document.getElementById('modal-pdf'); if (!bd) return;
  const frame = document.getElementById('pdf-frame');
  const dl = document.getElementById('pdf-download');
  const title = document.getElementById('pdf-title');
  const sub = document.getElementById('pdf-sub');
  let url = null;
  function cleanup() { if (url) { URL.revokeObjectURL(url); url = null; } frame.src = 'about:blank'; }
  // limpa o object URL ao fechar (evita vazamento de memória)
  bd.addEventListener('click', e => { if (e.target === bd || e.target.closest('[data-close-modal]')) setTimeout(cleanup, 200); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && bd.classList.contains('open')) setTimeout(cleanup, 200); });
  window.__openPDF = (blob, name, label) => {
    cleanup();
    url = URL.createObjectURL(blob);
    frame.src = url + '#toolbar=1&view=FitH';
    dl.href = url; dl.download = name || 'portfolio.pdf';
    title.textContent = label || 'Portfólio';
    sub.textContent = (name || 'documento.pdf') + ' · ' + fmtBytes(blob.size);
    UI.openModal('modal-pdf');
  };
}

/* monta a seção de Portfólio dentro da página da marca (assíncrono: lê do IndexedDB) */
async function initBrandPortfolio(brand) {
  const box = document.getElementById('brand-portfolio'); if (!box) return;
  let rec = null;
  try { rec = await PortfolioDB.get(brand); } catch (_) {}

  const openFile = () => {
    const inp = document.createElement('input');
    inp.type = 'file'; inp.accept = 'application/pdf';
    inp.onchange = async () => {
      const f = inp.files && inp.files[0]; if (!f) return;
      if (f.type !== 'application/pdf' && !/\.pdf$/i.test(f.name)) { Toast.error('Selecione um arquivo PDF.'); return; }
      try {
        await PortfolioDB.set(brand, { name: f.name, size: f.size, blob: f });
        Sound.success && Sound.success();
        Toast.success('Portfólio salvo! — ' + brand);
        render();
      } catch (err) { Toast.error('Não consegui salvar o PDF. Tente um menor.'); }
    };
    inp.click();
  };

  function render() {
    if (rec && rec.blob) {
      box.innerHTML = `
        <div class="pf-card" id="pf-open" title="Abrir portfólio">
          <div class="pf-thumb"><i data-icon="file" data-cls="ic"></i><span class="pf-ext">PDF</span></div>
          <div class="pf-meta">
            <span class="pf-flag">Atualizado recentemente</span>
            <span class="pf-tag">PORTFÓLIO</span>
            <b>PORTFÓLIO ${brand.toUpperCase()}</b>
            <span class="pf-file">${rec.name} · ${fmtBytes(rec.size)}</span>
          </div>
          <div class="pf-actions">
            <button class="btn ghost pf-replace"><i data-icon="upload" data-cls="ic ic-sm"></i> Trocar</button>
            <button class="btn ghost pf-del" title="Remover">${svgIcon('trash','ic ic-sm')}</button>
            <button class="btn pf-view"><i data-icon="eye" data-cls="ic ic-sm"></i> Abrir portfólio</button>
          </div>
        </div>`;
      renderIcons();
      const openView = () => window.__openPDF(rec.blob, rec.name, 'Portfólio ' + brand);
      box.querySelector('.pf-view').addEventListener('click', e => { e.stopPropagation(); openView(); });
      box.querySelector('#pf-open').addEventListener('click', openView);
      box.querySelector('.pf-replace').addEventListener('click', e => { e.stopPropagation(); openFile(); });
      box.querySelector('.pf-del').addEventListener('click', async e => {
        e.stopPropagation();
        try { await PortfolioDB.del(brand); rec = null; Toast.info('Portfólio removido.'); render(); } catch (_) {}
      });
    } else {
      box.innerHTML = `
        <button class="pf-empty">
          <span class="pf-empty-ic"><i data-icon="upload" data-cls="ic"></i></span>
          <b>Adicionar portfólio (PDF)</b>
          <span>Igual o portfólio da Lumenis — abre num visualizador e pode ser baixado.</span>
          <span class="pf-empty-cta">Clique para escolher o PDF</span>
        </button>`;
      renderIcons();
      box.querySelector('.pf-empty').addEventListener('click', openFile);
    }
  }
  render();
}

/* ============================================================
   HOME — init da Início (roda a cada vez que a rota # abre)
   ============================================================ */
function initHome() {
  renderEquipment();
  renderRecent(); renderStats(); renderActions();

  // ── "Continue de onde parou" (acessos recentes do localStorage) ──
  const recSec = document.getElementById('recent-sec');
  const recRow = document.getElementById('recent-row');
  if (recSec && recRow) {
    let arr = [];
    try { arr = JSON.parse(localStorage.getItem('cl-recent') || '[]'); } catch (_) {}
    if (!arr.length) arr = [   // exemplos até o parceiro navegar de verdade
      { ic:'cpu', t:'HIPRO', s:'Equipamento', h:'#/categoria/HIPRO' },
      { ic:'folder', t:'Imagens', s:'HIPRO · Pasta', h:'#/pasta/HIPRO/Imagens' },
      { ic:'cpu', t:'Enygma', s:'Equipamento', h:'#/categoria/Enygma' },
      { ic:'file', t:'Aplicação HIPRO 01', s:'Material', h:'#/material/Aplica%C3%A7%C3%A3o%20HIPRO%2001' },
    ];
    {
      recSec.hidden = false;
      recRow.innerHTML = arr.slice(0, 4).map(r => `
        <a class="recent-card" href="${r.h}">
          <div class="rc-ic ${r.ic}">${svgIcon(r.ic)}</div>
          <div class="rc-meta"><b>${r.t}</b><span>${r.s}</span></div>
          <span class="rc-go">${svgIcon('arrowR','ic ic-sm')}</span>
        </a>`).join('');
    }
  }

  // ── Novidades ──
  const nov = document.getElementById('novidades');
  if (nov && window.__NOVIDADES) {
    nov.innerHTML = window.__NOVIDADES.map(n => `
      <a class="novidade" href="${n.h}">
        <div class="nv-ic ${n.ic}">${svgIcon(n.ic)}</div>
        <div class="nv-meta"><b>${n.t}</b><span>${n.s}</span></div>
        <span class="nv-tag ${n.tag === 'Novo' ? 'new' : ''}">${n.tag}</span>
      </a>`).join('');
  }

  // linha de equipamentos: arrastar + fade condicional ao scroll
  const eqRow = document.getElementById('eq-row');
  if (eqRow) {
    UI.dragScroll(eqRow);
    document.querySelector('.rail-nav.r')?.addEventListener('click', () =>
      eqRow.scrollBy({ left: 500, behavior: 'smooth' }));
  }

  // aviso de sincronização — 1x por sessão
  if (!sessionStorage.getItem('cl-synced')) {
    sessionStorage.setItem('cl-synced', '1');
    setTimeout(() => {
      const t = Toast.loading('Sincronizando com Google Drive…', { closable: true });
      setTimeout(() => t.update({ type: 'success', msg: 'Índice iniciado — pode levar alguns minutos.', duration: 4500 }), 2600);
    }, 900);
  }
}

/* ============================================================
   BUSCAR — Biblioteca de Materiais (masonry + densidade)
   ============================================================ */
function initBuscar() {
  const grid = document.getElementById('lib-grid'); if (!grid) return;
  const sizeInp = document.getElementById('lib-size');
  const countEl = document.getElementById('lib-count');
  let filter = 'todos', view = 'masonry', size = +sizeInp.value, query = '';

  function filtered() {
    let list = MATERIALS.slice();
    if (query) { const q = query.toLowerCase(); list = list.filter(m => ((m.t || '') + ' ' + (m.eq || '') + ' ' + (m.tag || '') + ' ' + (m.type || '')).toLowerCase().includes(q)); }
    if (filter === 'novos') list = list.filter(m => m.novo);
    else if (filter === 'mais') list.sort((a, b) => b.dl - a.dl);
    else {
      const map = { vid:['vid'], img:['img','png'], pdf:['pdf','ppt'], social:['social'] };
      if (map[filter]) list = list.filter(m => map[filter].includes(m.type));
    }
    const s = document.getElementById('lib-sort')?.value;
    if (s === 'Mais baixados') list.sort((a, b) => b.dl - a.dl);
    else if (s === 'A → Z') list.sort((a, b) => a.t.localeCompare(b.t));
    else if (s === 'Maior arquivo') list.sort((a, b) => parseFloat(b.size) - parseFloat(a.size));
    return list;
  }
  function cardHTML(m) {
    const T = MAT_TYPES[m.type] || MAT_TYPES.pdf;
    const ori = m.ar > 1.15 ? 'Horizontal' : m.ar < 0.85 ? 'Vertical' : 'Quadrado';
    return `<div class="matcard" data-masonry-item style="--mt:${T.c}">
      <div class="mat-thumb" style="aspect-ratio:${m.ar}">
        <span class="mat-wm">${svgIcon(T.ic)}</span>
        ${m.novo ? '<span class="mat-new">Novo</span>' : ''}
        <span class="mat-ext">${svgIcon(T.ic, 'ic')}${T.badge}</span>
        <span class="mat-orient">${ori}</span>
        ${m.type === 'vid' ? `<span class="mat-play">${svgIcon('play')}</span>` : `<span class="mat-ph">${svgIcon(T.ic)}</span>`}
        <span class="mat-thumbcap">${m.eq}</span>
      </div>
      <div class="mat-info">
        <h3>${m.t}</h3>
        <div class="mat-tags"><span>${m.eq}</span><span>${m.tag}</span></div>
        <div class="mat-meta"><span>${m.size}</span><span class="mat-dl">${svgIcon('download','ic ic-sm')} ${m.dl}</span></div>
        <div class="mat-actions">
          <button class="mat-prev">${svgIcon('eye','ic ic-sm')} Preview</button>
          <button class="mat-get">${svgIcon('download','ic ic-sm')} Baixar</button>
          <button class="mat-more">${svgIcon('dots','ic ic-sm')}</button>
        </div>
      </div>
    </div>`;
  }
  function relayout() {
    if (!document.body.contains(grid)) return;
    const list = filtered();
    const _catOn = (typeof Catalog !== 'undefined' && Catalog.active && Catalog.active());
    const total = (!_catOn && filter === 'todos' && !query) ? 4170 : list.length;
    const totalStr = total.toLocaleString('pt-BR');
    if (countEl) countEl.textContent = totalStr;
    const totEl = document.getElementById('lib-total'); if (totEl) totEl.textContent = totalStr;
    if (view === 'list') {
      grid.className = 'lib-grid list';
      grid.innerHTML = list.map(cardHTML).join('');
    } else {
      grid.className = 'masonry lib-grid';
      const gap = 16, BODY = 156;
      const cols = Math.max(1, Math.floor((grid.clientWidth + gap) / (size + gap)));
      const colWidth = (grid.clientWidth - (cols - 1) * gap) / cols;   // largura real da coluna
      grid.innerHTML = '';
      const colEls = [], heights = [];
      for (let i = 0; i < cols; i++) { const c = document.createElement('div'); c.className = 'masonry-col'; grid.appendChild(c); colEls.push(c); heights.push(0); }
      list.forEach(m => {                          // esquerda → direita: coluna mais curta na ordem do DOM
        let t = 0; for (let i = 1; i < cols; i++) if (heights[i] < heights[t] - 0.5) t = i;
        const thumbH = colWidth / (m.ar || 1);     // altura do thumb segue a proporção REAL da imagem
        const w = document.createElement('div'); w.innerHTML = cardHTML(m);
        colEls[t].appendChild(w.firstElementChild); heights[t] += thumbH + BODY + gap;
      });
    }
    renderIcons(grid);
  }
  relayout();

  let rt; window.addEventListener('resize', () => { clearTimeout(rt); rt = setTimeout(relayout, 120); });

  document.getElementById('lib-chips')?.addEventListener('click', e => {
    const b = e.target.closest('.lchip'); if (!b) return;
    document.querySelectorAll('#lib-chips .lchip').forEach(x => x.classList.remove('on'));
    b.classList.add('on'); filter = b.dataset.f; Sound.click && Sound.click(); relayout();
  });
  document.getElementById('lib-quality')?.addEventListener('click', e => {
    const b = e.target.closest('[data-q]'); if (!b) return;
    document.querySelectorAll('#lib-quality [data-q]').forEach(x => x.classList.remove('on'));
    b.classList.add('on'); size = +b.dataset.q; sizeInp.value = size; Sound.click && Sound.click(); relayout();
  });
  sizeInp.addEventListener('input', () => {
    size = +sizeInp.value;
    document.querySelectorAll('#lib-quality [data-q]').forEach(x => x.classList.toggle('on', +x.dataset.q === size));
    relayout();
  });
  document.getElementById('lib-view')?.addEventListener('click', e => {
    const b = e.target.closest('[data-view]'); if (!b) return;
    document.querySelectorAll('#lib-view [data-view]').forEach(x => x.classList.remove('on'));
    b.classList.add('on'); view = b.dataset.view; Sound.click && Sound.click(); relayout();
  });
  document.getElementById('lib-sort')?.addEventListener('change', relayout);
  document.querySelectorAll('.lib-filters .lf-title').forEach(t =>
    t.addEventListener('click', () => t.parentElement.classList.toggle('open')));

  // busca digitável: filtra os materiais em tempo real
  const qInp = document.getElementById('lib-q'), qClear = document.getElementById('lib-qclear');
  let qt;
  qInp?.addEventListener('input', () => {
    query = qInp.value.trim();
    if (qClear) qClear.hidden = !qInp.value;
    clearTimeout(qt); qt = setTimeout(relayout, 70);
  });
  qInp?.addEventListener('search', () => { query = qInp.value.trim(); if (qClear) qClear.hidden = !qInp.value; relayout(); });
  qClear?.addEventListener('click', () => { qInp.value = ''; query = ''; qClear.hidden = true; relayout(); qInp.focus(); });

  // filtros da lateral: marcar/desmarcar (feedback visual) + limpar
  document.querySelectorAll('.lib-filters .lf-item').forEach(it =>
    it.addEventListener('click', e => { e.preventDefault(); it.classList.toggle('on'); Sound.click && Sound.click(); }));
  const clearFilters = () => document.querySelectorAll('.lib-filters .lf-item.on').forEach(x => x.classList.remove('on'));
  document.getElementById('lf-clear-top')?.addEventListener('click', clearFilters);
  document.querySelector('.lib-filters .lf-clear')?.addEventListener('click', clearFilters);
}

/* ============================================================
   UPLOAD & CLASSIFICAÇÃO (admin) — "cai tudo no lugar"
   ============================================================ */
function initUpload() {
  const drop = document.getElementById('up-drop'); if (!drop) return;
  const input = document.getElementById('up-input');
  const queueEl = document.getElementById('up-queue');
  const qcount = document.getElementById('up-qcount');
  const emptyEl = document.getElementById('up-empty');
  const formEl = document.getElementById('up-form');
  const queue = []; let selId = null, seq = 0;

  const EXT = {
    jpg:'Imagem', jpeg:'Imagem', png:'Imagem', webp:'Imagem', gif:'Imagem',
    mp4:'Vídeo', mov:'Vídeo', webm:'Vídeo',
    pdf:'PDF', ppt:'Apresentação', pptx:'Apresentação', key:'Apresentação',
    psd:'Arte editável', ai:'Arte editável', svg:'Arte editável',
    mp3:'Áudio', wav:'Áudio', zip:'Pacote (ZIP)', rar:'Pacote (ZIP)',
  };
  const TYPE_IC = { 'Vídeo':'video', 'Imagem':'image', 'PDF':'file', 'Apresentação':'ppt', 'Arte editável':'image', 'Áudio':'volume', 'Pacote (ZIP)':'package' };
  const CAT_GUESS = [[/reel|story|stories|post|feed|social/i,'Redes Sociais'],[/manual|ficha|tecnic|regulat|anvisa/i,'Documentos'],
    [/trein|protocolo|aula|curso/i,'Treinamento'],[/banner|folder|arte|grafico|lamina|cartaz/i,'Materiais Gráficos'],
    [/video|institu|demonstr/i,'Vídeos'],[/foto|imagem|aplica|antes|depois/i,'Imagens'],[/catalogo|apresenta/i,'Institucional']];

  function detectEq(name) {
    const n = name.toLowerCase().replace(/[\s_-]/g, '');
    const hit = (EQUIPMENT || []).find(e => n.includes(e.name.toLowerCase().replace(/[\s_-]/g, '')));
    return hit ? hit.name : null;
  }
  function fmtFromWH(w, h) {
    if (!w || !h) return null; const r = w / h;
    if (r > 1.5) return '16:9'; if (r > 1.15) return '16:9'; if (r > 0.92) return '1:1'; if (r > 0.7) return '4:5'; return '9:16';
  }

  function addFile(file) {
    const ext = (file.name.split('.').pop() || '').toLowerCase();
    const tipo = EXT[ext] || 'PDF';
    const item = { id: ++seq, name: file.name, ext, status: 'rascunho',
      tags: { tipo: [tipo] }, flags: new Set() };
    const eq = detectEq(file.name); if (eq) item.tags.equipamento = [eq];
    for (const [re, cat] of CAT_GUESS) if (re.test(file.name)) { item.tags.categoria = [cat]; break; }
    if (tipo === 'Vídeo') item.tags.categoria = item.tags.categoria || ['Vídeos'];
    queue.push(item); renderQueue(); select(item.id);
    if (tipo === 'Imagem' && file.type) {           // detecta orientação real da imagem
      const url = URL.createObjectURL(file); const img = new Image();
      img.onload = () => { const f = fmtFromWH(img.naturalWidth, img.naturalHeight); if (f) { item.tags.formato = [f]; if (selId === item.id) renderForm(); renderQueue(); } URL.revokeObjectURL(url); };
      img.src = url;
    }
  }
  function renderQueue() {
    qcount.textContent = queue.length + (queue.length === 1 ? ' arquivo' : ' arquivos');
    queueEl.innerHTML = queue.map(it => `
      <button class="qitem ${it.id === selId ? 'on' : ''} ${it.status}" data-id="${it.id}">
        <span class="qi-ic">${svgIcon(TYPE_IC[it.tags.tipo?.[0]] || 'file')}</span>
        <span class="qi-meta"><b>${it.name}</b><span>${it.tags.tipo?.[0] || it.ext.toUpperCase()}${it.tags.equipamento ? ' · ' + it.tags.equipamento[0] : ''}</span></span>
        <span class="qi-status">${it.status === 'publicado' ? svgIcon('check','ic ic-sm') : it.ext.toUpperCase()}</span>
      </button>`).join('');
  }
  function select(id) { selId = id; renderQueue(); renderForm(); }

  function chipRow(dim, it) {
    const sel = it.tags[dim.id] || [];
    return `<div class="up-dim"><span class="up-dim-label">${dim.label}${dim.req ? ' <i class="req">*</i>' : ''}</span>
      <div class="up-chips" data-dim="${dim.id}" ${dim.single ? 'data-single' : ''}>
        ${taxValues(dim).map(v => `<button class="upchip ${sel.includes(v) ? 'on' : ''}" data-v="${v}">${v}</button>`).join('')}
      </div></div>`;
  }
  function destino(it) {
    const e = it.tags.equipamento?.[0], c = it.tags.categoria?.[0], f = it.tags.formato?.[0];
    if (!e || !c) return '<em>Defina Equipamento e Categoria…</em>';
    return `${e} <span>›</span> ${c}${f ? ` <span>›</span> ${f}` : ''}`;
  }
  function renderForm() {
    const it = queue.find(x => x.id === selId);
    if (!it) { emptyEl.hidden = false; formEl.hidden = true; return; }
    emptyEl.hidden = true; formEl.hidden = false;
    formEl.innerHTML = `
      <div class="up-file"><span class="uf-ic">${svgIcon(TYPE_IC[it.tags.tipo?.[0]] || 'file')}</span>
        <div class="uf-meta"><b>${it.name}</b><span>Detectado: ${it.tags.tipo?.[0] || '—'}${it.tags.formato ? ' · ' + it.tags.formato[0] : ''}${it.tags.equipamento ? ' · ' + it.tags.equipamento[0] : ''}</span></div>
        <button class="uf-rm" title="Remover da fila">${svgIcon('trash','ic ic-sm')}</button>
      </div>
      <div class="up-dims">${TAXONOMY.map(d => chipRow(d, it)).join('')}</div>
      <div class="up-dim"><span class="up-dim-label">Marcadores</span>
        <div class="up-chips up-flags">${TAX_FLAGS.map(f => `<button class="upchip flag ${it.flags.has(f) ? 'on' : ''}" data-flag="${f}">${f}</button>`).join('')}</div></div>
      <div class="up-release">
        <span class="up-dim-label">Quem vê (liberação)</span>
        <label class="uprad"><input type="radio" name="rel" value="eq" ${it.rel !== 'pub' ? 'checked' : ''}><span><b>Parceiros com este equipamento</b><small>padrão — quem comprou o equipamento vê quando publicado</small></span></label>
        <label class="uprad"><input type="radio" name="rel" value="pub" ${it.rel === 'pub' ? 'checked' : ''}><span><b>Público (todos os parceiros)</b><small>ex.: institucional — aparece mesmo pra quem não tem o equipamento</small></span></label>
      </div>
      <div class="up-dest"><span>Vai cair em:</span><b class="up-dest-path">${destino(it)}</b></div>
      <div class="up-actions">
        <button class="btn ghost" id="up-draft"><i data-icon="file" data-cls="ic ic-sm"></i> Salvar rascunho</button>
        <button class="btn" id="up-publish"><i data-icon="check" data-cls="ic ic-sm"></i> Publicar</button>
      </div>`;
    renderIcons(formEl);
  }

  // eventos do form (delegação)
  formEl.addEventListener('click', e => {
    const it = queue.find(x => x.id === selId); if (!it) return;
    const chip = e.target.closest('.upchip');
    if (chip) {
      const wrap = chip.parentElement;
      if (chip.dataset.flag) { chip.classList.toggle('on'); it.flags.has(chip.dataset.flag) ? it.flags.delete(chip.dataset.flag) : it.flags.add(chip.dataset.flag); }
      else {
        const dim = wrap.dataset.dim, v = chip.dataset.v; const arr = it.tags[dim] || [];
        if (wrap.hasAttribute('data-single')) { it.tags[dim] = arr.includes(v) ? [] : [v]; }
        else { it.tags[dim] = arr.includes(v) ? arr.filter(x => x !== v) : arr.concat(v); }
        wrap.querySelectorAll('.upchip').forEach(c => c.classList.toggle('on', (it.tags[dim] || []).includes(c.dataset.v)));
        formEl.querySelector('.up-dest-path').innerHTML = destino(it);
        renderQueue();
      }
      Sound.click && Sound.click(); return;
    }
    if (e.target.closest('.uf-rm')) { const i = queue.findIndex(x => x.id === selId); queue.splice(i, 1); selId = queue[0]?.id || null; renderQueue(); renderForm(); return; }
    if (e.target.closest('#up-draft')) { it.status = 'rascunho'; renderQueue(); Toast.info('Rascunho salvo — não aparece pros parceiros ainda.'); return; }
    if (e.target.closest('#up-publish')) {
      if (!it.tags.equipamento?.length || !it.tags.categoria?.length) { Toast.error('Defina pelo menos Equipamento e Categoria.'); return; }
      it.status = 'publicado'; renderQueue();
      Sound.success && Sound.success();
      const e2 = it.tags.equipamento[0], c2 = it.tags.categoria[0];
      Toast.success(`Publicado em ${e2} › ${c2}`);
    }
  });
  formEl.addEventListener('change', e => {
    const it = queue.find(x => x.id === selId); if (!it) return;
    if (e.target.name === 'rel') it.rel = e.target.value;
  });

  queueEl.addEventListener('click', e => { const b = e.target.closest('.qitem'); if (b) select(+b.dataset.id); });
  input.addEventListener('change', e => { Array.from(e.target.files || []).forEach(addFile); input.value = ''; });

  // drag & drop
  ['dragenter','dragover'].forEach(ev => drop.addEventListener(ev, e => { e.preventDefault(); drop.classList.add('drag'); }));
  ['dragleave','drop'].forEach(ev => drop.addEventListener(ev, e => { e.preventDefault(); if (ev === 'dragleave' && drop.contains(e.relatedTarget)) return; drop.classList.remove('drag'); }));
  drop.addEventListener('drop', e => { Array.from(e.dataTransfer?.files || []).forEach(addFile); });
}

/* ============================================================
   SQL — editor de banco real (SQLite no navegador via DB/db.js)
   ============================================================ */
function initSql() {
  const root = document.getElementById('sql-result'); if (!root || !window.DB) return;
  const ta = document.getElementById('sql-q');
  const tablesEl = document.getElementById('sql-tables');
  const quickEl = document.getElementById('sql-quick');

  const QUICK = [
    ['Equipamentos', 'SELECT e.id, e.codigo, m.nome AS marca, e.modelo, e.linha\nFROM equipamentos e JOIN marcas m ON m.id = e.marca_id\nORDER BY m.nome, e.modelo;'],
    ['Materiais (JOIN por ID)', 'SELECT m.id, m.titulo, e.modelo AS equipamento, m.categoria, m.downloads\nFROM materiais m\nJOIN equipamentos e ON e.id = m.equip_id   -- puxa pelo equip_id (equi0001)\nORDER BY m.downloads DESC LIMIT 15;'],
    ['Perfil do usuário', "SELECT id, nome, email, role, departamento\nFROM usuarios WHERE id = 'user0002';"],
    ['Por marca', 'SELECT m.nome AS marca, count(*) AS modelos, sum(e.materiais) AS materiais\nFROM equipamentos e JOIN marcas m ON m.id = e.marca_id\nGROUP BY m.id ORDER BY modelos DESC;'],
    ['Clientes × equipamentos', 'SELECT c.id, c.nome, group_concat(e.modelo, ", ") AS equipamentos\nFROM clientes c\nLEFT JOIN cliente_equipamentos ce ON ce.cliente_id = c.id\nLEFT JOIN equipamentos e ON e.id = ce.equip_id\nGROUP BY c.id;'],
    ['Cadastros pendentes', "SELECT id, nome, email, telefone, status\nFROM cadastros WHERE status = 'pending';"],
    ['↻ Renomear (vínculos intactos)', "-- O NOME muda, mas os vínculos (por equip_id) continuam:\nUPDATE equipamentos SET modelo = 'HIPRO Ultra' WHERE codigo = 'HIPRO';\nSELECT e.id, e.codigo, e.modelo, count(m.id) AS materiais_vinculados\nFROM equipamentos e LEFT JOIN materiais m ON m.equip_id = e.id\nWHERE e.codigo = 'HIPRO' GROUP BY e.id;"],
  ];
  quickEl.innerHTML = QUICK.map((qq, i) => `<button class="sqlchip" data-i="${i}">${qq[0]}</button>`).join('');

  const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;');
  function renderTables() {
    tablesEl.innerHTML = DB.tables().map(t => `<button class="st-item" data-t="${t}"><span>${t}</span><b>${DB.count(t)}</b></button>`).join('');
  }
  function showMsg(msg, err) { root.innerHTML = `<div class="sql-msg ${err ? 'err' : ''}">${msg}</div>`; }
  function renderResult(sql) {
    let res; try { res = DB.exec(sql); } catch (e) { showMsg('⚠ Erro: ' + esc(e.message), true); return; }
    DB.persist(); renderTables();
    if (!res || !res.length) { showMsg('✓ Executado com sucesso. ' + DB.affected() + ' linha(s) afetada(s).'); return; }
    root.innerHTML = res.map(r => `
      <div class="sql-table-wrap">
        <table class="sql-table">
          <thead><tr>${r.columns.map(c => `<th>${esc(c)}</th>`).join('')}</tr></thead>
          <tbody>${r.values.map(row => `<tr>${row.map(v => `<td>${v == null ? '<i class="nul">NULL</i>' : esc(v)}</td>`).join('')}</tr>`).join('')}</tbody>
        </table>
        <div class="sql-rc">${r.values.length} linha(s)</div>
      </div>`).join('');
  }
  const runIt = () => { renderResult(ta.value); Sound.click && Sound.click(); };

  showMsg('Carregando o banco (SQLite/WASM)… <span class="sql-spin"></span>');
  DB.init()
    .then(() => { renderTables(); renderResult(ta.value); })
    .catch(e => showMsg('Não consegui carregar o SQLite — precisa de internet pra baixar o WASM.<br><small>' + esc(e.message) + '</small>', true));

  document.getElementById('sql-run').addEventListener('click', runIt);
  ta.addEventListener('keydown', e => { if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') { e.preventDefault(); runIt(); } });
  tablesEl.addEventListener('click', e => { const b = e.target.closest('.st-item'); if (!b) return; ta.value = `SELECT * FROM ${b.dataset.t} LIMIT 100;`; runIt(); });
  quickEl.addEventListener('click', e => { const b = e.target.closest('.sqlchip'); if (!b) return; ta.value = QUICK[+b.dataset.i][1]; runIt(); });
  document.getElementById('sql-reset').addEventListener('click', () => { DB.reset(); renderTables(); ta.value = 'SELECT * FROM materiais LIMIT 20;'; renderResult(ta.value); Toast.info('Banco resetado pro estado inicial.'); });
}

/* ============================================================
   CADASTRO DE EQUIPAMENTOS (admin) — CRUD direto na tabela SQL
   ============================================================ */
const sqlQ = v => "'" + String(v == null ? '' : v).trim().replace(/'/g, "''") + "'";

function renderEquipList() {
  const list = document.getElementById('adm-list'); if (!list || !window.DB) return;
  let rows = [];
  try { const r = DB.exec('SELECT e.id, e.codigo, m.nome, e.modelo, e.linha, e.tag, e.materiais FROM equipamentos e LEFT JOIN marcas m ON m.id = e.marca_id ORDER BY m.nome, e.modelo'); rows = r[0] ? r[0].values : []; }
  catch (e) { list.innerHTML = `<div class="sql-msg err">Erro: ${e.message}</div>`; return; }
  const esc = s => String(s == null ? '' : s).replace(/</g, '&lt;');
  list.innerHTML = `
    <table class="adm-table">
      <thead><tr><th>ID</th><th>Código</th><th>Marca</th><th>Modelo</th><th>Linha</th><th>Materiais</th><th></th></tr></thead>
      <tbody>${rows.map(r => `<tr>
        <td class="mono dim">${r[0]}</td>
        <td><span class="cod-tag">${esc(r[1])}</span></td>
        <td><b>${esc(r[2])}</b></td>
        <td>${esc(r[3])}<div class="adm-tag">${esc(r[5])}</div></td>
        <td><span class="linha-tag ${r[4] === 'MED' ? 'med' : ''}">${esc(r[4])}</span></td>
        <td class="mono">${r[6]}</td>
        <td class="adm-act">
          <button class="adm-edit" data-id="${r[0]}" title="Editar">${svgIcon('pencil','ic ic-sm')}</button>
          <button class="adm-del" data-id="${r[0]}" title="Excluir">${svgIcon('trash','ic ic-sm')}</button>
        </td></tr>`).join('') || '<tr><td colspan="7" class="adm-empty">Nenhum equipamento. Clique em “Novo equipamento”.</td></tr>'}</tbody>
    </table>`;
}

function openEquipModal(id) {
  const dl = document.getElementById('marca-list');
  try { const r = DB.exec('SELECT nome FROM marcas ORDER BY nome'); dl.innerHTML = (r[0] ? r[0].values : []).map(v => `<option value="${v[0]}">`).join(''); } catch (_) {}
  const g = i => document.getElementById(i);
  if (id) {
    let row = [];
    try { const r = DB.exec(`SELECT e.codigo, m.nome, e.modelo, e.linha, e.tag FROM equipamentos e LEFT JOIN marcas m ON m.id=e.marca_id WHERE e.id=${sqlQ(id)}`); row = r[0] ? r[0].values[0] : []; } catch (_) {}
    g('equip-codigo').value = row[0] || ''; g('equip-marca').value = row[1] || ''; g('equip-modelo').value = row[2] || '';
    g('equip-linha').value = row[3] || 'Estética'; g('equip-tag').value = row[4] || '';
    g('equip-id').value = id; g('equip-codigo').readOnly = true;   // código não muda (é a chave)
    g('equip-title').textContent = 'Editar equipamento';
  } else {
    g('equip-id').value = ''; g('equip-codigo').value = ''; g('equip-codigo').readOnly = false;
    g('equip-marca').value = ''; g('equip-modelo').value = '';
    g('equip-linha').value = 'Estética'; g('equip-tag').value = '';
    g('equip-title').textContent = 'Novo equipamento';
  }
  // auto-sugere o código a partir do modelo (só em cadastro novo, enquanto o código estiver vazio/intocado)
  const modeloEl = g('equip-modelo'), codEl = g('equip-codigo');
  if (!modeloEl.dataset.wired) { modeloEl.dataset.wired = '1';
    modeloEl.addEventListener('input', () => {
      if (codEl.readOnly || codEl.dataset.touched === '1') return;
      codEl.value = modeloEl.value.toUpperCase().replace(/[^A-Z0-9]+/g, '');
    });
    codEl.addEventListener('input', () => { codEl.dataset.touched = '1'; });
  }
  codEl.dataset.touched = id ? '1' : '0';
  UI.openModal('modal-equip');
}

function saveEquip() {
  const g = i => document.getElementById(i).value;
  const id = g('equip-id');
  const codigo = g('equip-codigo').trim().toUpperCase().replace(/[^A-Z0-9]+/g, '');
  const marca = g('equip-marca').trim(), modelo = g('equip-modelo').trim(), linha = g('equip-linha'), tag = g('equip-tag').trim();
  if (!codigo || !marca || !modelo) { Toast.error('Preencha Código, Marca e Modelo.'); return; }
  try {
    if (!id) { const dup = DB.exec(`SELECT 1 FROM equipamentos WHERE codigo=${sqlQ(codigo)}`); if (dup.length) { Toast.error('Já existe um equipamento com o código ' + codigo + '. Use outro.'); return; } }
    // resolve marca → marca_id (cria com novo ID se não existir: marca0001…)
    let mId; const mr = DB.exec(`SELECT id FROM marcas WHERE nome=${sqlQ(marca)}`);
    if (mr.length) mId = mr[0].values[0][0];
    else { mId = DB.nextId('marcas', 'marca'); DB.run(`INSERT INTO marcas (id,nome,cor) VALUES (${sqlQ(mId)},${sqlQ(marca)},'#2f7ff2')`); }
    if (id) DB.run(`UPDATE equipamentos SET marca_id=${sqlQ(mId)},modelo=${sqlQ(modelo)},linha=${sqlQ(linha)},tag=${sqlQ(tag)} WHERE id=${sqlQ(id)}`);  // id e código NÃO mudam
    else { const newId = DB.nextId('equipamentos', 'equi'); DB.run(`INSERT INTO equipamentos (id,codigo,marca_id,modelo,linha,tag,materiais) VALUES (${sqlQ(newId)},${sqlQ(codigo)},${sqlQ(mId)},${sqlQ(modelo)},${sqlQ(linha)},${sqlQ(tag)},0)`); }
  } catch (e) { Toast.error('Erro SQL: ' + e.message); return; }
  document.querySelectorAll('.modal-bd.open').forEach(m => UI.closeModal(m));
  Sound.success && Sound.success();
  Toast.success(id ? ('Equipamento atualizado — ' + modelo) : ('Cadastrado — ' + codigo + ' · ' + modelo));
  renderEquipList();
}

function initCadastro() {
  const list = document.getElementById('adm-list'); if (!list) return;
  // handler do modal (uma vez — elemento do shell)
  const modal = document.getElementById('modal-equip');
  if (modal && modal.dataset.wired !== '1') { modal.dataset.wired = '1'; document.getElementById('equip-save').addEventListener('click', saveEquip); }
  // botões da view (elemento novo a cada visita)
  document.getElementById('equip-new')?.addEventListener('click', () => openEquipModal(null));
  list.addEventListener('click', e => {
    const ed = e.target.closest('.adm-edit'); if (ed) { openEquipModal(ed.dataset.id); return; }
    const dl = e.target.closest('.adm-del');
    if (dl) { try { DB.run(`DELETE FROM equipamentos WHERE id=${sqlQ(dl.dataset.id)}`); } catch (_) {} Toast.info('Equipamento removido.'); renderEquipList(); }
  });
  list.innerHTML = '<div class="sql-msg">Carregando banco de dados… <span class="sql-spin"></span></div>';
  DB.init().then(renderEquipList).catch(e => { list.innerHTML = `<div class="sql-msg err">Não consegui carregar o banco (precisa de internet pro WASM).<br>${e.message}</div>`; });
}
