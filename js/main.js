$(document).ready(function() {

  // slider
  const swiper = new Swiper('.swiper-container', {
    loop: true,
    autoplay: {
      delay: 9000,
    },
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
  });

  //burger menu
  $(".header__burger").click(function() {
    if (!$(".burger__nav").hasClass("burger__nav--open")) {
      $(".burger__nav").addClass("burger__nav--open");
      $(".burger__menu").addClass("burger__menu--close");
    } else {
      $(".burger__nav").removeClass("burger__nav--open");
      $(".burger__menu").removeClass("burger__menu--close");
    }
  });

  //search
  if ($(window).width() < 1250) {
    $(".search__icon").click(function() {
      if (!$(".header__search").hasClass("header__search--open")) {
        $(".header__search").addClass("header__search--open");
        $(".search__open").addClass("search__open--active");
        $(".search__close").removeClass("search__close--hidden");
      } else {
        $(".header__search").removeClass("header__search--open");
        $(".search__open").removeClass("search__open--active");
      }
    });
    $(".search__close").click(function() {
      $(".search__close").addClass("search__close--hidden");
      $(".header__search").removeClass("header__search--open");
      $(".search__open").removeClass("search__open--active");
    });
  }

  //dropdown
  $(".catalogy__link").click(function(event) {
    event.preventDefault();
    let $id = $(this).attr('id');
    $(".catalogy__link").each(function() {
      if( $( this ).attr('id') !== $id) {
        $(this).removeClass("catalogy__link--open");
      }
    });
    $(this).toggleClass("catalogy__link--open");
  });
});
