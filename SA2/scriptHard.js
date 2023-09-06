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