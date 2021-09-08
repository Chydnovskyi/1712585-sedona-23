const menuBtn = document.querySelector('.menu__btn');
const menuNav = document.querySelector('.menu-nav');
const menuBtnShow = document.querySelector('.menu__btn--show');


menuNav.classList.remove("menu__show");
menuBtnShow.classList.remove('menu__btn--show');

menuBtn.addEventListener("click", function(evt) {
  evt.preventDefault();
  menuNav.classList.toggle("menu__show");
  menuBtnShow.classList.toggle('menu__btn--show');
});
