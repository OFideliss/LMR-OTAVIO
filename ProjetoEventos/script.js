function Enviar() {
    // declarando variaveisdo formulario de cadastro
    let nomeCompleto = document.getElementById("Cadastro").nomeCompleto.value;
    let telefone = document.getElementById("Cadastro").telefone.value;
    let email = document.getElementById("Cadastro").email.value;
    let confirmeEmail = document.getElementById("Cadastro").confirmeEmail.value;
    let senha = document.getElementById("Cadastro").senha.value;
    let confirmeSenha = document.getElementById("Cadastro").confirmeSenha.value;

    // condições if para enviar alerta de não preenchimento de algum campo do cadastro
    if (nomeCompleto == "") {
        alert("Preencha o campo: Nome completo");
        return false;
    }

    if (telefone == "") {
        alert("Preencha o campo: Telefone");
        return false;
    }

    if (email == "") {
        alert("Preencha o campo: Email");
        return false;
    }
    if (confirmeEmail == "") {
        alert("Confirme o seu email");
        return false;
    }

    if (senha == "") {
        alert("Preencha o campo: Senha");
        return false;
    }

    if (confirmeSenha == "") {
        alert("Confirme a sua senha");
        return false;
    }

    if (email != confirmeEmail) {
        alert("Os emails digitadas não são iguais. Verifique e digite novamente")
    }

    if (senha != confirmeSenha) {
        alert("As senhas digitadas não são iguais. Verifique e digite novamente")
    }

}

function Entrar() {
    //Declarando variaveis de Login
    let email = document.getElementById("Login").email.value;
    let senha = document.getElementById("Login").senha.value;

//Condições If caso o usuario não preencha algum campo
if (email == "") {
    alert("Digite o seu email.");
    return false;
}

if (senha == "") {
    alert("Digite a sua senha.");
    return false;
}
}