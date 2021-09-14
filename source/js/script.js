const menuBtn = document.querySelector('.menu__btn');
const menuNav = document.querySelector('.menu-nav');
const headerLogo = document.querySelector('.header__img');
const menu = document.querySelector('.menu');

menuNav.classList.remove("menu__show");
headerLogo.classList.remove('header__img--show');
menu.classList.remove("menu--no-js");

menuBtn.addEventListener("click", function(evt) {
  evt.preventDefault();
  menuNav.classList.toggle("menu__show");
  menuBtn.classList.toggle('menu__btn--close');
  headerLogo.classList.toggle('header__img--show');
});
