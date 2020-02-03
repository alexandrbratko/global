$(document).ready(function() {
  //меню при скроллинге
  $(window).scroll(function() {
    if ($(this).scrollTop() > 200) {
      $(".nav__menu").addClass("nav__menu_scroll");
    } else {
      $(".nav__menu").removeClass("nav__menu_scroll");
    }
  });

  $(".hamburger").on("click", function() {
    $(".nav__menu").toggleClass("nav__menu_active");
  });

  $(".nav__item").each(function(item) {
    $(this).on("click", function() {
      $(".nav__menu").toggleClass("nav__menu_active");
    });
  });

  // слайдер
  $(".reviews__item").slick({
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 1200,
    prevArrow: `<button type="button" class="slick-prev">
		<img src="icons/prev.svg">
		</button>`,
    nextArrow: `<button type="button" class="slick-next">
		<img src="icons/next.svg">
		</button>`,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          dots: false,
          arrows: false
        }
      }
    ]
  });
  // валидация формы
  function validateForms(form) {
    $(form).validate({
      rules: {
        name: {
          required: true,
          minlength: 2
        },
        phone: {
          required: true
        },
        email: {
          required: true,
          email: true
        },
        textarea: {
          required: false,
          maxlength: 50
        }
      },
      messages: {
        name: {
          required: "Пожалуйста введите ваше имя",
          minlength: jQuery.validator.format("Введите {0} символа!")
        },
        phone: {
          required: "Пожалуйста введите ваш номер телефона"
        },
        email: {
          required: "Пожалуйста укажите вашу почту",
          email: "Ваш почтовый ящик должен иметь формат name@domain.com"
        },
        textarea: {
          required: "Введите пожалуйста ваше сообщение"
        }
      }
    });
  }
  validateForms("#consultation-form form");
  validateForms("#question-form form");
  // отправка писем
  $("form").submit(function(e) {
    e.preventDefault();
    $.ajax({
      type: "POST",
      url: "mailer/smart.php",
      data: $(this).serialize()
    }).done(function() {
      $(this)
        .find("input")
        .val("");
      $(form).trigger("reset");
    });
    return false;
  });
});
