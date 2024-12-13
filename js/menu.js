window.onscroll = function () {
  stickyNavbar();
};

var navbar = document.querySelector(".nav");
var sticky = navbar.offsetTop; // Posição do topo da navbar
var lastScrollPos = 0; // Posição da rolagem anterior

function stickyNavbar() {
  const currentScrollPos = window.pageYOffset;

  // Se a posição de rolagem for 0 (topo da página), não faz nada
  if (currentScrollPos === 0) {
    navbar.classList.remove("sticky", "stickydesactive");
    return; // Não executa o restante do código
  }

  // Detectar rolagem para cima
  if (currentScrollPos < lastScrollPos) {
    // Ativa comportamento ao rolar para cima
    if (currentScrollPos >= sticky) {
      navbar.classList.add("sticky");
    }
  } else {
    // Remove comportamento ao rolar para baixo
    navbar.classList.remove("sticky", "stickydesactive");
  }

  // Atualiza a posição da rolagem anterior
  lastScrollPos = currentScrollPos;

  // Tornar a navbar maior se estiver sticky e em uma rolagem mais alta
  if (currentScrollPos >= sticky + 100 && currentScrollPos < lastScrollPos) {
    navbar.classList.add("stickydesactive");
    toggleNavbar();
  } else {
    navbar.classList.remove("stickydesactive");
  }

  // Garantir que a navbar não se mova para baixo se a rolagem for maior que o limite
  if (currentScrollPos <= sticky) {
    navbar.classList.remove("sticky");
  }
}

// function toggleNavbar() {
//   const navLinks = document.querySelector('.nav-links');
//   const hamburguer = document.getElementById('hamburguer');
//   // Alternar a classe "active" para abrir/fechar o menu
//   navLinks.classList.toggle('active');
//   hamburguer.classList.add('activedHamburguer');
// }
