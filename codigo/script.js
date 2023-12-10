let users = JSON.parse(localStorage.getItem('users')) || [];

function cadastrologin() {
    var login = document.getElementById("username").value;
    var senha = document.getElementById("password").value;

    var user = users.find(u => u.login === login && u.senha === senha);

    if (user) {
        alert("Login bem-sucedido");
        window.location.replace("index.html");
    } else {
        alert("Login ou senha incorretos");
    }
}

function cadastroregistro() {
    var login = document.getElementById("username").value;
    var senha = document.getElementById("password").value;

    var userExists = users.some(u => u.login === login);

    if (userExists) {
        alert("Usuário já cadastrado");
    } else {
        users.push({ login, senha });

        localStorage.setItem('users', JSON.stringify(users));

        alert("Cadastro bem-sucedido");
        window.location.replace("Login.html");
    }
}

document.getElementById('save-button').addEventListener('click', saveUser);


function saveUser() {
    alert('Usuário registrado com sucesso');
}


