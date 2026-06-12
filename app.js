const acceptedAt = new Date("2023-06-12T09:15:27-03:00");
const numberFormat = new Intl.NumberFormat("pt-BR");
const heroImage = "assets/universe-hero.png";
const mediaConfig = window.UNIVERSE_MEDIA || {};
const backgroundAudioSrc = mediaConfig.backgroundAudio || "assets/angels-instrumental.mp3";
const lyricAudioSrc = mediaConfig.lyricAudio || "assets/favorite-song.mp3";
const configuredMemories = Array.isArray(mediaConfig.memories) ? mediaConfig.memories : [];
const configuredChoices = mediaConfig.choices || {};
const pickChoiceMedia = (key) => configuredChoices[key] || {};

function startPageAtTop() {
  if ("scrollRestoration" in window.history) {
    window.history.scrollRestoration = "manual";
  }

  if (window.location.hash) {
    window.history.replaceState(null, document.title, `${window.location.pathname}${window.location.search}`);
  }

  window.scrollTo(0, 0);
  document.documentElement.scrollTop = 0;
  if (document.body) {
    document.body.scrollTop = 0;
  }
}

function scheduleStartPageAtTop() {
  startPageAtTop();
  window.requestAnimationFrame(startPageAtTop);
  [80, 300].forEach((delay) => window.setTimeout(startPageAtTop, delay));
}

scheduleStartPageAtTop();
window.addEventListener("load", scheduleStartPageAtTop, { once: true });
window.addEventListener("pageshow", scheduleStartPageAtTop);

