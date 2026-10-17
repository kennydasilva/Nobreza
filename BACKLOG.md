# Backlog — Nobreza

Registo de análises, discussões, decisões, levantamentos e tarefas do website da
Ourivesaria Nobreza. Serve para retomar o trabalho em qualquer sessão nova.

**Como usar:** ler isto antes de começar. No fim de cada sessão, atualizar
"Estado atual", acrescentar uma entrada ao "Diário" e mover as tarefas.

---

## Estado atual

- **Fase:** proposta de direção publicada, **à espera de aprovação**. Ainda não se escreve código do site.
- **Proposta:** https://claude.ai/artifact/ADFn7zEgAFtJocMrALYv4X (privada, do utilizador).
- **Próximo passo:** aprovar ou corrigir a direção (/anti-padrao-ia, Modo B passo 5); depois registar o contrato de direção e construir.
- **Repositório:** só tem `README.md`, `.gitignore` e este ficheiro. Dois commits
  locais por enviar; o push para o `main` aguarda confirmação.

---

## 1. Porquê este site

- A Nobreza tem **1.132 publicações** no Instagram. O cliente tem de rolar o feed
  inteiro para encontrar uma peça, e os posts quase nunca mostram o preço.
- O site resolve isso: **encontrar a peça depressa** (categorias, filtros, pesquisa),
  ver preço e detalhes, e **pedir pelo WhatsApp** com a mensagem já escrita.
- O Instagram continua a ser a montra (descoberta); o site é o catálogo (encontrar
  e pedir). O link do site vai na bio.
- **É uma proposta especulativa:** fazemos o site e mostramos à loja; se gostarem,
  avançam. Por isso não se pedem autorizações à loja e o site tem de impressionar
  à primeira vista.

## 2. Levantamento

### Instagram — @ourivesarianobreza (lido 2026-10-17)

- ~19,7 mil seguidores, 1.132 posts.
- Bio: "Joias/relógios — Produção e venda de joias artesanais e em 3D".
- Chamadas: 84 498 0490 / 86 546 2190. WhatsApp: 86 20 70 869.
- Morada: Av. de Khongolote nº 75, Bairro 1º de Maio, Província de Maputo, Matola 1115.
- Destaques: Anéis, Casamentos, Colares, Alianças, Brincos, Caridade, Noivados.
- Posts com preço mostram **Modelo, Ref. (ex.: AN-…) e Peso aproximado**: o preço
  depende do peso do ouro.
- Conteúdo: vídeos publicitários, vídeos a fabricar um anel, o dono a falar para a
  câmara, fotografias de casais clientes (com nomes em letra manuscrita), clientes
  a usar as peças, interior da loja (vitrines de vidro, branco).

### Identidade visual (pasta `identidadevisual/`, fora do git)

- **Atenção:** os nomes estão trocados. `logotipo.png` é a captura do Instagram;
  o logótipo é `369543046_…jpg` (só 150×150 px — é preciso uma versão maior ou
  vetorizar).
- **Logótipo:** "N" dourado dentro de um anel com diamante no topo (anel de
  noivado); "OURIVESARIA NOBREZA" em arco. Dourado ≈ `#C9AD51`.
- **Cores do Instagram:** magenta ≈ `#FE0084` (preços, molduras), rosa claro
  ≈ `#FC82C1` (destaques, ícones de linha), muito branco.

### Material disponível (pasta `imagens/`, fora do git)

- 95 ficheiros, 171 MB: fotografias e vídeos tirados do Instagram, com as legendas
  como nome (emojis e letras especiais). Subpastas `aliancas/` e `aneis/`.
- Exemplos de peças com nome: Alianças chanfradas 3 mm, Alianças Friso Duplo com
  Zircónia, Alianças ovais 3 mm, Anel Chuveirinho, Anel Costelina com Rubi, Anel
  Sírius (6 garras), Anel Divino, Anel Romance, Anel Meia Aliança, Anel 3 em 1,
  Anel de Direito, Anel Cavalheiro (vídeo).
- Antes de usar: dar nomes simples aos ficheiros, comprimir vídeos, converter
  imagens (WebP) e decidir o que entra no git.

### Conteúdo real da pasta `imagens/` (visto 2026-10-17)

