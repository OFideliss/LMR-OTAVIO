function Enviar() {
    let nomeCompleto = document.getElementById("Cadastro").nomeCompleto.value;
    let endereco = document.getElementById("Cadastro").endereco.value;
    let email = document.getElementById("Cadastro").email.value;
    let confirmeEmail = document.getElementById("Cadastro").confirmeEmail.value;
    let senha = document.getElementById("Cadastro").senha.value;
    let confirmeSenha = document.getElementById("Cadastro").confirmeSenha.value;

    if (nomeCompleto == "") {
        alert("Preencha o campo Nome Completo");
        return false;
    }

    if (endereco == "") {
        alert("Preencha o campo Endereço");
        return false;
    }

    if (email == "") {
        alert("Preencha o campo Email");
        return false;
    }

    if (confirmeEmail == "") {
        alert("Preencha o campo Confirmar Email");
        return false;
    }

    if (senha == "") {
        alert("Preencha o campo Senha");
        return false;
    }

    if (confirmeSenha == "") {
        alert("Preencha o campo Confirmar Senha");
        return false;
    }

    if (email != confirmeEmail) {
        alert("Os emails não são iguais. Bora digitar tudo denovo rs")
    }

    if (senha != confirmeSenha) {
        alert("As senhas não são iguais. Bora digitar tudo denovo rs")
    }
    
}