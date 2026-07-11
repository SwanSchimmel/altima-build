(function () {
  const slider = $('#slider__container');

  if (slider.length && $.fn.slick) {
    slider.slick({
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
        { breakpoint: 1251, settings: { slidesToShow: 3, slidesToScroll: 3, infinite: false, dots: true } },
        { breakpoint: 991, settings: { slidesToShow: 3, slidesToScroll: 3, infinite: false, dots: true } },
        { breakpoint: 600, settings: { slidesToShow: 2, slidesToScroll: 2, dots: false } },
        { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } }
      ]
    });
  }

  const topButton = $('.idTop');
  $(window).on('scroll', function () {
    if ($(window).scrollTop() >= 50) {
      topButton.fadeIn();
    } else {
      topButton.fadeOut();
    }
  });

  topButton.on('click', function (evt) {
    evt.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, 800);
  });

  $('#scroll_bottom').on('click', function () {
    const target = $('.services, .page-content').first();
    $('html, body').animate({ scrollTop: target.offset().top - 90 }, 600);
    return false;
  });

  $('.menu-mobile').on('click', function () {
    $('.main-nav').toggleClass('main-nav-visible');
    $('.menu-mobile').toggleClass('menu-mobile-visible');
  });

  const modalLinks = document.querySelectorAll('.map-button');
  const modalPopup = document.querySelector('.modal');

  if (modalLinks.length && modalPopup) {
    const modalClose = modalPopup.querySelector('.modal-close');
    const modalForm = modalPopup.querySelector('.contact-form');
    const modalName = modalPopup.querySelector('.contact-form-field');
    const modalTel = modalPopup.querySelector('.form-tel');
    let storage = '';

    try {
      storage = localStorage.getItem('name') || '';
    } catch (err) {
      storage = '';
    }

    modalLinks.forEach(function (link) {
      link.addEventListener('click', function (evt) {
        evt.preventDefault();
        modalPopup.classList.add('modal-show');
        if (storage) {
          modalName.value = storage;
          modalTel.focus();
        } else {
          modalName.focus();
        }
      });
    });

    modalClose.addEventListener('click', function () {
      modalPopup.classList.remove('modal-show', 'modal-error');
    });

    modalForm.addEventListener('submit', function (evt) {
      if (!modalName.value || !modalTel.value) {
        evt.preventDefault();
        modalPopup.classList.remove('modal-error');
        modalPopup.offsetWidth;
        modalPopup.classList.add('modal-error');
      } else {
        try {
          localStorage.setItem('name', modalName.value);
        } catch (err) {}
      }
    });

    window.addEventListener('keydown', function (evt) {
      if (evt.key === 'Escape' && modalPopup.classList.contains('modal-show')) {
        evt.preventDefault();
        modalPopup.classList.remove('modal-show');
      }
    });
  }
})();
