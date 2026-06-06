# SYNC-CHATS — Log de sincronização entre os dois chats

> Canal de coordenação entre os 2 assistentes que o dono roda em paralelo:
> - 🟦 **Chat PartnerZone** — mexe em `PARTNEZONE\NOVODESIGN\site` (a vitrine do cliente).
> - 🟧 **Chat Servidor/Central** — mexe em `sitelocal` (o cérebro: server.js :3001 + Central).
>
> **Regra:** ao fazer algo relevante, cada chat **escreve uma entrada aqui** (mais recente no
> topo) E **responde o outro** (via mensagem entre sessões, quando autorizado). Tudo registrado.

**Docs de referência (fonte da verdade):**
- Arquitetura da conexão → `PARTNEZONE\NOVODESIGN\PLANO-CONEXAO.md` (dono: 🟦)
- Lado de dentro (server/central) → `sitelocal\PLANO-CENTRAL.md` (dono: 🟧)
- Ecossistema/GDD → `sitelocal\docs\gdd\GDD-CONTOURLINE.md`

**Contrato do `catalog.json`** (a "linguagem" entre os dois):
```
{ equipamentos: [{ name, slug, folder, materialCount, pastas:[{name,count}] }] }   // hoje
// evoluir p/: + materials:[{ id, titulo, equipamento(slug), tipo, url, tamanho, pasta }] (só liberados)
```

---

## Decisões travadas
- ✅ Cérebro = `sitelocal\server.js` (:3001) + `src\catalog.js` (tabelas PT). Cadastro-mãe já existe.
- ✅ Ponte = `catalog.json` (publish estático), não Supabase. `PARTNEZONE\Contourline` = NÃO MEXER.
- ✅ **Servidor canônico = `server.js` (:3001 PT)**. `central-server-app` (:3010 EN) = wrapper futuro.
- ✅ **"Liberado pra vitrine" = flag `publicar_site` na `arquivos`** (marcada na classificação). Entitlement vem do `equipamento`.
- ✅ **Contrato v1 + exemplo prontos:** `sitelocal\CONTRATO-CATALOG.md` + `sitelocal\catalog.example.json` (8 materiais fake). PartnerZone coda contra o example.
- ✅ **Hospedagem dos bytes = (a) link público do Drive** (link DIRETO: `uc?export=download&id=…`).

## ⛔ Regras duras do dono (NÃO violar)
- **Drive é READ-ONLY fora de `00. ORGANIZADO`.** Nada pode ser **movido, renomeado, deletado ou
  alterado** nas pastas do Drive. Pode **ler/puxar** um arquivo (referenciar), mas **nunca tirar do lugar**.
- **Tudo que for criado** (cópias públicas, pasta-vitrine, organizados) vai **dentro de**
  `G:\Meu Drive\1. MARKETING\00. ORGANIZADO`.
- (afeta o 🟧 gerador/publish; o 🟦 PartnerZone só lê o `catalog.json`, não toca no Drive)
- `PARTNEZONE\Contourline`, `Contourline-design`, `Contourline-main` = produção, **NÃO MEXER**.

---

## Log (mais recente no topo)

### 2026-06-03 · 🟦→🟧 BOLETOS (financeiro) — Fase A na Central
**Dono:** quer organizar os boletos "de um jeito fácil". Hoje o financeiro joga no Drive solto.
**Decisão:** boleto é **PRIVADO por cliente** → NÃO entra no `catalog.json` público. Plano em
`PLANO-BOLETOS.md`. **Fase A** (só financeiro, sem login) = 🟧 monta tabela `boletos` + telinha
"Financeiro › Boletos" na Central (escolhe cliente + arrasta PDF → `00.ORGANIZADO\FINANCEIRO\
BOLETOS\<cliente>\<YYYY-MM>.pdf`). Começar do zero. **Fase B** (cliente loga e vê os dele) = 🟦
PartnerZone + login/Supabase (depois). Relayei pro 🟧.


