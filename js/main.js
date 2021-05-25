function createList(arr, yearAdd, path = 'fr') {
  const ulList = document.createElement('ul');
  ulList.classList.add('ul-reset');
  ulList.classList.add('years__artists');
  ulList.classList.add(yearAdd);
  ulList.style.display = 'none';

  for (let i = 0; i < arr.length; i++) {
    const liList = document.createElement('li');
    liList.classList.add('years__art');
    const btnList = document.createElement('button');
    btnList.classList.add('button-reset');
    btnList.classList.add('years__btn');
    btnList.id = yearAdd + '_' + path + '_' + i;
    btnList.textContent = arr[i];
    liList.append(btnList);
    ulList.append(liList);
  }

  return ulList;
}
function createArt(artists, idArt) {

  const sectionArtImg = document.querySelector('.artist__img');
  const sectionArtH4 = document.querySelector('.artist__title');
  const sectionArtSub = document.querySelector('.artist__subtitle');
  const sectionArtDescr = document.querySelector('.artist__descr');

  const imgArtArr = artists.find(artist => artist.id === idArt).img;
  const titleArtArr = artists.find(artist => artist.id === idArt).title;
  const subtitleArtArr = artists.find(artist => artist.id === idArt).subtitle;
  const descrArtArr = artists.find(artist => artist.id === idArt).descr;

  const imgArt = document.createElement('img');
  imgArt.classList.add('img-reset');
  imgArt.classList.add('artist__img');
  imgArt.src = imgArtArr;
  imgArt.alt = titleArtArr;

  const h4Art = document.createElement('h4');
  h4Art.classList.add('h-reset');
  h4Art.classList.add('artist__title');
  h4Art.textContent = titleArtArr;

  const subtitleArt = document.createElement('p');
  subtitleArt.classList.add('h-reset');
  subtitleArt.classList.add('artist__subtitle');
  subtitleArt.textContent = subtitleArtArr;

  const descreArt = document.createElement('p');
  descreArt.classList.add('h-reset');
  descreArt.classList.add('artist__descr');
  descreArt.textContent = descrArtArr;

  sectionArtImg.replaceWith(imgArt);
  sectionArtH4.replaceWith(h4Art);
  sectionArtSub.replaceWith(subtitleArt);
  sectionArtDescr.replaceWith(descreArt);

}

