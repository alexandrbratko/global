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
});