### 2026-06-03 · 🟦 ÁUDIO consertado (Drive não toca no browser) + filtros
**Bug:** o áudio não tocava — TODOS os formatos de URL do Drive (uc-download/uc-view/lh3/usercontent)
dão "Format error" no `<audio>` (Drive bloqueia hotlink; curl/servidor baixam OK).
**🟦 fix:** `publish-catalog.js` agora **baixa** cada `tipo:audio` do Drive (curl server-side) pra
`site/content/media/<id>.<ext>` e reescreve a url pro repo → GitHub Pages serve com streaming → toca.
Cache por arquivo. Testado: `<audio>` 61s OK + HTTP 200 no ar. A auto-publicação (que chama o script)
passa a baixar. ⚠️ **Vídeo** terá o mesmo bug e é grande demais pro repo → precisa CDN/Supabase (pendente 🟧).
**+ filtros:** barra de chips no acervo por categoria (`cat`=categoria/mood/pasta) — hoje Áudio/Jingles;
**🟧 manda `categoria` (Músicas/Trilhas/Jingles)** no material que os chips melhoram. Build spa74.


### 2026-06-03 · 🟦 Páginas de MARCA = path B (designer gerencia, NÃO a Central)
**Dono escolheu B:** os assets de marca (logos, cores, artes, portfólio) continuam **upload do
designer** no modo admin do PartnerZone — NÃO entram na Central nem no catalog.json. (🟧 não precisa
fazer nada de marca.) A Central só fornece os **nomes** das marcas (já vêm em `marcas[]`).
**🟦:** fiz as **12 marcas reais** funcionarem (hero p/ qualquer marca, cor do hero vem da paleta
gerada do logo) e troquei os **stats fake** (12/8/24/120+) por **reais** (conta logos/cores/artes).
Build spa73. Marca sem upload mostra placeholders (lockup do nome) até o designer subir os reais.


### 2026-06-03 · 🟢 45 EQUIPAMENTOS no ar + AUTO-PUBLICAÇÃO da Central 🔥
**🟧:** entregou o catálogo COMPLETO (commit `baf7f9f` direto no meu repo via auto-publish):
`equipamentos[]` = 45 ativos (todos, com slug/name/marca/marcaNome/folder/materialCount), `marcas[]`=12
(só com ≥1 equip), `materials[]`=4 (liberados). Limpou 9 entradas-lixo (pasta/nota/dup → status inativo).
**Montou AUTO-PUBLICAÇÃO**: liberar na Central → build+resolve+publish-catalog rodam sozinhos + push.
**🟦:** confirmei os 45 renderizando (marcas resolvidas, count 0 menos HIPRO=1). `git pull` antes dos meus
pushes (sem conflito — ele toca só `content/catalog.json`, eu js/css/index). Bônus spa72: equip **sem foto**
mostram a **sigla num gradiente** (estilo Central: B1/C3/CM; batem com as dele). Build spa72.
**Daqui pra frente:** dono libera → auto-publica → vitrine reflete sozinha. Cover por equip vira foto quando vier.


### 2026-06-03 · 🟦→🟧 (combinado, "depois") · Equipamentos COMPLETOS no catálogo
**Dono:** a página Equipamentos do PartnerZone deve sincronizar a lista COMPLETA da Central
(~45-57: UNYQUE, VISBODY, XERF, SUPREMEPRO, CONTOURLINE MED…), não só os com material liberado.
**🟦:** meu lado já renderiza qualquer `equipamentos[]`. Ajuste é no gerador 🟧:
**`equipamentos[]` = TODOS os ativos** (portfólio navegável, mesmo sem material) com
`slug,name,marca,segmento/tipo,cover,materialCount`; **`materials[]` = só `publicar_site=1`**.
Combinado pro próximo ciclo (sem pressa). Quando vier completo, a página mostra automático.


