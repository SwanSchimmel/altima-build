// $(document).ready(function(){
    $('#slider__container').slick({
      dots: true,
      dotsClass: 'slick-dots',
      infinite: true,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 4,
      arrows: true,
      variableWidth: true,
      centerPadding: '40px',
      prevArrow: $('.slider__button-left'),
      nextArrow: $('.slider__button-right'),
      responsive: [
        {
          breakpoint: 1251,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: false,
            dots: true
          }
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: false,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            dots: false,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });
// });



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
      $('.main-nav').removeClass('main-nav-visible');
      $('.menu-mobile').removeClass('menu-mobile-visible');
  } else {
      $('.main-nav').addClass('main-nav-visible');
      $('.menu-mobile').addClass('menu-mobile-visible');
  }

});

// форма

const modalLink = document.querySelectorAll(".map-button");
const modalPopup = document.querySelector(".modal");
const modalClose = modalPopup.querySelector(".modal-close");
const modalForm = modalPopup.querySelector(".contact-form");
const modalName = modalPopup.querySelector(".contact-form-field");
const modalTel = modalPopup.querySelector(".form-tel");

console.log("length", modalLink.length);

let isStoreageSupport = true;
let storage = "";

try {
  storage = localStorage.getItem("name");
} catch (err) {
  isStoreageSupport = false;
}

// modalLink.addEventListener("click", function(evt) {
//   evt.preventDefault();
//   modalPopup.classList.add("modal-show");

//   if (storage) {
//     modalName.value = storage;
//     modalTel.focus();
//   } else {
//     modalName.focus();
//   }

//   modalName.focus();
// });

for (let i = 0; i < modalLink.length; i++) {
  modalLink[i].addEventListener("click", function(evt) {
    evt.preventDefault();
    modalPopup.classList.add("modal-show");

    if (storage) {
      modalName.value = storage;
      modalTel.focus();
    } else {
      modalName.focus();
    }

    modalName.focus();
  });
}

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

//маска

// $(function(){
//   $("#contact-form-tel").mask("8(999) 999-9999");
// });

