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
