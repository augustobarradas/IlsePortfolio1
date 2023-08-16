const logo = document.querySelector('.logo__imagem');

function onClickLogo() {
    document.location.pathname = '/';
}
logo.addEventListener('click', onClickLogo)

// const pageName = document.location.pathname.slice(1)
// const currentPageLink = document.querySelector(`a[href="${pageName}"]`)
// currentPageLink.classList.add('active')

var elemento = document.getElementById("banner__superior");
elemento.classList.add("bannerSuperiorJs");

var quadrado = document.getElementById("bannerSuperiorJs");
quadrado.style.width = "100px";
quadrado.style.height = "100px";
quadrado.style.backgroundColor = "blue";


