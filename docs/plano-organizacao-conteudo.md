# Plano de Organização de Conteúdo — PartnerZone Contourline

> Como organizar, classificar no upload e liberar TODO o material de apoio aos parceiros
> (imagens, vídeos, documentos, artes gráficas, treinamentos, manuais…) por **marca → equipamento → modelo**,
> com o admin controlando **o que cada cliente vê**.
> Baseado no sistema de classificação do `sitelocal` (que funcionou bem) + a regra de acesso por cliente.

---

## 0. O princípio central (leia isto primeiro)

**A classificação (tags) é a fonte da verdade. As "pastas" são apenas VISÕES geradas automaticamente a partir das tags.**

- O admin **classifica o arquivo UMA vez** no upload (com chips, igual ao sitelocal).
- O arquivo físico fica num **acervo único** (não duplica).
- A partir das tags, o sistema **mostra o mesmo arquivo em todas as pastas/filtros certos** (HIPRO › Redes Sociais › Reels › 9:16, etc.) — sem você arrastar pasta por pasta.
- O **acesso** (quem vê) é uma **camada separada** por cima — não se mistura com a organização.

Isso resolve o problema clássico: organizar por pasta rígida é frágil (um arquivo serve pra vários lugares). Com tags, "joga tudo no lugar" sozinho.

---

## 1. As 3 camadas do sistema

| Camada | O que é | Quem mexe |
|---|---|---|
| **1. Catálogo** | Marcas → Equipamentos (modelos) → Categorias de conteúdo | Admin (cadastro) |
| **2. Conteúdo** | Os materiais + a classificação (tags) de cada um | Admin (no upload) |
| **3. Liberação/Acesso** | Quem pode ver o quê (cliente × equipamento × status) | Admin (regras) |

---

## 2. Catálogo — a árvore base

```
MARCA  (Contourline, e futuras marcas revendidas)
 └── EQUIPAMENTO / MODELO  (HIPRO, Enygma, Crystal 3D, Trilift, Folix…)
      └── CATEGORIA DE CONTEÚDO  (as "pastas" principais do parceiro)
           ├── 📱 Redes Sociais        (posts, reels, stories, feed, legendas)
           ├── 🎓 Treinamento          (vídeos de uso, protocolos, capacitação)
           ├── 📄 Documentos & Manuais  (manual do usuário, ficha técnica, regulatório/ANVISA)
           ├── 🎨 Materiais Gráficos    (artes editáveis, banners, folders, lâminas)
           ├── 🎬 Vídeos                (institucional, demonstração, sala de espera)
           ├── 🖼️ Imagens               (fotos do equipamento, aplicação, antes/depois)
           ├── 🏷️ Impressos             (PDF prontos pra imprimir: folder, cartão, banner)
           └── ⭐ Institucional         (catálogo, apresentação comercial, logo/identidade)
```

> A categoria é a "pasta de cima" que o médico abre. As **dimensões** (item 3) refinam dentro dela.

---

## 3. Dimensões de classificação (as TAGS) — adaptado do sitelocal

Cada material recebe tags em dimensões independentes. **Negrito = obrigatório no upload.**

| Dimensão | Valores (exemplos) | Papel |
|---|---|---|
| **Equipamento** | HIPRO, Enygma, Crystal 3D, Trilift, Folix, Multishape, Supreme Pro, Unyque Pro, Focuskin | define a "casa" do material |
| **Marca / Linha** | Contourline · MED / Estética | agrupamento comercial |
| **Categoria** | Redes Sociais, Treinamento, Documentos, Materiais Gráficos, Vídeos, Imagens, Impressos, Institucional | a pasta principal |
| **Tipo de mídia** | Vídeo, Imagem, PDF, Apresentação, Arte editável (PSD/AI), Áudio, Pacote (ZIP) | filtro técnico |
| Tema / Condição | Celulite, Lipedema, Gordura localizada, Flacidez, Rejuvenescimento, Capilar | indicação clínica |
| Área do corpo | Rosto, Pescoço, Barriga, Glúteos, Pernas, Braços, Corpo todo | indicação clínica |
| Perfil / Público | Profissional, Paciente, Modelo, Homem, Mulher | a quem se destina |
| Formato / Aspect | 9:16, 4:5, 1:1, 16:9, A4 | já temos no card (vertical/horizontal) |
| Idioma | PT, ES, EN | se houver |
| **Flags** | `Novo` · `Antes/Depois` · `Com IA` · `Editável` · `Destaque` · `Pronto p/ imprimir` | marcadores rápidos |

> ⚙️ Tudo isso é **editável pelo admin** (um "registro/registry" de dimensões e valores, como no sitelocal) — pra adicionar equipamento/categoria novo sem mexer no código.