- **Os 89 ficheiros na raiz estão vazios** (2 bytes): transferências falhadas. Entre
  eles estavam os vídeos de fabrico e publicitários (ex.: "Anel Cavalheiro",
  "Já se perguntou porque a Ourivesaria Nobreza trabalha…"). Hoje **não temos esses vídeos**.
- Subpastas com material válido (as pastas `*_files` dentro de `aneis/` e
  `caridade/` são lixo de páginas web guardadas):
  - `aneis/` 27 fotos · `aliancas/` 22 · `colares/` 13 · `brincos/` 10 + 1 vídeo ·
    `casamentos/` 24 · `caridade/` 1 foto + 4 vídeos.
- **Fotos de produto:** formato story 640×1137. A fotografia útil é o quadrado do
  meio (~640×630); por baixo há uma faixa impressa com **preço em MZN, Modelo,
  Ref. e Peso aprox.** (ex.: Coroa oval, AN-N040, 1,7 g, 14.400 MZN) e os contactos.
  Marca de água "Ourivesaria Nobreza" no centro, logótipo no canto.
  → Dá para montar o catálogo com dados reais (≈70 peças). Preços vistos:
  8.800–90.600 MZN. A resolução (640 px) chega para cartões, é fraca para fundos grandes.
- Material: sobretudo **ouro rosé**, também amarelo e branco. Fundos com rosas,
  flores, seda; colares em bustos de veludo vermelho, verde e preto.
- **Casamentos:** stories com casais reais e os nomes em letra manuscrita
  (Filipe & Helena, Carlos & Sandra, José & Feodósia…), molduras coral/vermelhas.
  **Slogan da marca:** "O Ouro que mais conecta corações em Moçambique."
- **Caridade:** a equipa a distribuir comida; fachada da loja com letreiro
  "OURIVESARIA NOBREZA".
- Contactos na faixa: +258 844 980 490, +258 870 913 234, WhatsApp +258 862 070 869;
  TikTok e Facebook "ourivesaria nobreza", Instagram @ourivesarianobreza.

### Segunda transferência (2026-10-17)

O utilizador apagou os ficheiros vazios e voltou a transferir. Na raiz de `imagens/`
há agora 78 fotos + 8 vídeos, todos válidos. Ainda faltam mais (o utilizador envia depois).

- **Fotos de produto em quadrado 1170×1170** (66 ficheiros): melhor qualidade que
  as das subpastas. Mesma faixa magenta com preço/modelo/ref./peso em baixo.
  Inclui alianças até 135.500 MZN, conjunto 110.100 MZN, colar 177.500 MZN.
  As alianças dizem "o par".
- **Promoções/publicidade** (stories 750×1334): "Diga sim! 10% de desconto em todos
  os artigos" (maio; 20 jul–20 ago; novembro), com modelo sorridente e alianças.
- **Serviço real:** "Oferecemos a possibilidade de ajustar mahala as alianças antes
  da cerimónia do casamento. Tempo médio de espera: 20 minutos. Exclusivo para
  clientes da Ourivesaria Nobreza." Também "Garantia e confiança" num cartão.
- **Vídeos (8):**
  - Anel Medicina pedra esmeralda — vídeo de produto em fundo preto, 12 s, elegante.
  - **Fabrico de um anel** — desenho 3D (CAD azul) → modelo em cera/resina →
    peça em bruto → anel acabado na mão, 9 s ("Anel Cavalheiro"). É o "como nasce um anel".
  - Soldadura com maçarico → anel de nó acabado sobre flores, 15 s.
  - Alianças num estojo, 7 s.
  - O joalheiro na bancada com o cão (oficina com o "N" na parede), 6 s.
  - O dono a falar: na loja (vitrines brancas) e à porta da loja (fachada
    "OURIVESARIA NOBREZA"), 75–80 s; fecha com animação do logótipo em linha
    branca sobre magenta.
  - "Pega visão" — sketch humorístico do dono ao escritório, 51 s.

### Referência: projeto MADEY

