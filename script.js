// PARTE 1: Lista de perguntas e respostas
const perguntas = [
  // Adicionado 'const' para declarar a variável 'perguntas', o que é uma prática recomendada para variáveis que não serão reatribuídas.
  // Esta lista contém todas as perguntas do quiz, cada uma com o texto da pergunta e um array de objetos de resposta.
  {
    pergunta: "Qual ano o Fluminense foi fundado?",
    respostas: [
      { opcao: "1900", correto: false },
      { opcao: "1902", correto: true },
      { opcao: "1905", correto: false },
    ],
  },
  {
    pergunta:
      "Qual nome do jogador que fez um gol de barriga na final do Cariocão de 1995?",
    respostas: [
      { opcao: "Magno Alves", correto: false },
      { opcao: "Ronaldinho Gaúcho", correto: false },
      { opcao: "Renato Gaúcho", correto: true },
    ],
  },
  {
    pergunta: "Qual era o placar final da partida da final do Cariocão de 1995?",
    respostas: [
      { opcao: "2 a 1 para o Fluminense", correto: false },
      { opcao: "3 a 2 para o Fluminense", correto: true },
      { opcao: "2 a 2", correto: false },
    ],
  },
  {
    pergunta:
      "Em qual estádio foi disputada a final do Campeonato Carioca de 1995?",
    respostas: [
      { opcao: "Estádio do Maracanã", correto: true },
      { opcao: "Estádio de São Januário", correto: false },
      { opcao: "Estádio Nilton Santos (Engenhão)", correto: false },
    ],
  },
  {
    pergunta: "Quem era o técnico do Fluminense na final de 1995?",
    respostas: [
      { opcao: "Carlos Alberto Parreira", correto: false },
      { opcao: "Joel Santana", correto: true },
      { opcao: "Abel Braga", correto: false },
    ],
  },
  {
    pergunta:
      "Qual jogador do Flamengo marcou o primeiro gol da sua equipe na final do Cariocão de 1995?",
    respostas: [
      { opcao: "Sávio", correto: false },
      { opcao: "Edmundo", correto: false },
      { opcao: "Romário", correto: true },
    ],
  },
  {
    pergunta:
      "Quem era o presidente do Fluminense na época do título do Cariocão de 1995?",
    respostas: [
      { opcao: "Francisco Horta", correto: false },
      { opcao: "Parmênio Mendes", correto: true },
      { opcao: "Roberto Horcades", correto: false },
    ],
  },
  {
    pergunta: "Qual foi o ano do último título carioca do Fluminense antes de 1995?",
    respostas: [
      { opcao: "1980", correto: true },
      { opcao: "1982", correto: false },
      { opcao: "1985", correto: false },
    ],
  },
  {
    pergunta:
      "Qual outro título importante Renato Gaúcho conquistou como jogador pelo Fluminense?",
    respostas: [
      { opcao: "Copa do Brasil de 1992", correto: false },
      { opcao: "Campeonato Brasileiro de 1984", correto: true },
      { opcao: "Copa Libertadores da América de 1998", correto: false },
    ],
  },
  {
    pergunta: "Quantos títulos do Campeonato Brasileiro o Fluminense possui?",
    respostas: [
      { opcao: "2", correto: false },
      { opcao: "3", correto: false },
      { opcao: "4", correto: true },
    ],
  },
  {
    pergunta: "Qual era o apelido do clássico entre Fluminense e Flamengo?",
    respostas: [
      { opcao: "Clássico Vovô", correto: false },
      { opcao: "Clássico dos Milhões", correto: true },
      { opcao: "Clássico da Rivalidade", correto: false },
    ],
  },
  {
    pergunta: "Quem foi o maior artilheiro da história do Fluminense?",
    respostas: [
      { opcao: "Fred", correto: true },
      { opcao: "Rivellino", correto: false },
      { opcao: "Romário", correto: false },
    ],
  },
  {
    pergunta: "Em qual ano o Fluminense conquistou seu título da Copa do Brasil?",
    respostas: [
      { opcao: "1992", correto: false },
      { opcao: "2007", correto: true },
      { opcao: "2019", correto: false },
    ],
  },
  {
    pergunta: "Quantos títulos do Campeonato Carioca o Fluminense possui no total?",
    respostas: [
      { opcao: "30", correto: false },
      { opcao: "31", correto: false },
      { opcao: "33", correto: true },
    ],
  },
  {
    pergunta:
      "Qual o nome do técnico do Fluminense no título do Campeonato Brasileiro de 1984?",
    respostas: [
      { opcao: "Telê Santana", correto: false },
      { opcao: "Carlos Alberto Parreira", correto: true },
      { opcao: "Vanderlei Luxemburgo", correto: false },
    ],
  },
  {
    pergunta:
      "Quem marcou o gol do título da Copa do Brasil de 2007 para o Fluminense?",
    respostas: [
      { opcao: "Thiago Neves", correto: true },
      { opcao: "Fred", correto: false },
      { opcao: "Washington", correto: false },
    ],
  },
  {
    pergunta: "Qual o nome do goleiro do Fluminense campeão da Copa do Brasil de 2007?",
    respostas: [
      { opcao: "Ricardo Berna", correto: false },
      { opcao: "Fernando Henrique", correto: true },
      { opcao: "Diego Cavalieri", correto: false },
    ],
  },
  {
    pergunta:
      "Quem era o jogador da Máquina Tricolor nos anos 1970, que ficou marcado pelo drible chamado 'elástico'?",
    respostas: [
      { opcao: "Flávio Minuano", correto: false },
      { opcao: "Lula", correto: false },
      { opcao: "Rivellino", correto: true },
    ],
  },
  {
    pergunta:
      "Em qual ano o Fluminense conquistou seu primeiro título da Copa Libertadores da América?",
    respostas: [
      { opcao: "2008", correto: false },
      { opcao: "2023", correto: true },
      { opcao: "2012", correto: false },
    ],
  },
  {
    pergunta:
      "Quem era o técnico do Fluminense no título da Copa Libertadores da América de 2023?",
    respostas: [
      { opcao: "Fernando Diniz", correto: true },
      { opcao: "Abel Braga", correto: false },
      { opcao: "Cuca", correto: false },
    ],
  },
  {
    pergunta:
      "Qual clube o Fluminense derrotou na final da Copa Libertadores da América de 2023?",
    respostas: [
      { opcao: "LDU Quito (Equador)", correto: false },
      { opcao: "Boca Juniors (Argentina)", correto: true },
      { opcao: "Palmeiras (Brasil)", correto: false },
    ],
  },
  {
    pergunta:
      "Onde foi disputada a final da Copa Libertadores da América de 2023?",
    respostas: [
      { opcao: "Estádio Monumental de Núñez (Buenos Aires)", correto: false },
      { opcao: "Estádio Centenario (Montevidéu)", correto: false },
      { opcao: "Estádio do Maracanã (Rio de Janeiro)", correto: true },
    ],
  },
  {
    pergunta:
      "Qual jogador marcou o gol do título do Fluminense na final da Copa Libertadores da América de 2023?",
    respostas: [
      { opcao: "Germán Cano", correto: false },
      { opcao: "John Kennedy", correto: true },
      { opcao: "Fred", correto: false },
    ],
  },
  {
    pergunta:
      "Qual foi o placar da final da Copa Libertadores da América de 2023?",
    respostas: [
      { opcao: "2 a 1 para o Fluminense", correto: true },
      { opcao: "1 a 0 para o Fluminense", correto: false },
      { opcao: "3 a 2 para o Fluminense", correto: false },
    ],
  },
  {
    pergunta: "Qual era a frase de slogan oficial da popa Libertadores da América?",
    respostas: [
      { opcao: "A Conquista Épica", correto: false },
      { opcao: "Rumo à Glória Eterna", correto: true },
      { opcao: "O Sonho Tricolor", correto: false },
    ],
  },
];

