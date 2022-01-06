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



// LOGIN
const btnLogin = document.querySelector('.link_login');
const headerNav = document.querySelector('.nav');
btnLogin.addEventListener('click', function() {
  headerNav.classList.toggle('_show');
});



// SLIDER onboarding
if (document.querySelector('.js-sl-onboarding')) {
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
}


// DROPDOWN
if (document.querySelector('.download_solutions')) {
  const solutionsClick = document.querySelector('.download_solutions');
  const solutionsDropdown = document.querySelector('.download_box');
  solutionsClick.addEventListener('click', function() {
    solutionsDropdown.classList.toggle('_show');
  });
}
if (document.querySelector('.select_devices')) {
  const selectClick = document.querySelector('.select_devices');
  const selectDropdown = document.querySelector('.select_box');
  selectClick.addEventListener('click', function() {
    selectDropdown.classList.toggle('_show');
  });
}
// TABS
if (document.querySelector('.tabs_btn')) {
  function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }

  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen").click();
}
// SLIDER BUILDING
if (document.querySelector('.js-sl-tabs')) {
  var mySwiper = new Swiper('.js-sl-tabs', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 0,
    // autoplay: {
    //   delay: 5000,
    // },
    navigation: {
      nextEl: '.swiper-tabs-button-next',
      prevEl: '.swiper-tabs-button-prev',
    },
    pagination: {
      el: ".swiper-pagination_tabs",
      type: "fraction",
    },
  });
}













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
