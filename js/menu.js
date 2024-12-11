window.onscroll = function () {
    stickyNavbar();
  };
  
  var navbar = document.querySelector(".nav");
  var sticky = navbar.offsetTop; // Posição do topo da navbar
  var lastScrollPos = 0; // Posição da rolagem anterior
  
  function stickyNavbar() {
    const currentScrollPos = window.pageYOffset;
  
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
    } else {
      navbar.classList.remove("stickydesactive");
    }
  
    // Garantir que a navbar não se mova para baixo se a rolagem for maior que o limite
    if (currentScrollPos <= sticky) {
      navbar.classList.remove("sticky");
    }
  }
  