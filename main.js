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


const bannerTeste = document.querySelector('.quadrado__propaganda--imagem--logo');

bannerTeste.addEventListener('click', onClickLogo);