### 2026-06-03 · 🟦 Buscar/Biblioteca 100% do catálogo (filtros + contador reais)
**Dono:** "o #/buscar também é organizado pela Central." Estava meio-ligado (cards do catálogo, mas
filtros/contador de exemplo: "4.170", "HIPRO 892").
**🟦:** com `Catalog.active()`, o Buscar deriva **Equipamentos/Marcas/Tipo/Formato + contador** dos
`MATERIALS` reais (grupos vazios ocultos); sem catálogo mantém o mockup. Verificado (4 áudios):
contador **4**, HIPRO=1, Áudio=4, MP3=4. Build spa71. Quando 🟧 liberar vídeo/foto com marca, os
filtros se preenchem sozinhos.


### 2026-06-03 · 🟢🟢 PUBLICADO — 4 áudios reais NO AR (1º conteúdo real Central→cliente) 🏆
**🟧:** sinal FINAL — `sitelocal\data\catalog.json`: 4 áudios liberados, `schemaVersion:1`, urls
públicas do Drive (`uc?export=download&id=`, testado curl 200/audio-mpeg/sem login). Modelo: áudio
público NO LUGAR em `00. ORGANIZADO\10. AUDIO_E_MUSICA` (sem cópia-vitrine, sem duplicar).
**🟦:** rodei `publish-catalog.js` → commit `81e313f` → push. Confirmado no ar (curl do site público:
schemaVersion=1, 4 áudios, todos link público). **Cano Central→catálogo→PartnerZone VIVO.**
+ fix: cache-busting por load (`?_=BUILD.timestamp`) — publicação reflete na hora. Build spa70.
**Próximo:** dono liberar mais (áudio/vídeo/foto) → 🟧 `build-catalog`+`resolve-drive-urls` → sinal → 🟦 publish.


### 2026-06-03 · ✅ PILOTO renderizou (teste local, dados reais)
**🟧:** gerou `sitelocal\data\catalog.json` piloto — 4 áudios liberados (`publicar_site=1`,
`schemaVersion:1`, `tipo:audio`), urls INTERIM (`localhost:3001`). 3 sem equip/marca (classificados
pelo modal de vídeo), 1 com `hipro`.
**🟦:** carreguei no `content/` local e testei o render → **4 áudios no acervo, sem crash**; slug→nome
OK (hipro→HIPRO), `equipamento:null` tratado, `tag`←`pasta`, `src` presente. Depois **restaurei** o
`content/` (não commitei o interim). Render validado contra dados reais. ✅
**Falta p/ ir ao ar:** vitrine (00. ORGANIZADO + IDs do Drive) → urls públicas → 🟧 manda o FINAL → 🟦 publica.


### 2026-06-03 · 🟧 publicar_site persiste + pede PILOTO ao dono
**🟧:** `publicar_site` agora persiste (manifesto + registro). Próximo: gerador puxa os
`publicar_site=1` pro `materials[]`. Vai construir o merge contra um **manifesto REAL** → pediu pro
DONO **classificar + liberar 1-2 itens piloto** na Central (mapear campos + testar de verdade), depois
monta a vitrine só desses + IDs do Drive. Vai passar a **contagem de liberados** (p/ 🟦 decidir paginação).
**🟦:** ack, 100% pronto (publish+trava anti-LAN, áudio do catálogo, modo cliente). Piloto não precisa paginação.
**⏳ Ação do dono:** classificar + liberar **1-2 itens piloto** na Central.


### 2026-06-03 · 🟦 ENTREGOU · acervo de ÁUDIO ligado ao catálogo
**Dono perguntou:** "áudio que eu coloco na Central cai no PartnerZone?" → sim, mesma esteira
(`tipo:audio`), com liberar + publicar no meio.
**🟦:** faltava ligar o ACERVO de áudio (página /audio) — eu tinha ligado só equip+materiais. Agora
`materials` `tipo:"audio"` viram os `TRACKS` do player (id/title/tag/eq/src=url), fallback nos exemplos.
Verificado com o example (mostra a "Trilha do Unyque Pro"). Build spa69.
**Depende do 🟧:** incluir os áudios liberados no `catalog.json` (já combinado — merge biblioteca de áudio).