`/home/kenny/Development/Frontend/Project/react/MADEY` — inspiração de lógica e
qualidade, **não copiar o visual**. O que se reaproveita: Vite + React + TS +
Tailwind, catálogo sem carrinho, tocar na peça abre o WhatsApp com a mensagem
pronta, página própria por peça, pré-render (SEO e pré-visualização no WhatsApp),
preços em MT visíveis, nada de dados não confirmados. Lição: o utilizador
rejeitou a letra Cormorant.

## 3. Análises

### Papéis das skills de design

- **UI Pro Max:** inspiração e análise (paletas, letras, padrões de página, regras de UX).
- **Impeccable:** desenho e regras de UI/intuitividade (craft-floor, `impeccable detect`).
- **anti-slop-design** (`.claude/skills/anti-slop-design`): filtro contra tudo o que soa a IA; correr `references/13-pre-emit-checklist.md` antes de entregar.
- **grilling:** decisões em rondas com recomendação.
- **/anti-padrao-ia:** fluxo completo (auditoria → direção → aprovação → implementação → auditoria final).
- **/humanizar:** todos os textos do site.

### UI Pro Max (análise e inspiração)

- Padrão de página: **história + prova social** (casamentos/joias): mostrar quem
  são, clientes reais antes do botão de pedido, depois a ação.
- Paleta para "joias + casamento": rosa principal, dourado de destaque, fundo
  rosado muito claro — confirma a identidade da Nobreza.
- Vídeo: não tocar automaticamente em alta resolução. Imagem fixa primeiro,
  vídeo ao tocar ou só quando visível, com pausa, parar fora do ecrã. Dados
  móveis em Moçambique são caros.
- Galerias que passam sozinhas: botões anterior/seguinte/pausa, parar ao interagir.
- Rejeitado: estilo "Liquid Glass" (feito para menus da Apple, tira brilho às fotos).
- Letras sugeridas e rejeitadas: Cormorant + Montserrat (recusada no MADEY),
  Playfair + Inter (é a do MADEY). O par de letras está por decidir.

### Impeccable (desenho)

- Quando a marca já tem identidade, **a marca manda**: elevar o rosa/dourado/branco,
  não trocar.
- Evitar o lugar-comum "creme + serifa + dourado" e as letras demasiado usadas
  (Playfair, Cormorant, Fraunces…).
- O que só a Nobreza pode dizer: **fabricam as joias** (artesanal e 3D) e têm
  **casais reais** que confiaram neles.
- Modos: a página inicial convence; loja e produto servem para encontrar depressa
  no telemóvel.

## 4. Decisões