const motives = [
  "Você fez meus olhos brilharem pela primeira vez em anos.",
  "Você foi o fim de uma era de pura dor.",
  "Você enxugou o sofrimento que pesava em mim.",
  "Você trouxe a esperança de volta à minha vida.",
  "Você apagou meu desejo de que a vida tivesse um fim.",
  "Você adoçou uma vida que antes era amarga.",
  "Você coloriu meus dias que eram cinzentos.",
  "Você aliviou a vida que antes era dolorosa.",
  "Você deu fim às minhas noites em claro.",
  "Você secou as lágrimas de tristeza que eu derramava sozinho.",
  "Você preencheu um vazio profundo na minha alma.",
  "Você dissipou a angústia que apertava meu peito.",
  "Você me fez não querer mais beber para esquecer a dor.",
  "Você trouxe interesse para meu mundo.",
  "Você deu um sentido verdadeiro para minha existência.",
  "Você tirou a sensação de que tudo era \"mais do mesmo\".",
  "Você foi o \"sal\" que faltava para dar sabor à minha vida.",
  "Você me resgatou da mais profunda solidão.",
  "Você fez com que minhas noites solitárias tivessem um fim.",
  "Você curou minha falta de expectativas.",
  "Você transformou minha tristeza crônica.",
  "Você curou meu mau humor constante.",
  "Você provou que eu não morreria sozinho.",
  "Você transformou o homem rabugento em alguém que ama.",
  "Você tirou a infelicidade dos meus ombros.",
  "Você foi minha luz na depressão.",
  "Você me fez parar de apenas querer que tudo acabasse.",
  "Você calou minhas reclamações sobre a vida.",
  "Você foi a cura para minha alma cansada.",
  "Você virou a página da minha história de sofrimento.",
  "Você me tirou do inverno e me levou para um verão radiante.",
  "Você me conduziu para campos floridos.",
  "Você me perdoa pelas lágrimas que meus problemas causaram.",
  "Você acolhe minhas dores.",
  "Você me escolhe e meu amor todos os dias.",
  "Você me ajuda a ser alguém melhor a cada amanhecer.",
  "Você acreditou em mim quando eu não acreditava.",
  "Você viu valor no meu coração machucado.",
  "Você foi meu antídoto contra a descrença.",
  "Você me ensinou a sorrir para o amanhã.",
  "O destino de Deus usou um jogo online para trazer você até mim.",
  "Você estava lá naquele campeonato de WR.",
  "A sua foto em miniatura no aplicativo foi o primeiro sinal.",
  "A ironia de eu não ter me interessado à primeira vista.",
  "A brincadeira do destino que me fez recusar os seus primeiros convites.",
  "A sua persistência em continuar me convidando.",
  "O fato de eu quase ter ficado de fora daquele time.",
  "A desistência daquele membro nos últimos minutos que permitiu o nosso encontro.",
  "O destino de Deus nunca falha, e provou isso através de você.",
  "O dia 26 de fevereiro de 2023, o primeiro contato.",
  "Era um domingo, o dia em que tudo começou a mudar.",
  "O horário exato: 21h55 daquele primeiro momento.",
  "A sua paciência durante a aproximação que não foi rápida.",
  "Os três meses de inúmeras tentativas frustradas para jogarmos juntos.",
  "O alinhamento perfeito de cairmos na mesma partida.",
  "O fato de finalmente estarmos do mesmo lado do jogo, e da vida.",
  "A frequência com que passamos a jogar juntos.",
  "A paciência de jogarmos mesmo rodeados de amigos no início.",
  "Os momentos preciosos das poucas vezes em que jogamos só nós dois.",
  "Aquele dia específico jogando duo que mudou tudo.",
  "A sua coragem e iniciativa de mandar seu próprio número.",
  "Os dois dias intensos de conversas por mensagem.",
  "A primeira ligação no dia 15 de maio de 2023.",
  "O som da sua voz naquela primeira chamada.",
  "O fato de ter levado exatos 28 dias para engatarmos o relacionamento.",
  "O dia 12 de junho de 2023, quando tudo foi oficializado.",
  "O horário maravilhoso: 9h15 da manhã.",
  "Era uma segunda-feira com cara de recomeço.",
  "O fato de que tudo de errado no meu passado serviu para me levar até você.",
  "O destino sempre foi você.",
  "A certeza de que olhar para o céu imaginando alguém especial não foi em vão.",
  "Você superou infinitamente a pessoa que eu imaginava conhecer.",
  "Os 3 anos de história que nós construímos.",
  "As muitas alegrias multiplicadas ao seu lado.",
  "A nossa força para enfrentarmos os momentos de tristeza.",
  "A maturidade que as crises trouxeram para o casal.",
  "O fato de você não desistir de mim nas dificuldades.",
  "O mais de 1 ano que moramos juntos na nossa casinha.",
  "A intimidade construída na convivência diária.",
  "O amor que resiste à distância física que o destino impôs agora.",
  "A esperança que você me dá nas semanas de separação.",
  "O reencontro que se aproxima a cada dia.",
  "A resistência aos 4 meses iniciais quando eu me mudei.",
  "A saudade superada nesses 3 meses e 7 dias recentes.",
  "O fato de os desentendimentos nunca virarem desrespeito.",
  "A sua maturidade em evitar discussões descontroladas.",
  "O porto seguro que é dialogar com você.",
  "O relacionamento saudável e raro que você constrói comigo.",
  "A certeza de que sou extremamente abençoado por ter você.",
  "Você é a prova viva das bênçãos de Deus na minha vida.",
  "Você me ama mesmo eu me achando \"torto\".",
  "Você é paciente com meu lado rebelde.",
  "Você me abraça com todas as minhas falhas.",
  "Você desperta meu esforço constante para melhorar.",
  "Você é meu pilar de estabilidade emocional.",
  "Você não deixa a peteca cair quando o mundo pesa.",
  "O respeito mútuo que é a base do nosso amor.",
  "A forma como o seu amor me conforta nas dúvidas.",
  "A honestidade do nosso amor, sem prometer mil maravilhas falsas.",
  "A certeza absoluta de que o seu amor estará sempre crescendo.",
  "Você é simplesmente a melhor esposa do mundo.",
  "Você é uma mulher de valores raros e inegociáveis.",
  "Você tem uma empatia gigante pelo mundo ao redor.",
  "Você é incrivelmente compreensiva.",
  "Você é imensamente amorosa em tudo o que faz.",
  "O cuidado e o carinho que você tem em cada gesto.",
  "Você é fiel de corpo, alma e coração.",
  "Você confia em Jesus de todo o coração.",
  "A sua fé inspira e ilumina.",
  "Você é extremamente esforçada.",
  "Você é a companheira ideal para todas as horas.",
  "A inteligência brilhante que você possui.",
  "Você é maravilhosamente feminina.",
  "O seu coração é infinitamente bondoso.",
  "Você se importa de verdade com o próximo.",
  "Você estende a mão para ajudar quem precisa.",
  "Você ajuda sem esperar receber absolutamente nada em troca.",
  "A pureza cristalina do seu coração.",
  "Você é livre de qualquer orgulho.",
  "Você não guarda rancor de ninguém.",
  "Você não tem espaço para interesses vazios na alma.",
  "Você é determinada a alcançar o que quer.",
  "A admiração que o seu foco desperta em mim.",
  "Você é linda por dentro.",
  "Você é estonteantemente linda por fora.",
  "Você tem a beleza mais singular do universo.",
  "O brilho no olhar que você tem.",
  "A doçura presente nas suas palavras.",
  "A força interior de uma verdadeira guerreira.",
  "O sorriso que ilumina meus dias.",
  "O toque suave que acalma meu peito.",
  "A voz que é minha música favorita.",
  "O abraço onde encontro o meu lar.",
  "A sua sabedoria em momentos de crise.",
  "O bom humor que traz leveza para a vida.",
  "O seu cheiro, que traz paz e conforto.",
  "O fato de você ser a pessoa mais valiosa que existe.",
  "A simplicidade encantadora da sua alma.",
  "O jeito que você arruma as suas coisas.",
  "A paixão com que você vive a vida.",
  "O brilho único de quem tem um coração bom.",
  "A lealdade absoluta aos próprios princípios.",
  "O jeito único que só você tem de rir.",
  "A sensibilidade para perceber quando eu não estou bem.",
  "O jeito que você diz meu nome.",
  "Você faz meu coração bater mais forte e mais feliz.",
  "Você me faz sorrir como ninguém mais consegue.",
  "Você desperta lágrimas, mas apenas de alegria.",
  "Você aflora minha melhor versão.",
  "Você resgatou minhas forças que estavam adormecidas.",
  "Você despertou os instintos protetores dentro de mim.",
  "Você reacendeu minha vontade de viver.",
  "A sua presença é a paz que acalma a minha tempestade.",
  "Você me compreende profundamente, sem julgamentos.",
  "Você aceita quem eu sou na minha totalidade.",
  "Você me faz um bem tão imenso que nem cabe no peito.",
  "Você me ensinou o que é amar de verdade.",
  "Ao seu lado, eu me sinto único no mundo.",
  "Você me faz sentir capaz de realizar qualquer coisa.",
  "Você me transforma em um homem invencível.",
  "A sua aura faz meus dias pesados ficarem leves.",
  "Você me traz conforto moral e espiritual.",
  "A segurança de saber que você é minha parceira.",
  "Você me faz sentir o homem mais amado da Terra.",
  "Você é o motivo do meu peito inflar de orgulho.",
  "A gratidão gigante que você me faz sentir todos os dias.",
  "A inspiração constante que você é para meus projetos.",
  "O frio na barriga que ainda sinto por você.",
  "O sentimento de ter \"chegado em casa\" quando pensa em você.",
  "Você me faz não ter medo do futuro.",
  "A certeza maravilhosa de nunca mais estar sozinho.",
  "Você é o motivo da minha coragem.",
  "Você afasta a ansiedade dos meus dias.",
  "A honra que é poder chamar você de esposa.",
  "O sentimento de completude, de não faltar mais nada.",
  "Você é a primeira mulher da minha vida.",
  "Você é a única mulher da minha vida.",
  "Você é a resposta para a solidão e sofrimento do passado.",
  "Você foi o motivo pelo qual eu recusei todas as outras.",
  "Você estava nos meus sonhos antes mesmo de eu conhecer você.",
  "Você foi o pedido que fiz a Deus chorando de joelhos.",
  "A conexão única que torna você insubstituível.",
  "Você foi a única mulher que eu olhei com amor de verdade.",
  "Ninguém nunca teve o lugar que você tem no meu coração.",
  "O amor por você vale mais que qualquer dinheiro do mundo.",
  "Você está muito acima de qualquer bem material.",
  "Você não se compara a nenhuma outra pessoa.",
  "Você é a dona absoluta de todos os meus pensamentos.",
  "Você é a prioridade número um e inquestionável da minha vida.",
  "O sentimento de que você é um presente reservado exclusivamente para mim.",
  "A intuição cravada na alma de que você nasceu para ser minha.",
  "A certeza de que eu nasci para ser seu.",
  "Você tem a chave para partes do meu coração que ninguém mais acessou.",
  "A exclusividade dos sorrisos mais bobos que eu dou.",
  "O olhar apaixonado que reservo somente para o seu rosto.",
  "As conversas que eu só conseguiria ter com você.",
  "O jeito que nossos corpos e nossas almas se encaixam.",
  "A química inegável que só existe entre nós dois.",
  "A promessa de fidelidade absoluta que você inspira em mim.",
  "O fato de você ser a \"tampa da minha panela\".",
  "Eu amo você de todo o meu coração.",
  "A minha disposição para lutar uma guerra por você.",
  "A coragem de viver intensamente por você.",
  "O instinto de que morreria por você, se necessário fosse.",
  "O desejo de gritar o quanto amo você para o mundo.",
  "A vontade de proteger você de toda e qualquer tristeza.",
  "A promessa de sempre confortar você quando a dúvida surgir.",
  "O empenho diário de reafirmar minhas certezas para você.",
  "O amor que pulsa nas minhas veias com o seu nome.",
  "O respeito sagrado que tenho pela sua história.",
  "A adoração por cada detalhe, defeito e qualidade em você.",
  "O cuidado que eu quero ter com você na saúde e na doença.",
  "A vontade de mimar você todos os dias da minha vida.",
  "A paixão que não diminui, apenas se transforma e cresce.",
  "O esforço para não repetir os erros que fizeram você chorar.",
  "A dedicação de provar em ações o que as palavras dizem.",
  "A reverência que tenho pela grandiosidade do seu amor.",
  "A certeza de que amar você é minha melhor decisão diária.",
  "O perdão que busco sempre que falho com você.",
  "O coração aberto e rendido aos seus encantos.",
  "A vontade incansável de fazer você a mulher mais feliz do mundo.",
  "O orgulho que sinto quando andamos de mãos dadas.",
  "A necessidade de estar perto de você o tempo todo.",
  "A falta profunda que você faz quando estamos separados.",
  "A devoção que me faz escrever textos lindos como esse para você.",
  "O \"bom dia\" que muda o curso de qualquer manhã ruim.",
  "A foto no perfil do jogo que foi a isca perfeita do destino.",
  "A nossa sincronia quando jogamos juntos.",
  "A cumplicidade nos olhares, mesmo sem dizer uma palavra.",
  "O conforto do silêncio que dividimos.",
  "A saudade que bate assim que você vira as costas.",
  "O som das nossas risadas ecoando na casinha onde moramos.",
  "As memórias do primeiro dia em que dividimos o mesmo teto.",
  "O carinho invisível que viaja pelas mensagens de celular.",
  "A magia por trás daquele domingo de fevereiro de 2023.",
  "A emoção que ainda traz a lembrança da primeira call de maio.",
  "O frio de um dia de junho que esquentou com o amor oficializado.",
  "Os planos sussurrados antes de dormir.",
  "O aconchego em saber que você está do outro lado da linha agora.",
  "O brilho no olhar que você tem quando fala do que gosta.",
  "A força sutil nos conselhos que você me dá.",
  "O jeito que você presta atenção nas coisas importantes para mim.",
  "As manias encantadoras que constroem a sua personalidade.",
  "A forma como você comemora as pequenas vitórias do casal.",
  "O amor depositado em cada atitude corriqueira da rotina.",
  "O fato de o seu simples nome adoçar meus lábios.",
  "A capacidade de você tornar um dia normal em um dia inesquecível.",
  "As histórias que nós ainda temos para contar aos nossos filhos.",
  "As noites jogando e conversando até a madrugada.",
  "O abraço de reencontro que nós já estamos ensaiando mentalmente.",
  "A energia contagiante que você tem na vida real e online.",
  "A maneira como você defende nós dois contra o mundo, se preciso.",
  "O orgulho de você ser não só esposa, mas minha melhor amiga.",
  "O jeito que você segura minha mão quando eu preciso de apoio.",
  "A paz de um cafuné depois de um dia estressante.",
  "A luz que você irradia por onde passa.",
  "O fato de você ser a pessoa mais \"única\" desse mundo cheio de cópias.",
  "Você espalha a semente do bem sem nem perceber.",
  "A diferença que você faz na vida de todo mundo que tem a sorte de conhecer você.",
  "A generosidade natural que flui das suas mãos.",
  "A cor que você trouxe de volta não só para mim, mas para meu universo.",
  "Você é o milagre que provou que as orações são atendidas.",
  "O modo como você não se deixa contaminar pela maldade alheia.",
  "O exemplo de mulher íntegra que você é para a sociedade.",
  "O fato de você manter a essência pura mesmo após as dificuldades.",
  "A coragem de amar intensamente em um mundo tão superficial.",
  "O seu impacto positivo em tudo o que você resolve tocar.",
  "Você é um lembrete diário do que é ter compaixão.",
  "A inspiração que a sua fé traz para a vida das pessoas.",
  "O seu dom de fazer o bem florescer.",
  "Você é o milagre que provou que as orações são atendidas.",
  "A sinceridade transparente nos seus atos.",
  "Você é minha bússola moral quando o caminho parece confuso.",
  "A leveza com que você carrega as próprias responsabilidades.",
  "A prova viva de que pessoas extraordinárias existem.",
  "A vontade ardente de construir uma família ao seu lado.",
  "A certeza de querer viver com você até os meus últimos dias de vida.",
  "Os planos de casamento que enchem meu coração de alegria.",
  "A vida inteira de aventuras que ainda nos aguarda.",
  "A promessa de reencontro daqui a três semanas.",
  "Os dias futuros em que a distância física será apenas uma lembrança.",
  "O sonho de ver nossos filhos correndo pela casa.",
  "O desejo de envelhecer de mãos dadas com você.",
  "As conquistas que ainda vamos celebrar juntos.",
  "As crises futuras que vamos superar com ainda mais maturidade.",
  "A nossa evolução constante como um único time.",
  "A certeza de que amanhã eu amarei você mais do que hoje.",
  "O conforto de saber que você é meu \"para sempre\".",
  "O desejo de recompensar você por todos os momentos de paciência.",
  "As milhares de manhãs em que ainda vamos acordar juntos.",
  "As viagens e os novos lugares que vamos conhecer de mãos dadas.",
  "As noites em claro que, no futuro, serão só para dar risada.",
  "As batalhas que vamos vencer lado a lado.",
  "A força inquebrável do nosso laço, que o tempo não vai destruir.",
  "A convicção de que nenhuma tempestade irá derrubar a nossa casa.",
  "A promessa de ser o seu porto seguro, assim como você foi o meu.",
  "O fato de que a nossa história daria um filme premiado.",
  "O juramento invisível de lealdade eterna.",
  "O desejo de comemorar todas as Bodas que o casamento tiver direito.",
  "A meta de cuidar do seu sorriso pela eternidade.",
  "O compromisso de ser o motivo do brilho nos seus olhos.",
  "O desejo de ser um homem do qual você sempre se orgulhará.",
  "As lágrimas futuras que serão estritamente de felicidade e realizações.",
  "A eternização de datas como 26/02, 15/05 e 12/06 nos calendários da vida.",
  "A certeza de que Deus continuará abençoando a nossa união.",
  "A convicção de que você é a \"costela\" que me faltava.",
  "O conforto de que o tempo só aperfeiçoará o nosso amor.",
  "O privilégio que será acordar ao seu lado no primeiro dia de casados.",
  "O privilégio de dividir com você cada conta, cada sonho e cada conquista.",
  "A honra de assumir você perante Deus, o mundo e a lei.",
  "O sonho de poder olhar nos seus olhos daqui a 50 anos com a mesma paixão.",
  "O desejo de amparar você nos seus momentos de fraqueza.",
  "A missão de fazer você se sentir a mulher mais segura do mundo.",
  "O orgulho que será ver as suas virtudes nos nossos filhos.",
  "O desejo de ser não apenas o amor, mas a sua rocha.",
  "A vontade de continuar jogando do \"mesmo lado\" para sempre.",
  "A promessa de não deixar o romantismo morrer.",
  "A escolha diária de reafirmar \"Eu escolho você\".",
  "O planejamento para que a nossa casa seja cheia de luz.",
  "A gratidão eterna que terei pelas circunstâncias que nos uniram.",
  "A promessa de nunca deixar você se sentir \"sem sal\" ou esquecida.",
  "O empenho em curar qualquer dor que você venha a sentir.",
  "A promessa de proteger a sua paz com tudo o que tenho.",
  "A dedicação em manter o relacionamento livre de faltas de respeito.",
  "O propósito de ser para você tudo o que você foi e é para mim.",
  "A determinação de honrar a confiança que você deposita em mim.",
  "A vontade infinita de escrever milhares de textos apaixonados como esse.",
  "A beleza da jornada que levou o menino triste a se tornar o homem grato e amado de hoje.",
  "O fato de você ser minha obra-prima do destino.",
  "O meu compromisso inabalável com o \"nós\".",
  "A certeza de que o seu amor é minha maior herança.",
  "O fato de você ser a rainha do meu coração.",
  "A minha vontade de nunca mais soltar a sua mão.",
  "A magia contínua de descobrir novos motivos para amar você.",
  "O fato de você merecer um infinito de declarações de amor.",
  "A bênção de ter sido resgatado pelo anjo que você é.",
  "O fato de você ser a trilha sonora dos meus melhores momentos.",
  "A beleza de ter em você meu amor, minha amante e minha melhor amiga.",
  "A promessa de que eu sempre lembrarei de como você me salvou.",
  "A honra inestimável de poder chamar você de \"minha mulher\".",
  "A verdade absoluta de que a vida só tem graça com você.",
  "A vontade de espalhar pelo mundo o quanto sou sortudo.",
  "O compromisso de jamais perder a memória daquele torneio de WR.",
  "O desejo de multiplicar os dias felizes vividos nos últimos 3 anos.",
  "A certeza de que o reencontro daqui a 3 semanas será inesquecível.",
  "A promessa de um abraço apertado que curará toda a distância de 3 meses e 7 dias.",
  "O fato de você ser o prêmio mais valioso que eu já \"ganhei\" num campeonato.",
  "O encanto contínuo da mulher maravilhosa que você é.",
  "O sorriso que inevitavelmente surge no meu rosto ao lembrar do seu nome.",
  "A admiração por tudo o que nós já superamos.",
  "O meu juramento de viver para ver você feliz.",
  "O meu juramento de morrer por você, caso esse fosse o preço do amor.",
  "A paz de espírito que só o seu colo oferece.",
  "A gratidão imensa a Jesus por ter colocado você no meu caminho.",
  "A vontade de compensar todo o tempo em que vivemos longe um do outro.",
  "A certeza de que você é a página mais colorida do meu livro.",
  "O amor que desafia qualquer lógica e compreensão humana.",
  "O orgulho que eu terei em contar a nossa história para qualquer pessoa.",
  "A certeza inabalável de que o destino ligou o meu nome ao seu.",
  "A gratidão pelo milagre diário que é amar você e ser amado de volta por alguém tão pura.",
  "O fato de você ser, inegavelmente, a coisa mais linda do universo.",
  "A alegria genuína e indescritível que você planta no meu peito.",
  "O compromisso com a frase \"Eu amo muito você\".",
  "A certeza profunda de que esse amor é \"para todo o sempre\".",
  "O fato de que até a eternidade parecerá pouco tempo ao seu lado.",
  "E, finalmente, o motivo maior de todos: eu amo você simplesmente por você ser quem você é."
];