---

## 4. Estrutura física (acervo) + pastas virtuais

**Acervo real (Drive / storage)** — organizado só o suficiente pra backup, NÃO é o que o usuário navega:
```
/ACERVO
  /Contourline
    /HIPRO
      /originais        ← arquivos como subiram (fonte)
      /web              ← versões otimizadas (thumb, preview, "Rápido/HD")
```

**Pastas que o parceiro navega = VIRTUAIS**, montadas pelas tags. Ex.: abrir
`HIPRO › Redes Sociais › Reels (9:16)` = uma query `equipamento=HIPRO AND categoria=Redes Sociais AND tipoConteudo=Reels AND aspect=9:16`. O mesmo arquivo pode aparecer em `HIPRO › Antes e Depois` também — sem cópia.

> Versões "web" alimentam o controle **Rápido / Normal / HD** da galeria (conexão ruim = thumb leve).

---

## 5. Fluxo de UPLOAD do admin (o "cai tudo no lugar")

```
1. Admin → Upload (arrasta 1 ou vários arquivos)
2. SISTEMA AUTO-DETECTA o que dá:
     • Tipo de mídia (pela extensão)
     • Formato/aspect (pela dimensão real da imagem/vídeo → horizontal/vertical)
     • Sugestão de Equipamento (pelo nome do arquivo: "hipro_reels_01.mp4" → HIPRO + Reels)
     • Gera thumb + versões web (Rápido/HD)
3. MODAL DE CLASSIFICAÇÃO (chips, igual sitelocal):
     admin confirma/ajusta → Equipamento*, Categoria*, Tipo*, + Tema/Área/Perfil/Flags
4. LIBERAÇÃO (camada de acesso): define quem vê (item 6)
5. SALVAR →
     • grava o arquivo no acervo + versões web
     • grava as tags (classificação)
     • o material APARECE automaticamente em todas as pastas/filtros certos
     • entra na busca e nas coleções inteligentes que casam com as tags
```

**Upload em lote:** classificar vários de uma vez (aplica as mesmas tags a todos e ajusta individual). Ex.: subir 30 stories do HIPRO → marca todos `HIPRO + Redes Sociais + Story + 9:16` numa tacada.

---

## 6. Liberação / Controle de acesso (o ponto-chave do cliente)

> "O médico compra um HIPRO → vê só coisa de HIPRO. Mas é o admin que escolhe."

**Como funciona:**

1. **Cada Cliente tem equipamentos vinculados** (o que comprou) — o admin cadastra:
   `Cliente "Clínica X" → [HIPRO, Enygma]`.

2. **Regra padrão (automática):** o cliente só vê material cujo **Equipamento** está nos vínculos dele **E** que esteja **Publicado**.
   → Clínica X vê HIPRO e Enygma; não vê Trilift.

3. **Camadas de liberação que o ADMIN controla** (sobrepõem a regra padrão):
   | Controle | Exemplo |
   |---|---|
   | **Status do material** | Rascunho (só admin) · Publicado (no ar) · Arquivado |
   | **Visibilidade** | Público (todos os parceiros) · Por equipamento · Por cliente específico · Por nível/plano |
   | **Liberar exceção** | "Esse material institucional libera pra TODOS, mesmo quem não tem o equipamento" |
   | **Bloquear** | "Esse cliente NÃO vê a categoria Materiais Gráficos" |
   | **Embargo/Data** | "Libera o kit do lançamento só a partir de 01/07" |
   | **Nível/Plano (opcional)** | Parceiro Bronze/Prata/Ouro vê pacotes diferentes |

4. **Resultado:** a tela do parceiro é **filtrada na origem** — ele nunca vê o que não foi liberado. O admin tem um painel "Liberações" pra ligar/desligar por cliente, por equipamento ou por material.

---

## 6.5. PLANO DE IDs (chaves prefixadas) ✅

Cada entidade tem um ID **tipado e padronizado** (prefixo + 4 dígitos) — o sistema **puxa por ele**. Nada de `1,2,3` ambíguo entre tabelas.

| Entidade | Prefixo | Exemplo |
|---|---|---|
| Usuário | `user` | `user0001` |
| Marca | `marca` | `marca0001` |
| Equipamento | `equi` | `equi0001` |
| Categoria | `cat` | `cat0001` |
| Material | `mat` | `mat0001` |
| Cliente | `cli` | `cli0001` |
| Solicitação | `sol` | `sol0001` |
| Cadastro | `cad` | `cad0001` |
| Download | `dl` | `dl0001` |

