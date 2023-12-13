function toggleMenu() {
    var menuContainer = document.getElementById("menu-container");
    menuContainer.classList.toggle("show-menu");
}

function redirectToIndex() {
    window.location.href = "index.html";
}

function redirectToLogin() {
    window.location.href = "Login.html";
}

function redirectToCreate() {
    window.location.href = "cadastro.html";
}

function redirectToHelp() {
    window.location.href = "ajuda.html";
}

function redirectToDonate() {
    window.location.href = "sugestao.html";
}

function redirectToAboutUs() {
    window.location.href = "sobrenos.html";
}

function logout() {
    alert("Desconectado");
}

function goBack() {
    window.history.back();
}

  document.addEventListener('DOMContentLoaded', function () {
      const menuContainer = document.getElementById('menu-container');
      const menuButton = document.getElementById('menu-button');
      const bottomButton = document.getElementById('bottom-button');
      const suggestionForm = document.getElementById('suggestionForm');

      menuButton.addEventListener('click', () => {
          menuContainer.style.left = (menuContainer.style.left === '0px') ? '-250px' : '0';
      });

      bottomButton.addEventListener('click', () => {
          window.location.href = 'metemarcha.html';
      });

      suggestionForm.addEventListener('submit', function(event) {
          event.preventDefault();

          var suggestion = document.getElementById('comment').value;

          var jsonData = {
              suggestion: suggestion
          };

          var jsonString = JSON.stringify(jsonData);

          console.log(jsonString);
      });
  });

document.addEventListener('DOMContentLoaded', async function () {
    const gerarNoticias = async () => {
        const newsContainer = document.getElementById('news-box');

        try {
            const response = await fetch('https://jsonfinal1--charlesaganeti.repl.co/noticias');
            const noticiasData = await response.json();

            noticiasData.forEach(noticia => {
                const newsArticle = document.createElement('article');
                const noticiaDiv = document.createElement('div');
                noticiaDiv.classList.add('noticia');

                const image = document.createElement('img');
                image.src = noticia.imageUrl;
                image.alt = `Imagem ${noticia.title}`;

                const title = document.createElement('h3');
                title.textContent = noticia.title;

                const description = document.createElement('p');
                description.textContent = `${noticia.description}`;

                image.addEventListener('click', () => {
                    window.open(noticia.link, '_blank');
                });

                title.addEventListener('click', () => {
                    window.open(noticia.link, '_blank');
                });

                noticiaDiv.appendChild(image);
                noticiaDiv.appendChild(title);
                noticiaDiv.appendChild(description);
                newsArticle.appendChild(noticiaDiv);

                newsContainer.appendChild(newsArticle);
            });
        } catch (error) {
            console.error('Erro ao buscar dados do servidor:', error);
        }
    };

    await gerarNoticias();
});