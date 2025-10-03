const frases = /*Essas sao todas as curiosidades, pelo menos por enquanto*/
[
 "Na França existem mais de 700 tipos de queijos",
 "As vacas tem melhores amigas",
 "Na Dinamarca existem mais porcos do que pessoas",
 "A descoberta do Petróleo salvou as baleias da extinção",
 "Duas vezes no ano, tem um fenomeno no Havaí em que os objetos ficam totalmente sem sombras",
 "A luz do capslock é ligada diretamente na placa, então o tempo que ela demora pra acender indica a velocidade do laptop",
 "Baleias orcas não sao baleias, são golfinhos",
 "Os porcos não conseguem olhar pro céu",
 "A China envia pandas para países como presente diplomático",
  "Se você esticar todos os seus vasos sanguíneos, é possivel dar uma volta na terra. ",
 "As vacas não conseguem descer escadas. A anatomia do seu corpo não permite realizar esse tipo de movimento",
 "Todos os mamiferos conseguem pular, menos o elefante",
 "A feijoada é considerada o prato nacional do Brasil. Apesar de ter origem africana, ela se tornou um símbolo da culinária brasileira",
 "O calendário da Etiópia é sete anos atrasado em relação ao calendário ocidental",
 "O lado azul da borracha não apaga caneta, ela remove manchas mais escuras de superficies asperas",
 "Uma das profissoes mais perigosas do mundo é a de removedor de minas terrestres",
 "No brasil é proibido fabricar açucar em casa devido a uma lei criada durante o ciclo do açucar na historia ",
 "Os autores de Crônicas de Nárnia (Lewis) e Senhor dos Anéis (Tolkien) eram melhores amigos",
 "O nascimento da Cleopatra é mais próximo do lançamento do iphone que da construção das pirâmides",
 "Um grego chamado Ésquilo morreu pois uma aguia confundiu a careca dele com uma pedra, e do alto jogou uma tartaruga que matou o grego quando acertou sua cabeça",
 "A proclamação da republica foi motivada tambem pelo fato do Marechal Deodoro da Fonseca descobrir que sua esposa estava o traindo com o primeiro Ministro de Dom Pedro II",
 "O Quokka é considerado o animal mais feliz do mundo",
 "Analgesia Congênita é uma condição genética que torna uma pessoa imune a dor. Entretanto é rara e apenas 20 casos foram documentados na historia",
 "A Coca-Cola originalmente era vendinda como remédio em farmacias, e continha cocaina na fórmula ate o o ano de 1903",
 "Jujubas são feitas a partir de substâncias com colágeno, como cartilagens, tendões, ossos e aparas de couro e, portanto, é um produto de origem animal.",
 "As cerdas da escada rolante tem como função evitar que alguém fique muito proximo da lateral da escada",
 "O furo na tampa da caneta evita que alguém sufoque caso engula a tampa por acidente",
 "O DNA do chimpanzé tem semelhança de 98,8% com o DNA dos seres-humanos",
 "Porcos tem uma inteligencia comparavel ao de uma criança humana de 3 anos",
 "Um dos primeiros filmes a ter cenas pós-créditos foi Muppets - O Filme (1979)",
 "No filme O Maskara, Jim Carrey com suas caras e bocas fez a produção economizar milhares de doláres em efeitos especiais",
 "O maior nome brasileiro registrado é o de Charlingtonglaevionbeecheknavare dos Anjos Mendonça",
 "O material mais leve do mundo é o aerogel de grafeno, que é sete vezes mais leve que o ar. O material é composto por 99,8% de ar e é tão forte quanto o aço",
 "O buraco mais profundo do mundo encontra-se na Russia e tem 12,2km de profundidade",
 "Genghis Khan foi um dos maiores imperadores do planeta, fundou o Império Mongol que conquistou cerca de 19 milhões de km²",
 "O filme mais longo do mundo se chama Logistics e tem duração aproximada de 35 dias",
 "Keanu Reeves doou 70% do salário de Matrix para pesquisas sobre Leucemia",
 "As pegadas dos astronautas ainda estão na Lua",
 "Nesse planeta ja nasceram cerca de 117 bilhões de humanos",
 "Um homem chamado Tsutomu Yamaguchi foi a única pessoa a conseguir sobreviver aos ataques de Hiroshima e Nagazaki",
 "A pessoa mais alta do mundo tinha 2,72m e calçava algo em torno de 76",
 "A maior árvore do Brasil tinha 88 metros, o equivalente a um prédio de 30 andares ou o a altura do Cristo Redentor sem o pedestal",
 "Pra evitar que os jogadores tenham noção da passagem de tempo, Las Vegas evita colocar relogios para mante-los focados",
 "A primeira aparição do homem aranha foi em Amazing Fantasy #15, o preço do gibi original pode chegar até 200 mil doláres",
 "A primeira aparição do Superman foi em Action Comics #1, o valor do gibi original pode chegar até 6 milhões de doláres",
 "Anatidaefobia é o medo constante de ser observado por patos",
 "Cerca de 379 pessoas já morreram tentando tirar uma selfie",
 "A mira dos cowboys era tão ruim que se eles quisessem acertar a cabeça de alguem, deveriam mirar no joelho",
 "Um ser humano pode sobreviver no maximo 11 dias sem dormir",
 "Salto alto originalmente era uma calçado masculino",
 "A validade das garrafas de água na verdade indicam a validade da garrafa, pois depois de um tempo a garrafa libera substâncias toxicas na água."

];

let ultimo = -1; // guarda o índice da última frase exibida

function GerarFrase() {
  let n;
  do {
    n = Math.floor(Math.random() * frases.length);
  } while (n === ultimo && frases.length > 1); // repete sorteio se cair igual
  ultimo = n; // atualiza o último número
  document.getElementById("saida").textContent = frases[n];
}

function themeswitch() { /*Troca a classe do body para darkmode*/
  var element = document.body;
  element.classList.toggle("darkmode");
}




