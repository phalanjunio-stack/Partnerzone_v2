# Plano da Área do Cliente — PartnerZone

> Plano da parte PRIVADA do PartnerZone (login + Minha Conta, Contrato, Boletos, Meus
> Equipamentos, Suporte, Solicitações). Gerado por levantamento real do código (PartnerZone +
> Central). Companion de `PLANO-CONEXAO.md` · `PLANO-BOLETOS.md` · `SYNC-CHATS.md`.

## 1. A ideia em 3 frases

Hoje o PartnerZone é uma **vitrine pública** (qualquer um vê o catálogo de equipamentos/áudios/materiais). O que falta construir é a **Área do Cliente**: uma parte **privada** onde cada clínica/doutor faz **login** e vê **só os dados dele** — sua conta, seu contrato, seus boletos, seus equipamentos e seus chamados de suporte. Como esses dados são privados, eles **não podem** ir no arquivo público (`catalog.json`); precisam de **login + um cofre seguro** (o Supabase, que você já tem configurado).

---

> 🚧 **STATUS (2026-06-06):** o **login** (🟦 lado do site) e a **Minha Conta** já estão
> **construídos** no PartnerZone (build spa75 · `js/core/portal.js` + rota `#/minha-conta`).
> Falta **1 coisa pra ligar de verdade:** o 🟧 publicar `site/content/portal-config.json`
> com `{ url, anonKey }` (SÓ a chave ANON). Enquanto não chega, a tela mostra "em configuração".

## 2. A FUNDAÇÃO: o login (pré-requisito de TUDO)

Nenhuma área privada funciona sem o cliente provar quem é. Por isso o **login vem primeiro** — ele é o alicerce, e todas as áreas se apoiam nele.

> **Recomendação simples:** use **E-mail + Senha** (via Supabase). **Por quê?** Porque **já está construído e testado** no seu sistema — não é teoria, é código que existe. Você não precisa inventar nada.

**O que você já tem pronto (não precisa refazer):**

| Peça pronta | Onde está | O que faz |
|---|---|---|
| Botão "criar login" | Central (`src/clientes.js`) | Com 1 clique, cria o acesso do cliente e te **devolve uma senha automática** pra você repassar |
| Página de login | Central (`portal.html` / `portal-teste.html`) | Tela onde o cliente entra com e-mail + senha |
| Segurança por cliente | `scripts/supabase-schema.sql` | A regra (RLS) que garante: cada cliente vê **só o dele**, impossível ver dados de outro |

**Como a segurança funciona (em 1 frase):** o cofre (Supabase) compara o e-mail do login com o e-mail do cadastro e só libera as linhas daquele cliente — o filtro acontece **no servidor**, não no navegador, então é impossível um cliente espiar o do outro.

**O único buraco a fechar:** hoje esse login mora **dentro da Central** (porta 3001). O site público (GitHub Pages) **ainda não tem login ligado**. A boa notícia: como a segurança está na regra do cofre (não em esconder a chave), é **seguro** colar esse mesmo login direto no site público — deixando tudo numa vitrine só.

**Atalho opcional pra depois:** ligar o "Link Mágico" (entrar sem senha, só pelo e-mail) — troca de **1 linha** de código, usa o mesmo cofre, e mata o problema de "esqueci a senha". Fica para uma segunda rodada.

> 🟦 = trabalho do chat do **PartnerZone** (o site do cliente) · 🟧 = trabalho do chat da **Central** (cadastro/backend). Quase tudo é **"Ambos"**: a Central guarda e protege o dado, o PartnerZone mostra.

---

## 3. As áreas, uma a uma

### Minha Conta — 🟦🟧 · complexidade **BAIXA**
- **Mostra:** cartão de perfil do cliente logado (nome, e-mail, telefone, cidade, segmento, último acesso) + dados de cobrança (só leitura) + preferências de notificação (editável) + botão "Sair".
- **Quem constrói:** 🟧 Central cria as preferências e o endpoint seguro; 🟦 PartnerZone cria a tela `#/minha-conta`.
- **Por que é a mais fácil:** é quase só **leitura**. Serve de "área-teste" para validar todo o fluxo de login que as outras herdam.

### Contrato — 🟦🟧 · complexidade **MÉDIA**
- **Mostra:** o contrato vigente do cliente (número, vigência, status, valor mensal) + botão "Baixar PDF" + histórico de versões. Sem contrato, mostra "fale com o suporte".
- **Quem constrói:** 🟧 Central cria a tabela de contratos, guarda o PDF no Drive (em "00. ORGANIZADO") e serve o download de forma segura; 🟦 PartnerZone cria a tela `#/contrato`.
- **Por que média:** o que puxa a complexidade é a **entrega segura do PDF** (não pode ser link público) — o cadastro em si é manual e de pouco volume.

