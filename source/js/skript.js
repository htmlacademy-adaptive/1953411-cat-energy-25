let navMain = document.querySelector('.main-navigation');
let navToggle = document.querySelector('.main-navigation__toggle');
let map = document.querySelector('.contacts__map');

navMain.classList.remove('main-navigation--nojs');
map.classList.remove('contacts__map--no-js');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('main-navigation--closed')) {
    navMain.classList.remove('main-navigation--closed');
    navMain.classList.add('main-navigation--opened');
  } else {
    navMain.classList.add('main-navigation--closed');
    navMain.classList.remove('main-navigation--opened');
  }
});
