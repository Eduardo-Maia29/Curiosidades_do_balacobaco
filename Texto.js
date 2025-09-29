const frases =
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
 "Uma ave confundiu a careca de Ésquilo com uma pedra e do ar, soltou uma tartaruga que quando acertou a cabeça do grego, veio a mata-lo",
 "A proclamação da republica foi motivada porque o Marechal Deodoro da Fonseca descobriu que sua esposa estava o traindo com o primeiro Ministro de Dom Pedro II",
 "O Quokka é considerado o animal mais feliz do mundo",
 "Analgesia Congênita é uma condição genética que torna uma pessoa imune a dor. Entretanto é rara e apenas 20 casos foram documentados na historia",
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

