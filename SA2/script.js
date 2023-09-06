//===========================================================Semaforo=============================================================

// "img/SemaforoVermelhoSemFundo.png"
const imagens = ["img/SemaforoVerdeSemFundo.png", "img/SemaforoAmareloSemFundo.png", "img/SemaforoVermelhoSemFundo.png"];
let i = 0;

function trocar() {
    const minhaImagen = document.getElementById('figura');
    minhaImagen.src = imagens[i];

    i++; // Incrementa i em 1

    if (i >= imagens.length) { // se i for maior que o comprimento do vetor(3), então zera o i
        i = 0; // Reinicia i para 0 quando atinge o final do array
    }

    // Define os tempos de troca com base na imagem atual
    let tempoTroca = 5000; // Tempo padrão (vermelho para verde) demora 4 segundos
    if (i === 2) { // se indice 2 (Semafaro cor vermelho) o tempo muda para 1 segundo
        tempoTroca = 2000; // o tempo de troca do amarelo para verde é menor 1 segundo
    }

    setTimeout(trocar, tempoTroca);
}

setTimeout(trocar, 0); // Inicia a função, o tempo de 0 segundos significa que a function ira rodar imediatamente sem atrasos 
//
//
//
//
//===========================================================Pedra Papel Tesoura=============================================================
//
//
//
//
// Função para salvar a escolha do usuário no armazenamento local
function salvarEscolha(opcao) {
    localStorage.setItem('opcaoSelecionada', opcao);
}

// Mapeia as opções do usuário para os caminhos das imagens
const imagensSelecao = {
    'Pedra': 'img/PedraSemFundo.png',
    'Papel': 'img/PapelSemFundo.png',
    'Tesoura': 'img/TesouraSemFundo.png'
};

let escolhaUsuario = '';
const ConfSelec = document.getElementById('ConfSelec');
let opcaoSelecionada = ''; // Variável para armazenar a opção selecionada

function verificarSelecao() {
    // se seleção estiver vazia não permite confirmar seleção
    if (escolhaUsuario !== "") {
        ConfSelec.disabled = false;
    } else {
        ConfSelec.disabled = true;
    }
}

function Selecao(opcao) {
    escolhaUsuario = opcao;
    // alert('Escolha do usuário: ' + escolhaUsuario);
    selecaoTexto.textContent = `Você selecionou: ${opcao}`;
    verificarSelecao(); // Verifica a seleção sempre que uma opção é escolhida
    opcaoSelecionada = opcao;
}

function confirmarEscolha() {
    //Armazena localmente o valor de opcaoSelcionada
    localStorage.setItem('opcaoSelecionada', opcaoSelecionada);
    var ResultadoURL = "Resultado.html";
    window.location.href = ResultadoURL;
}
//
//
//
//
//===========================================================Resultado Pedra Papel Tesoura=============================================================
//
//
//
//
// Quando a página é carregada, recupere a escolha do usuário e defina a imagem inicial
window.onload = function () {
    // Recuperar a escolha do usuário do armazenamento local
    const opcaoSelecionada = localStorage.getItem('opcaoSelecionada');

    // Pega a imagem no primeiro card
    const minhaImagem = document.getElementById('imagem1');

    // Define o caminho da imagem inicial com base na escolha do usuário recuperada
    minhaImagem.src = imagensSelecao[opcaoSelecionada]; // Substitua pelo caminho da imagem desejada

    // Restante do seu código para a troca de imagens
    // ...
};

// Função para sortear a imagem do segundo card aleatoriamente
function sortearImagem() {
    const imagens = ["img/PedraSemFundo.png", "img/PapelSemFundo.png", "img/TesouraSemFundo.png"];
    // Gera um número aleatório entre 0 e 2 (a multiplicação pelo comprimento do vetor imagens quer dizer que ira sortear um número entre 0 e 2)
    //Math.random() sorteia um numero ente 0 e 1
    //Math.floor() arrendonda um número para inteiro
    const numeroAleatorio = Math.floor(Math.random() * imagens.length);

    // Pega a imagem no segundo card
    const minhaImagemSegundoCard = document.getElementById('imagem2');

    // Define o caminho da imagem com base no número aleatório gerado
    minhaImagemSegundoCard.src = imagens[numeroAleatorio];
}

function obterEnderecoImagem(cardId) {
    const card = document.getElementById(cardId);
    if (card) {
      const imagem = card.querySelector('img.card-img-top');
      if (imagem) {
        return imagem.src;
      }
    }
    return null; // Retorna null se o card ou a imagem não forem encontrados
  }
  
  // Exemplo de uso:
  const enderecoImagemPrimeiroCard = obterEnderecoImagem('imagem1');
  const enderecoImagemSegundoCard = obterEnderecoImagem('imagem2');
  
  if (enderecoImagemPrimeiroCard !== null && enderecoImagemSegundoCard !== null) {
    alert('Endereço da imagem do primeiro card: ' + enderecoImagemPrimeiroCard);
    alert('Endereço da imagem do segundo card: ' + enderecoImagemSegundoCard);
  } else {
    alert('Imagens não encontradas nos cards.');
  }
  

// Chame a função para sortear a imagem aleatória quando necessário
sortearImagem();

// Chame a função para mostrar o vencedor
obterEnderecoImagem();



