


// Мобильное меню
const btnMobile = document.querySelector('.btn_mobile');
const headerTop = document.querySelector('.header_top');
const headerContacts = document.querySelector('.header_nav');
const bodyLock = document.querySelector('body');
btnMobile.addEventListener('click', function() {
  headerTop.classList.toggle('_mobile');
  headerContacts.classList.toggle('_mobile');
  bodyLock.classList.toggle('bodyLock');
});
const btnLogin = document.querySelector('.link_login');
const headerNav = document.querySelector('.nav');
btnLogin.addEventListener('click', function() {
  headerNav.classList.toggle('_show');
});





// SLIDER menu
var mySwiper = new Swiper('.js-sl-onboarding', {
  loop: true,
  slidesPerView: 1,
  // spaceBetween: 10,
  // autoplay: {
  //   delay: 5000,
  // },
  pagination: {
    el: '.swiper-pagination_onboarding',
    clickable: true,
  },
});
































// accordion

var btn_title = document.querySelectorAll('.accordion');
var disc = document.querySelectorAll('.accordion_content');

for (var i = 0; i < btn_title.length; i++) {
  btn_title[i].addEventListener('click', fun_open);

  function fun_open(event) {
    for (var i = 0; i < btn_title.length; i++) {
      disc[i].classList.remove('active');
    btn_title[i].classList.remove('active');
      if (btn_title[i] == event.currentTarget) {
        disc[i].classList.toggle('active');
    btn_title[i].classList.toggle('active');
      }
    }

  }

}