// PARTE 2: Pegando os elementos do HTML
// Selecionamos os elementos HTML que serão manipulados pelo JavaScript.
const perguntaElemento = document.querySelector(".pergunta"); // Elemento onde a pergunta será exibida.
const respostasElemento = document.querySelector(".respostas"); // Contêiner onde os botões de resposta serão adicionados.
const progressoElemento = document.querySelector(".progresso"); // Elemento que mostrará o progresso do quiz (ex: "1/25").
const textoFinal = document.querySelector(".fim span"); // Elemento de texto na tela final que exibe o resultado.
const conteudo = document.querySelector(".conteudo"); // Contêiner principal do quiz (perguntas e respostas).
const conteudoFinal = document.querySelector(".fim"); // Contêiner da tela final do quiz.
const reiniciarBotao = document.getElementById("reiniciarJogo"); // Seleciona o novo botão de reiniciar pelo seu ID.

// PARTE 3: Variáveis para controle do jogo
let indiceAtual = 0; // Índice da pergunta atual, inicia em 0 para a primeira pergunta.
let acertos = 0; // Contador de acertos, inicia em 0.

// PARTE 4: Função para carregar uma nova pergunta
function carregarPergunta() {
  // Esta função é responsável por exibir a pergunta atual e suas opções de resposta.
  progressoElemento.innerHTML = `${indiceAtual + 1}/${perguntas.length}`; // Atualiza o texto do progresso (ex: "1/25").
  const perguntaAtual = perguntas[indiceAtual]; // Pega o objeto da pergunta atual com base no 'indiceAtual'.
  perguntaElemento.innerHTML = perguntaAtual.pergunta; // Exibe o texto da pergunta na tela.

  respostasElemento.innerHTML = ""; // Limpa as respostas anteriores para que apenas as novas opções sejam exibidas.

  // Percorre todas as respostas da pergunta atual
  perguntaAtual.respostas.forEach((resposta) => {
    // Usado forEach para iterar sobre cada objeto de resposta no array 'perguntaAtual.respostas'.
    // É uma abordagem mais moderna e legível que o loop 'for' tradicional para arrays.

    // Cria um novo elemento 'button' (botão) para cada opção de resposta.
    const botao = document.createElement("button");
    // Adiciona a classe CSS 'botao-resposta' ao botão para aplicar o estilo definido no CSS.
    botao.classList.add("botao-resposta");
    // Define o texto visível do botão com a opção de resposta (resposta.opcao).
    botao.innerText = resposta.opcao;
    // Adiciona um evento de clique no botão.
    botao.onclick = () => {
      // Usado uma 'arrow function' para o evento de clique, o que garante que o 'this' mantenha o contexto correto (embora não seja um problema crucial aqui, é uma boa prática).

      // Verifica se a resposta clicada está marcada como correta (resposta.correto é true).
      if (resposta.correto) {
        acertos++; // Incrementa o contador de acertos se a resposta estiver correta (forma abreviada de 'acertos = acertos + 1').
      }

      // Avança para a próxima pergunta, incrementando o índice atual.
      indiceAtual++;

      // Verifica se ainda há perguntas restantes no array 'perguntas'.
      if (indiceAtual < perguntas.length) {
        carregarPergunta(); // Se houver mais perguntas, chama a função novamente para carregar a próxima.
      } else {
        // Se não houver mais perguntas, o quiz terminou.
        finalizarJogo(); // Chama a função para exibir a tela final.
      }
    };

    // Adiciona o botão de resposta criado ao contêiner de respostas na tela.
    respostasElemento.appendChild(botao);
  });
}

