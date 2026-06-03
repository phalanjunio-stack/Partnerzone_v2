/* ============================================================
   APP — ícones (traçado), dados de exemplo e render da Início
   ============================================================ */

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
  dots:'<circle cx="12" cy="5" r="1.4"/><circle cx="12" cy="12" r="1.4"/><circle cx="12" cy="19" r="1.4"/>',
  play:'<circle cx="12" cy="12" r="9"/><path d="m10 8.5 6 3.5-6 3.5z"/>',
  crop:'<path d="M6 2v14a2 2 0 0 0 2 2h14"/><path d="M2 6h14a2 2 0 0 1 2 2v14"/>',
  rotate:'<path d="M21 12a9 9 0 1 1-3-6.7L21 8"/><path d="M21 3v5h-5"/>',
  move:'<path d="M12 2v20M2 12h20M5 9 2 12l3 3M19 9l3 3-3 3M9 5l3-3 3 3M9 19l3 3 3-3"/>',
  expand:'<path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>',
};
function svgIcon(name, cls='ic') { return `<svg class="${cls}" viewBox="0 0 24 24">${ICONS[name]||''}</svg>`; }
function renderIcons(root=document) { root.querySelectorAll('[data-icon]').forEach(el => {
  el.innerHTML = svgIcon(el.dataset.icon, el.dataset.cls || 'ic'); el.removeAttribute('data-icon'); }); }

/* ---- Navegação (conforme o GDD) ---- */
const NAV = [
  { label:'Navegação', items:[
    { icon:'home', text:'Início', route:'#/' },
    { icon:'file', text:'Solicitações' },
    { icon:'search', text:'Buscar', route:'#/buscar' },
    { icon:'heart', text:'Favoritos', route:'#/favoritos' },
    { icon:'building', text:'Institucional', dynamic:'marcas' },
  ]},
  { label:'Área do Cliente', items:[
    { icon:'user', text:'Minha Conta' },
    { icon:'signature', text:'Contrato' },
    { icon:'receipt', text:'Boletos' },
    { icon:'wrench', text:'Meus Equipamentos' },
    { icon:'buoy', text:'Suporte' },
  ]},
  { label:'Administração', items:[
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
  el.innerHTML = NAV.map((sec, si) => `
    ${si ? '<div class="side-divider"></div>' : ''}
    <span class="nav-label">${sec.label}</span>
    ${sec.items.map(it => {
      // submenu dinâmico (ex.: 'marcas' = lista as marcas do sistema)
      const sub = it.dynamic === 'marcas'
        ? (typeof MARCAS !== 'undefined' ? MARCAS : []).map(m => ({ l: m, r: '#/marca/' + encodeURIComponent(m) }))
        : it.sub;
      const hasSub = sub && sub.length;
      return `
      <div class="nav-item ${hasSub?'has-sub':''}" title="${it.text}" ${it.route?`data-route="${it.route}"`:''} ${it.modal?`data-open-modal="${it.modal}"`:''}>
        ${svgIcon(it.icon)}<span>${it.text}</span>
        ${hasSub ? `<span class="chev">${svgIcon('chevR','ic ic-sm')}</span>` : ''}
      </div>
      ${hasSub ? `<div class="nav-sub">${sub.map(s=> typeof s==='string' ? `<a>${s}</a>` : `<a href="${s.r}">${s.l}</a>`).join('')}</div>` : ''}`;
    }).join('')}
  `).join('');
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
function eqCardHTML(e) {
  const src = eqCover(e.name, e.img);
  const src2 = eqCover2(e.name);          // 2ª imagem (aparece no hover) — opcional
  return `
    <a class="eq-card${src2 ? ' has-hover' : ''}" href="#/categoria/${encodeURIComponent(e.name)}" data-eq="${e.name}">
      <div class="eq-thumb">
        ${src ? `<img src="${src}" alt="${e.name}" loading="lazy" style="${xfStyle(e.name, 1, eqPos(e.name))}">` : svgIcon('cpu','ic ph')}
        ${src2 ? `<img class="img2" src="${src2}" alt="" loading="lazy" style="${xfStyle(e.name, 2, eqPos2(e.name))}">` : ''}
        <button class="eq-edit" title="Editar capa (admin)">${svgIcon('pencil','ic ic-sm')}</button>
        <button class="fav">${svgIcon('bookmark','ic ic-sm')}</button>
      </div>
      <div class="eq-body">
        <h3>${e.name}</h3><p>${e.tag}</p>
        <span class="eq-count">${e.count} materiais</span>
      </div>
    </a>`;
}
function renderEquipment() {
  document.getElementById('eq-row').innerHTML = EQUIPMENT.map(eqCardHTML).join('');
}
function renderEquipmentGrid() {
  document.getElementById('eq-grid').innerHTML = EQUIPMENT.map(eqCardHTML).join('');
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
      for (let i = 0; i < p.length; i += 4) {   // branco/quase-branco → transparente
        const r = p[i], g = p[i + 1], b = p[i + 2], mn = Math.min(r, g, b), mx = Math.max(r, g, b);
        if (mn > 236 && (mx - mn) < 16) p[i + 3] = 0;
      }
      x.putImageData(d, 0, 0);
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
  let cached = null; try { cached = JSON.parse(localStorage.getItem('cl-pz-logo-v1')); } catch (_) {}
  if (cached && cached.mark) { apply(cached); return; }
  processLogo('assets/partnerzone-logo.png?v=1')
    .then(o => { apply(o); try { localStorage.setItem('cl-pz-logo-v1', JSON.stringify(o)); } catch (_) {} })
    .catch(() => {});
}

function initShell() {
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
    const fav = e.target.closest('.eq-card .fav');
    if (fav) { e.preventDefault(); e.stopPropagation(); fav.classList.toggle('on'); return; }
    const ed = e.target.closest('.eq-card .eq-edit');
    if (ed) { e.preventDefault(); e.stopPropagation();
      const name = ed.closest('.eq-card')?.dataset.eq;
      if (name) window.__editCover?.(name);
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
    e.preventDefault();
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
    renderIcons(colorsEl);
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
    renderIcons(appsEl);
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
      renderIcons(logosEl); return;
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
    renderIcons(logosEl);
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
  let filter = 'todos', view = 'masonry', size = +sizeInp.value;

  function filtered() {
    let list = MATERIALS.slice();
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
        ${m.novo ? '<span class="mat-new">Novo</span>' : ''}
        <span class="mat-ext">${T.badge}</span>
        <span class="mat-orient">${ori}</span>
        ${m.type === 'vid' ? `<span class="mat-play">${svgIcon('play')}</span>` : `<span class="mat-ph">${svgIcon(T.ic)}</span>`}
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
    if (countEl) countEl.textContent = (filter === 'todos' ? 4170 : list.length).toLocaleString('pt-BR');
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
  document.querySelectorAll('.lib-search[data-cmdk]').forEach(s =>
    s.addEventListener('click', e => { e.preventDefault(); window.__openCmdK && window.__openCmdK(); }));
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
