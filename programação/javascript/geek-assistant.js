/**
 * ==========================================================================
 * ALEXVERSO AI — ÓRBITA
 * Assistente geek com base de conhecimento local
 * JavaScript puro | Sem bibliotecas externas
 * Código 100% Completo e Corrigido
 * ==========================================================================
 */

(function () {
  "use strict";

  const CONFIG = {
    nome: "Alexverso AI",
    versao: "2.0",
    limiteMensagem: 500,
    tempoResposta: 650,
    paginaSecreta: "secreto.html"
  };

  // ==========================================================================
  // 1. BASE DE CONHECIMENTO
  // ==========================================================================

  const KNOWLEDGE = [

    // ------------------------------------------------------------------------
    // STAR WARS
    // ------------------------------------------------------------------------

    {
      keywords: ["darth vader", "anakin skywalker", "anakin", "vader"],
      answer: `<strong>Darth Vader</strong> é uma das figuras mais marcantes de Star Wars.

Originalmente conhecido como <strong>Anakin Skywalker</strong>, ele foi um poderoso Jedi que acabou seduzido pelo Lado Sombrio da Força e se tornou aprendiz do Imperador Palpatine.

**Sua história:**
• Foi descoberto ainda criança por Qui-Gon Jinn.
• Foi treinado por Obi-Wan Kenobi.
• Casou-se secretamente com Padmé Amidala.
• Tornou-se pai de Luke Skywalker e Leia Organa.
• No final de sua jornada, voltou para o Lado Luminoso ao salvar Luke.

Sua trajetória representa uma das histórias mais conhecidas de queda e redenção do cinema.`,
      related: ["Quem é Luke Skywalker?", "Quem foi Palpatine?", "O que é o Lado Sombrio?"]
    },

    {
      keywords: ["pai do luke", "pai de luke", "quem e o pai de luke"],
      answer: `O pai de <strong>Luke Skywalker</strong> é <strong>Anakin Skywalker, conhecido como Darth Vader</strong>.

A revelação acontece em <em>Star Wars: Episódio V — O Império Contra-Ataca</em>, um dos momentos mais famosos da história do cinema.

Luke descobre que o maior inimigo que enfrentava era, na verdade, seu próprio pai.`,
      related: ["Quem é Darth Vader?", "Quem é a mãe de Luke?", "Quem é Leia?"]
    },

    {
      keywords: ["star wars", "guerra nas estrelas", "universo star wars"],
      answer: `<strong>Star Wars</strong> é uma das maiores franquias de ficção científica e fantasia da cultura pop, criada por George Lucas.

A história acontece em uma galáxia muito distante e acompanha conflitos entre Jedi, Sith, Império Galáctico, Rebelião e diversas civilizações.

**Elementos fundamentais:**
• A Força e seus lados Luminoso e Sombrio.
• Jedi e Sith.
• Sabres de luz.
• A República e o Império.
• A família Skywalker.

A franquia reúne filmes, séries, animações, livros, quadrinhos e jogos.`,
      related: ["O que é a Força?", "Qual a ordem dos filmes?", "Quem são os Sith?"]
    },

    {
      keywords: ["ordem dos filmes star wars", "ordem cronologica star wars", "assistir star wars"],
      answer: `Existem duas formas populares de assistir a Star Wars.

<strong>Ordem de lançamento:</strong>
1. Episódio IV — Uma Nova Esperança
2. Episódio V — O Império Contra-Ataca
3. Episódio VI — O Retorno de Jedi
4. Episódio I — A Ameaça Fantasma
5. Episódio II — Ataque dos Clones
6. Episódio III — A Vingança dos Sith
7. Episódio VII — O Despertar da Força
8. Episódio VIII — Os Últimos Jedi
9. Episódio IX — A Ascensão Skywalker

<strong>Ordem cronológica:</strong>
Comece pelo Episódio I e siga até o Episódio IX.

Minha sugestão: a ordem de lançamento preserva melhor as grandes revelações da trilogia original.`,
      related: ["Quem é Darth Vader?", "Quais são as melhores séries?", "O que é a Força?"]
    },

    {
      keywords: ["luke skywalker", "quem e luke", "luke"],
      answer: `<strong>Luke Skywalker</strong> é o protagonista central da trilogia original de Star Wars.

Filho de Anakin Skywalker e Padmé Amidala, Luke foi criado em Tatooine e acabou se tornando um dos Jedi mais importantes da galáxia.

Seu treinamento começou com Obi-Wan Kenobi e continuou com Mestre Yoda.

Sua maior vitória não foi simplesmente derrotar o Imperador, mas acreditar que ainda existia bondade em seu pai.`,
      related: ["Quem é Darth Vader?", "Quem treinou Luke?", "Quem é Yoda?"]
    },

    {
      keywords: ["yoda", "mestre yoda"],
      answer: `<strong>Mestre Yoda</strong> é um dos maiores mestres Jedi da história de Star Wars.

Com aproximadamente 900 anos de vida, tornou-se um dos líderes mais respeitados da Ordem Jedi.

É conhecido por sua sabedoria, domínio da Força e estilo incomum de falar.

Uma de suas lições mais famosas é: <em>"Faça ou não faça. Tentativa não há."</em>`,
      related: ["Quem treinou Luke?", "O que é a Força?", "Quem são os Jedi?"]
    },

    {
      keywords: ["forca", "o que e a forca", "forca de star wars"],
      answer: `A <strong>Força</strong> é um campo de energia místico que conecta todos os seres vivos no universo de Star Wars.

Ela pode ser utilizada por indivíduos sensíveis à Força para realizar habilidades extraordinárias.

<strong>Lado Luminoso:</strong>
• Compaixão.
• Conhecimento.
• Equilíbrio.
• Autocontrole.

<strong>Lado Sombrio:</strong>
• Medo.
• Raiva.
• Ódio.
• Desejo de poder.

Os Jedi procuram compreender e respeitar a Força, enquanto os Sith buscam dominá-la.`,
      related: ["Quem são os Sith?", "Quem são os Jedi?", "O que são os cristais Kyber?"]
    },

    {
      keywords: ["sith", "os sith"],
      answer: `Os <strong>Sith</strong> são usuários do Lado Sombrio da Força em Star Wars.

Diferentemente dos Jedi, valorizam o poder individual, a ambição e a dominação.

Entre os Sith mais conhecidos estão:
• Darth Sidious.
• Darth Vader.
• Darth Maul.
• Darth Tyranus.
• Darth Bane.

A famosa Regra de Dois estabelece a existência de um mestre e um aprendiz, evitando que muitos Sith disputem o poder ao mesmo tempo.`,
      related: ["Quem é Palpatine?", "Quem é Darth Vader?", "Qual a diferença entre Jedi e Sith?"]
    },

    {
      keywords: ["sabres de luz", "sabre de luz", "lightsaber"],
      answer: `O <strong>sabre de luz</strong> é a arma característica dos Jedi e Sith.

Ele utiliza um cristal Kyber para produzir sua lâmina energética.

**Algumas cores conhecidas:**
• Azul: frequentemente associado a Jedi combatentes.
• Verde: associado a diferentes tradições Jedi.
• Vermelho: tradicionalmente utilizado pelos Sith.
• Roxo: famoso pelo sabre de Mace Windu.
• Branco: utilizado por Ahsoka Tano.

As cores possuem significados e associações diferentes conforme a tradição e a história de cada personagem.`,
      related: ["Quem é Mace Windu?", "Quem é Ahsoka?", "O que são cristais Kyber?"]
    },

    // ------------------------------------------------------------------------
    // DUNA
    // ------------------------------------------------------------------------

    {
      keywords: ["duna", "dune", "universo de duna"],
      answer: `<strong>Duna</strong>, de Frank Herbert, é uma das obras mais importantes da ficção científica.

A história acontece em um futuro distante, no qual grandes casas nobres disputam poder político, religioso e econômico.

O centro de tudo é <strong>Arrakis</strong>, um planeta desértico que possui a especiaria Melange, substância fundamental para a sociedade interplanetária.

**Elementos importantes:**
• Casa Atreides.
• Casa Harkonnen.
• Fremen.
• Bene Gesserit.
• Especiaria Melange.
• Planeta Arrakis.

Duna explora temas como poder, religião, ecologia, política, destino e manipulação.`,
      related: ["Quem é Paul Atreides?", "O que é a especiaria?", "Quem são os Fremen?"]
    },

    {
      keywords: ["paul atreides", "paul", "muad dib"],
      answer: `<strong>Paul Atreides</strong> é o protagonista de Duna.

Filho do Duque Leto Atreides e de Lady Jessica, ele é levado para Arrakis após sua família receber o controle do planeta.

Ao longo da história, Paul se aproxima dos Fremen e passa por uma transformação que envolve profecia, política e poder.

Sua jornada levanta uma questão central: o que acontece quando uma sociedade transforma uma pessoa em um messias?`,
      related: ["O que é Duna?", "Quem são os Fremen?", "O que é a Bene Gesserit?"]
    },

    {
      keywords: ["fremen", "quem sao os fremen"],
      answer: `Os <strong>Fremen</strong> são os habitantes nativos do deserto de Arrakis em Duna.

Eles desenvolveram uma cultura profundamente adaptada ao ambiente extremo do planeta.

**Características:**
• Conhecimento avançado de sobrevivência no deserto.
• Uso de trajes destiladores.
• Tradições próprias.
• Relação cultural e espiritual com os vermes da areia.
• Desejo de transformar Arrakis em um mundo mais habitável.

Eles desempenham um papel fundamental na trajetória de Paul Atreides.`,
      related: ["Quem é Paul Atreides?", "O que são os vermes da areia?", "O que é Arrakis?"]
    },

    {
      keywords: ["especiaria", "melange", "spice"],
      answer: `A <strong>Melange</strong>, conhecida como especiaria, é o recurso mais valioso do universo de Duna.

Encontrada exclusivamente em Arrakis, ela possui propriedades extraordinárias.

Entre seus efeitos estão:
• Ampliação da percepção.
• Prolongamento da vida.
• Alterações na consciência.
• Importância para a navegação espacial.

A especiaria é tão importante que influencia a economia, a política e o equilíbrio de poder de todo o Império.`,
      related: ["O que é Arrakis?", "Quem é Paul Atreides?", "O que são os navegadores da Guilda?"]
    },

    {
      keywords: ["bene gesserit"],
      answer: `A <strong>Bene Gesserit</strong> é uma poderosa ordem feminina presente no universo de Duna.

Suas integrantes passam por treinamentos físicos, mentais e políticos extraordinários.

Elas utilizam habilidades como:
• Controle corporal e vocal.
• Observação comportamental.
• Manipulação política.
• Treinamento mental.
• Técnicas de influência psicológica.

A ordem também possui um programa de reprodução seletiva que influencia diretamente a história de Paul Atreides.`,
      related: ["Quem é Jessica?", "Quem é Paul Atreides?", "O que é o Kwisatz Haderach?"]
    },

    // ------------------------------------------------------------------------
    // MARVEL
    // ------------------------------------------------------------------------

    {
      keywords: ["homem de ferro", "tony stark", "iron man"],
      answer: `<strong>Tony Stark</strong> é o Homem de Ferro, um dos personagens mais conhecidos da Marvel.

Gênio da engenharia e empresário, Tony constrói sua primeira armadura após ser capturado e gravemente ferido.

**Suas principais características:**
• Inteligência excepcional.
• Conhecimento tecnológico.
• Armaduras avançadas.
• Personalidade sarcástica.
• Capacidade de liderança.

No Universo Cinematográfico Marvel, sua trajetória começa em 2008 e termina em um dos momentos mais importantes de Vingadores: Ultimato.`,
      related: ["Quem são os Vingadores?", "Quem é Thanos?", "Como funciona a armadura do Homem de Ferro?"]
    },

    {
      keywords: ["homem aranha", "homem-aranha", "peter parker", "spider man", "spiderman"],
      answer: `<strong>Peter Parker</strong> é o Homem-Aranha, um dos heróis mais populares da Marvel.

Após ser picado por uma aranha radioativa ou geneticamente modificada, dependendo da versão, Peter desenvolve habilidades extraordinárias.

**Seus poderes incluem:**
• Força e agilidade ampliadas.
• Reflexos extraordinários.
• Sentido aranha.
• Capacidade de escalar superfícies.

Sua história é marcada pela responsabilidade, pelo amadurecimento e pela frase associada ao Tio Ben: <em>"Com grandes poderes vêm grandes responsabilidades."</em>`,
      related: ["Quem é Miles Morales?", "Quem é Venom?", "Quais são os poderes do Homem-Aranha?"]
    },

    {
      keywords: ["thanos", "joias do infinito", "manopla do infinito"],
      answer: `<strong>Thanos</strong> é um dos principais antagonistas do Universo Cinematográfico Marvel.

Conhecido como Titã Louco, ele acredita que eliminar metade da vida do universo seria uma solução para a escassez de recursos.

Para realizar seu objetivo, procura reunir as seis Joias do Infinito:
• Espaço.
• Mente.
• Realidade.
• Poder.
• Tempo.
• Alma.

Com todas elas reunidas na Manopla do Infinito, Thanos consegue alterar a realidade em escala universal.`,
      related: ["Quem derrotou Thanos?", "O que são as Joias?", "O que acontece em Ultimato?"]
    },

    {
      keywords: ["vingadores", "avengers"],
      answer: `Os <strong>Vingadores</strong> são uma equipe de super-heróis da Marvel criada para enfrentar ameaças que nenhum herói conseguiria combater sozinho.

Entre os integrantes mais conhecidos estão:
• Homem de Ferro.
• Capitão América.
• Thor.
• Hulk.
• Viúva Negra.
• Gavião Arqueiro.

Nos cinemas, a equipe foi apresentada em <em>Os Vingadores</em> (2012) e se tornou central na Saga do Infinito.`,
      related: ["Quem é Thanos?", "Quem é o Capitão América?", "Qual é a ordem dos filmes Marvel?"]
    },

    {
      keywords: ["stan lee"],
      answer: `<strong>Stan Lee (1922–2018)</strong> foi um dos nomes mais importantes da história dos quadrinhos.

Como escritor, editor e figura criativa da Marvel, participou da criação de personagens como Homem-Aranha, Hulk, Thor, X-Men, Homem de Ferro e Quarteto Fantástico.

Sua contribuição ajudou a transformar os super-heróis em fenômenos mundiais.

<strong>Excelsior!</strong>`,
      related: ["Quem criou o Homem-Aranha?", "Quem criou os X-Men?", "Qual é a história da Marvel?"]
    },

    {
      keywords: ["wolverine", "logan"],
      answer: `<strong>Wolverine</strong>, também conhecido como Logan, é um dos mutantes mais conhecidos dos X-Men.

Seus principais poderes são:
• Fator de cura acelerado.
• Sentidos extremamente desenvolvidos.
• Envelhecimento lento.
• Garras retráteis.
• Ossos revestidos de adamantium em sua versão mais conhecida.

Sua personalidade é marcada por conflitos internos, violência e uma busca constante por identidade.`,
      related: ["O que são os X-Men?", "Quem é Deadpool?", "O que é adamantium?"]
    },

    // ------------------------------------------------------------------------
    // DC
    // ------------------------------------------------------------------------

    {
      keywords: ["batman", "bruce wayne", "cavaleiro das trevas"],
      answer: `<strong>Batman</strong> é Bruce Wayne, o vigilante de Gotham City.

Após testemunhar o assassinato de seus pais quando criança, Bruce decide dedicar sua vida ao combate ao crime.

Ele não possui superpoderes. Suas principais vantagens são:
• Inteligência estratégica.
• Investigação.
• Artes marciais.
• Tecnologia.
• Preparação e planejamento.

É conhecido como o Cavaleiro das Trevas e um dos maiores detetives da ficção.`,
      related: ["Quem é o Coringa?", "Quem é Robin?", "Batman conseguiria derrotar o Superman?"]
    },

    {
      keywords: ["superman", "super homem", "super-homem", "clark kent", "kal el"],
      answer: `<strong>Superman</strong>, ou Clark Kent, é um dos maiores símbolos de esperança do universo DC.

Nascido em Krypton como Kal-El, foi enviado à Terra ainda bebê.

Sob a luz do Sol amarelo, desenvolveu habilidades como:
• Superforça.
• Voo.
• Supervelocidade.
• Visão de calor.
• Visão de raio X.
• Resistência extraordinária.

Apesar de seu poder, sua principal característica é a compaixão pela humanidade.`,
      related: ["Quem é Batman?", "Qual é a fraqueza do Superman?", "O que é Krypton?"]
    },

    {
      keywords: ["coringa", "joker"],
      answer: `<strong>O Coringa</strong> é o principal inimigo do Batman e um dos vilões mais conhecidos da DC.

Sua personalidade é marcada pelo caos, imprevisibilidade e obsessão por provocar o Cavaleiro das Trevas.

Existem diferentes versões de sua origem nos quadrinhos e nos filmes.

O personagem é especialmente interessante por representar um contraste psicológico e moral com Batman.`,
      related: ["Quem é Batman?", "Qual a origem do Coringa?", "Quem é Arlequina?"]
    },

    {
      keywords: ["liga da justica", "liga da justiça", "justice league"],
      answer: `A <strong>Liga da Justiça</strong> é uma das principais equipes de super-heróis da DC.

Sua formação mais conhecida inclui:
• Superman.
• Batman.
• Mulher-Maravilha.
• Flash.
• Aquaman.
• Lanterna Verde.
• Ciborgue.

A equipe reúne heróis com habilidades muito diferentes para proteger a Terra de ameaças extraordinárias.`,
      related: ["Quem é o Flash?", "Quem é a Mulher-Maravilha?", "Quem é Darkseid?"]
    },

    // ------------------------------------------------------------------------
    // ANIMES E MANGÁS
    // ------------------------------------------------------------------------

    {
      keywords: ["one piece", "luffy", "chapeu de palha", "rei dos piratas"],
      answer: `<strong>One Piece</strong> é um mangá criado por Eiichiro Oda.

A história acompanha Monkey D. Luffy e os Piratas do Chapéu de Palha em uma jornada pelos mares em busca do lendário tesouro One Piece.

**Personagens importantes:**
• Monkey D. Luffy.
• Roronoa Zoro.
• Nami.
• Usopp.
• Sanji.
• Tony Tony Chopper.
• Nico Robin.
• Franky.
• Brook.
• Jinbe.

A obra mistura aventura, humor, mistério, amizade e conflitos políticos.`,
      related: ["Quem é Shanks?", "O que é o One Piece?", "Quem é Gol D. Roger?"]
    },

    {
      keywords: ["dragon ball", "goku", "vegeta", "saiyajin", "kakarotto"],
      answer: `<strong>Dragon Ball</strong>, criado por Akira Toriyama, acompanha a jornada de Goku e seus amigos.

A franquia evolui de aventuras e artes marciais para batalhas envolvendo deuses, universos e guerreiros de poder extraordinário.

**Personagens marcantes:**
• Goku.
• Vegeta.
• Gohan.
• Piccolo.
• Trunks.
• Freeza.
• Cell.
• Majin Boo.

O universo é conhecido por suas transformações, rivalidades e batalhas épicas.`,
      related: ["Quem é o mais forte?", "O que é um Super Saiyajin?", "Quem é Vegeta?"]
    },

    {
      keywords: ["naruto", "sasuke", "hokage", "konoha"],
      answer: `<strong>Naruto</strong>, criado por Masashi Kishimoto, conta a história de Naruto Uzumaki, um jovem ninja que deseja se tornar Hokage.

Rejeitado durante a infância por carregar a Raposa de Nove Caudas, Naruto cresce buscando reconhecimento e construindo laços de amizade.

A obra aborda:
• Superação.
• Amizade.
• Sacrifício.
• Rivalidade.
• Guerra.
• Perdão.

Sasuke Uchiha e Sakura Haruno são personagens centrais de sua trajetória.`,
      related: ["Quem é Sasuke?", "Quem é Itachi?", "O que é a Akatsuki?"]
    },

    {
      keywords: ["death note", "light yagami", "kira", "ryuk"],
      answer: `<strong>Death Note</strong> é uma obra de suspense psicológico criada por Tsugumi Ohba e Takeshi Obata.

Light Yagami encontra um caderno sobrenatural capaz de matar qualquer pessoa cujo nome seja escrito nele, desde que o usuário conheça seu rosto.

Ele passa a ser conhecido como Kira e entra em um jogo intelectual contra o detetive L.

A história explora justiça, moralidade, poder e corrupção.`,
      related: ["Quem é L?", "Quem é Ryuk?", "Quem é mais inteligente: Light ou L?"]
    },

    {
      keywords: ["attack on titan", "shingeki no kyojin", "eren", "titans", "titas"],
      answer: `<strong>Attack on Titan</strong>, criado por Hajime Isayama, apresenta uma humanidade aparentemente confinada atrás de enormes muralhas para sobreviver aos Titãs.

A história acompanha Eren Yeager, Mikasa Ackerman e Armin Arlert.

O que começa como uma luta pela sobrevivência evolui para uma narrativa complexa sobre liberdade, guerra, preconceito e consequências históricas.`,
      related: ["Quem é Eren?", "O que são os Titãs?", "Quem é Levi Ackerman?"]
    },

    {
      keywords: ["saitama", "one punch man"],
      answer: `<strong>Saitama</strong> é o protagonista de One Punch Man.

Após um treinamento intenso, tornou-se tão poderoso que derrota praticamente qualquer adversário com um único soco.

Seu treinamento ficou famoso:
• 100 flexões.
• 100 abdominais.
• 100 agachamentos.
• Corrida de 10 km.

A obra utiliza humor para brincar com os clichês dos super-heróis e dos animes de batalha.`,
      related: ["Quem é Genos?", "Quem é Garou?", "Qual é o herói mais forte?"]
    },

    {
      keywords: ["jujutsu kaisen", "gojo", "sukuna", "itadori"],
      answer: `<strong>Jujutsu Kaisen</strong> acompanha Yuji Itadori, um estudante que acaba envolvido no mundo das maldições após ingerir um objeto amaldiçoado ligado a Ryomen Sukuna.

Entre os personagens mais conhecidos estão:
• Yuji Itadori.
• Satoru Gojo.
• Megumi Fushiguro.
• Nobara Kugisaki.
• Ryomen Sukuna.

A obra combina ação, horror sobrenatural e batalhas estratégicas.`,
      related: ["Quem é Gojo?", "Quem é Sukuna?", "O que são as maldições?"]
    },

    // ------------------------------------------------------------------------
    // GAMES
    // ------------------------------------------------------------------------

    {
      keywords: ["the witcher", "geralt", "geralt de rivia"],
      answer: `<strong>The Witcher</strong> é uma franquia de fantasia baseada nos livros de Andrzej Sapkowski.

O protagonista mais conhecido é Geralt de Rívia, um bruxo profissionalmente treinado para caçar monstros.

No jogo <em>The Witcher 3: Wild Hunt</em>, Geralt percorre um vasto mundo aberto em busca de Ciri, enquanto enfrenta conflitos políticos e criaturas perigosas.

A série é reconhecida por suas escolhas morais, narrativa e construção de mundo.`,
      related: ["Quem é Ciri?", "O que é a Caçada Selvagem?", "Quais jogos têm histórias parecidas?"]
    },

    {
      keywords: ["elden ring", "elden", "malenia", "tarnished"],
      answer: `<strong>Elden Ring</strong> é um RPG de ação desenvolvido pela FromSoftware em colaboração com George R. R. Martin.

O jogo acontece nas Terras Intermédias, um mundo repleto de mistérios, criaturas e semideuses.

**Características:**
• Mundo aberto.
• Combate desafiador.
• Construção livre de personagem.
• Exploração.
• Chefes memoráveis.
• Narrativa ambiental.

Entre os personagens mais conhecidos estão Malenia, Radahn, Ranni e Godfrey.`,
      related: ["Quem é Malenia?", "Quem é Radahn?", "Quais são os melhores jogos da FromSoftware?"]
    },

    {
      keywords: ["god of war", "kratos", "atreus"],
      answer: `<strong>God of War</strong> acompanha Kratos, um guerreiro que atravessa diferentes mitologias.

Na saga grega, Kratos enfrenta os deuses do Olimpo.

Na saga nórdica, tenta reconstruir sua vida enquanto educa seu filho Atreus.

A franquia aborda temas como:
• Vingança.
• Paternidade.
• Destino.
• Luto.
• Redenção.
• Responsabilidade.`,
      related: ["Quem é Atreus?", "Quem é Thor em God of War?", "Qual é a ordem dos jogos?"]
    },

    {
      keywords: ["minecraft"],
      answer: `<strong>Minecraft</strong> é um jogo sandbox desenvolvido pela Mojang.

Seu mundo é formado por blocos e oferece liberdade para explorar, construir, sobreviver e criar mecanismos.

**Modos principais:**
• Sobrevivência.
• Criativo.
• Aventura.
• Espectador.

É conhecido por sua criatividade, comunidade, servidores e possibilidades praticamente ilimitadas.`,
      related: ["Como funciona Redstone?", "O que é o Nether?", "Quais são os melhores jogos de sobrevivência?"]
    },

    {
      keywords: ["zelda", "link", "hyrule", "triforce", "triforca"],
      answer: `<strong>The Legend of Zelda</strong> é uma das franquias mais importantes da Nintendo.

A série acompanha Link em aventuras pelo reino de Hyrule, frequentemente envolvendo a princesa Zelda e o antagonista Ganon ou Ganondorf.

Seus elementos mais conhecidos incluem:
• Master Sword.
• Triforce.
• Templos e masmorras.
• Exploração.
• Quebra-cabeças.
• Mitologia própria.`,
      related: ["Quem é Zelda?", "O que é a Triforce?", "Qual Zelda devo jogar primeiro?"]
    },

    {
      keywords: ["gta", "grand theft auto"],
      answer: `<strong>Grand Theft Auto</strong> é uma franquia de mundo aberto desenvolvida pela Rockstar Games.

Os jogos permitem explorar cidades fictícias inspiradas em locais reais, realizar missões e acompanhar histórias envolvendo crime, sociedade e poder.

Entre os títulos mais conhecidos estão GTA III, Vice City, San Andreas, GTA IV e GTA V.`,
      related: ["Qual é o melhor GTA?", "Quem é Trevor?", "O que sabemos sobre GTA VI?"]
    },

    {
      keywords: ["pokemon", "pokémon", "pikachu", "ash"],
      answer: `<strong>Pokémon</strong> é uma franquia criada pela Nintendo, Game Freak e Creatures.

Sua proposta envolve capturar, treinar e batalhar com criaturas conhecidas como Pokémon.

Alguns dos mais conhecidos são:
• Pikachu.
• Charizard.
• Mewtwo.
• Lucario.
• Eevee.
• Gengar.

A franquia reúne jogos, animações, filmes, cartas e produtos.`,
      related: ["Quem é o Pokémon mais forte?", "O que é Mewtwo?", "Qual é a diferença entre Pokémon lendário e mítico?"]
    },

    // ------------------------------------------------------------------------
    // CINEMA E SÉRIES
    // ------------------------------------------------------------------------

    {
      keywords: ["matrix", "neo", "morfeu", "pílula vermelha", "pilula vermelha"],
      answer: `<strong>Matrix</strong> é uma franquia de ficção científica que questiona a natureza da realidade.

Neo descobre que o mundo que conhece é uma simulação criada por máquinas inteligentes.

A obra aborda:
• Inteligência artificial.
• Realidade simulada.
• Livre-arbítrio.
• Identidade.
• Controle social.

O filme original, lançado em 1999, tornou-se um marco do cinema de ficção científica.`,
      related: ["O que é realidade simulada?", "Quem é Morfeu?", "Matrix poderia acontecer?"]
    },

    {
      keywords: ["harry potter", "hogwarts", "voldemort"],
      answer: `<strong>Harry Potter</strong> é uma série de fantasia escrita por J. K. Rowling.

A história acompanha Harry, Hermione Granger e Rony Weasley durante seus anos na Escola de Magia e Bruxaria de Hogwarts.

A narrativa explora amizade, coragem, escolhas, preconceito, morte e sacrifício.

Entre seus elementos mais conhecidos estão as casas de Hogwarts, varinhas, feitiços, criaturas mágicas e as Relíquias da Morte.`,
      related: ["Qual é minha casa de Hogwarts?", "Quem é Dumbledore?", "Quem são as Relíquias da Morte?"]
    },

    {
      keywords: ["senhor dos aneis", "senhor dos anéis", "frodo", "gandalf", "sauron", "um anel"],
      answer: `<strong>O Senhor dos Anéis</strong>, de J. R. R. Tolkien, é uma das obras mais influentes da fantasia moderna.

A história acompanha Frodo Bolseiro e a Sociedade do Anel em uma jornada para destruir o Um Anel, artefato criado por Sauron.

O universo apresenta:
• Hobbits.
• Elfos.
• Anões.
• Homens.
• Magos.
• Orcs.

Sua mitologia é marcada por história, idiomas, povos e culturas cuidadosamente construídos.`,
      related: ["Quem é Gandalf?", "Quem é Sauron?", "O que é a Terra-média?"]
    },

    {
      keywords: ["interstellar", "interestelar", "cooper", "buraco negro"],
      answer: `<strong>Interestelar</strong> é um filme de ficção científica dirigido por Christopher Nolan.

A trama acompanha uma missão espacial em busca de um novo lar para a humanidade, enquanto Cooper enfrenta questões de tempo, distância e família.

O filme trabalha conceitos como:
• Buracos negros.
• Relatividade.
• Dilatação temporal.
• Gravidade.
• Exploração espacial.

A obra combina ciência, ficção e drama emocional.`,
      related: ["O que é um buraco negro?", "O que é dilatação temporal?", "Quem dirigiu Interestelar?"]
    },

    {
      keywords: ["breaking bad", "walter white", "jesse pinkman"],
      answer: `<strong>Breaking Bad</strong> acompanha Walter White, um professor de química que passa a produzir metanfetamina após receber um diagnóstico de câncer.

Ao lado de Jesse Pinkman, ele entra em um mundo de crime que transforma profundamente sua personalidade.

A série explora ambição, moralidade, consequências e transformação pessoal.`,
      related: ["Quem é Walter White?", "Quem é Gus Fring?", "Qual série assistir depois?"]
    },

    // ------------------------------------------------------------------------
    // TECNOLOGIA
    // ------------------------------------------------------------------------

    {
      keywords: ["inteligencia artificial", "ia", "artificial intelligence"],
      answer: `<strong>Inteligência Artificial</strong> é uma área da computação dedicada à criação de sistemas capazes de executar tarefas que normalmente exigem habilidades humanas.

Entre suas aplicações estão:
• Reconhecimento de imagens.
• Processamento de linguagem.
• Assistentes virtuais.
• Tradução automática.
• Sistemas de recomendação.
• Análise de dados.

Existem diferentes abordagens, como aprendizado de máquina, redes neurais e modelos de linguagem.`,
      related: ["O que é machine learning?", "Como funciona uma rede neural?", "O que é IA generativa?"]
    },

    {
      keywords: ["programacao", "programação", "javascript", "python", "codigo", "código"],
      answer: `A <strong>programação</strong> é o processo de criar instruções que um computador pode executar.

Algumas linguagens populares:
• <strong>Python:</strong> automação, dados e inteligência artificial.
• <strong>JavaScript:</strong> desenvolvimento web e aplicações interativas.
• <strong>Java:</strong> aplicações corporativas e sistemas.
• <strong>C:</strong> programação de baixo nível e sistemas.
• <strong>C++:</strong> jogos, sistemas e aplicações de alto desempenho.

No Alexverso, HTML, CSS e JavaScript trabalham juntos para construir as páginas do site.`,
      related: ["Qual linguagem aprender primeiro?", "O que é HTML?", "O que é CSS?"]
    },

    {
      keywords: ["ciberseguranca", "cibersegurança", "hacker", "seguranca digital", "segurança digital"],
      answer: `<strong>Cibersegurança</strong> é o conjunto de práticas e tecnologias utilizadas para proteger sistemas, redes e informações digitais.

Alguns conceitos fundamentais:
• Confidencialidade.
• Integridade.
• Disponibilidade.
• Criptografia.
• Autenticação.
• Firewall.
• Controle de acesso.
• Monitoramento de ameaças.

A área também inclui testes de segurança autorizados, análise de vulnerabilidades e resposta a incidentes.`,
      related: ["O que é firewall?", "Qual a diferença entre hacker e cracker?", "O que é criptografia?"]
    },

    {
      keywords: ["pipeline", "paralelismo", "arquitetura paralela"],
      answer: `<strong>Pipeline</strong> é uma técnica de organização do processador que divide a execução de instruções em etapas.

As etapas clássicas são:
1. Fetch: busca da instrução.
2. Decode: decodificação.
3. Execute: execução.
4. Memory: acesso à memória.
5. Write Back: gravação do resultado.

<strong>Paralelismo</strong> é a execução simultânea de diferentes tarefas ou operações.

Enquanto o pipeline sobrepõe etapas de instruções diferentes, o paralelismo pode utilizar múltiplas unidades de processamento para executar operações ao mesmo tempo.`,
      related: ["O que é speedup?", "Qual a diferença entre concorrência e paralelismo?", "Como funciona um processador?"]
    },

    // ------------------------------------------------------------------------
    // CULTURA GEEK
    // ------------------------------------------------------------------------

    {
      keywords: ["sentido da vida", "resposta para tudo", "42", "guia do mochileiro"],
      answer: `A resposta é <strong>42</strong>!

Em <em>O Guia do Mochileiro das Galáxias</em>, de Douglas Adams, o supercomputador Pensador Profundo calcula durante milhões de anos a resposta para a pergunta fundamental sobre a vida, o universo e tudo mais.

O problema? Ninguém sabe exatamente qual era a pergunta.

Uma das maiores piadas da ficção científica.`,
      related: ["Quem é Douglas Adams?", "O que é o Guia do Mochileiro?", "Conte outra piada."]
    },

    {
      keywords: ["piada", "piadas", "conte uma piada", "conta uma piada", "engracado", "engraçado", "rir"],
      answer: () => {
        const jokes = [
          "Por que os stormtroopers nunca usam óculos? Porque nem assim conseguem acertar o alvo. 🎯",
          "Existem 10 tipos de pessoas: as que entendem binário e as que não entendem. 💻",
          "Por que o Batman não usa Excel? Porque prefere trabalhar com o Bat-computador. 🦇",
          "O que o programador Jedi disse? Que a Força esteja com o código. ✨",
          "Por que o computador foi ao médico? Porque estava com um vírus. 🦠",
          "Qual é o personagem mais organizado de Star Wars? R2-D2, porque sempre tem tudo armazenado. 🤖",
          "Por que o desenvolvedor não saiu de casa? Porque estava preso em um loop infinito. 🔄"
        ];

        return jokes[Math.floor(Math.random() * jokes.length)];
      },
      related: ["Conte outra piada.", "Qual é o sentido da vida?", "Me conte uma curiosidade."]
    },

    {
      keywords: ["curiosidade", "curiosidades", "fato curioso", "fato geek"],
      answer: () => {
        const facts = [
          "O nome original de Yoda quase foi diferente: durante o desenvolvimento de Star Wars, o personagem chegou a ser chamado de Minch.",
          "O som do sabre de luz foi criado combinando o ruído de projetores antigos com interferências eletrônicas.",
          "A língua Klingon, de Star Trek, foi desenvolvida com regras gramaticais próprias.",
          "O universo de Duna foi construído com forte influência de questões ecológicas e políticas.",
          "O primeiro jogo de Mario a apresentar o personagem como protagonista foi Donkey Kong, em 1981.",
          "A linguagem de programação Python recebeu esse nome em referência ao grupo de comédia Monty Python."
        ];

        return facts[Math.floor(Math.random() * facts.length)];
      },
      related: ["Outra curiosidade.", "Conte uma piada.", "Fale sobre Duna."]
    },

    // ------------------------------------------------------------------------
    // SAUDAÇÕES E IDENTIDADE
    // ------------------------------------------------------------------------

    {
      keywords: ["oi", "ola", "olá", "e ai", "e aí", "fala", "bom dia", "boa tarde", "boa noite", "opa"],
      answer: `Saudações! Seja bem-vindo ao <strong>Alexverso</strong>.

Sou o assistente da sua biblioteca geek. Estou preparado para explorar universos, explicar histórias, apresentar personagens e conversar sobre tecnologia.

<strong>Por onde vamos começar?</strong>`,
      related: ["Fale sobre Star Wars.", "Explique o universo de Duna.", "Recomende um jogo."]
    },

    {
      keywords: ["quem e voce", "quem é você", "o que voce faz", "o que você faz", "quem e o alexverso ai"],
      answer: `Sou o <strong>Alexverso AI — Órbita</strong>, o assistente virtual da biblioteca Alexverso.

Minha missão é explorar o universo geek com você.

<strong>Posso ajudar com:</strong>
• Filmes e franquias.
• Animes e mangás.
• Games e personagens.
• Ficção científica.
• Tecnologia e programação.
• Curiosidades e comparações.
• Recomendações de entretenimento.

Meu conhecimento nesta versão está armazenado localmente no próprio site.`,
      related: ["O que você sabe sobre Duna?", "Quais assuntos você conhece?", "Conte uma curiosidade."]
    },

    {
      keywords: ["ajuda", "comandos", "o que posso perguntar", "como funciona"],
      answer: `Você pode conversar comigo usando perguntas normais.

<strong>Experimente:</strong>
• "Quem é Darth Vader?"
• "Explique o universo de Duna."
• "Qual a diferença entre Batman e Superman?"
• "Quem venceria: Goku ou Superman?"
• "Recomende um jogo parecido com Elden Ring."
• "Conte uma curiosidade sobre Star Wars."
• "Explique inteligência artificial."
• "Conte uma piada geek."

Também existe um segredo escondido no Alexverso...`,
      related: ["Quais são seus segredos?", "Conte uma curiosidade.", "Recomende um filme."]
    }
  ];

  // ==========================================================================
  // EASTER EGG SECRETO — RICK ASTLEY
  // ==========================================================================

  function verificarEasterEgg(mensagem) {
    const texto = mensagem.toLowerCase().trim();

    if (/\brick\b/.test(texto)) {
      abrirEasterEggRick();
      return true;
    }

    return false;
  }

  function abrirEasterEggRick() {
    if (document.getElementById("rickEggModal")) return;

    const modal = document.createElement("div");
    modal.id = "rickEggModal";

    modal.innerHTML = `
      <div class="rick-egg-conteudo">
        <button class="rick-egg-fechar" aria-label="Fechar">&times;</button>

        <h2>Você encontrou um segredo!</h2>
        <p>O Alexverso nunca mais será o mesmo...</p>

        <div class="rick-egg-video">
          <iframe
            src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
            title="Easter Egg secreto"
            allow="autoplay; encrypted-media; picture-in-picture"
            allowfullscreen>
          </iframe>
        </div>

        <span>UM EASTER EGG DO ALEXVERSO</span>
      </div>
    `;

    document.body.appendChild(modal);

    modal.querySelector(".rick-egg-fechar").onclick = () => {
      modal.remove();
    };

    modal.onclick = (evento) => {
      if (evento.target === modal) {
        modal.remove();
      }
    };
  }

  // ==========================================================================
  // 2. NORMALIZAÇÃO E BUSCA INTELIGENTE
  // ==========================================================================

  function normalizeText(text) {
    return String(text)
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^\w\s]/g, " ")
      .replace(/\s+/g, " ")
      .trim();
  }

  function escapeHtml(text) {
    const div = document.createElement("div");
    div.textContent = String(text);
    return div.innerHTML;
  }

  function getGeekResponse(userText) {
    const clean = normalizeText(userText);

    if (!clean) {
      return {
        answer: "Digite uma pergunta para começarmos nossa exploração.",
        related: ["Fale sobre Star Wars.", "Explique Duna.", "Conte uma curiosidade."]
      };
    }

    // COMANDO SECRETO (MELLON)
    if (/\bmellon\b/.test(clean)) {
      const secretPage = CONFIG.paginaSecreta;
      const alreadyThere = window.location.pathname
        .toLowerCase()
        .endsWith(secretPage.toLowerCase());

      if (alreadyThere) {
        return {
          answer: `<strong>AS PORTAS JÁ ESTÃO ABERTAS!</strong><br><br>
          Você já está no Cofre Secreto de Cinema do Alexverso. 🍿🏛️`,
          related: ["Conte uma curiosidade.", "Fale sobre O Senhor dos Anéis."]
        };
      }

      setTimeout(() => {
        window.location.href = secretPage;
      }, 1800);

      return {
        answer: `<strong>ENNyn DURIN ARAN MORIA: PEDO MELLON A MINNO.</strong><br><br>
        As portas de Moria se abrem! 🚪🗝️<br><br>
        Você pronunciou a palavra sagrada dos elfos: <strong>Mellon — Amigo.</strong><br><br>
        Acesso autorizado ao <strong>Cofre Secreto de Cinema</strong> do Alexverso...<br><br>
        <em>Redirecionando em instantes...</em><br><br>
        <a href="${secretPage}" class="ga-secret-link">🎟️ ENTRAR NO COFRE SECRETO</a>`,
        related: []
      };
    }

    // Comandos especiais
    if (clean.includes("outra piada") || clean.includes("mais uma piada")) {
      const joke = KNOWLEDGE.find(item => item.keywords.includes("piada"));
      return {
        answer: joke.answer(),
        related: joke.related
      };
    }

    if (
      clean.includes("outra curiosidade") ||
      clean.includes("mais uma curiosidade")
    ) {
      const fact = KNOWLEDGE.find(item => item.keywords.includes("curiosidade"));
      return {
        answer: fact.answer(),
        related: fact.related
      };
    }

    // Pontuação por relevância
    let bestMatch = null;
    let bestScore = 0;

    for (const item of KNOWLEDGE) {
      let score = 0;

      for (const keyword of item.keywords) {
        const normalizedKeyword = normalizeText(keyword);

        if (!normalizedKeyword) continue;

        if (clean === normalizedKeyword) {
          score += 100 + normalizedKeyword.length;
        } else if (
          clean.includes(normalizedKeyword) &&
          normalizedKeyword.length > 2
        ) {
          score += 30 + normalizedKeyword.length;
        } else if (
          normalizedKeyword.includes(clean) &&
          clean.length >= 5
        ) {
          score += 12 + clean.length;
        }

        const words = normalizedKeyword.split(" ");
        for (const word of words) {
          if (word.length >= 4 && clean.split(" ").includes(word)) {
            score += 2;
          }
        }
      }

      if (score > bestScore) {
        bestScore = score;
        bestMatch = item;
      }
    }

    if (bestMatch && bestScore >= 30) {
      return {
        answer: typeof bestMatch.answer === "function"
          ? bestMatch.answer()
          : bestMatch.answer,
        related: bestMatch.related || []
      };
    }

    return getFallbackResponse(clean);
  }

  // ==========================================================================
  // 3. RESPOSTAS PARA PERGUNTAS NÃO RECONHECIDAS
  // ==========================================================================

  function getFallbackResponse(question) {
    const suggestions = [
      "Quem é Darth Vader?",
      "Explique o universo de Duna.",
      "Quem é Batman?",
      "Fale sobre Elden Ring.",
      "Conte uma curiosidade geek."
    ];

    if (question.includes("recomende") || question.includes("indique")) {
      return {
        answer: `Adoro uma boa recomendação! Porém, preciso entender melhor o que você procura.

Você pode especificar se deseja um filme, série, anime ou jogo?

Também pode dizer uma obra de que gostou para eu procurar algo com uma proposta semelhante.`,
        related: ["Recomende um filme.", "Indique um anime.", "Recomende um jogo."]
      };
    }

    if (
      question.includes("quem venceria") ||
      question.includes("quem ganharia") ||
      question.includes("mais forte")
    ) {
      return {
        answer: `Uma batalha entre personagens de universos diferentes é sempre interessante!

Para fazer uma comparação justa, precisamos considerar:
• Força física.
• Velocidade.
• Habilidades especiais.
• Resistência.
• Inteligência e estratégia.
• Versões dos personagens.

Tente perguntar novamente indicando os dois personagens que deseja comparar.`,
        related: ["Goku vs Superman", "Batman vs Homem de Ferro", "Darth Vader vs Voldemort"]
      };
    }

    if (question.includes("obrigado") || question.includes("valeu")) {
      return {
        answer: `Foi um prazer ajudar! A biblioteca Alexverso está sempre aberta para novas explorações.

<strong>Que a curiosidade esteja com você!</strong> ✨`,
        related: ["Conte uma curiosidade.", "Fale sobre Duna.", "Vamos falar de games."]
      };
    }

    return {
      answer: `Ainda não encontrei essa informação na minha base de conhecimento.

Mas podemos explorar muitos outros assuntos!

<strong>Algumas sugestões:</strong>
• Star Wars e seus personagens.
• Duna e ficção científica.
• Marvel e DC.
• Animes e mangás.
• Games e universos de fantasia.
• Cinema e séries.
• Tecnologia e programação.

<strong>Dica:</strong> tente perguntar usando o nome de um personagem, filme ou jogo.`,
      related: suggestions
    };
  }

  // ==========================================================================
  // 4. HORÁRIO
  // ==========================================================================

  function getNowTime() {
    return new Intl.DateTimeFormat("pt-BR", {
      hour: "2-digit",
      minute: "2-digit"
    }).format(new Date());
  }

  // ==========================================================================
  // 5. IDENTIDADE VISUAL — ÓRBITA
  // ==========================================================================

  function createOrbitLogo() {
    return `
      <span class="ga-orbit-mark" aria-hidden="true">
        <span class="ga-orbit-ring ga-orbit-ring-one"></span>
        <span class="ga-orbit-ring ga-orbit-ring-two"></span>
        <span class="ga-orbit-core"></span>
        <span class="ga-orbit-planet"></span>
      </span>
    `;
  }

  // ==========================================================================
  // 6. INICIALIZAÇÃO DO CHAT
  // ==========================================================================

  function initGeekWidget() {
    if (document.getElementById("ga-widget")) return;

    const widget = document.createElement("div");
    widget.id = "ga-widget";

    widget.innerHTML = `
      <button
        id="ga-launcher-btn"
        title="Conversar com Alexverso AI"
        aria-label="Abrir Alexverso AI"
        aria-expanded="false"
        aria-controls="ga-chat-window"
      >
        ${createOrbitLogo()}
        <span id="ga-badge">AI</span>
      </button>

      <div
        id="ga-chat-window"
        role="dialog"
        aria-label="Alexverso AI"
        aria-modal="false"
      >

        <div class="ga-header">
          <div class="ga-header-info">
            <div class="ga-avatar">
              ${createOrbitLogo()}
            </div>

            <div class="ga-title-group">
              <h3>Alexverso AI</h3>
              <p>
                <span class="ga-online-dot"></span>
                Órbita conectada
              </p>
            </div>
          </div>

          <div class="ga-header-actions">
            <button
              class="ga-action-btn"
              id="ga-reset-btn"
              title="Nova conversa"
              aria-label="Reiniciar conversa"
            >↻</button>

            <button
              class="ga-action-btn"
              id="ga-close-btn"
              title="Fechar conversa"
              aria-label="Fechar chat"
            >×</button>
          </div>
        </div>

        <div class="ga-messages" id="ga-messages-list">
          <div class="ga-msg ga-bot">
            <div class="ga-bubble">
              <div class="ga-welcome-label">ALEXVERSO AI</div>

              Olá! Seja bem-vindo ao <strong>Alexverso</strong>.

              Sou seu assistente geek e estou pronto para explorar o multiverso com você.

              Podemos conversar sobre filmes, séries, animes, games, ficção científica e tecnologia.

              <strong>Qual universo vamos explorar hoje?</strong>
            </div>

            <div class="ga-quick-chips">
              <button class="ga-chip" data-q="Explique o universo de Duna">Duna</button>
              <button class="ga-chip" data-q="Quem é Darth Vader?">Star Wars</button>
              <button class="ga-chip" data-q="Recomende um jogo">Games</button>
              <button class="ga-chip" data-q="Conte uma curiosidade geek">Curiosidades</button>
              <button class="ga-chip" data-q="Conte uma piada geek">Piadas</button>
            </div>

            <span class="ga-time">${getNowTime()}</span>
          </div>
        </div>

        <div class="ga-footer">
          <form class="ga-input-form" id="ga-form" autocomplete="off">
            <input
              type="text"
              id="ga-input"
              placeholder="Explore o universo geek..."
              maxlength="${CONFIG.limiteMensagem}"
              aria-label="Digite sua pergunta"
              required
            />

            <button
              type="submit"
              class="ga-send-btn"
              title="Enviar mensagem"
              aria-label="Enviar mensagem"
            >
              <span aria-hidden="true">➤</span>
            </button>
          </form>

          <div class="ga-footer-note">
            ALEXVERSO <span>•</span> EXPLORE SEM LIMITES
          </div>
        </div>

      </div>
    `;

    document.body.appendChild(widget);

    // Elementos
    const launcher = widget.querySelector("#ga-launcher-btn");
    const chat = widget.querySelector("#ga-chat-window");
    const close = widget.querySelector("#ga-close-btn");
    const reset = widget.querySelector("#ga-reset-btn");
    const form = widget.querySelector("#ga-form");
    const input = widget.querySelector("#ga-input");
    const messages = widget.querySelector("#ga-messages-list");
    const badge = widget.querySelector("#ga-badge");

    // ------------------------------------------------------------------------
    // ABRIR E FECHAR
    // ------------------------------------------------------------------------

    function toggleChat(force) {
      const shouldOpen = typeof force === "boolean"
        ? force
        : !chat.classList.contains("ga-open");

      chat.classList.toggle("ga-open", shouldOpen);
      launcher.setAttribute("aria-expanded", String(shouldOpen));

      if (shouldOpen) {
        if (badge) badge.style.display = "none";
        setTimeout(() => input.focus(), 200);
      } else {
        launcher.focus();
      }
    }

    launcher.addEventListener("click", () => toggleChat());
    close.addEventListener("click", () => toggleChat(false));

    // Fechar com Escape
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && chat.classList.contains("ga-open")) {
        toggleChat(false);
      }
    });

    // ------------------------------------------------------------------------
    // MENSAGENS
    // ------------------------------------------------------------------------

    function scrollToBottom() {
      messages.scrollTop = messages.scrollHeight;
    }

    function addUserMessage(text) {
      const message = document.createElement("div");
      message.className = "ga-msg ga-user";

      const bubble = document.createElement("div");
      bubble.className = "ga-bubble";
      bubble.textContent = text;

      const time = document.createElement("span");
      time.className = "ga-time";
      time.textContent = getNowTime();

      message.append(bubble, time);
      messages.appendChild(message);

      scrollToBottom();
    }

    function addBotMessage(response) {
      const message = document.createElement("div");
      message.className = "ga-msg ga-bot";

      const bubble = document.createElement("div");
      bubble.className = "ga-bubble";

      // Formata **texto** para negrito caso venha em Markdown
      const rawAnswer = typeof response.answer === "string" ? response.answer : "";
      const formattedAnswer = rawAnswer.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
      bubble.innerHTML = formattedAnswer;

      message.appendChild(bubble);

      if (response.related && response.related.length) {
        const chips = document.createElement("div");
        chips.className = "ga-quick-chips";

        response.related.slice(0, 3).forEach((question) => {
          const button = document.createElement("button");
          button.className = "ga-chip";
          button.type = "button";
          button.dataset.q = question;
          button.textContent = question;

          chips.appendChild(button);
        });

        message.appendChild(chips);
      }

      const time = document.createElement("span");
      time.className = "ga-time";
      time.textContent = getNowTime();

      message.appendChild(time);
      messages.appendChild(message);

      scrollToBottom();
    }

    function showTyping() {
      const typing = document.createElement("div");
      typing.className = "ga-msg ga-bot ga-typing";

      typing.innerHTML = `
        <div class="ga-bubble ga-typing-dots">
          <span></span>
          <span></span>
          <span></span>
        </div>
      `;

      messages.appendChild(typing);
      scrollToBottom();

      return typing;
    }

    // ------------------------------------------------------------------------
    // PROCESSAMENTO
    // ------------------------------------------------------------------------

    let isProcessing = false;

    function handleUserSubmit(text) {
      const trimmed = text.trim();

      if (!trimmed || isProcessing) return;

      // Easter Egg do Rick Astley
      if (verificarEasterEgg(trimmed)) {
        input.value = "";
        return;
      }

      isProcessing = true;
      input.disabled = true;

      addUserMessage(trimmed);
      input.value = "";

      const typing = showTyping();

      const delay = Math.min(
        CONFIG.tempoResposta + trimmed.length * 2,
        1200
      );

      setTimeout(() => {
        typing.remove();

        const response = getGeekResponse(trimmed);
        addBotMessage(response);

        isProcessing = false;
        input.disabled = false;
        input.focus();
      }, delay);
    }

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      handleUserSubmit(input.value);
    });

    // ------------------------------------------------------------------------
    // CHIPS E PERGUNTAS SUGERIDAS
    // ------------------------------------------------------------------------

    messages.addEventListener("click", (event) => {
      const chip = event.target.closest(".ga-chip");

      if (!chip || isProcessing) return;

      const question = chip.dataset.q;

      if (question) {
        handleUserSubmit(question);
      }
    });

    // ------------------------------------------------------------------------
    // REINICIAR CONVERSA
    // ------------------------------------------------------------------------

    reset.addEventListener("click", () => {
      if (isProcessing) return;

      messages.innerHTML = "";

      addBotMessage({
        answer: `A órbita foi reiniciada! 🔄

Estamos começando uma nova exploração pelo universo Alexverso.

<strong>Qual será nosso próximo destino?</strong>`,
        related: [
          "Explique o universo de Duna.",
          "Quem é Darth Vader?",
          "Recomende um jogo."
        ]
      });

      input.focus();
    });

  }

  // ==========================================================================
  // 7. INICIAR QUANDO A PÁGINA ESTIVER PRONTA
  // ==========================================================================

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initGeekWidget);
  } else {
    initGeekWidget();
  }

})();