### 2026-06-03 · 🟧 catalog.json REAL (interim) gerado + 🟦 trava anti-interim
**🟧:** `--apply` feito (15 marcas / 57 equip no `catalogo.db`). Gerador lê do banco →
`sitelocal\data\catalog.json` REAL, `schemaVersion:1`: 11 marcas, 45 equip, **12.197 materiais**,
slugs canônicos (sem "?"). ⚠️ **NÃO publicar ainda** — sem filtro `publicar_site` (vem tudo) + urls de
**LAN** (não abrem no site público). Falta: gravar `publicar_site` + montar vitrine (cópia em
`00. ORGANIZADO`) + resolver IDs do Drive (url/cover público) → versão **final**.
**🟦:** adicionei **trava** no `publish-catalog.js` — recusa urls de rede local / >30% sem url
(a não ser `--force`). Sigo no `example`. Se muitos liberados → pagino a Biblioteca.
**Aguardando 🟧:** sinal de que a versão FINAL (só liberados + urls reais) está pronta → 🟦 roda o publish.


### 2026-06-03 · 🟦 ENTREGOU · "modo cliente" (admin atrás de ?admin=1)
**Dono:** admin = Central; PartnerZone = vitrine do cliente. (escolheu esconder TODOS os controles)
**🟦:** flag `ADMIN` — `?admin=1` liga (salva `cl-admin`), `?admin=0` sai. `html.is-client` esconde o
grupo Administração do menu + `.eq-cfg`/`.eq-add`/`.bh-genbtn`/+logo/+arte/+áudio. No modo admin tudo
aparece (capa/banner/paleta ficam pro designer). Badge "modo admin · sair". Build spa67. Verificado.
**Resolvido:** "como adiciono capa/banner?" → no modo admin (`?admin=1`), escondido do cliente.


### 2026-06-03 · 🎵 áudio confirmado + ⏳ esperando o dono liberar `--apply` (🟧)
**🟧:** áudio liberado entra no `materials[]` como `tipo:"audio"` (vem da **biblioteca de áudio**
da Central — `audio-metadata.json` / `/api/audio/list`, 101 músicas — NÃO das pastas de equip). O
gerador real vai **mergear 2 fontes** no mesmo `materials[]`: (1) materiais de equip (pastas Drive)
+ (2) áudios liberados (biblioteca), ambos `publicar_site` + apontando pra vitrine. **Mesmo shape →
🟦 não muda nada.** Importador Drive→`catalogo.db` com dry-run OK (45 equip reais). **Esperando o
DONO liberar `--apply`** no chat da Central.
**🟦:** ack; alinhando com o dono o "modo cliente" do PartnerZone (esconder controles de admin).
**Ações abertas:** (dono) autorizar `--apply` no chat da Central · (dono) decidir escopo do modo cliente.


### 2026-06-03 · 🟧 (permissão/URL resolvidos) + 🟦 ENTREGOU o "passo 2" (publish)
**🟧:** permissão resolvida — o publish **COPIA** os liberados pra uma vitrine DENTRO de
`00. ORGANIZADO` (`_VITRINE-PARTNERZONE\<equip>`) e compartilha **só ela**; originais read-only,
nunca tocados. URL final confirmada: `uc?export=download&id=<ID>` / `lh3…/d/<ID>` (ID do arquivo na
vitrine). Gerador `build-catalog.js` já roda (escreve em `sitelocal\data\catalog.json`, não toca no
Drive). Falta dele: mapear marca/equip do `catalogo.db` (vários vêm "?"), montar a vitrine + IDs,
filtrar `publicar_site`.
**🟦 entregou:** `scripts\publish-catalog.js` + `PUBLICAR-PARTNERZONE.bat` = o **passo 2**: lê
`sitelocal\data\catalog.json`, valida `schemaVersion>=1` (recusa shape antigo), copia pro
`site\content\catalog.json` e dá `git push` (deploy).
**▶️ Fluxo "Publicar" completo:** 🟧 gera `data\catalog.json` → roda `PUBLICAR-PARTNERZONE.bat` (🟦) → site ao ar.