// PARTE 5: Função para mostrar a tela final
function finalizarJogo() {
  // Esta função é chamada quando todas as perguntas foram respondidas.
  textoFinal.innerHTML = `Você acertou ${acertos} de ${perguntas.length} perguntas!`; // Exibe o resultado final do quiz, mostrando quantos acertos o usuário teve.
  conteudo.style.display = "none"; // Esconde o contêiner principal das perguntas do jogo.
  conteudoFinal.style.display = "flex"; // Mostra a tela final, alterando seu display para 'flex' (assumindo que o CSS a esconde inicialmente).
}

// PARTE 6: Função para reiniciar o jogo
function reiniciarJogo() {
  // Esta função é chamada quando o botão "Reiniciar Jogo" é clicado.
  indiceAtual = 0; // Reseta o índice da pergunta para 0, voltando ao início do quiz.
  acertos = 0; // Reseta o contador de acertos para 0.
  conteudo.style.display = "flex"; // Mostra novamente o contêiner das perguntas do jogo.
  conteudoFinal.style.display = "none"; // Esconde a tela final.
  carregarPergunta(); // Carrega a primeira pergunta novamente para iniciar um novo jogo.
}

// PARTE 7: Iniciando o jogo pela primeira vez e adicionando o evento de clique para reiniciar
// Chama a função 'carregarPergunta' uma vez para iniciar o quiz assim que a página é carregada.
carregarPergunta();
// Adiciona um 'event listener' de 'click' ao botão de reiniciar (selecionado pelo seu ID), que chamará a função 'reiniciarJogo' quando clicado.
reiniciarBotao.addEventListener("click", reiniciarJogo);
