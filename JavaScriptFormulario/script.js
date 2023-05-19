function Concatenar() {
    let nome = document.getElementById("pNome").value;
    let sobrenome = document.getElementById("pSobrenome").value;
    let concatenado = nome + ' ' + sobrenome;
    alert('Olá ' + concatenado);
}

function Soma() {
    let numero1 = document.getElementById("Calculo").Numero1.value;
    let numero2 = document.getElementById("Calculo").Numero2.value;
    let resultado = parseInt(numero1) + parseInt(numero2);

    if (numero1 == "" || numero2 == "") {
        alert("Preencha Todos os campos");
    } else {
        alert("O resultado da soma é: " + resultado);

    }

}
function Subtracao() {
    let numero1 = document.getElementById("Calculo").Numero1.value;
    let numero2 = document.getElementById("Calculo").Numero2.value;
    let resultado = parseFloat(numero1) - parseFloat(numero2);

    if (numero1 == "" || numero2 == "") {
        alert("Preencha Todos os campos");
    } else {
        alert("O resultado da subtração é: " + resultado);
    }
}

function Multiplicacao() {
    let numero1 = document.getElementById("Calculo").Numero1.value;
    let numero2 = document.getElementById("Calculo").Numero2.value;
    let resultado = parseFloat(numero1) * parseFloat(numero2);

    if (numero1 == "" || numero2 == "") {
        alert("Preencha Todos os campos");
    } else {
        alert("O resultado da Multiplicação é: " + resultado);
    }
}

function Divisao() {
    let numero1 = document.getElementById("Calculo").Numero1.value;
    let numero2 = document.getElementById("Calculo").Numero2.value;

    if (numero1 == "" || numero2 == "") {
        alert("Preencha Todos os campos");
    } else if (numero2 == 0) {
        alert("Não existe divisão por 0");
    } else {
        let resultado = parseFloat(numero1) / parseFloat(numero2);
        alert("O resultado da Divisão é: " + resultado);
    }

}