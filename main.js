const logo = document.querySelector('.logo__imagem');

function onClickLogo() {
    document.location.pathname = '/';
}
logo.addEventListener('click', onClickLogo);

// const pageName = document.location.pathname.slice(1)
// const currentPageLink = document.querySelector(`a[href="${pageName}"]`)
// currentPageLink.classList.add('active')

// Testes com adicao de classes e fazendo um quadrado

// const elemento = document.querySelector(".banner__superior");
// elemento.classList.add("bannerSuperiorJs");

// const quadrado = document.querySelector(".quadrado__propaganda");
// quadrado.style.width = "100px";
// quadrado.style.height = "100px";
// quadrado.style.backgroundColor = "blue";

// Abaixo tentei replicar o que foi feito lá em cima para mexer o banner.
// Testei do jeito que esta abaixo e coloquei as barras, funcionou do mesmo jeito pq fiz as alteracoes no Header.css. Entao sei se esse código serve pra alguma coisa kkkk

// const bannerTeste = document.querySelector('.quadrado__propaganda');

// bannerTeste.addEventListener('click', onClickLogo);


const banner = document.querySelector(".quadrado__propaganda");
const images = banner.getElementsByTagName("img");
let currentImageIndex = 0;

function showImage(index) {
    for (let i = 0; i < images.length; i++) {
        images[i].style.display = "none";
    }
    images[index].style.display = "block";
}

function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    showImage(currentImageIndex);
}

setInterval(nextImage, 3000); // Troca de imagem a cada 3 segundos
showImage(currentImageIndex);
