function createList(arr, yearAdd, path = 'fr') {
  // Проверка: Франция - с 1500 по 1599
  if(arr.length === 0) {
    const notArtBlock = document.createElement('div');
    const notArtImg = document.createElement('img');
    const notArtWrap = document.createElement('div');
    const notArtTitle = document.createElement('h4');
    const notArtDesc = document.createElement('p');
    const notArtLink = document.createElement('a');

    notArtImg.classList.add('img-reset');
    notArtTitle.classList.add('h-reset');
    notArtDesc.classList.add('h-reset');
    notArtLink.classList.add('a-reset');

    notArtBlock.classList.add('not-art-block');
    notArtBlock.classList.add(yearAdd);
    notArtBlock.style.display = 'none';
    notArtImg.classList.add('not-art-img');
    notArtWrap.classList.add('not-art-wrap');
    notArtTitle.classList.add('not-art-title');
    notArtDesc.classList.add('not-art-desc');
    notArtLink.classList.add('not-art-link');

    notArtImg.src = './img/catalog/artists/notArt.svg';
    notArtImg.alt = 'Здесь пока пусто';
    notArtTitle.textContent = 'Здесь пока пусто';
    notArtDesc.textContent = 'А в галерее вы всегда можете найти что-то интересное для себя';
    notArtLink.textContent = 'В галерею';
    notArtLink.href = '#gallery';

    notArtBlock.append(notArtImg);
    notArtWrap.append(notArtTitle);
    notArtWrap.append(notArtDesc);
    notArtWrap.append(notArtLink);
    notArtBlock.append(notArtWrap);

    return notArtBlock;
  }

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
  // Проверка: Франция - с 1400 по 1499 - Домбе, Гийом,
  //           Германия - с 1400 по 1499 - Виц, Конрад
  const sectionArtImg = document.querySelector('.artist__img');
  const sectionArtH4 = document.querySelector('.artist__title');
  const sectionArtSub = document.querySelector('.artist__subtitle');
  const sectionArtDescr = document.querySelector('.artist__descr');
  const sectionArtLink = document.querySelector('.artist .not-art-link');

  if(typeof artists.find(artist => artist.id === idArt) == 'undefined') {

    const notArtImg = document.createElement('img');
    const notArtH4 = document.createElement('h4');
    const notArtDescr = document.createElement('p');
    const notArtLink = document.createElement('a');

    notArtImg.classList.add('img-reset');
    notArtImg.classList.add('artist__img');

    notArtH4.classList.add('h-reset');
    notArtH4.classList.add('artist__title');

    notArtDescr.classList.add('h-reset');
    notArtDescr.classList.add('artist__descr');
    notArtDescr.classList.add('not__artist__descr');
    notArtDescr.style.marginBottom = '15px';

    notArtLink.classList.add('a-reset');
    notArtLink.classList.add('not-art-link');

    notArtImg.src = './img/catalog/artists/notArtist.svg';
    notArtImg.alt = 'Художник';
    notArtH4.textContent = 'Что мы о нём знаем?';
    notArtDescr.textContent = 'Пока ничего... Зато мы точно знаем, что в галерее есть на что посмотреть!';
    notArtLink.textContent = 'В галерею';
    notArtLink.href = '#gallery';

    sectionArtImg.replaceWith(notArtImg);
    sectionArtH4.replaceWith(notArtH4);
    sectionArtSub.replaceWith(notArtDescr);
    sectionArtDescr.replaceWith(notArtLink);

    return;
  }

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

  if(sectionArtLink == null) {
    sectionArtSub.replaceWith(subtitleArt);
  } else {
    sectionArtLink.replaceWith(subtitleArt);
  }
  sectionArtImg.replaceWith(imgArt);
  sectionArtH4.replaceWith(h4Art);
  sectionArtDescr.replaceWith(descreArt);

  return;
}