| Data | Decisão |
| --- | --- |
| 2026-10-17 | Site = catálogo + pedido direto por WhatsApp, sem carrinho (como o MADEY). |
| 2026-10-17 | Seguir a identidade da Nobreza (rosa/magenta + dourado + branco, romântico e próximo) e elevá-la. |
| 2026-10-17 | Abandonada a direção "vitrine de veludo escuro": contrariava a identidade. |
| 2026-10-17 | Explorar no site: vídeos do fabrico, fotografias de casais, o dono, preço por peso. |
| 2026-10-17 | Sem pedir autorizações à loja: é uma proposta para lhes mostrar. |
| 2026-10-17 | `imagens/` e `identidadevisual/` ficam fora do git por enquanto. |
| 2026-10-17 | UI Pro Max analisa, Impeccable desenha; sem sorteio de direções nem questionários de escolha múltipla. |
| 2026-10-17 | O site terá um carrossel com eventos promocionais, publicidade e fotos de casais que confiaram na Nobreza (pedido do utilizador). Formato por definir. |
| 2026-10-17 | Desenho com a skill de grilling (rondas de perguntas com recomendação); textos do site passam pelo /humanizar; nada com ar de IA. |
| 2026-10-17 | Fotos do catálogo: as quadradas de 1170 px, cortadas sem a faixa magenta; preço, modelo, ref. e peso em texto. |
| 2026-10-17 | Preço real visível com o peso ("14.400 MZN · 1,7 g"); alianças "o par"; nota "o preço pode variar com o peso final". |
| 2026-10-17 | Primeira versão: Anéis, Alianças, Colares, Brincos. Relógios ficam para depois. |
| 2026-10-17 | Público principal: alianças e noivados no centro; o resto a um toque. |
| 2026-10-17 | Título principal: "O Ouro que mais conecta corações em Moçambique." (slogan real da loja). |
| 2026-10-17 | Carrossel clássico que **troca sozinho de imagem** de tantos em tantos segundos (o utilizador corrigiu a ideia dos destaques ao estilo Instagram). Conteúdo: promoções, publicidade, casais. Com pontos/setas, pausa ao tocar ou passar o rato, e parado para quem desativa animações. |
| 2026-10-17 | Promoções com data de fim; saem sozinhas quando acabam. Na demonstração, uma das de 10% como exemplo. |
| 2026-10-17 | "Como nasce um anel" (vídeo 3D → molde → acabamento → mão) é a secção do atelier na página inicial; o vídeo só toca quando visível. |
| 2026-10-17 | Ajuste grátis das alianças em ~20 min antes da cerimónia: destaque na categoria Alianças e em cada aliança. |
| 2026-10-17 | Caridade numa página "Sobre nós", fora da página inicial. |
| 2026-10-17 | Carrossel no topo da página inicial; primeiro slide com o slogan e as alianças; ~5 s por slide. |
| 2026-10-17 | Ordem da página inicial: carrossel → categorias → alianças em destaque (com ajuste grátis) → "Como nasce um anel" → casais → mais peças → rodapé. |
| 2026-10-17 | Páginas: Início · Loja (filtros) · Página de cada peça · Peça por medida · Sobre nós (loja, equipa, caridade, morada, mapa). |
| 2026-10-17 | Filtros da loja: Categoria, Cor do ouro (rosé/amarelo/branco), Preço; ordenar por preço e novidades. |
| 2026-10-17 | Botões "Pedir pelo WhatsApp" em magenta com o símbolo do WhatsApp. |
| 2026-10-17 | Mensagem do WhatsApp: modelo, ref., preço, link; sem pedir tamanho no site. Número WhatsApp 86 207 0869. |
| 2026-10-17 | Moeda escrita "MZN", como nas etiquetas da loja. |
| 2026-10-17 | Cores: fundo branco, secções em rosa muito claro; magenta só em preços e botões de pedido; dourado no logótipo e pequenos detalhes. |
| 2026-10-17 | Letras: Bodoni Moda (títulos) + Jost (texto) + Great Vibes só nos nomes dos casais. Mostrar amostra com acentos antes de fechar. |
| 2026-10-17 | Logótipo redesenhado em SVG igual ao original (o ficheiro tem 150 px); trocar pelos originais quando a loja aceitar. |
| 2026-10-17 | Animação: o anel do logótipo desenha-se uma vez ao abrir o site (< 1 s), sem ecrã de carregamento. |
| 2026-10-17 | Cartão de peça: tocar na foto abre a página da peça; botão magenta "Pedir" abre o WhatsApp. |
| 2026-10-17 | Página da peça: foto grande (+ vídeo quando houver), nome, preço com peso, cor, ref., "Pedir pelo WhatsApp"; alianças com bloco do ajuste grátis; "Peças parecidas". |
| 2026-10-17 | Página "Peça por medida": vídeo 3D → mão, 4 passos, botão "Contar a minha ideia" → WhatsApp. |
| 2026-10-17 | Cabeçalho: logótipo à esquerda; pesquisa, WhatsApp e menu à direita; sem botão de WhatsApp a flutuar. |
| 2026-10-17 | Instalada a skill anti-slop-design em `.claude/skills/` (só texto, MIT) para garantir que nada tem ar de IA. |
| 2026-10-17 | Carrossel automático com 4 regras: uma foto real por slide com frase curta; linha de progresso nos pontos; para ao tocar/arrastar e arrastar muda de slide; ~6 s por slide. |
| 2026-10-17 | Casais também numa grelha de álbum na página inicial (4–6 fotos visíveis, nomes em letra manuscrita) + "Ver todos os casais". |
| 2026-10-17 | Movimento só com significado: logótipo a desenhar-se, carrossel, vídeo do atelier quando visível, resposta curta ao tocar. Nada de "aparecer ao fazer scroll". |
| 2026-10-17 | "Sobre nós": vídeo do dono, fachada, joalheiro na bancada, comunidade/caridade, morada com "Abrir no mapa", horários "a confirmar". |
| 2026-10-17 | Rodapé: logótipo, slogan, morada, três números, Instagram/Facebook/TikTok, links das categorias. |
| 2026-10-17 | Criada a skill de utilizador `/anti-padrao-ia` (`~/.claude/skills/anti-padrao-ia`): modo "site do zero" e modo "melhorar existente", com aprovação antes do código. |

