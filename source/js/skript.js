let navMain = document.querySelector('.main-navigation');
let navToggle = document.querySelector('.main-navigation__toggle');
let map = document.querySelector('.contacts__map');
let siteList = document.querySelector('.site-list');

navMain.classList.remove('main-navigation--nojs');
map.classList.remove('contacts__map--nojs');
siteList.classList.remove('site-list--nojs');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('main-navigation--closed')) {
    navMain.classList.remove('main-navigation--closed');
    navMain.classList.add('main-navigation--opened');
  } else {
    navMain.classList.add('main-navigation--closed');
    navMain.classList.remove('main-navigation--opened');
  }
});

navToggle.addEventListener('click', function () {
  if (siteList.classList.contains('site-list--closed')) {
    siteList.classList.remove('site-list--closed');
    siteList.classList.add('site-list--opened');
  } else {
    siteList.classList.add('site-list--closed');
    siteList.classList.remove('site-list--opened');
  }
});
