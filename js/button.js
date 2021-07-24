const modalLink = document.querySelector(".map-button");
const modalPopup = document.querySelector(".modal");
const modalClose = modalPopup.querySelector(".modal-close");
const modalForm = modalPopup.querySelector(".contact-form");
const modalName = modalPopup.querySelector(".contact-form-field");
const modalEmail = modalPopup.querySelector(".form-email");

let isStoreageSupport = true;
let storage = "";

try {
  storage = localStorage.getItem("name");
} catch (err) {
  isStoreageSupport = false;
}

modalLink.addEventListener("click", function(evt) {
  evt.preventDefault();
  modalPopup.classList.add("modal-show");

  if (storage) {
    modalName.value = storage;
    modalEmail.focus();
  } else {
    modalName.focus();
  }

  modalName.focus();
});

modalClose.addEventListener("click", function(evt) {
  evt.preventDefault();
  modalPopup.classList.remove("modal-show");
  modalPopup.classList.remove("modal-error");
});

modalForm.addEventListener("submit", function(evt) {
  if (!modalName.value || !modalEmail.value) {
    evt.preventDefault();
    modalPopup.classList.remove("modal-error");
    modalPopup.offsetWidth = modalPopup.offsetWidth;
    modalPopup.classList.add("modal-error");

  } else {
    if (isStoreageSupport) {
      localStorage.setItem("name", modalName.value);
    }
  }
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    if (modalPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      modalPopup.classList.remove("modal-show");
    }
  }
})

/*слайдер*/
// $(document).ready(function(){
//   $('.slider__container').slick();
// });
$('.slider-block').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  dots: true,
  dotsClass: 'slick-dots slider-dots',
  speed: 300,
  prevArrow: $('.btn-left'),
  nextArrow: $('.btn-right'),

});



// кнопка

// $(function() {
//     $('.idTop').click(function(){
//        $('html, body').animate({scrollTop:0}, 'slow');
//    });
// });

function idTop() {

let button = $('.idTop');

$(window).on('scroll', () => {
  if ($(this).scrollTop() >= 50) {
    button.fadeIn();
  } else {
    button.fadeOut();
  }
});

button.on('click', (e) => {
  e.preventDefault();
  $('html').animate({scrollTop: 0}, 1000);
})
}

idTop();

//   стрелка вниз

$(function(){
$('#scroll_bottom').click(function(){
$('html, body').animate({scrollTop: $(document).height() - $(window).height()}, 600);
return false;
});
});

// выпадающее меню

$('.menu-mobile').on('click', function(){
if($('.menu-mobile').hasClass('menu-mobile-visible')){
  $('.main-navigation').removeClass('main-navigation-visible');
  $('.menu-mobile').removeClass('menu-mobile-visible');
} else {
  $('.main-navigation').addClass('main-navigation-visible');
  $('.menu-mobile').addClass('menu-mobile-visible');
}

});