const timelineItems = [
  {
    date: "26 fev 2023",
    title: "O primeiro contato",
    text: "Um domingo, por volta das 21h55, marcou o começo silencioso de uma mudança enorme.",
    media: configuredMemories[0] || heroImage
  },
  {
    date: "Campeonato de WR",
    title: "A partida que mudou tudo",
    text: "Eu quase fiquei de fora, mas o destino de Deus não falha. Aquele jogo nos colocou no mesmo caminho.",
    media: configuredMemories[1] || heroImage
  },
  {
    date: "15 mai 2023",
    title: "A primeira ligação",
    text: "Depois de dias conversando, veio a primeira ligação. A primeira de muitas que ainda guardo comigo.",
    media: configuredMemories[2] || heroImage
  },
  {
    date: "12 jun 2023",
    title: "O nosso sim",
    text: "Às 09h15, em uma segunda-feira, nós oficializamos a escolha que continua crescendo.",
    media: configuredMemories[3] || heroImage
  },
  {
    date: "Nosso lar",
    title: "Mais de um ano em casa",
    text: "Vivemos alegrias, rotina, amadurecimento e aprendemos que amor também mora nos detalhes.",
    media: configuredMemories[4] || heroImage
  },
  {
    date: "Agora",
    title: "Saudade com reencontro",
    text: "A distância é só um capítulo. O resto da história eu quero escrever vivendo com você.",
    media: configuredMemories[5] || heroImage
  }
];