## 5. Em discussão (perguntas em aberto)

- [ ] Magenta: reservar a "momentos fortes" (preço, botão de pedido, nomes dos
      casais) ou mantê-lo tão presente como no Instagram?
- [x] Relógios: ficam para depois.
- [x] Ordem da página inicial (ronda 2).
- [x] Topo: o vídeo do atelier vai para "Como nasce um anel", só toca quando visível.
- [x] Preço: sempre visível, com o peso.
- [x] Primeira versão: as peças das quatro categorias que temos.
- [ ] Peças por medida (desenho 3D, gravação, tamanho): secção própria e o que vai
      na mensagem do WhatsApp?
- [ ] Par de letras.
- [ ] Push para o `main` e se todo o trabalho vai direto para o `main` (como no MADEY).

## 6. Ideias de estrutura (proposta, não decidida)

1. **Abertura:** o atelier (vídeo/imagem do fabrico) + frase + "Ver peças" / "Peça por medida".
2. **Categorias:** as dos destaques do Instagram, logo no segundo ecrã.
3. **Catálogo:** ficha clara por peça (modelo, referência, material, peso, preço) → WhatsApp.
4. **Como nasce um anel:** desenho 3D → fundição → acabamento à mão → entrega.
5. **Histórias Nobreza:** casais reais, como álbum de casamento, ligados às peças.
6. **Rodapé:** Matola, morada, WhatsApp, chamadas, Instagram.

O dourado do logótipo (o anel) como fio condutor entre secções.

## 7. Tarefas

### A fazer (depois da discussão)

- [ ] Escrever `PRODUCT.md` (contexto do produto para as skills).
- [ ] Definir a direção visual com a Impeccable e registar em `DESIGN.md`.
- [ ] Organizar `imagens/`: nomes simples, catálogo de peças (nome, categoria, preço, peso, ref.).
- [ ] Obter o logótipo em alta resolução ou vetorizar.
- [ ] Comprimir os vídeos para web.
- [ ] Montar o projeto (Vite + React + TS + Tailwind).

### Feito

- [x] Mapeamento inicial com UI Pro Max e Impeccable (2026-10-17).
- [x] Estudo do Instagram e da identidade visual (2026-10-17).
- [x] `.gitignore` (2026-10-17).

## 8. Diário

### 2026-10-17 (direção)

- Proposta de direção feita com /anti-padrao-ia (Modo B, passo 4) e verificada com a lista 13 da anti-slop.
- Tese: "Uma montra branca e luminosa, como a loja em Matola, onde cada peça traz a sua etiqueta e cada casal o seu nome."
- Eixos: densidade média · quente · formalidade média (você) · energia calma · pouco ornamento · contraste alto nos títulos. Ansiedade do cliente: confiança.
- Cores: branco #FFFFFF, rosa-pó #FCF0F5, magenta de ação #D6006F (5,1:1), magenta da marca #FE0084 só em áreas grandes (3,8:1), dourado #C9AD51 só em linhas/anel, tinta #2B1621, tinta suave #6B5260.
- Três sinais: o anel que se desenha, a etiqueta de preço (forma das etiquetas da loja), o álbum dos casais.
- Proposto renomear "Sobre nós" para "A loja".
- Cantos 2 px, um só conjunto de ícones, sem cartões com caixa/sombra.

### 2026-10-17

- Pedido: site para a Ourivesaria Nobreza, mesmo tom do MADEY.
- Mapeamento com UI Pro Max e Impeccable; lido o Instagram (sem login, parcial).
- Definido o porquê do site (feed com 1.132 posts, sem preços).
- Proposta "Vitrine e Bancada" (veludo escuro) → abandonada depois de estudar a
  identidade visual (rosa/magenta + dourado, romântico).
- Criados `.gitignore` e este backlog.