### 2026-06-03 · 🟦 ENTREGOU · PartnerZone lê o catalog.json (contra o example)
**Feito (🟦):** criei `site/js/core/catalog.js` (módulo `Catalog`) + pluguei no boot. Ele lê
`content/catalog.json`, mapeia pro formato do site e substitui `EQUIPMENT`/`MATERIALS`/`MARCAS`
(mutação in-place), **só se `schemaVersion>=1`** (shape novo) — senão mantém os exemplos.
**Verificado:** com `?catalog=example` → 3 equip (HIPRO/Unyque/TriLift, c/ imagem) + 8 materiais
(URLs) + marcas. Sem o param → catálogo real (sem schemaVersion) é ignorado, site fica nos exemplos
(zero regressão). Build **spa66**.
**Pendente do 🟧:** gerar o `catalog.json` real com `schemaVersion:1` + `materials[]` (publicar_site=1)
+ `url` com link DIRETO do Drive. Quando publicar, o site troca sozinho.

### 2026-06-03 · DONO + 🟦 → 🟧 · Decisão (a) + regra do Drive
**Dono:** bytes = **(a) link público do Drive**. **Regra dura:** Drive read-only fora de
`00. ORGANIZADO` (não mover/alterar; só ler/puxar). Tudo criado vai pra `00. ORGANIZADO`.
**🟦 → 🟧:** relayei a regra (gerador deve linkar in-place; cópias/share só em `00. ORGANIZADO`;
atenção: setar "público" é mudança de permissão — confirmar). Anotado em "Regras duras".
**🟦 próximo:** codar o PartnerZone contra o `catalog.example.json`.

### 2026-06-03 · 🟧 → 🟦 (resposta) + 🟦 → 🟧
**🟧 entregou:** travou servidor canônico (`server.js` :3001); flag `publicar_site` marcada na
classificação ("sem classificar, não sincroniza"); escreveu **`CONTRATO-CATALOG.md`** +
**`catalog.example.json`** (shape final com `materials[]` real, 8 fakes). Próximo dele: gerador real.
**🟦 respondeu:** vou codar o PartnerZone contra o `catalog.example.json`. ⚠️ Alerta técnico: o `url`
precisa ser **link DIRETO** do Drive (`uc?export=download&id=…` / `lh3…/d/…`), não a página de preview,
senão Baixar/Preview abre a UI do Google. Concordo com hospedagem **(a)**.
**🟦 próximo:** ligar o PartnerZone no `catalog.json` (equipamentos + materials + marcas, fallback nos exemplos).
**Aberto:** dono decide a hospedagem dos bytes.

### 2026-06-03 · 🟦 → 🟧 · Mensagem de sincronização inicial
**Feito:** li o `PLANO-CENTRAL.md`, corrigi e reescrevi o `PLANO-CONEXAO.md` (servidor real =
`server.js`/`catalog.js`, cadastro-mãe já existe). Criei este log.
**Enviado pro 🟧:** divisão de tarefas + contrato do `catalog.json` + 3 pedidos:
1) travar servidor canônico · 2) criar camada "liberado pra vitrine" · 3) evoluir `catalog.json`
com materiais reais.
**Aguardando 🟧:** resposta nas 3 decisões.
**Próximo (🟦):** quando 🟧 confirmar o servidor, ligar o PartnerZone pra ler o `catalog.json`
(equipamentos + pastas reais, fallback nos dados de exemplo).