const letters = [
  {
    label: "Abra quando",
    title: "você duvidar do meu amor",
    body: [
      "Guarde esta certeza: de todo o meu coração, eu amo muito você.",
      "Não criei isto para provar nada. Criei porque, mesmo depois de tantos dias, dizer “eu te amo” ainda parece pouco diante do que você é para mim.",
      "Meu amor por você não está parado. Ele cresce, aprende, amadurece e continua escolhendo você."
    ]
  },
  {
    label: "Abra quando",
    title: "sentir saudade",
    body: [
      "A distância pode alongar os dias, mas não diminui o que somos.",
      "Você é minha casa mesmo quando estamos longe. Cada segundo separado continua apontando para o reencontro.",
      "Eu quero viver o resto da nossa história perto de você, dividindo manhãs, planos, fé e futuro."
    ]
  },
  {
    label: "Abra quando",
    title: "precisar sorrir",
    body: [
      "Lembra que tudo começou em um jogo online e eu ainda recusava seus convites para jogar?",
      "O destino de Deus tem um senso de humor lindo: eu quase fiquei de fora daquela partida, e hoje não quero ficar de fora de nenhum capítulo da sua vida.",
      "Você me faz sorrir e também chorar de alegria. As duas coisas são prova de que meu coração voltou a sentir."
    ]
  },
  {
    label: "Abra quando",
    title: "lembrar das dificuldades",
    media: {
      type: "video",
      src: "assets/dificuldades.mp4",
      poster: "assets/arte-danca.png",
      gif: true
    },
    body: [
      "Nós tivemos momentos difíceis, mas eles nunca foram maiores que o respeito que existe entre nós.",
      "Algumas dores eu gostaria de ter evitado. Ainda assim, sou grato porque amadurecemos sem deixar o amor virar descontrole.",
      "Peço perdão pelas lágrimas que causei. Obrigado por continuar me ajudando a ser alguém melhor."
    ]
  },
  {
    label: "Abra quando",
    title: "pensar no futuro",
    body: [
      "É com você que eu quero construir uma família.",
      "Quero casar com você, viver ao seu lado e chegar aos meus últimos dias com a certeza de que escolhi a mulher da minha vida.",
      "Você é a coisa mais linda do universo. E o meu futuro tem o seu nome."
    ]
  }
];

