// Declaração das variáveis que armazenam os caminhos das imagens
var imgVerm = "img/SemaforoVermelhoSemFundo.png"; // Imagem vermelha
var imgAmar = "img/SemaforoAmareloSemFundo.png";    // Imagem amarela
var imgVerd = "img/SemaforoVerdeSemFundo.png";      // Imagem verde

// Definição da função "trocar" que alterna as imagens
function trocar() {
    // Define o atributo "src" da imagem com id "figura" para o caminho da imagem vermelha
    document.getElementById("figura").src = imgVerm;
    
    // Troca os valores das variáveis para a próxima imagem a ser exibida
    let aux = imgVerm;
    imgVerm = imgAmar;
    imgAmar = aux;
    
    //==============
    
    // Troca os valores das variáveis novamente para a próxima imagem a ser exibida
    let aux1 = imgAmar;
    imgAmar = imgVerd;
    imgVerd = aux1;
}