- **Chaves estrangeiras usam o ID:** `materiais.equip_id → equi0001`, `cliente_equipamentos.equip_id`, `downloads.usuario_id → user0001`, `equipamentos.marca_id → marca0001`.
- O **`codigo`** humano (HIPRO) continua como alias único de negócio; o **`id`** (equi0001) é a chave do sistema. Os dois são estáveis.
- IDs novos são gerados automaticamente (`DB.nextId('equipamentos','equi')` → `equi0010`).

## 7. Modelo de dados (entidades)

```
marcas              (id, nome, codigo, cor, ordem)
equipamentos        (id, marca_id, nome, modelo, codigo, capa, descricao, ordem)
dimensoes           (id, chave, label)            ← Tema, Área, Perfil, Categoria…
dimensao_valores    (id, dimensao_id, valor, ordem)
materiais           (id, titulo, equipamento_id, tipo_midia, arquivo, thumb,
                     versoes_web_json, tamanho, status, criado_em, ...)
material_tags       (material_id, dimensao_valor_id)        ← N:N (classificação)
material_flags      (material_id, flag)                     ← Novo, Antes/Depois…

clientes            (id, nome, email, nivel/plano, ...)
cliente_equipamentos(cliente_id, equipamento_id)            ← o que ele comprou
liberacoes          (id, escopo: publico|equipamento|cliente|nivel,
                     alvo_id, material_id|categoria|equipamento,
                     acao: liberar|bloquear, valido_de, valido_ate)

colecoes            (id, nome, tipo: inteligente|manual, filtros_json)
colecao_itens       (colecao_id, material_id)               ← coleções manuais
```

---

## 8. Coleções inteligentes (bônus, do sitelocal)

Filtros salvos viram "pastas espertas": ex. **"HIPRO — Redes Sociais Verticais Novas"** = `equipamento=HIPRO AND categoria=Redes Sociais AND aspect=9:16 AND flag=Novo`. Quando um material novo casa com o filtro, **entra sozinho**. Já temos o modal de criar coleção por chips desenhado.

---

## 9. Conexão com o que já existe no NOVODESIGN

- **Busca / Biblioteca de Materiais** (pronta): os filtros da lateral = as dimensões deste plano. Os chips do topo = atalhos de Categoria/Tipo.
- **Card do material** (pronto): selo do tipo, Novo, orientação (horizontal/vertical), tamanho, downloads.
- **Página do equipamento** (pronta): as "pastas" (Biblioteca) = as Categorias de conteúdo.
- **Rápido/Normal/HD**: usa as versões "web" do acervo.
- **Modal de classificação por chips**: reaproveitar o design já feito (abas/chips).

---

## 10. Roadmap sugerido (fases)

| Fase | Entrega |
|---|---|
| **1 — Catálogo & Tags** | cadastro de marcas/equipamentos + dimensões editáveis (admin registry) |
| **2 — Upload classificado** | tela de upload + modal de classificação por chips + auto-detect (tipo/aspect) + versões web |
| **3 — Pastas virtuais & Busca** | navegação por Equipamento › Categoria gerada das tags + busca com filtros |
| **4 — Clientes & Liberação** | cadastro de clientes, vínculo de equipamentos comprados, painel de liberações |
| **5 — Coleções & automações** | coleções inteligentes + sugestão automática de tags no upload |

---

## 11. Decisões FECHADAS ✅

1. **Liberação = HÍBRIDA.** Padrão: comprou um equipamento → vê TUDO daquele equipamento (que estiver publicado), automático. MAS o admin pode criar **exceções**: bloquear uma categoria pra um cliente, liberar um material "público" pra todos (mesmo sem o equipamento), embargo por data.
2. **Sem níveis/planos.** Todo cliente é igual — o que muda é só **quais equipamentos ele comprou** (vínculo cliente↔equipamento).
3. **Multi-marca pronta:** começa só Contourline, mas a estrutura (Marca → Equipamento) já deixa pronto pra revender outras marcas no futuro, sem refazer nada.
4. **Taxonomia central editável:** todas as dimensões/valores ficam num só lugar (`taxonomy`) — adicionar equipamento/categoria não mexe no código das telas.

### Ainda a confirmar (não bloqueiam o começo)
- Quem além do admin pode subir/classificar (perfis designer/social)?
- Padronizar nome de arquivo no upload pra auto-detecção melhor (ex. `HIPRO_reels_...`)?
- Antes/Depois = par (2 fotos) ou 1 imagem montada?

---

*Documento de planejamento — base: classificação multidimensional do `sitelocal` (6 dimensões + flags + registry de marcas/equipamentos/categorias) adaptada ao contexto parceiro-facing do PartnerZone, com camada de liberação por cliente.*