### Boletos — 🟦🟧 · complexidade **ALTA**
- **Mostra:** lista de boletos por mês (valor, vencimento, status pago/em aberto/vencido) + download do PDF. **Já tem plano próprio** (`PLANO-BOLETOS.md`).
- **Quem constrói:** 🟧 Central cria a tabela de boletos, pagamentos e os endpoints; 🟦 PartnerZone cria a tela `#/boletos` com filtro e download.
- **Por que alta:** envolve **dinheiro** — status de pagamento, conciliação, PDF seguro por mês e segurança rigorosa.

### Meus Equipamentos — 🟦🟧 · complexidade **ALTA**
- **Mostra:** SÓ os equipamentos que **este** cliente comprou/recebeu (não o catálogo inteiro): número de série, data de aquisição, garantia, status, histórico de manutenção + botão "Abrir chamado". Linka para os manuais públicos daquele modelo.
- **Quem constrói:** 🟧 Central cria a ficha privada (série, garantia, manutenção) e junta com a ficha pública do modelo; 🟦 PartnerZone cria a tela `#/equipamentos-meus`, reaproveitando o card de equipamento que já existe.
- **Por que alta:** mistura **dois mundos** — o dado privado do cliente (série, garantia) + o dado público do modelo (foto, manual).

### Suporte — 🟦🟧 · complexidade **ALTA**
- **Mostra:** lista de chamados do cliente (título, categoria, prioridade, status) + botão "Abrir chamado" + um **chat** dentro de cada chamado (mensagens da equipe e do cliente, com anexos).
- **Quem constrói:** 🟧 Central cria os chamados e as mensagens (ler E escrever); 🟦 PartnerZone cria a tela `#/suporte/chamados` e liga o modal "Suporte" (que hoje só dá um aviso) a um envio real.
- **Por que alta:** é uma **conversa de mão dupla** quase em tempo real.

### Solicitações — 🟦🟧 · complexidade **MÉDIA**
- **Mostra:** cliente **pede um material novo** (apresentação, vídeo, design) com briefing e prazo + lista das solicitações dele e o status. Quando entra em produção, vira um projeto interno na Central.
- **Quem constrói:** 🟧 Central cria a tabela de solicitações e a ponte com os projetos; 🟦 PartnerZone cria a lista e liga o modal "Solicitar novo material" (que hoje só dá aviso) a um envio real.
- **Por que média:** é **quase igual ao Suporte** — construindo depois, reaproveita quase tudo.

---

## 4. A sequência recomendada (mais fácil e valioso primeiro)

| Ordem | O quê | Por que nessa posição |
|---|---|---|
| **0** | **Ligar o login** (Supabase) | Pré-requisito de tudo. Já está pronto — é configurar, não construir. |
| **1** | **Minha Conta** | A mais simples (só leitura). Valida o fluxo de login que **todas** as outras reaproveitam. |
| **2** | **Contrato** | Próximo degrau (média). Introduz o "download seguro de PDF", que **Boletos** reusa. |
| **3** | **Boletos** | Já tem plano e herda o PDF seguro do Contrato. Alto valor. |
| **4** | **Meus Equipamentos** | Liga o privado ao catálogo público que você já tem. Alto valor de relacionamento. |
| **5** | **Suporte** | Primeiro caso de "conversa de mão dupla". Constrói o padrão de chamado/chat. |
| **6** | **Solicitações** | Por último porque **herda quase tudo** do Suporte — fica rápido. |

> **Atalho de valor:** se a urgência for o que o cliente mais usa, depois de Minha Conta dá pra priorizar **Boletos** (já tem plano). A ordem acima é a mais **econômica em esforço** — ajuste conforme o negócio.

---

## 5. Decisões que só VOCÊ pode tomar (são de negócio, não técnicas)

1. **E-mail oficial de cada cliente** — a segurança inteira casa pelo e-mail. **1 e-mail por clínica** (vários médicos dividem) ou **1 por doutor** (cada um o seu)? Sem e-mail válido, o cliente **não loga**. ⭐ é a decisão que destrava tudo.
2. **Senha** — deixar o sistema **gerar automático** (recomendado, o botão já faz) ou manual? E por onde **entregar** (WhatsApp/e-mail/pessoalmente)?
3. **Onde o cliente loga** — pela página da Central (:3001) ou colar o login **dentro do site público** (recomendado, tudo num lugar)?
4. **Link Mágico** (login sem senha) — agora ou depois?
5. **Quem cria/remove acesso** — confirmar que só você cria, e desativar ao encerrar contrato (hoje manual).
6. **Conta do Supabase** — quem é o dono da conta + guarda as chaves em lugar seguro?
7. **"Esqueci a senha"** — por ora você reseta no painel; quer o botão automático já?

---

### Em resumo
- **Login:** já está pronto — é o seu maior ativo. Não reinventar.
- **Ordem:** Login → Minha Conta → Contrato → Boletos → Meus Equipamentos → Suporte → Solicitações.
- **Padrão que se repete:** 🟧 Central guarda e protege o dado · 🟦 PartnerZone mostra a tela. Cada área nova precisa da regra de segurança (RLS) no cofre.
- **Seu papel agora:** as 7 decisões acima — principalmente o **e-mail oficial de cada cliente**.
