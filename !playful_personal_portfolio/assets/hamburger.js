document.addEventListener("DOMContentLoaded", function() {
  const burger = document.getElementById('hamburger');
  const nav = document.getElementById('navbar');
  nav.classList.remove('menu-opened');
  let menu = 'closed';

  // Event listener for burger menu click
  burger.addEventListener("click", function() {
    if (menu === 'closed') {
      menu = 'opened';
      nav.classList.add('menu-opened');
      document.querySelectorAll('.line-burger').forEach(function(line) {
        line.classList.add('animate');
      });
    } else {
      menu = 'closed';
      nav.classList.remove('menu-opened');
      document.querySelectorAll('.line-burger').forEach(function(line) {
        line.classList.remove('animate');
      });
    }
  });

  // Event listener for clicks outside of the menu
  document.addEventListener("click", function(event) {
    const target = event.target;
    if (!nav.contains(target) && !burger.contains(target)) {
      if (menu === 'opened') {
        menu = 'closed';
        nav.classList.remove('menu-opened');
        document.querySelectorAll('.line-burger').forEach(function(line) {
          line.classList.remove('animate');
        });
      }
    }
  });
});
