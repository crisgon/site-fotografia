function updateLogo() {
    var logo = document.querySelector(".logo-vertical");
    if(window.innerWidth < 767) { // verifica a largura da janela do navegador
        logo.remove();
    }
}

updateLogo(); // faz o primeiro ajuste



