document.addEventListener("DOMContentLoaded", function() {
  const burger = document.getElementById('hamburger');
  const nav = document.getElementById('navbar');
  nav.classList.remove('menu-opened');
  let menu = 'closed';


  burger.addEventListener("click", function() {
    if (menu == 'closed') {
      menu = 'opened';
      nav.classList.add('menu-opened');
    } else {
      menu = 'closed';
      nav.classList.remove('menu-opened');
    }
  }
  , false);

});
