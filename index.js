// burger
let burger = document.querySelector('.burger');
let menu = document.querySelector('.header__nav');
let menuLinks = menu.querySelectorAll('.nav__link');

burger.addEventListener('click',

  function () {

    burger.classList.toggle('burger--active');

    menu.classList.toggle('header__nav--active');

    document.body.classList.toggle('stop-scroll');
  })

menuLinks.forEach(function (el) {
  el.addEventListener('click', function () {

    burger.classList.remove('burger--active');

    menu.classList.remove('header__nav--active');

    document.body.classList.remove('stop-scroll')

  })
})

// search
let search = document.querySelector('.nav__search');
let input = document.querySelector('.nav__search_js');
let closed = document.querySelector('.nav__search-close');

search.addEventListener('click',

  function () {

    search.classList.toggle('nav__search--active');

    input.classList.toggle('nav__search_js--active');

  })

closed.addEventListener('click',

  function () {

    search.classList.remove('nav__search--active');

    input.classList.remove('nav__search_js--active');

  })

// tabs
document.querySelectorAll('.stages__btn').forEach(function (tabsBtn) {

  tabsBtn.addEventListener('click', function (e) {

    const path = e.currentTarget.dataset.path;

    document.querySelectorAll('.stages__btn').forEach(function (btn) {

      btn.classList.remove('stages__btn--active')
    });

    e.currentTarget.classList.add('stages__btn--active');

    document.querySelectorAll('.stages__block').forEach(function (tabsBtn) {

      tabsBtn.classList.remove('stages__block--active')
    });

    document.querySelector(`[data-target="${path}"]`).classList.add('stages__block--active');
  });
});

// swiper
const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  speed: 2000,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },

  autoplay: {
    delay: 5000,
  },

  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },

  a11y: {
    paginationBulletMessage: "Перейти к слайду {{index}}"
  },
});

$(".accordion").accordion({
  heightStyle: "content",
  active: false,
  collapsible: true,
  icons: false
  });