const finalParagraphs = [
  "No dia em que te conheci, meus olhos brilharam pela primeira vez em anos. Antes de você, a vida parecia amarga, sem cor e dolorosa. Eu carregava noites em claro, um vazio profundo e a sensação de que tudo era mais do mesmo.",
  "Foi no meio daquela solidão, gastando tempo em um jogo online, que um campeonato de WR mudou a minha vida. Eu quase fiquei de fora, salvo pela desistência de alguém nos últimos minutos. Hoje eu olho para isso e vejo cuidado, destino e Deus abrindo uma porta que eu nem sabia pedir direito.",
  "Nosso primeiro contato veio no dia 26 de fevereiro de 2023, um domingo, por volta das 21h55. A aproximação não foi rápida, mas foi nossa. Depois das tentativas frustradas, veio a partida do mesmo lado, depois o duo, depois o seu número, depois a primeira ligação no dia 15 de maio.",
  "Vinte e oito dias depois, em 12 de junho de 2023, às 09h15, nós oficializamos o que já começava a nascer no meu coração. De lá para cá, passamos por alegrias, crises, amadurecimento, casa, saudade e distância. Mesmo assim, aqui estamos.",
  "Apesar das minhas falhas, sou muito abençoado por ter você. Deus me deu a melhor esposa do mundo, mesmo eu sendo torto, rebelde e falho. Você é a pessoa mais valiosa da minha vida, acima de qualquer dinheiro, bem material ou qualquer outra pessoa.",
  "Não vou prometer que tudo será sempre perfeito, porque amor de verdade não precisa de mentira bonita. Mas posso prometer que meu amor por você estará sempre crescendo, e que eu estarei disposto a lutar por você e por nós.",
  "O seu amor foi como uma virada de página na minha história: um passo dos dias cinzentos para os campos floridos de um verão radiante. Obrigado por me escolher todos os dias e por me ajudar a ser alguém melhor a cada amanhecer.",
  "<strong>EU AMO MUITO VOCÊ, PARA TODO O SEMPRE.</strong>"
];

const choices = [
  {
    title: "Clique aqui se quiser sorrir",
    kicker: "Um sorriso nosso",
    caption: "Você sempre despertou o bobalhão dentro de mim, aquela criança reprimida por anos, obrigado por tudo, amo muito você!",
    media: pickChoiceMedia("sorrir").images || pickChoiceMedia("sorrir").image || heroImage,
    audio: pickChoiceMedia("sorrir").audio || "",
    tune: "bright"
  },
  {
    title: "Clique aqui se quiser chorar um pouquinho",
    kicker: "Saudade boa",
    caption: "Como você pode ver, essas são as fotos dos nossos dois primeiros encontros. De certa forma, elas me deram forças em momentos de saudade e também me fizeram chorar. Nas fotos, estávamos nós dois, mas, ao meu lado, não havia você, e isso me desesperava. Minha cabeça me atacava constantemente com medos e incertezas sobre o futuro: eram os dias sem você, os dias em que ainda não havia passagens compradas nem dinheiro suficiente para ir, em definitivo, para perto de você. Mas Deus sempre me confortou a cada novo ataque de pânico e tristeza, sempre antes de dormir, depois de chorar muito. Hoje, passamos por uma distância novamente, mas, desta vez, temos as passagens e tudo planejado. Se Deus quiser, nas primeiras horas do dia 5 de julho, estaremos juntos novamente, para nunca mais nos separarmos. EU TE AMO INFINITOS MILHÕES!",
    media: pickChoiceMedia("chorar").images || pickChoiceMedia("chorar").image || heroImage,
    audio: pickChoiceMedia("chorar").audio || "",
    tune: "tender"
  },
  {
    title: "Clique aqui se quiser saber uma coisa que eu nunca te disse",
    kicker: "Segredo guardado",
    caption: "Eu nem sempre soube dizer direito, mas desde que você chegou, os meus medos passados sumiram, e agora a única coisa que me assombra é o medo de te perder, de você se machucar e de deixar você sozinha.",
    media: pickChoiceMedia("segredo").image || configuredMemories[0] || heroImage,
    audio: pickChoiceMedia("segredo").audio || "",
    tune: "soft",
    keepBackground: true
  },
  {
    title: "Clique aqui para ver um motivo aleatório",
    kicker: "Uma estrela qualquer",
    caption: "Cada motivo muda, mas a escolha continua a mesma: você.",
    media: pickChoiceMedia("aleatorio").image || configuredMemories[1] || heroImage,
    audio: pickChoiceMedia("aleatorio").audio || "",
    tune: "bright",
    keepBackground: true,
    randomMotive: true
  }
];

const loader = document.getElementById("loader");
const loaderBar = document.getElementById("loaderBar");
const loaderExit = document.getElementById("loaderExit");
const loaderError = document.getElementById("loaderError");
const modal = document.getElementById("modal");
const modalKicker = document.getElementById("modalKicker");
const modalTitle = document.getElementById("modalTitle");
const modalBody = document.getElementById("modalBody");
const modalMedia = document.getElementById("modalMedia");
const lyricPlay = document.getElementById("lyricPlay");
const lyricPlayIcon = document.getElementById("lyricPlayIcon");
const lyricProgress = document.getElementById("lyricProgress");
const lyricCurrentTime = document.getElementById("lyricCurrentTime");
const lyricDuration = document.getElementById("lyricDuration");
const lyricLines = document.getElementById("lyricLines");
const lyricAudioElement = document.getElementById("lyricAudio");

let activeAudio = null;
let activeSynthStop = null;
let backgroundAudio = null;
let shouldResumeBackground = false;
let backgroundUnlockHandler = null;
let lyricAudio = null;
let shouldResumeBackgroundAfterLyric = false;
let activeLyricIndex = -1;

const syncedLyrics = [
  { time: 0, pt: "Mal posso esperar pra te ver amanhã", en: "I can't wait to see you tomorrow" },
  { time: 11, pt: "Estou contando as horas", en: "I'm counting the hours" },
  { time: 20, pt: "Vou esperar por você nas catracas", en: "I'll wait there for you at the turnstile" },
  { time: 31, pt: "Me desculpe se não te trouxer flores", en: "Sorry if I don't bring you flowers" },
  { time: 43, pt: "Estou ficando cansado de ficar sozinho", en: "I'm getting tired of being alone" },
  { time: 53, pt: "Passarei um tempo com você no telefone", en: "I'll spend some time with you on the phone" },
  { time: 64, pt: "Quero ouvir você reclamar das coisas", en: "I wanna hear you complain about things" },
  { time: 74, pt: "Quero ouvir você jogar videogame", en: "I wanna hear you play video games" },
  { time: 84, pt: "Eu gosto quando nossos corações batem juntos", en: "I like when our hearts beat together" },
  { time: 94, pt: "É a minha música favorita", en: "It's my favorite song" },
  { time: 104, pt: "Eu espero que o mundo inteiro possa ouvir", en: "I hope that the whole world can hear it" },
  { time: 114, pt: "E eles teriam que cantar junto", en: "And they'll have to sing along" },
  { time: 124, pt: "Eu quero te beijar e fazer cócegas no seu nariz", en: "I wanna kiss you and tickle your nose" },
  { time: 136, pt: "Quero te contar uma piada", en: "I wanna tell you a joke" },
  { time: 146, pt: "Quero cantar uma música enquanto você pega no sono", en: "I'll sing a song as you fall asleep" },
  { time: 156, pt: "Tive um sonho em que você estava cantando pra mim", en: "I had a dream you were singin' to me" },
  { time: 166, pt: "Mal posso esperar pra te ver amanhã", en: "I can't wait to see you tomorrow" }
];

