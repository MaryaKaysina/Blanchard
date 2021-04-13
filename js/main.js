$(document).ready(function() {
  // slider
  // const swiper = new Swiper('.swiper-container', {
  //   loop: true,
  //   autoplay: {
  //     delay: 9000,
  //   },
  //   effect: 'fade',
  //   fadeEffect: {
  //     crossFade: true
  //   },
  // });

  //burger menu
  $(".header__burger").click(function() {
    if (!$(".header__nav").hasClass("burger__nav--open")) {
      $(".header__nav").addClass("burger__nav--open");
      $(".burger__menu").addClass("burger__menu--close");
    } else {
      $(".header__nav").removeClass("burger__nav--open");
      $(".burger__menu").removeClass("burger__menu--close");
    }
  });

  //search
    $(".search__icon").click(function() {
      if (!$(".header__search").hasClass("header__search--open")) {
        $(".header__search").addClass("header__search--open");
      } else {
        $(".header__search").removeClass("header__search--open");
      }
    });
    $(".search__close").click(function() {
      $(".header__search").removeClass("header__search--open");
    });

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
  $(document).click(function (event) {
    if ( !$(".catalogy__link").is(event.target)) {
      $(".catalogy__link").removeClass("catalogy__link--open");
    }
  });
});
