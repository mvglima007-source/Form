function validarLogin(event) {
    event.preventDefault();

    const usuarioValido = "admin";
    const senhaValida = "123456";

    const Usuarioinput = document.getElementById('usuario');
    const senhaInput = document.getElementById('password');
    const mensagemErro = document.getElementById('mensagem-erro');
    mensagemErro.textContent = "";

    const usuario = Usuarioinput.value;
    const senha = senhaInput.value;

    console.log(usuario, senha);

    if (usuarioValido === usuario && senhaValida === senha) {
        alert("Login realizado com sucesso! Redirecionando...");
        window.location.href = "cadastro.html";

    } else {
        mensagemErro.textContent = "Usuário ou senha incorretos.";
        Usuarioinput.focus();
        Usuarioinput.value = "";
        senhaInput.value = "";
    }
}

function salvarCadastro(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const dataNasc = document.getElementById('datanasc').value;
    const escolaridade = document.getElementById('escolaridade').value;

    const genero = document.querySelector("input[name='genero']:checked")?.value;
    const linguagens = document.querySelectorAll("input[name='habilidade']:checked");


    const habilidade = Array.from(linguagens).map(x => x.value)

    //Criar objeto
    const usuario = {
        nome,
        email,
        dataNasc,
        escolaridade,
        genero,
        habilidade
    }

    //Armazenar em LocalStorege os dados do cadastro e tranforma em JSON.stringify
    localStorage.setItem("UsuárioCadastrado", JSON.stringify(usuario))
    alert("Cadastro efetuado com sucesso! ")
    console.log(usuario)

}