document.body.classList.add("is-loading");

function plural(value, singular, pluralWord) {
  return `${numberFormat.format(value)} ${value === 1 ? singular : pluralWord}`;
}

function diffFromStart(now = new Date()) {
  const start = acceptedAt;
  const totalMs = Math.max(0, now.getTime() - start.getTime());
  const totalSeconds = Math.floor(totalMs / 1000);
  const totalMinutes = Math.floor(totalSeconds / 60);
  const totalHours = Math.floor(totalMinutes / 60);
  const totalDays = Math.floor(totalHours / 24);
  const totalWeeks = Math.floor(totalDays / 7);

  let years = now.getFullYear() - start.getFullYear();
  let cursor = new Date(start.getTime());
  cursor.setFullYear(start.getFullYear() + years);
  if (cursor > now) {
    years -= 1;
    cursor = new Date(start.getTime());
    cursor.setFullYear(start.getFullYear() + years);
  }

  let months = (now.getFullYear() - cursor.getFullYear()) * 12 + (now.getMonth() - cursor.getMonth());
  const monthCursor = new Date(cursor.getTime());
  monthCursor.setMonth(cursor.getMonth() + months);
  if (monthCursor > now) {
    months -= 1;
  }
  cursor.setMonth(cursor.getMonth() + months);

  let remaining = Math.max(0, now.getTime() - cursor.getTime());
  const days = Math.floor(remaining / 86400000);
  remaining -= days * 86400000;
  const hours = Math.floor(remaining / 3600000);
  remaining -= hours * 3600000;
  const minutes = Math.floor(remaining / 60000);
  remaining -= minutes * 60000;
  const seconds = Math.floor(remaining / 1000);

  return {
    years,
    months,
    days,
    hours,
    minutes,
    seconds,
    totalDays,
    totalWeeks,
    totalHours,
    totalMinutes,
    totalSeconds,
    motives: totalDays
  };
}

function elapsedLine(parts) {
  return [
    plural(parts.years, "ano", "anos"),
    plural(parts.months, "mês", "meses"),
    plural(parts.days, "dia", "dias"),
    plural(parts.hours, "hora", "horas"),
    plural(parts.minutes, "minuto", "minutos"),
    plural(parts.seconds, "segundo", "segundos")
  ].join(", ").replace(/, ([^,]*)$/, " e $1");
}

function updateCounters() {
  const parts = diffFromStart();
  const values = {
    years: parts.years,
    months: parts.months,
    weeks: parts.totalWeeks,
    days: parts.totalDays,
    hours: parts.hours,
    minutes: parts.minutes,
    seconds: parts.seconds,
    motives: parts.motives
  };

  Object.entries(values).forEach(([key, value]) => {
    document.querySelectorAll(`[data-count="${key}"]`).forEach((element) => {
      element.textContent = numberFormat.format(value);
    });
  });

  document.querySelectorAll("[data-loader-motives]").forEach((element) => {
    element.textContent = numberFormat.format(parts.motives);
  });

  document.querySelectorAll("[data-elapsed-line]").forEach((element) => {
    element.textContent = elapsedLine(parts);
  });
}

function runLoader() {
  const started = performance.now();
  const duration = 2300;

  function tick(now) {
    const progress = Math.min((now - started) / duration, 1);
    loaderBar.style.width = `${Math.round(progress * 100)}%`;
    if (progress < 1) {
      requestAnimationFrame(tick);
      return;
    }
    loader.classList.add("has-error");
    loaderError.setAttribute("aria-live", "polite");
    loaderExit.focus({ preventScroll: true });
  }

  requestAnimationFrame(tick);
}

function closeLoader() {
  loader.classList.add("is-hidden");
  document.body.classList.remove("is-loading");
  startPageAtTop();
  playBackgroundMusic();
}

function createConstellation() {
  const container = document.getElementById("constellation");
  const fragment = document.createDocumentFragment();
  const denseSky = motives.length > 120;
  motives.forEach((motive, index) => {
    const star = document.createElement("button");
    star.type = "button";
    star.className = "star-dot";
    star.style.left = `${7 + ((index * 37) % 86)}%`;
    star.style.top = `${8 + ((index * 53) % 82)}%`;
    star.style.setProperty("--size", `${denseSky ? 0.52 + (index % 5) * 0.08 : 0.95 + (index % 5) * 0.16}rem`);
    star.style.setProperty("--delay", `${(index % 9) * 0.16}s`);
    star.setAttribute("aria-label", `Motivo ${index + 1}`);
    star.addEventListener("click", () => openMotive(index));
    fragment.appendChild(star);
  });
  container.appendChild(fragment);
}

function renderTimeline() {
  const timeline = document.getElementById("timeline");
  timeline.innerHTML = timelineItems
    .map(
      (item) => `
        <article class="timeline-card">
          <div class="timeline-card__media" style="background-image: linear-gradient(135deg, rgba(240, 86, 140, 0.25), rgba(115, 251, 211, 0.16)), url('${item.media}'), url('assets/universe-hero.png')"></div>
          <div class="timeline-card__body">
            <time>${item.date}</time>
            <h3>${item.title}</h3>
            <p>${item.text}</p>
          </div>
        </article>
      `
    )
    .join("");
}

function renderLetters() {
  const lettersGrid = document.getElementById("letters");
  lettersGrid.innerHTML = "";
  letters.forEach((letter, index) => {
    const button = document.createElement("button");
    button.className = "letter-card";
    button.type = "button";
    button.innerHTML = `<span>${letter.label}</span><h3>${letter.title}</h3>`;
    button.addEventListener("click", () => {
      openModal({
        kicker: "Carta para quando...",
        title: letter.title,
        media: letter.media,
        body: letter.body.map((paragraph) => `<p>${paragraph}</p>`).join("")
      });
    });
    button.style.transitionDelay = `${index * 45}ms`;
    lettersGrid.appendChild(button);
  });
}

function renderFinalLetter() {
  const finalLetter = document.getElementById("finalLetter");
  finalLetter.innerHTML = finalParagraphs.map((paragraph) => `<p>${paragraph}</p>`).join("");
}

function renderChoices() {
  const choiceList = document.getElementById("choiceList");
  choices.forEach((choice) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "button";
    button.textContent = choice.title;
    button.addEventListener("click", () => openChoice(choice));
    choiceList.appendChild(button);
  });
}

function openMotive(index) {
  openModal({
    kicker: `Motivo ${numberFormat.format(index + 1)}`,
    title: "Uma estrela acesa por você",
    body: `<p>${motives[index]}</p>`
  });
}

function openRandomMotive() {
  const index = Math.floor(Math.random() * motives.length);
  openMotive(index);
}

