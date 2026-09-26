const perguntas = [
  {
    pergunta: "O que é um banco de dados?",
    opcoes: [
      "Um conjunto organizado de dados armazenados e relacionados",
      "Uma linguagem de programação",
      "Um sistema operacional",
      "Um framework para testes automatizados"
    ],
    correta: 0
  },

  {
    pergunta: "Qual é a função de uma aplicação?",
    opcoes: [
      "Armazenar fisicamente todos os dados do computador",
      "Interagir com o usuário e utilizar recursos e dados para realizar tarefas",
      "Substituir o sistema operacional",
      "Ser exclusivamente responsável pelo gerenciamento do banco de dados"
    ],
    correta: 1
  },

  {
    pergunta: "O que é SQL?",
    opcoes: [
      "Uma linguagem utilizada para consultar e manipular bancos de dados relacionais",
      "Um sistema operacional",
      "Um banco de dados específico",
      "Um framework para desenvolvimento de aplicações"
    ],
    correta: 0
  },

  {
    pergunta: "PostgreSQL é banco de dados, SGBD ou linguagem?",
    opcoes: [
      "Uma linguagem de programação",
      "Um SGBD (Sistema de Gerenciamento de Banco de Dados)",
      "Um sistema operacional",
      "Um framework de testes"
    ],
    correta: 1
  },

  {
    pergunta: "Qual é a relação entre aplicação, SGBD e banco de dados?",
    opcoes: [
      "A aplicação pode se comunicar com o SGBD, que gerencia o banco de dados",
      "O banco de dados controla a aplicação diretamente, sem utilizar um SGBD",
      "O SGBD é uma linguagem utilizada para criar aplicações",
      "Aplicação, SGBD e banco de dados são exatamente a mesma coisa"
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