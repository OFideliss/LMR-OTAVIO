//===========================================================Pedra Papel Tesoura=============================================================
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

//=============Seleção do Usuario=============================================
function Selecao(opcao) {
    escolhaUsuario = opcao;
    const imagemUsuario = document.getElementById('imagem1');
    // alert('Escolha do usuário: ' + escolhaUsuario);
    selecaoTexto.textContent = `Você selecionou: ${opcao}`;
    verificarSelecao(); // Verifica a seleção sempre que uma opção é escolhida
    opcaoSelecionada = opcao;
    // Atualiza a imagem do usuário com base na escolha
    imagemUsuario.src = imagensSelecao[opcao];

}

//=============Confirmar Seleão do Usuario==================================== 
function confirmarEscolha() {
    //Armazena localmente o valor de opcaoSelcionada
    localStorage.setItem('opcaoSelecionada', opcaoSelecionada);
    var ResultadoURL = "Resultado.html";
    window.location.href = ResultadoURL;
}

//===========================================================Resultado=============================================================

//============Sorteia a imagem do computador==================================
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

//============Mostra a Section com o resultado==================================
function mostrarResultado() {
    var mostraResultado = document.getElementById("Resultado");
    var mostraGame = document.getElementById("Game");
    var botaoSelecao = document.getElementById("botaoSelecao");
    
    if (mostraResultado.style.display === "none") {
        mostraGame.style.display = "none";
        botaoSelecao.style.display = "none";
        mostraResultado.style.display = "block";
    } else {
        mostraResultado.style.display = "none";
    }
}

// Chame a função para sortear a imagem aleatória
sortearImagem();

