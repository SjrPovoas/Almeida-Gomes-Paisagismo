document.getElementById('menu-icon').addEventListener('click', function() {
    var navLinks = document.getElementById('nav-links');
    var menuIcon = document.getElementById('menu-icon');
    var menuLogo = document.getElementById('menu-logo');
    // Visibilidade menu
    navLinks.classList.toggle('active');

    if (navLinks.classList.contains('active')) {
        menuIcon.src = "./img/fechar-menu.png";
        menuLogo.classList.add('visible');

        // mudando os textos instantaneamente
        item.addEventListener("click", () => {
            navLinks.classList.toggle("active", false)
            menuIcon.src = "./img/abrir-menu.png";
            menuLogo.classList.remove('visible');
        })

    } else {
        menuIcon.src = "/img/abrir-menu.png";
        menuLogo.classList.remove('visible');
    }
});