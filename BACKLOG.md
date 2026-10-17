# Backlog — Nobreza

Registo de análises, discussões, decisões, levantamentos e tarefas do website da
Ourivesaria Nobreza. Serve para retomar o trabalho em qualquer sessão nova.

**Como usar:** ler isto antes de começar. No fim de cada sessão, atualizar
"Estado atual", acrescentar uma entrada ao "Diário" e mover as tarefas.

---

## Estado atual

- **Fase:** discussão. Ainda **não se escreve código** (pedido explícito, 2026-10-17).
- **Próximo passo:** fechar as perguntas em aberto (secção 5) e passar ao desenho.
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

### Referência: projeto MADEY

`/home/kenny/Development/Frontend/Project/react/MADEY` — inspiração de lógica e
qualidade, **não copiar o visual**. O que se reaproveita: Vite + React + TS +
Tailwind, catálogo sem carrinho, tocar na peça abre o WhatsApp com a mensagem
pronta, página própria por peça, pré-render (SEO e pré-visualização no WhatsApp),
preços em MT visíveis, nada de dados não confirmados. Lição: o utilizador
rejeitou a letra Cormorant.

## 3. Análises

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

## 5. Em discussão (perguntas em aberto)

- [ ] Magenta: reservar a "momentos fortes" (preço, botão de pedido, nomes dos
      casais) ou mantê-lo tão presente como no Instagram?
- [ ] Relógios entram no site ou só joias?
- [ ] Ordem da página inicial: peças primeiro e história depois, ou ao contrário?
- [ ] Topo da página: vídeo curto em ciclo (leve) ou imagem com botão ▶?
- [ ] Preço: mostrar sempre, "a partir de", ou "sob consulta" (depende do peso)?
- [ ] Quantas peças entram na primeira versão?
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

### 2026-10-17

- Pedido: site para a Ourivesaria Nobreza, mesmo tom do MADEY.
- Mapeamento com UI Pro Max e Impeccable; lido o Instagram (sem login, parcial).
- Definido o porquê do site (feed com 1.132 posts, sem preços).
- Proposta "Vitrine e Bancada" (veludo escuro) → abandonada depois de estudar a
  identidade visual (rosa/magenta + dourado, romântico).
- Criados `.gitignore` e este backlog.