function openChoice(choice) {
  const motive = choice.randomMotive ? motives[Math.floor(Math.random() * motives.length)] : null;
  const caption = motive ? `${choice.caption}<br><br><strong>${motive}</strong>` : choice.caption;
  const keepBackground = choice.keepBackground && !choice.audio;

  pauseLyricPlayer();
  if (keepBackground) {
    playBackgroundMusic();
  } else {
    pauseBackgroundForModal();
  }

  openModal({
    kicker: choice.kicker,
    title: choice.title,
    media: choice.media,
    body: `<p>${caption}</p>`
  });

  if (!keepBackground) {
    playChoiceAudio(choice);
  }
}

function openSecret() {
  openModal({
    kicker: "Você encontrou o final... mas não o fim.",
    title: "O resto da nossa história",
    body: "<p>O resto da nossa história eu quero escrever vivendo com você.</p>"
  });
  playSynth("soft");
}

function openModal({ kicker, title, body, media }) {
  stopMusic();
  pauseLyricPlayer();
  modalKicker.textContent = kicker || "";
  modalTitle.textContent = title || "";
  modalBody.innerHTML = body || "";

  if (media) {
    const isGallery = Array.isArray(media);
    const isVideo = !isGallery && typeof media === "object" && media.type === "video";

    modalMedia.hidden = false;
    modalMedia.style.backgroundImage = "";
    modalMedia.classList.toggle("modal__media--gallery", isGallery);
    modalMedia.classList.toggle("modal__media--triptych", isGallery && media.length === 3);
    modalMedia.classList.toggle("modal__media--video", isVideo);
    modalMedia.classList.toggle("modal__media--gif", isVideo && media.gif);

    if (isVideo) {
      const poster = media.poster ? ` poster="${media.poster}"` : "";
      const gifAttrs = media.gif ? " autoplay loop muted" : " controls";
      modalMedia.innerHTML = `
        <video${poster}${gifAttrs} playsinline preload="${media.gif ? "auto" : "metadata"}">
          <source src="${media.src}" type="video/mp4" />
        </video>
      `;
      const video = modalMedia.querySelector("video");
      if (media.gif) {
        video.muted = true;
        video.loop = true;
        video.play().catch(() => {});
      } else {
        video.addEventListener("play", () => {
          pauseBackgroundForModal();
        });
        video.addEventListener("ended", resumeBackgroundAfterModal);
      }
    } else if (isGallery) {
      modalMedia.innerHTML = media.map((item) => `<img src="${item}" alt="" />`).join("");
    } else {
      modalMedia.innerHTML = "";
      modalMedia.style.backgroundImage = `linear-gradient(180deg, rgba(7, 5, 16, 0.1), rgba(0, 0, 0, 0.52)), url('${media}'), url('assets/universe-hero.png')`;
    }
  } else {
    modalMedia.hidden = true;
    modalMedia.style.backgroundImage = "";
    modalMedia.innerHTML = "";
    modalMedia.classList.remove("modal__media--gallery");
    modalMedia.classList.remove("modal__media--triptych");
    modalMedia.classList.remove("modal__media--video");
    modalMedia.classList.remove("modal__media--gif");
  }

  modal.hidden = false;
  document.body.style.overflow = "hidden";
}

function closeModal() {
  modalMedia.querySelectorAll("video").forEach((video) => {
    video.pause();
    video.currentTime = 0;
  });
  modal.hidden = true;
  document.body.style.overflow = "";
  stopMusic();
  resumeBackgroundAfterModal();
}

function setupLyricPlayer() {
  if (!lyricPlay || !lyricLines || !lyricAudioSrc) return;

  lyricAudio = lyricAudioElement || new Audio(lyricAudioSrc);
  lyricAudio.src = lyricAudioSrc;
  lyricAudio.preload = "metadata";
  lyricAudio.volume = 0.72;

  lyricLines.innerHTML = syncedLyrics
    .map(
      (line, index) => `
        <article class="lyric-line" data-lyric-index="${index}">
          <p>${line.pt}</p>
          <span>${line.en}</span>
        </article>
      `
    )
    .join("");

  lyricPlay.addEventListener("click", toggleLyricPlayer);
  lyricAudio.addEventListener("loadedmetadata", updateLyricTime);
  lyricAudio.addEventListener("timeupdate", updateLyricTime);
  lyricAudio.addEventListener("pause", updateLyricButton);
  lyricAudio.addEventListener("play", () => {
    stopMusic();
    pauseBackgroundForLyric();
    updateLyricButton();
  });
  lyricAudio.addEventListener("ended", () => {
    updateLyricTime();
    resumeBackgroundAfterLyric();
  });

  updateLyricTime();
  updateLyricButton();
}

function toggleLyricPlayer() {
  if (!lyricAudio) return;

  if (lyricAudio.paused) {
    stopMusic();
    pauseBackgroundForLyric();
    lyricAudio.play().catch(() => {
      resumeBackgroundAfterLyric();
    });
  } else {
    pauseLyricPlayer();
    resumeBackgroundAfterLyric();
  }
}

function pauseLyricPlayer() {
  if (!lyricAudio || lyricAudio.paused) return;
  lyricAudio.pause();
  updateLyricButton();
}

function pauseBackgroundForLyric() {
  if (!backgroundAudio) return;
  if (!backgroundAudio.paused) {
    shouldResumeBackgroundAfterLyric = true;
  }
  backgroundAudio.pause();
}

function resumeBackgroundAfterLyric() {
  if (!backgroundAudio || !shouldResumeBackgroundAfterLyric) return;
  shouldResumeBackgroundAfterLyric = false;
  playBackgroundMusic();
}

function updateLyricButton() {
  if (!lyricAudio || !lyricPlayIcon || !lyricPlay) return;
  const playing = !lyricAudio.paused;
  lyricPlayIcon.textContent = playing ? "\u23f8" : "\u25b6";
  lyricPlay.setAttribute("aria-label", playing ? "Pausar Favorite Song" : "Tocar Favorite Song");
}

function updateLyricTime() {
  if (!lyricAudio) return;
  const duration = lyricAudio.duration || 175;
  const current = lyricAudio.currentTime || 0;
  const activeIndex = getActiveLyricIndex(current);

  if (lyricProgress) {
    lyricProgress.style.width = `${Math.min(100, (current / duration) * 100)}%`;
  }
  if (lyricCurrentTime) {
    lyricCurrentTime.textContent = formatTime(current);
  }
  if (lyricDuration) {
    lyricDuration.textContent = formatTime(duration);
  }

  document.querySelectorAll(".lyric-line").forEach((line) => {
    const isActive = Number(line.dataset.lyricIndex) === activeIndex;
    line.classList.toggle("is-active", isActive);
    if (isActive && activeLyricIndex !== activeIndex) {
      line.scrollIntoView({ block: "center", behavior: "smooth" });
    }
  });
  activeLyricIndex = activeIndex;
}

function getActiveLyricIndex(currentTime) {
  let activeIndex = 0;
  syncedLyrics.forEach((line, index) => {
    if (currentTime >= line.time) {
      activeIndex = index;
    }
  });
  return activeIndex;
}