$(document).ready(function() {
  // slider gallery
  const swiper = new Swiper('.swiper-container--gallery', {
    spaceBetween: 50,
    slidesPerView: 3,
    slidesPerGroup: 3,
    slidesPerColumn: 2,
    slidesPerColumnFill: 'row',
    pagination: {
      el: '.swiper-pagination--gallery',
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
  $('.header__burger').click(function() {
    if (!$('.header__nav').hasClass('burger__nav--open')) {
      $('.header__nav').addClass('burger__nav--open');
      $('.burger__menu').addClass('burger__menu--close');
    } else {
      $('.header__nav').removeClass('burger__nav--open');
      $('.burger__menu').removeClass('burger__menu--close');
    }
  });

  //search
    $('.search__icon').click(function() {
      if (!$('.header__search').hasClass('header__search--open')) {
        $('.header__search').addClass('header__search--open');
      } else {
        $('.header__search').removeClass('header__search--open');
      }
    });
    $('.search__close').click(function() {
      $('.header__search').removeClass('header__search--open');
    });

  //dropdown
  $('.catalogy__link').click(function(event) {
    event.preventDefault();
    let $id = $(this).attr('id');
    $('.catalogy__link').each(function() {
      if( $( this ).attr('id') !== $id) {
        $(this).removeClass('catalogy__link--open');
      }
    });
    $(this).toggleClass('catalogy__link--open');
  });
  $(document).click(function (event) {
    if ( !$('.catalogy__link').is(event.target)) {
      $('.catalogy__link').removeClass('catalogy__link--open');
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

    $('.years__list').accordion({
      collapsible: true,
      heightStyle: 'content',
      active: false,
    });

    $('.years__item').each(function() {
      $(this).click( function() {
        let hasClass = $(this).hasClass('active');
        $('.years__item').each(function() {
          $(this).removeClass('active');
        });
        if (hasClass) {
          $(this).removeClass('active');
        } else {
          $(this).addClass('active');
        }
      });
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

  // events
  $('.btn--events').click(function(event) {
    event.preventDefault();
    $(this).addClass('hidden');
    $('.events__item').each(function() {
      $(this).removeClass('hidden');
      $(this).css('display','block');
    });
  });

  // slider-events

  const swiperEvents = document.querySelector('.swiper-container--events');
  let myswiperEvents;

  function mobileSlider() {
    if(window.innerWidth <= 658 && swiperEvents.dataset.mobile == 'false') {
      $('.btn--events').addClass('hidden');
      $('.events__item').each(function() {
        $(this).removeClass('hidden');
        $(this).css('display','flex');
      });
      myswiperEvents = new Swiper(swiperEvents, {
        slidesPerView: 1,
        spaceBetween: 10,
        slidesPerGroup: 1,
        slideClass: 'swiper-slide--events',
        pagination: {
          el: '.swiper-pagination--events',
          type: 'bullets',
        },
      });

      swiperEvents.dataset.mobile = 'true';
    }

    if(window.innerWidth > 658) {
      $('.btn--events').removeClass('hidden');
      $('.events__item').each(function() {
        $(this).addClass('hidden');
      });
      const oneEvent = $('.events__item')[0];
      const twoEvent = $('.events__item')[1];
      const thrEvent = $('.events__item')[2];
      oneEvent.classList.remove('hidden');
      twoEvent.classList.remove('hidden');
      thrEvent.classList.remove('hidden');

      swiperEvents.dataset.mobile = 'false';

      if(swiperEvents.classList.contains('swiper-container-initialized')) {
        myswiperEvents.destroy();
      }
    }
  }

  mobileSlider();

  window.addEventListener('resize', () => {
    mobileSlider();
  });

  // slider-edition

  const swiperEdition = document.querySelector('.swiper-container--edition');
  let myswiperEdition;

  function mobileSliderEdition() {
    if(window.innerWidth >= 658 && swiperEdition.dataset.mobile == 'false') {
      myswiperEdition = new Swiper(swiperEdition, {
        slidesPerView: 3,
        spaceBetween: 50,
        slidesPerGroup: 3,
        slideClass: 'swiper-slide--edition',
        pagination: {
          el: '.swiper-pagination--edition',
          type: 'fraction',
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        breakpoints: {
          658: {
            spaceBetween: 37,
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
          861: {
            spaceBetween: 50,
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
          1391: {
            spaceBetween: 50,
            slidesPerView: 3,
            slidesPerGroup: 3,
          },
        }
      });

      swiperEdition.dataset.mobile = 'true';
    }

    if(window.innerWidth < 658) {
      swiperEdition.dataset.mobile = 'false';

      if(swiperEdition.classList.contains('swiper-container-initialized')) {
        myswiperEdition.destroy();
      }
    }
  }

  mobileSliderEdition();

  window.addEventListener('resize', () => {
    mobileSliderEdition();
  });

  // editon-catalog

  function editionChoice() {
    $('.edition__check').each(function() {
      if ($(this).prop('checked')) {
        $(this).parent().addClass('active');
        $(this).parent().addClass('edition__choice--close');
      } else {
        $(this).parent().removeClass('active');
        $(this).parent().removeClass('edition__choice--close');
      }
    });
  }

  function editionLoaded() {
    $('.edition__title').click(function() {
      if($('.edition__title').hasClass('is-active')) {
        $('.edition__title').removeClass('is-active');
        editionChoice();
      } else {
        $('.edition__title').addClass('is-active');
      }
    });

    $('.edition__check').each(function () {
      $(this).click(function() {
        editionChoice();
      });
    });
  }

  function editionCategory() {
    if(window.innerWidth < 767) {
      $('.edition__title').removeClass('is-active');
      $('.edition__title').off();
      editionChoice();
      editionLoaded();
    }
  }

  editionCategory();

  let timer;
  window.addEventListener('resize', () => {
    clearTimeout(timer);
    timer = setTimeout(editionCategory, 500);
  });

});



