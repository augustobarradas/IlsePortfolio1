const logo = document.querySelector('.logo__imagem');

function onClickLogo() {
    document.location.pathname = '/';
}
logo.addEventListener('click', onClickLogo)

// const pageName = document.location.pathname.slice(1)
// const currentPageLink = document.querySelector(`a[href="${pageName}"]`)
// currentPageLink.classList.add('active')