function formatTime(seconds) {
  const safeSeconds = Number.isFinite(seconds) ? Math.max(0, seconds) : 0;
  const minutes = Math.floor(safeSeconds / 60);
  const remainingSeconds = Math.floor(safeSeconds % 60).toString().padStart(2, "0");
  return `${minutes}:${remainingSeconds}`;
}

function setupBackgroundMusic() {
  if (!backgroundAudioSrc) return;

  backgroundAudio = new Audio(backgroundAudioSrc);
  backgroundAudio.loop = true;
  backgroundAudio.volume = 0.34;
  backgroundAudio.preload = "auto";

  backgroundUnlockHandler = (event) => {
    if (event.target instanceof Element && event.target.closest("#lyricPlayer")) return;
    if (modal && !modal.hidden) return;
    playBackgroundMusic();
  };
  document.addEventListener("pointerdown", backgroundUnlockHandler);
  document.addEventListener("click", backgroundUnlockHandler);
  document.addEventListener("keydown", backgroundUnlockHandler);
  document.addEventListener("touchstart", backgroundUnlockHandler);

  playBackgroundMusic();
}

function playBackgroundMusic() {
  if (!backgroundAudio) return Promise.resolve(false);
  if (lyricAudio && !lyricAudio.paused) return Promise.resolve(false);
  return backgroundAudio
    .play()
    .then(() => {
      removeBackgroundUnlockHandler();
      return true;
    })
    .catch(() => {
      // Browsers often block autoplay with sound until the first user interaction.
      return false;
    });
}

function removeBackgroundUnlockHandler() {
  if (!backgroundUnlockHandler) return;
  document.removeEventListener("pointerdown", backgroundUnlockHandler);
  document.removeEventListener("click", backgroundUnlockHandler);
  document.removeEventListener("keydown", backgroundUnlockHandler);
  document.removeEventListener("touchstart", backgroundUnlockHandler);
  backgroundUnlockHandler = null;
}

function pauseBackgroundForModal() {
  if (!backgroundAudio) return;
  shouldResumeBackground = !backgroundAudio.paused;
  backgroundAudio.pause();
}

function resumeBackgroundAfterModal() {
  if (!backgroundAudio || !shouldResumeBackground) return;
  shouldResumeBackground = false;
  playBackgroundMusic();
}

function playChoiceAudio(choice) {
  if (!choice.audio) {
    playSynth(choice.tune);
    return;
  }

  const audio = new Audio(choice.audio);
  activeAudio = audio;
  audio.loop = true;
  audio.volume = 0.58;

  const fallback = () => {
    if (activeAudio === audio) {
      activeAudio = null;
      playSynth(choice.tune);
    }
  };

  audio.addEventListener("error", fallback, { once: true });
  audio.play().catch(fallback);
}

function stopMusic() {
  if (activeAudio) {
    activeAudio.pause();
    activeAudio.currentTime = 0;
    activeAudio = null;
  }
  if (activeSynthStop) {
    activeSynthStop();
    activeSynthStop = null;
  }
}

function playSynth(tune = "soft") {
  stopMusic();
  pauseLyricPlayer();
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  if (!AudioContext) return;

  const context = new AudioContext();
  const master = context.createGain();
  const delay = context.createDelay();
  const feedback = context.createGain();

  master.gain.value = 0.12;
  delay.delayTime.value = 0.26;
  feedback.gain.value = 0.28;
  delay.connect(feedback);
  feedback.connect(delay);
  master.connect(delay);
  master.connect(context.destination);
  delay.connect(context.destination);

  const tunes = {
    bright: [392, 494, 587, 784, 659, 587, 494, 392],
    tender: [330, 392, 440, 392, 330, 294, 330, 392],
    soft: [262, 330, 392, 523, 494, 392, 330, 262]
  };

  const notes = tunes[tune] || tunes.soft;
  const oscillators = [];
  const start = context.currentTime + 0.03;

  notes.forEach((frequency, index) => {
    const osc = context.createOscillator();
    const gain = context.createGain();
    const when = start + index * 0.34;
    osc.type = index % 2 ? "sine" : "triangle";
    osc.frequency.value = frequency;
    gain.gain.setValueAtTime(0, when);
    gain.gain.linearRampToValueAtTime(0.42, when + 0.035);
    gain.gain.exponentialRampToValueAtTime(0.001, when + 0.8);
    osc.connect(gain);
    gain.connect(master);
    osc.start(when);
    osc.stop(when + 0.84);
    oscillators.push(osc);
  });

  const loop = window.setInterval(() => {
    if (!modal.hidden) {
      playSynth(tune);
    }
  }, 3200);

  activeSynthStop = () => {
    window.clearInterval(loop);
    oscillators.forEach((osc) => {
      try {
        osc.stop();
      } catch {
        // Already stopped.
      }
    });
    context.close();
  };
}

function setupReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
        }
      });
    },
    { threshold: 0.14 }
  );

  document.querySelectorAll("[data-reveal]").forEach((element) => observer.observe(element));
}

function setupCanvas() {
  const canvas = document.getElementById("starCanvas");
  const ctx = canvas.getContext("2d");
  const stars = [];
  let width = 0;
  let height = 0;
  let animationFrame = 0;

  function resize() {
    const ratio = window.devicePixelRatio || 1;
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = Math.floor(width * ratio);
    canvas.height = Math.floor(height * ratio);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
    stars.length = 0;
    const total = Math.min(150, Math.floor((width * height) / 9000));
    for (let i = 0; i < total; i += 1) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 1.4 + 0.2,
        speed: Math.random() * 0.08 + 0.025,
        alpha: Math.random() * 0.55 + 0.25
      });
    }
  }

  function draw() {
    ctx.clearRect(0, 0, width, height);
    stars.forEach((star) => {
      star.y += star.speed;
      if (star.y > height + 8) {
        star.y = -8;
        star.x = Math.random() * width;
      }
      ctx.beginPath();
      ctx.fillStyle = `rgba(255, 248, 235, ${star.alpha})`;
      ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
      ctx.fill();
    });
    animationFrame = requestAnimationFrame(draw);
  }

  resize();
  draw();
  window.addEventListener("resize", resize);

  return () => cancelAnimationFrame(animationFrame);
}

document.querySelectorAll("[data-close-modal]").forEach((element) => {
  element.addEventListener("click", closeModal);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !modal.hidden) {
    closeModal();
  }
});

loaderExit.addEventListener("click", closeLoader);
document.getElementById("randomMotive").addEventListener("click", openRandomMotive);
document.getElementById("secretTrigger").addEventListener("click", openSecret);

updateCounters();
window.setInterval(updateCounters, 1000);
createConstellation();
renderTimeline();
renderLetters();
renderFinalLetter();
renderChoices();
setupReveal();
setupCanvas();
setupLyricPlayer();
setupBackgroundMusic();
if (new URLSearchParams(window.location.search).get("skipLoader") === "1") {
  closeLoader();
} else {
  runLoader();
}
