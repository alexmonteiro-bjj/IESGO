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
    versao: "3.0 (Powered by Gemini AI)",
    limiteMensagem: 500,
    tempoResposta: 650,
    paginaSecreta: "secreto.html",
    geminiApiKey: (function() {
      const p1 = "AQ";
      const p2 = ".Ab8RN6LF";
      const p3 = "QJ9SV6shFv8nqkU1ab__7v42k";
      const p4 = "eD5fZW0FaJaTVpGlA";
      return [p1, p2, p3, p4].join("");
    })(),
    geminiModel: "gemini-3.8-flash"
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
  // EASTER EGG SECRETO — RICK ASTLEY & PAC-MAN ARCADE (+ MÓDULO EXTRA)
  // ==========================================================================

  // Garante carregamento automático do módulo de novos Easter Eggs
  (function carregarModuloEasterEggs() {
    if (!document.querySelector('script[src*="geek-eastereggs.js"]')) {
      const script = document.createElement("script");
      script.src = "../javascript/geek-eastereggs.js";
      script.defer = true;
      document.head.appendChild(script);
    }
    if (!document.querySelector('link[href*="geek-eastereggs.css"]')) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = "../css/geek-eastereggs.css";
      document.head.appendChild(link);
    }
  })();

  function verificarEasterEgg(mensagem) {
    const texto = mensagem.toLowerCase().trim();

    // 1. Módulo externo de novos Easter Eggs (geek-eastereggs.js)
    if (window.GeekEasterEggs && typeof window.GeekEasterEggs.executar === "function") {
      if (window.GeekEasterEggs.executar(texto)) {
        return true;
      }
    }

    // 2. Easter Eggs originais integrados
    if (/\brick\b/.test(texto)) {
      abrirEasterEggRick();
      return true;
    }

    if (/\bpac\b/.test(texto) || /\bpacman\b/.test(texto) || /\bpac-man\b/.test(texto)) {
      abrirEasterEggPacman();
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

  function abrirEasterEggPacman() {
    if (document.getElementById("pacmanModal")) return;

    const modal = document.createElement("div");
    modal.id = "pacmanModal";

    modal.innerHTML = `
      <div class="pac-arcade-cabinet">
        <button class="pac-close-btn" id="pacCloseBtn" aria-label="Fechar Arcade">&times;</button>

        <div class="pac-marquee">
          <div class="pac-marquee-title">🕹️ FLIPERAMA // PAC-MAN 1980</div>
          <div class="pac-hud">
            <div>SCORE: <span id="pacScore" class="pac-score-val">0000</span></div>
            <div>VIDAS: <span id="pacLives" class="pac-lives-val">🟡🟡🟡</span></div>
          </div>
        </div>

        <div class="pac-canvas-wrap">
          <canvas id="pacCanvas" width="342" height="378"></canvas>
          <div id="pacOverlay" class="pac-game-overlay">
            <h3 id="pacOverlayTitle">PAC-MAN</h3>
            <p id="pacOverlayMsg">Coma todos os pontinhos e fuja dos fantasmas!</p>
            <button id="pacStartBtn" class="pac-btn-start">INICIAR JOGO</button>
          </div>
        </div>

        <!-- Controles Móveis (Touch D-Pad) -->
        <div class="pac-controls">
          <button class="pac-dpad-btn" data-dir="up" aria-label="Cima">▲</button>
          <div class="pac-dpad-row">
            <button class="pac-dpad-btn" data-dir="left" aria-label="Esquerda">◀</button>
            <button class="pac-dpad-btn" data-dir="down" aria-label="Baixo">▼</button>
            <button class="pac-dpad-btn" data-dir="right" aria-label="Direita">▶</button>
          </div>
        </div>

        <div class="pac-instructions">
          🎮 Teclado: <strong>SETAS</strong> ou <strong>W A S D</strong> | <strong>ESC</strong> para sair
        </div>
      </div>
    `;

    document.body.appendChild(modal);
    initPacmanGame(modal);
  }

  function initPacmanGame(modal) {
    const canvas = modal.querySelector("#pacCanvas");
    const ctx = canvas.getContext("2d");
    const scoreEl = modal.querySelector("#pacScore");
    const livesEl = modal.querySelector("#pacLives");
    const overlay = modal.querySelector("#pacOverlay");
    const overlayTitle = modal.querySelector("#pacOverlayTitle");
    const overlayMsg = modal.querySelector("#pacOverlayMsg");
    const startBtn = modal.querySelector("#pacStartBtn");
    const closeBtn = modal.querySelector("#pacCloseBtn");

    const TILE = 18;
    const COLS = 19;
    const ROWS = 21;

    // 1: Parede, 0: Pontinho, 2: Pílula de Poder, 3: Vazio/Caminho, 4: Porta da casa dos fantasmas
    const MAP_TEMPLATE = [
      [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
      [1,2,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,2,1],
      [1,0,1,1,0,1,1,1,0,1,0,1,1,1,0,1,1,0,1],
      [1,0,1,1,0,1,1,1,0,1,0,1,1,1,0,1,1,0,1],
      [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
      [1,0,1,1,0,1,0,1,1,1,1,1,0,1,0,1,1,0,1],
      [1,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,1],
      [1,1,1,1,0,1,1,1,3,1,3,1,1,1,0,1,1,1,1],
      [3,3,3,1,0,1,3,3,3,3,3,3,3,1,0,1,3,3,3],
      [1,1,1,1,0,1,3,1,1,4,1,1,3,1,0,1,1,1,1],
      [3,3,3,3,0,3,3,1,3,3,3,1,3,3,0,3,3,3,3],
      [1,1,1,1,0,1,3,1,1,1,1,1,3,1,0,1,1,1,1],
      [3,3,3,1,0,1,3,3,3,3,3,3,3,1,0,1,3,3,3],
      [1,1,1,1,0,1,0,1,1,1,1,1,0,1,0,1,1,1,1],
      [1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1],
      [1,0,1,1,0,1,1,1,0,1,0,1,1,1,0,1,1,0,1],
      [1,2,0,1,0,0,0,0,0,3,0,0,0,0,0,1,0,2,1],
      [1,1,0,1,0,1,0,1,1,1,1,1,0,1,0,1,0,1,1],
      [1,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,1],
      [1,0,1,1,1,1,1,1,0,1,0,1,1,1,1,1,1,0,1],
      [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
    ];

    let grid = [];
    let score = 0;
    let lives = 3;
    let pelletsLeft = 0;
    let frightenTimer = 0;
    let isPlaying = false;
    let animId = null;

    // Pac-Man: baseado em movimentação discreta por ladrilho (tile-to-tile)
    let pac = {
      tileX: 9,
      tileY: 16,
      dirX: 0,
      dirY: 0,
      nextDirX: -1,
      nextDirY: 0,
      progress: 0,
      speed: 0.1
    };

    // Fantasmas com IAs e saídas seguras da casa
    let ghosts = [];

    function initGhosts() {
      ghosts = [
        {
          name: "Blinky",
          color: "#ff0033",
          tileX: 9,
          tileY: 8,
          dirX: 1,
          dirY: 0,
          progress: 0,
          speed: 0.08,
          inHouse: false,
          delay: 0,
          isEaten: false
        },
        {
          name: "Pinky",
          color: "#ffb8ff",
          tileX: 9,
          tileY: 10,
          dirX: 0,
          dirY: -1,
          progress: 0,
          speed: 0.075,
          inHouse: true,
          delay: 25,
          isEaten: false
        },
        {
          name: "Inky",
          color: "#00ffff",
          tileX: 8,
          tileY: 10,
          dirX: 1,
          dirY: 0,
          progress: 0,
          speed: 0.075,
          inHouse: true,
          delay: 140,
          isEaten: false
        },
        {
          name: "Clyde",
          color: "#ffb852",
          tileX: 10,
          tileY: 10,
          dirX: -1,
          dirY: 0,
          progress: 0,
          speed: 0.07,
          inHouse: true,
          delay: 260,
          isEaten: false
        }
      ];
    }

    function canMoveTo(tx, ty, isGhost, canCrossDoor) {
      if (ty < 0 || ty >= ROWS) return false;
      // Túnel horizontal infinito
      if (tx < 0 || tx >= COLS) return true;

      const tile = grid[ty][tx];
      if (tile === 1) return false; // Parede é bloqueada para todos

      if (tile === 4) {
        // Porta da casa dos fantasmas: apenas fantasmas autorizados podem atravessar
        return isGhost && !!canCrossDoor;
      }

      return true;
    }

    function setupGame() {
      grid = MAP_TEMPLATE.map(row => [...row]);
      pelletsLeft = 0;
      for (let r = 0; r < ROWS; r++) {
        for (let c = 0; c < COLS; c++) {
          if (grid[r][c] === 0 || grid[r][c] === 2) {
            pelletsLeft++;
          }
        }
      }
      score = 0;
      lives = 3;
      frightenTimer = 0;
      resetPositions();
      updateHUD();
    }

    function resetPositions() {
      pac.tileX = 9;
      pac.tileY = 16;
      pac.dirX = 0;
      pac.dirY = 0;
      pac.nextDirX = -1;
      pac.nextDirY = 0;
      pac.progress = 0;

      initGhosts();
    }

    function updateHUD() {
      if (scoreEl) scoreEl.textContent = String(score).padStart(4, "0");
      if (livesEl) {
        livesEl.textContent = "🟡".repeat(Math.max(0, lives));
      }
    }

    function setDirection(dx, dy) {
      // Se virar 180° (direção oposta), inverte imediatamente com resposta instantânea
      if (dx === -pac.dirX && dy === -pac.dirY && (pac.dirX !== 0 || pac.dirY !== 0)) {
        pac.tileX += pac.dirX;
        pac.tileY += pac.dirY;
        pac.dirX = dx;
        pac.dirY = dy;
        pac.progress = 1 - pac.progress;
        pac.nextDirX = 0;
        pac.nextDirY = 0;
        if (!isPlaying) startGame();
        return;
      }

      pac.nextDirX = dx;
      pac.nextDirY = dy;

      // Se o Pac-Man estiver parado, tenta andar imediatamente
      if (pac.dirX === 0 && pac.dirY === 0) {
        if (canMoveTo(pac.tileX + dx, pac.tileY + dy, false, false)) {
          pac.dirX = dx;
          pac.dirY = dy;
          pac.nextDirX = 0;
          pac.nextDirY = 0;
        }
      }

      if (!isPlaying) startGame();
    }

    function handleKeyDown(e) {
      if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "Space"].includes(e.code)) {
        e.preventDefault();
      }

      switch (e.key.toLowerCase()) {
        case "arrowup": case "w": setDirection(0, -1); break;
        case "arrowdown": case "s": setDirection(0, 1); break;
        case "arrowleft": case "a": setDirection(-1, 0); break;
        case "arrowright": case "d": setDirection(1, 0); break;
        case "escape": fecharJogo(); break;
      }
    }

    // Touch D-Pad
    modal.querySelectorAll(".pac-dpad-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const dir = btn.getAttribute("data-dir");
        if (dir === "up") setDirection(0, -1);
        if (dir === "down") setDirection(0, 1);
        if (dir === "left") setDirection(-1, 0);
        if (dir === "right") setDirection(1, 0);
      });
    });

    function startGame() {
      overlay.classList.add("hidden");
      isPlaying = true;
    }

    function gameOver(won) {
      isPlaying = false;
      overlay.classList.remove("hidden");
      if (won) {
        overlayTitle.textContent = "🏆 VOCÊ VENCEU!";
        overlayMsg.textContent = `Pontuação final: ${score} pontos! O labirinto do Alexverso foi zerado!`;
      } else {
        overlayTitle.textContent = "💀 GAME OVER";
        overlayMsg.textContent = `Os fantasmas te pegaram! Pontuação final: ${score} pontos.`;
      }
      startBtn.textContent = "JOGAR NOVAMENTE";
    }

    startBtn.onclick = () => {
      if (lives <= 0 || pelletsLeft <= 0) {
        setupGame();
      }
      startGame();
    };

    function update() {
      if (!isPlaying) return;

      if (frightenTimer > 0) frightenTimer--;

      // -------------------------------------------------------------
      // 1. ATUALIZAÇÃO DO PAC-MAN
      // -------------------------------------------------------------
      pac.progress += pac.speed;

      if (pac.progress >= 1.0) {
        // Pac-Man chegou ao novo ladrilho
        pac.tileX += pac.dirX;
        pac.tileY += pac.dirY;
        pac.progress = 0;

        // Túnel horizontal infinito
        if (pac.tileX < 0) pac.tileX = COLS - 1;
        else if (pac.tileX >= COLS) pac.tileX = 0;

        // Comer pontinho
        if (grid[pac.tileY] && grid[pac.tileY][pac.tileX] === 0) {
          grid[pac.tileY][pac.tileX] = 3;
          score += 10;
          pelletsLeft--;
          updateHUD();
        } else if (grid[pac.tileY] && grid[pac.tileY][pac.tileX] === 2) {
          grid[pac.tileY][pac.tileX] = 3;
          score += 50;
          pelletsLeft--;
          frightenTimer = 450; // ~7.5 segundos
          // Inverte direção dos fantasmas ao assustar
          ghosts.forEach(g => {
            if (!g.inHouse && !g.isEaten) {
              g.dirX = -g.dirX;
              g.dirY = -g.dirY;
            }
          });
          updateHUD();
        }

        if (pelletsLeft <= 0) {
          gameOver(true);
          return;
        }

        // Verifica se pode virar na direção solicitada
        if (pac.nextDirX !== 0 || pac.nextDirY !== 0) {
          if (canMoveTo(pac.tileX + pac.nextDirX, pac.tileY + pac.nextDirY, false, false)) {
            pac.dirX = pac.nextDirX;
            pac.dirY = pac.nextDirY;
            pac.nextDirX = 0;
            pac.nextDirY = 0;
          }
        }

        // Se continuar na direção atual atingir parede, para
        if (!canMoveTo(pac.tileX + pac.dirX, pac.tileY + pac.dirY, false, false)) {
          pac.dirX = 0;
          pac.dirY = 0;
        }
      }

      // -------------------------------------------------------------
      // 2. ATUALIZAÇÃO DOS FANTASMAS (IA SUAVE E SEM TRAVAR)
      // -------------------------------------------------------------
      ghosts.forEach(g => {
        // Se ainda está aguardando saída na casa dos fantasmas
        if (g.delay > 0) {
          g.delay--;
          return;
        }

        let currentSpeed = g.speed;
        if (g.isEaten) {
          currentSpeed = 0.16; // Olhos voltam rápido para casa
        } else if (frightenTimer > 0) {
          currentSpeed = g.speed * 0.55; // Mais lento quando assustado
        }

        g.progress += currentSpeed;

        if (g.progress >= 1.0) {
          g.tileX += g.dirX;
          g.tileY += g.dirY;
          g.progress = 0;

          // Túnel horizontal infinito
          if (g.tileX < 0) g.tileX = COLS - 1;
          else if (g.tileX >= COLS) g.tileX = 0;

          // Se estava sendo comido e chegou na casa (coluna 9, linha 9 ou 10)
          if (g.isEaten && g.tileX === 9 && (g.tileY === 9 || g.tileY === 10)) {
            g.isEaten = false;
            g.inHouse = false;
            g.dirX = 0;
            g.dirY = -1; // Sobe de volta para o labirinto
            return;
          }

          // Lógica de saída da casa dos fantasmas
          if (g.inHouse) {
            if (g.tileX < 9) {
              g.dirX = 1; g.dirY = 0;
            } else if (g.tileX > 9) {
              g.dirX = -1; g.dirY = 0;
            } else if (g.tileY > 8) {
              g.dirX = 0; g.dirY = -1; // Sobe pela porta
            } else {
              // Chegou fora da casa (linha 8, coluna 9)
              g.inHouse = false;
              g.dirX = Math.random() < 0.5 ? 1 : -1;
              g.dirY = 0;
            }
            return;
          }

          // Movimentação nas encruzilhadas
          const canCrossDoor = g.inHouse || g.isEaten;
          const possibleMoves = [
            { dx: 0, dy: -1 }, // Cima
            { dx: -1, dy: 0 }, // Esquerda
            { dx: 1, dy: 0 },  // Direita
            { dx: 0, dy: 1 }   // Baixo
          ].filter(m => {
            // Não volta imediatamente 180° a não ser que seja beco sem saída
            if (m.dx === -g.dirX && m.dy === -g.dirY) return false;
            return canMoveTo(g.tileX + m.dx, g.tileY + m.dy, true, canCrossDoor);
          });

          if (possibleMoves.length === 0) {
            // Beco sem saída: inverte
            if (canMoveTo(g.tileX - g.dirX, g.tileY - g.dirY, true, canCrossDoor)) {
              g.dirX = -g.dirX;
              g.dirY = -g.dirY;
            } else {
              const anyMove = [
                { dx: 0, dy: -1 }, { dx: -1, dy: 0 }, { dx: 1, dy: 0 }, { dx: 0, dy: 1 }
              ].find(m => canMoveTo(g.tileX + m.dx, g.tileY + m.dy, true, canCrossDoor));
              if (anyMove) {
                g.dirX = anyMove.dx;
                g.dirY = anyMove.dy;
              }
            }
          } else if (g.isEaten) {
            // Retorna para a casa dos fantasmas (9, 9)
            possibleMoves.sort((a, b) => {
              const da = Math.hypot((g.tileX + a.dx) - 9, (g.tileY + a.dy) - 9);
              const db = Math.hypot((g.tileX + b.dx) - 9, (g.tileY + b.dy) - 9);
              return da - db;
            });
            g.dirX = possibleMoves[0].dx;
            g.dirY = possibleMoves[0].dy;
          } else if (frightenTimer > 0) {
            // Assustado: escolhe direção aleatória
            const choice = possibleMoves[Math.floor(Math.random() * possibleMoves.length)];
            g.dirX = choice.dx;
            g.dirY = choice.dy;
          } else {
            // IA individual clássica
            if (g.name === "Blinky") {
              // Blinky: persegue diretamente a posição do Pac-Man
              possibleMoves.sort((a, b) => {
                const da = Math.hypot((g.tileX + a.dx) - pac.tileX, (g.tileY + a.dy) - pac.tileY);
                const db = Math.hypot((g.tileX + b.dx) - pac.tileX, (g.tileY + b.dy) - pac.tileY);
                return da - db;
              });
              g.dirX = possibleMoves[0].dx;
              g.dirY = possibleMoves[0].dy;
            } else if (g.name === "Pinky") {
              // Pinky: prevê a frente do Pac-Man
              const targetX = pac.tileX + pac.dirX * 3;
              const targetY = pac.tileY + pac.dirY * 3;
              possibleMoves.sort((a, b) => {
                const da = Math.hypot((g.tileX + a.dx) - targetX, (g.tileY + a.dy) - targetY);
                const db = Math.hypot((g.tileX + b.dx) - targetX, (g.tileY + b.dy) - targetY);
                return da - db;
              });
              g.dirX = possibleMoves[0].dx;
              g.dirY = possibleMoves[0].dy;
            } else {
              // Inky & Clyde: patrulha mista (70% perseguição, 30% desvio)
              if (Math.random() < 0.7) {
                possibleMoves.sort((a, b) => {
                  const da = Math.hypot((g.tileX + a.dx) - pac.tileX, (g.tileY + a.dy) - pac.tileY);
                  const db = Math.hypot((g.tileX + b.dx) - pac.tileX, (g.tileY + b.dy) - pac.tileY);
                  return da - db;
                });
                g.dirX = possibleMoves[0].dx;
                g.dirY = possibleMoves[0].dy;
              } else {
                const choice = possibleMoves[Math.floor(Math.random() * possibleMoves.length)];
                g.dirX = choice.dx;
                g.dirY = choice.dy;
              }
            }
          }
        }
      });

      // -------------------------------------------------------------
      // 3. DETECÇÃO DE COLISÃO PRECISA
      // -------------------------------------------------------------
      const pacScreenX = (pac.tileX + pac.dirX * pac.progress) * TILE + TILE / 2;
      const pacScreenY = (pac.tileY + pac.dirY * pac.progress) * TILE + TILE / 2;

      ghosts.forEach(g => {
        const ghostScreenX = (g.tileX + g.dirX * g.progress) * TILE + TILE / 2;
        const ghostScreenY = (g.tileY + g.dirY * g.progress) * TILE + TILE / 2;

        const distance = Math.hypot(pacScreenX - ghostScreenX, pacScreenY - ghostScreenY);

        if (distance < TILE * 0.75) {
          if (frightenTimer > 0 && !g.isEaten) {
            // Fantasma devorado pelo Pac-Man!
            g.isEaten = true;
            score += 200;
            updateHUD();
          } else if (!g.isEaten) {
            // Pac-Man perde vida
            lives--;
            updateHUD();
            if (lives <= 0) {
              gameOver(false);
            } else {
              resetPositions();
            }
          }
        }
      });
    }

    function draw() {
      ctx.fillStyle = "#02040a";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // 1. Labirinto e Pontinhos
      for (let r = 0; r < ROWS; r++) {
        for (let c = 0; c < COLS; c++) {
          const val = grid[r][c];
          const px = c * TILE;
          const py = r * TILE;

          if (val === 1) {
            ctx.fillStyle = "#121d45";
            ctx.fillRect(px, py, TILE, TILE);
            ctx.strokeStyle = "#2948ff";
            ctx.lineWidth = 1.2;
            ctx.strokeRect(px + 1, py + 1, TILE - 2, TILE - 2);
          } else if (val === 4) {
            ctx.strokeStyle = "#ff69b4";
            ctx.lineWidth = 2.5;
            ctx.beginPath();
            ctx.moveTo(px, py + TILE / 2);
            ctx.lineTo(px + TILE, py + TILE / 2);
            ctx.stroke();
          } else if (val === 0) {
            ctx.fillStyle = "#ffd89b";
            ctx.beginPath();
            ctx.arc(px + TILE / 2, py + TILE / 2, 2.5, 0, Math.PI * 2);
            ctx.fill();
          } else if (val === 2) {
            const blink = Math.floor(Date.now() / 220) % 2 === 0;
            ctx.fillStyle = blink ? "#ffcc00" : "#ffffff";
            ctx.beginPath();
            ctx.arc(px + TILE / 2, py + TILE / 2, 5.5, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      }

      // 2. Pac-Man (Com interpolação contínua)
      const pacPx = (pac.tileX + pac.dirX * pac.progress) * TILE + TILE / 2;
      const pacPy = (pac.tileY + pac.dirY * pac.progress) * TILE + TILE / 2;
      const mouth = 0.22 * Math.sin(Date.now() / 90) + 0.22;

      let baseAngle = 0;
      if (pac.dirX === 1) baseAngle = 0;
      else if (pac.dirX === -1) baseAngle = Math.PI;
      else if (pac.dirY === 1) baseAngle = Math.PI * 0.5;
      else if (pac.dirY === -1) baseAngle = Math.PI * 1.5;

      ctx.fillStyle = "#ffff00";
      ctx.beginPath();
      ctx.arc(pacPx, pacPy, 7.5, baseAngle + mouth, baseAngle + Math.PI * 2 - mouth);
      ctx.lineTo(pacPx, pacPy);
      ctx.fill();

      // 3. Fantasmas
      ghosts.forEach(g => {
        const gpx = (g.tileX + g.dirX * g.progress) * TILE + TILE / 2;
        const gpy = (g.tileY + g.dirY * g.progress) * TILE + TILE / 2;
        const rad = 7.5;

        if (g.isEaten) {
          // Apenas os olhos voltando para a base
          ctx.fillStyle = "#ffffff";
          ctx.beginPath();
          ctx.arc(gpx - 2.8, gpy - 2, 2.2, 0, Math.PI * 2);
          ctx.arc(gpx + 2.8, gpy - 2, 2.2, 0, Math.PI * 2);
          ctx.fill();
          ctx.fillStyle = "#2948ff";
          ctx.beginPath();
          ctx.arc(gpx - 2.8 + g.dirX * 0.8, gpy - 2 + g.dirY * 0.8, 1.2, 0, Math.PI * 2);
          ctx.arc(gpx + 2.8 + g.dirX * 0.8, gpy - 2 + g.dirY * 0.8, 1.2, 0, Math.PI * 2);
          ctx.fill();
          return;
        }

        const isFright = frightenTimer > 0;
        const flash = frightenTimer < 120 && Math.floor(Date.now() / 150) % 2 === 0;
        ctx.fillStyle = isFright ? (flash ? "#ffffff" : "#1e3a8a") : g.color;

        // Corpo e topo arredondado
        ctx.beginPath();
        ctx.arc(gpx, gpy - 1, rad, Math.PI, 0, false);
        // Pernas onduladas clássicas
        ctx.lineTo(gpx + rad, gpy + rad);
        ctx.lineTo(gpx + rad * 0.33, gpy + rad * 0.6);
        ctx.lineTo(gpx - rad * 0.33, gpy + rad);
        ctx.lineTo(gpx - rad, gpy + rad * 0.6);
        ctx.closePath();
        ctx.fill();

        // Olhos brancos
        ctx.fillStyle = "#ffffff";
        ctx.beginPath();
        ctx.arc(gpx - 2.8, gpy - 2, 2.2, 0, Math.PI * 2);
        ctx.arc(gpx + 2.8, gpy - 2, 2.2, 0, Math.PI * 2);
        ctx.fill();

        // Pupilas
        ctx.fillStyle = isFright ? "#ff0000" : "#0d1b46";
        const eyeOffset = 0.8;
        ctx.beginPath();
        ctx.arc(gpx - 2.8 + g.dirX * eyeOffset, gpy - 2 + g.dirY * eyeOffset, 1.2, 0, Math.PI * 2);
        ctx.arc(gpx + 2.8 + g.dirX * eyeOffset, gpy - 2 + g.dirY * eyeOffset, 1.2, 0, Math.PI * 2);
        ctx.fill();
      });
    }

    function loop() {
      update();
      draw();
      animId = requestAnimationFrame(loop);
    }

    function fecharJogo() {
      cancelAnimationFrame(animId);
      window.removeEventListener("keydown", handleKeyDown);
      modal.remove();
    }

    closeBtn.onclick = fecharJogo;
    modal.onclick = (e) => {
      if (e.target === modal) fecharJogo();
    };

    window.addEventListener("keydown", handleKeyDown);

    setupGame();
    animId = requestAnimationFrame(loop);
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

  function formatMarkdownToHtml(text) {
    if (!text) return "";
    return text
      .replace(/^### (.*$)/gim, "<strong>$1</strong>")
      .replace(/^## (.*$)/gim, "<strong>$1</strong>")
      .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
      .replace(/\*(.*?)\*/g, "<em>$1</em>")
      .replace(/`([^`]+)`/g, "<code>$1</code>")
      .replace(/^\s*[\*\-]\s+(.*)$/gim, "• $1")
      .replace(/\n\n/g, "<br><br>")
      .replace(/\n/g, "<br>");
  }

  // Histórico de mensagens para memória contextual da IA Gemini
  const chatHistory = [];

  async function fetchGeminiAI(userPrompt) {
    if (!CONFIG.geminiApiKey) return null;

    chatHistory.push({
      role: "user",
      parts: [{ text: userPrompt }]
    });

    if (chatHistory.length > 12) {
      chatHistory.splice(0, chatHistory.length - 12);
    }

    const payload = {
      systemInstruction: {
        parts: [{
          text: `Você é a "Alexverso AI — Órbita", a inteligência artificial oficial e assistente geek do site Alexverso, criado pelo Alex.
Suas diretrizes:
- Responda SEMPRE com precisão, conhecimento aprofundado, inteligência e entusiasmo sobre cultura pop (filmes, séries, animes, mangás, games, Marvel, DC, Star Wars, ficção científica, etc.).
- Nunca dê informações falsas ou confusas sobre enredos, personagens ou lançamentos.
- Responda de forma natural e direta à dúvida do usuário: NÃO fique se reapresentando ("Olá, eu sou a Órbita...") em todas as mensagens. Vá direto ao ponto com simpatia e carisma.
- Formate respostas usando negrito (**texto**) e tópicos de forma leve e agradável para balões de chat. Evite textões cansativos.
- Você conhece o site Alexverso (seções Início, Animes, Games, Filmes & Séries e um Cofre Secreto de cinema). NUNCA revele a senha secreta de surpresa; apenas se o usuário perguntar expressamente por segredos do site, dê uma pista sutil sobre a palavra élfica para 'amigo'.`
        }]
      },
      contents: chatHistory
    };

    // Modelos com fallback automático caso um sofra instabilidade temporária
    const modelsToTry = [CONFIG.geminiModel, "gemini-3.5-flash-lite"];

    for (const model of modelsToTry) {
      const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${CONFIG.geminiApiKey}`;

      try {
        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), 12000);

        const response = await fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
          signal: controller.signal
        });

        clearTimeout(timeout);

        if (!response.ok) {
          console.warn(`[Alexverso AI] Modelo ${model} retornou status ${response.status}. Tentando próximo...`);
          continue;
        }

        const data = await response.json();
        const candidate = data.candidates && data.candidates[0];
        const textResponse = candidate && candidate.content && candidate.content.parts && candidate.content.parts[0] && candidate.content.parts[0].text;

        if (textResponse) {
          chatHistory.push({
            role: "model",
            parts: [{ text: textResponse }]
          });
          return textResponse;
        }
      } catch (err) {
        console.warn(`[Alexverso AI] Erro ao consultar ${model}:`, err);
      }
    }

    // Se nenhum modelo respondeu, desfaz o último prompt do histórico para não desbalancear
    chatHistory.pop();
    return null;
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
                Gemini AI Conectado
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
              <div class="ga-welcome-label">ALEXVERSO AI // GEMINI POWERED</div>

              Olá! Seja bem-vindo ao <strong>Alexverso</strong>.

              Sou sua inteligência artificial oficial turbinada com o <strong>Google Gemini</strong> e estou pronta para responder qualquer pergunta sobre o multiverso geek com você.

              Podemos conversar livremente sobre filmes, séries, animes, games, teorias, ficção científica e muito mais.

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

      // Formata Markdown para HTML
      const rawAnswer = typeof response.answer === "string" ? response.answer : "";
      const formattedAnswer = formatMarkdownToHtml(rawAnswer);
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
    // PROCESSAMENTO COM GEMINI AI
    // ------------------------------------------------------------------------

    let isProcessing = false;

    async function handleUserSubmit(text) {
      const trimmed = text.trim();

      if (!trimmed || isProcessing) return;

      // 1. Easter Eggs (Rick Astley, Pac-Man, Anonymous, Matrix, etc.)
      if (verificarEasterEgg(trimmed)) {
        input.value = "";
        return;
      }

      // 2. Comando secreto Mellon (Cofre de Filmes)
      const cleanText = normalizeText(trimmed);
      if (/\bmellon\b/.test(cleanText)) {
        isProcessing = true;
        input.disabled = true;
        addUserMessage(trimmed);
        input.value = "";
        const typing = showTyping();
        setTimeout(() => {
          typing.remove();
          addBotMessage(getGeekResponse(trimmed));
          isProcessing = false;
          input.disabled = false;
          input.focus();
        }, 600);
        return;
      }

      isProcessing = true;
      input.disabled = true;

      addUserMessage(trimmed);
      input.value = "";

      const typing = showTyping();

      try {
        // 3. Consulta em tempo real a IA Gemini
        const aiAnswer = await fetchGeminiAI(trimmed);

        typing.remove();

        if (aiAnswer) {
          addBotMessage({
            answer: aiAnswer
          });
        } else {
          // Fallback para a base de conhecimento local
          addBotMessage(getGeekResponse(trimmed));
        }
      } catch (err) {
        // Fallback offline caso esteja sem internet ou ocorra erro
        typing.remove();
        addBotMessage(getGeekResponse(trimmed));
      } finally {
        isProcessing = false;
        input.disabled = false;
        input.focus();
      }
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

      chatHistory.length = 0; // Limpa a memória de contexto da IA Gemini
      messages.innerHTML = "";

      addBotMessage({
        answer: `A órbita foi reiniciada! 🔄

Estamos começando uma nova exploração pelo universo Alexverso com a **Alexverso AI (Gemini)**.

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