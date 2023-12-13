let users = JSON.parse(localStorage.getItem('users')) || [];

function cadastrologin() {
    var login = document.getElementById("username").value;
    var senha = document.getElementById("password").value;

    var user = users.find(u => u.login === login && u.senha === senha);

    if (user) {
        alert("Login bem-sucedido");
      redirectToIndex();
    } else {
        alert("Login ou senha incorretos");
    }
}

function cadastroregistro() {
    var login = document.getElementById("username").value;
    var senha = document.getElementById("password").value;
    var email = document.getElementById("email").value;
    var confirmarSenha = document.getElementById("confirm_password").value;

    var userExists = users.some(u => u.login === login);

    if (!login || !email || !senha || !confirmarSenha) {
        alert("Preencha todos os campos de registro");
        return;
    }
  
    if (senha !== confirmarSenha) {
        alert("As senhas não coincidem");
        return;
    }
      
    if (userExists) {
        alert("Usuário já cadastrado");
        return;
    }
      else {
        users.push({ login, senha });

        localStorage.setItem('users', JSON.stringify(users));

        alert("Cadastro bem-sucedido");
        redirectToIndex();
    }
}

document.getElementById('save-button').addEventListener('click', saveUser);


function saveUser() {
    alert('Usuário registrado com sucesso');
}