$(document).ready(function() {
  // slider
  const swiper = new Swiper('.swiper-container', {
    spaceBetween: 50,
    slidesPerView: 3,
    slidesPerGroup: 3,
    slidesPerColumn: 2,
    slidesPerColumnFill: 'row',
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        slidesPerColumn: 1,
        slidesPerGroup: 1,
      },
      658: {
        spaceBetween: 35,
        slidesPerView: 2,
        slidesPerGroup: 2,
      },
      1600: {
        spaceBetween: 50,
        slidesPerView: 3,
        slidesPerGroup: 3,
        slidesPerColumn: 2,
      },
    }
  });

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

  /* customer select */
  const element = document.querySelector('.filter__select');
  const choices = new Choices(element, {
    searchEnabled: false,
    itemSelectText: '',
    shouldSort: false,
    placeholder: true,
  });

  /* tabs */
  $('.contry__btn').each(function() {

    $(this).click( function(event) {
      $('.section__wrapper.section__wrapper--catalog').removeClass('active');

      $('.contry__btn').each(function () {
        $(this).removeClass('active');
      });
      $(this).addClass('active');
      $path = event.currentTarget.dataset.path;

      if ($path === 'deu') {

        $('.years__1400').replaceWith(createList(artistSetDeu1400, yearAdd[0], $path));
        $('.years__1500').replaceWith(createList(artistSetDeu1500, yearAdd[1], $path));
        $('.years__1600').replaceWith(createList(artistSetDeu1600, yearAdd[2], $path));
        $('.years__1700').replaceWith(createList(artistSetDeu1700, yearAdd[3], $path));
        $('.years__1800').replaceWith(createList(artistSetDeu1800, yearAdd[4], $path));
        $('.years__1900').replaceWith(createList(artistSetDeu1900, yearAdd[5], $path));
        $('.years__2000').replaceWith(createList(artistSetDeu2000, yearAdd[6], $path));

        /* Select artist */
        createArt(artistsDeu, 'years__1400_deu_0');
        $('#years__1400_deu_0').addClass('active');

        $('.years__btn').each(function() {
          $(this).click( function() {
            $('.section__wrap.artist').slideUp('slow');
            $('.years__btn').each(function () {
              $(this).removeClass('active');
            });
            $(this).addClass('active');
            let idArt = $(this).attr('id');

            setTimeout(function slideShow() {
              createArt(artistsDeu, idArt);
              $('.section__wrap.artist').slideDown('slow');
            }, 300);
          });
        });

        setTimeout(function slideShow() {
          $('.section__wrapper.section__wrapper--catalog').addClass('active');
        }, 300);

      } else if ($path === 'it') {
        $('.years__1400').replaceWith(createList(artistSetIt1400, yearAdd[0], $path));
        $('.years__1500').replaceWith(createList(artistSetIt1500, yearAdd[1], $path));
        $('.years__1600').replaceWith(createList(artistSetIt1600, yearAdd[2], $path));
        $('.years__1700').replaceWith(createList(artistSetIt1700, yearAdd[3], $path));
        $('.years__1800').replaceWith(createList(artistSetIt1800, yearAdd[4], $path));
        $('.years__1900').replaceWith(createList(artistSetIt1900, yearAdd[5], $path));
        $('.years__2000').replaceWith(createList(artistSetIt2000, yearAdd[6], $path));

        /* Select artist */
        createArt(artistsIt, 'years__1400_it_0');
        $('#years__1400_it_0').addClass('active');

        $('.years__btn').each(function() {
          $(this).click( function() {
            $('.section__wrap.artist').slideUp('slow');
            $('.years__btn').each(function () {
              $(this).removeClass('active');
            });
            $(this).addClass('active');
            let idArt = $(this).attr('id');

            setTimeout(function slideShow() {
              createArt(artistsIt, idArt);
              $('.section__wrap.artist').slideDown('slow');
            }, 300);
          });
        });

        setTimeout(function slideShow() {
          $('.section__wrapper.section__wrapper--catalog').addClass('active');
        }, 300);

      } else if ($path === 'ru') {
        $('.years__1400').replaceWith(createList(artistSetRu1400, yearAdd[0], $path));
        $('.years__1500').replaceWith(createList(artistSetRu1500, yearAdd[1], $path));
        $('.years__1600').replaceWith(createList(artistSetRu1600, yearAdd[2], $path));
        $('.years__1700').replaceWith(createList(artistSetRu1700, yearAdd[3], $path));
        $('.years__1800').replaceWith(createList(artistSetRu1800, yearAdd[4], $path));
        $('.years__1900').replaceWith(createList(artistSetRu1900, yearAdd[5], $path));
        $('.years__2000').replaceWith(createList(artistSetRu2000, yearAdd[6], $path));

        /* Select artist */
        createArt(artistsRu, 'years__1400_ru_0');
        $('#years__1400_ru_0').addClass('active');

        $('.years__btn').each(function() {
          $(this).click( function() {
            $('.section__wrap.artist').slideUp('slow');
            $('.years__btn').each(function () {
              $(this).removeClass('active');
            });
            $(this).addClass('active');
            let idArt = $(this).attr('id');

            setTimeout(function slideShow() {
              createArt(artistsRu, idArt);
              $('.section__wrap.artist').slideDown('slow');
            }, 300);
          });
        });

        setTimeout(function slideShow() {
          $('.section__wrapper.section__wrapper--catalog').addClass('active');
        }, 300);

      } else if ($path === 'bel') {
        $('.years__1400').replaceWith(createList(artistSetBel1400, yearAdd[0], $path));
        $('.years__1500').replaceWith(createList(artistSetBel1500, yearAdd[1], $path));
        $('.years__1600').replaceWith(createList(artistSetBel1600, yearAdd[2], $path));
        $('.years__1700').replaceWith(createList(artistSetBel1700, yearAdd[3], $path));
        $('.years__1800').replaceWith(createList(artistSetBel1800, yearAdd[4], $path));
        $('.years__1900').replaceWith(createList(artistSetBel1900, yearAdd[5], $path));
        $('.years__2000').replaceWith(createList(artistSetBel2000, yearAdd[6], $path));

        /* Select artist */
        createArt(artistsBel, 'years__1400_bel_0');
        $('#years__1400_bel_0').addClass('active');

        $('.years__btn').each(function() {
          $(this).click( function() {
            $('.section__wrap.artist').slideUp('slow');
            $('.years__btn').each(function () {
              $(this).removeClass('active');
            });
            $(this).addClass('active');
            let idArt = $(this).attr('id');

            setTimeout(function slideShow() {
              createArt(artistsBel, idArt);
              $('.section__wrap.artist').slideDown('slow');
            }, 300);
          });
        });

        setTimeout(function slideShow() {
          $('.section__wrapper.section__wrapper--catalog').addClass('active');
        }, 300);

      } else {
        $('.years__1400').replaceWith(createList(artistSetFr1400, yearAdd[0]));
        $('.years__1500').replaceWith(createList(artistSetFr1500, yearAdd[1]));
        $('.years__1600').replaceWith(createList(artistSetFr1600, yearAdd[2]));
        $('.years__1700').replaceWith(createList(artistSetFr1700, yearAdd[3]));
        $('.years__1800').replaceWith(createList(artistSetFr1800, yearAdd[4]));
        $('.years__1900').replaceWith(createList(artistSetFr1900, yearAdd[5]));
        $('.years__2000').replaceWith(createList(artistSetFr2000, yearAdd[6]));

        /* Select artist */
        createArt(artistsFr, 'years__1400_fr_0');
        $('#years__1400_fr_0').addClass('active');

        $('.years__btn').each(function() {
          $(this).click( function() {
            $('.section__wrap.artist').slideUp('slow');
            $('.years__btn').each(function () {
              $(this).removeClass('active');
            });
            $(this).addClass('active');
            let idArt = $(this).attr('id');

            setTimeout(function slideShow() {
              createArt(artistsFr, idArt);
              $('.section__wrap.artist').slideDown('slow');
            }, 300);
          });
        });

        setTimeout(function slideShow() {
          $('.section__wrapper.section__wrapper--catalog').addClass('active');
        }, 300);

      }

    });
  });

  /* accordion */
  $(function(){

    $(".years__list").accordion({
      collapsible: true,
      heightStyle: "content",
      active: false,
    });

    $('.years__1400').replaceWith(createList(artistSetFr1400, yearAdd[0]));
    $('.years__1500').replaceWith(createList(artistSetFr1500, yearAdd[1]));
    $('.years__1600').replaceWith(createList(artistSetFr1600, yearAdd[2]));
    $('.years__1700').replaceWith(createList(artistSetFr1700, yearAdd[3]));
    $('.years__1800').replaceWith(createList(artistSetFr1800, yearAdd[4]));
    $('.years__1900').replaceWith(createList(artistSetFr1900, yearAdd[5]));
    $('.years__2000').replaceWith(createList(artistSetFr2000, yearAdd[6]));

    /* Select artist */
    createArt(artistsFr, 'years__1400_fr_0');
    $('#years__1400_fr_0').addClass('active');

    $('.years__btn').each(function() {
      $(this).click( function() {
        $('.section__wrap.artist').slideUp('slow');
        $('.years__btn').each(function () {
          $(this).removeClass('active');
        });
        $(this).addClass('active');
        let idArt = $(this).attr('id');
        setTimeout(function slideShow() {
          createArt(artistsFr, idArt);
          $('.section__wrap.artist').slideDown('slow');
        }, 300);

      });
    });

    $('.section__wrapper.section__wrapper--catalog').addClass('active');
  });

});



