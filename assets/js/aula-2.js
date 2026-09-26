const perguntas = [
  {
    pergunta: "O que significa SGBD?",
    opcoes: [
      "Sistema de Gerenciamento de Banco de Dados",
      "Sistema Geral de Banco de Dados",
      "Sistema de Gerenciamento de Dados",
      "Software de Gerenciamento de Documentos"
    ],
    correta: 0
  },

  {
    pergunta: "Qual é a diferença entre SGBD e banco de dados?",
    opcoes: [
      "O banco de dados é o software que gerencia os dados, enquanto o SGBD armazena os dados",
      "O SGBD é o software responsável por gerenciar o banco de dados, enquanto o banco de dados é o conjunto de dados armazenados",
      "SGBD e banco de dados são exatamente a mesma coisa",
      "O banco de dados é responsável por executar o sistema operacional"
    ],
    correta: 1
  },

  {
    pergunta: "Como uma aplicação acessa os dados armazenados em um banco de dados?",
    opcoes: [
      "Por meio de um SGBD, utilizando comandos ou consultas apropriadas",
      "Diretamente pelo sistema operacional, sem nenhum software intermediário",
      "Somente por meio de um framework de testes",
      "Apenas copiando os arquivos do banco de dados"
    ],
    correta: 0
  },

  {
    pergunta: "Qual é o papel do SQL em um banco de dados relacional?",
    opcoes: [
      "Ser uma linguagem de programação usada para criar sistemas operacionais",
      "Ser uma linguagem utilizada para consultar e manipular dados em bancos relacionais",
      "Ser um SGBD responsável por armazenar fisicamente os dados",
      "Ser um framework para desenvolvimento de aplicações"
    ],
    correta: 1
  },

  {
    pergunta: "Por que um SGBD precisa controlar os acessos ao banco de dados?",
    opcoes: [
      "Para garantir segurança, controlar permissões e evitar acessos indevidos aos dados",
      "Porque o banco de dados controla a aplicação diretamente, sem utilizar um SGBD",
      "Porque o SGBD é uma linguagem utilizada para criar aplicações",
      "Porque aplicação, SGBD e banco de dados são exatamente a mesma coisa"
    ],
    correta: 0
  },

  {
    pergunta: "O que significa dizer que um SGBD lida com concorrência?",
    opcoes: [
      "Significa que o SGBD consegue gerenciar acessos simultâneos de diferentes usuários ou aplicações aos dados",
      "Significa que apenas um usuário pode acessar o banco de dados por vez",
      "Significa que o banco de dados substitui o sistema operacional",
      "Significa que o SGBD funciona apenas quando não existem outros usuários conectados"
    ],
    correta: 0
  },

  {
    pergunta: "O que é uma transação em um banco de dados?",
    opcoes: [
      "Um conjunto de operações executadas como uma unidade lógica de trabalho",
      "Um programa utilizado para criar sistemas operacionais",
      "Um arquivo usado exclusivamente para armazenar imagens",
      "Uma linguagem de programação utilizada para desenvolver aplicações"
    ],
    correta: 0
  }
];


function embaralhar(array) {
  const copia = [...array];

  for (let i = copia.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [copia[i], copia[j]] = [copia[j], copia[i]];
  }

  return copia;
}


/* =====================================================
   CRIAR NOVA PARTIDA
   ===================================================== */

function criarPerguntasDaPartida() {

  return embaralhar(perguntas).map(pergunta => {

    // Guarda a resposta correta original
    const respostaCorreta = pergunta.opcoes[pergunta.correta];

    // Embaralha as alternativas
    const opcoesEmbaralhadas = embaralhar(pergunta.opcoes);

    // Descobre a nova posição da resposta correta
    const novaPosicaoCorreta =
      opcoesEmbaralhadas.indexOf(respostaCorreta);

    return {
      pergunta: pergunta.pergunta,
      opcoes: opcoesEmbaralhadas,
      correta: novaPosicaoCorreta
    };

  });

}


/* =====================================================
   VARIÁVEIS DO QUIZ
   ===================================================== */

let indiceAtual = 0;
let pontuacao = 0;

let perguntasDaPartida = criarPerguntasDaPartida();


/* =====================================================
   ELEMENTOS HTML
   ===================================================== */

const elPergunta = document.getElementById('pergunta');
const elOpcoes = document.getElementById('opcoes');
const elContador = document.getElementById('contador');
const elFeedback = document.getElementById('feedback');
const elProximaBtn = document.getElementById('proxima-btn');

