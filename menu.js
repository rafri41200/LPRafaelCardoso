document.addEventListener('DOMContentLoaded', () => {
  let btnMenu = document.getElementById('btn-menu');
  let menu = document.getElementById('menu-mobile');
  let menuItems = document.querySelectorAll('#menu-mobile a'); // Seleciona todos os links dentro do menu

  // Função para abrir o menu
  btnMenu.addEventListener('click', () => {
    menu.classList.add('abrir-menu');
  });

  // Função para fechar o menu
  let closeMenu = () => {
    menu.classList.remove('abrir-menu');
  };

  // Fechar o menu ao clicar no botão de fechar
  let btnCloseMenu = document.querySelector('.btn-fechar');
  btnCloseMenu.addEventListener('click', closeMenu);

  // Fechar o menu ao clicar em qualquer item do menu
  menuItems.forEach(item => {
    item.addEventListener('click', closeMenu);
  });
});
