function toggleNavbar() {
    const navLinks = document.querySelector('.nav-links');
    const hamburguer = document.getElementById('hamburguer');
    // Alternar a classe "active" para abrir/fechar o menu
    navLinks.classList.toggle('active');
    hamburguer.classList.add('activedHamburguer');
}