const elTelaQuiz = document.getElementById('tela-quiz');
const elTelaResultado = document.getElementById('tela-resultado');

const elPontuacaoFinal = document.getElementById('pontuacao-final');
const elMensagemFinal = document.getElementById('mensagem-final');

const elReiniciarBtn = document.getElementById('reiniciar-btn');


/* =====================================================
   CARREGAR PERGUNTA
   ===================================================== */

function carregarPergunta() {

  const atual = perguntasDaPartida[indiceAtual];

  // Disponibiliza informações da pergunta atual para os testes
  window.quizAtual = {
    pergunta: atual.pergunta,
    correta: atual.correta,
    respostaCorreta: atual.opcoes[atual.correta]
  };

  elContador.textContent =
    `Pergunta ${indiceAtual + 1} de ${perguntasDaPartida.length}`;

  elPergunta.textContent = atual.pergunta;

  elFeedback.textContent = '';
  elFeedback.className = '';

  elProximaBtn.style.display = 'none';

  elOpcoes.innerHTML = '';


  /* =====================================================
     CRIAR BOTÕES DAS ALTERNATIVAS
     ===================================================== */

  atual.opcoes.forEach((opcao, i) => {

    const btn = document.createElement('button');

    btn.className = 'resposta-btn';

    btn.textContent = opcao;

    btn.setAttribute('data-index', i);

    btn.addEventListener('click', () => responder(i));

    elOpcoes.appendChild(btn);

  });

}


/* =====================================================
   RESPONDER PERGUNTA
   ===================================================== */

function responder(indiceEscolhido) {

  const atual = perguntasDaPartida[indiceAtual];

  console.log("================================");
  console.log("Pergunta:", atual.pergunta);
  console.log("Alternativas:", atual.opcoes);
  console.log("Índice escolhido:", indiceEscolhido);
  console.log("Índice correto:", atual.correta);
  console.log("Resposta correta:", atual.opcoes[atual.correta]);

  const botoes =
    document.querySelectorAll('.resposta-btn');


  /* Desabilita todas as alternativas */

  botoes.forEach(btn => {
    btn.disabled = true;
  });


  /* =====================================================
     RESPOSTA CORRETA
     ===================================================== */

  if (indiceEscolhido === atual.correta) {

    pontuacao++;

    elFeedback.textContent = 'Correto!';

    elFeedback.className = 'acerto';

    botoes[indiceEscolhido]
      .classList.add('correta');

  }


  /* =====================================================
     RESPOSTA ERRADA
     ===================================================== */

  else {

    elFeedback.textContent =
      `Errado! A resposta certa era: ${atual.opcoes[atual.correta]}`;

    elFeedback.className = 'erro';

    botoes[indiceEscolhido]
      .classList.add('errada');

    botoes[atual.correta]
      .classList.add('correta');

  }


  /* Mostra botão próxima pergunta */

  elProximaBtn.style.display = 'block';

}


/* =====================================================
   PRÓXIMA PERGUNTA
   ===================================================== */

elProximaBtn.addEventListener('click', () => {

  indiceAtual++;

  if (indiceAtual < perguntasDaPartida.length) {

    carregarPergunta();

  } else {

    mostrarResultado();

  }

});


/* =====================================================
   MOSTRAR RESULTADO
   ===================================================== */

function mostrarResultado() {

  elTelaQuiz.style.display = 'none';

  elTelaResultado.style.display = 'block';


  elPontuacaoFinal.textContent =
    `${pontuacao} / ${perguntasDaPartida.length}`;


  let mensagem;


  if (pontuacao === perguntasDaPartida.length) {

    mensagem = 'Excelente! Você acertou tudo!';

  }

  else if (pontuacao >= perguntasDaPartida.length / 2) {

    mensagem = 'Muito bom! Continue assim.';

  }

  else {

    mensagem = 'Continue estudando e tente novamente!';

  }


  elMensagemFinal.textContent = mensagem;

  elReiniciarBtn.style.display = 'block';

}


/* =====================================================
   REINICIAR QUIZ
   ===================================================== */

elReiniciarBtn.addEventListener('click', () => {

  indiceAtual = 0;

  pontuacao = 0;


  /* =====================================================
     GERA UMA NOVA ORDEM DE PERGUNTAS E ALTERNATIVAS
     ===================================================== */

  perguntasDaPartida = criarPerguntasDaPartida();


  elTelaResultado.style.display = 'none';

  elTelaQuiz.style.display = 'block';


  carregarPergunta();

});


/* =====================================================
   INICIAR QUIZ
   ===================================================== */

carregarPergunta();