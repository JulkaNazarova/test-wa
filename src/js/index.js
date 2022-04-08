jQuery(document).ready(function () {

  $('.accord-title--js').on('click', function() {
    var parents = $(this).parents('.accord-wrap--js');
    parents.find('.accord-block--js').slideToggle();
    parents.toggleClass('active');
    parents.siblings('.accord-wrap--js').removeClass('active').find('.accord-block--js').slideUp();
  });


  $('.popup-open').click(function() {
    $('.popup-fade').fadeIn('fast');
    return false;
  });

  $('.popup-close').click(function() {
    $(this).parents('.popup-fade').fadeOut('fast');
    return false;
  });
  $(document).keydown(function(e) {
    if (e.keyCode === 27) {
      e.stopPropagation();
      $('.popup-fade').fadeOut('fast');
    }
  });
  $('.popup-fade').click(function(e) {
    if ($(e.target).closest('.popup').length == 0) {
      $(this).fadeOut('fast');
    }
  });


  $('.slider-clients').slick({
    infinity: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrow: true,
    prevArrow: '<a href="#" class="prev-button prev-button-page"></a>',
    nextArrow: '<a href="#" class="next-button next-button-page"></a>',
    appendArrows: $('.slider-clients').parents('.slider__wrap').find('.container-arrows'),
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 568,
        settings: {
          slidesToShow: 1,
          fade: true
        }
      }
    ]
  });

  $(function() {
    $('.phone').mask('+7 (999) 999 - 99 - 99');
  });

  $('.accept-checkbox').styler();
  
   var mql = window.matchMedia('(min-width: 991px)');
   function screenTest(e) {
     if (e.matches) {
       $('.tabs-item--js').on('click', function() {
         var itemThumbs = $(this).attr('data-thumb'),
           imgThumbs = $('.tabs__block--js[data-thumb= \'' + itemThumbs + '\']');
         $(this).addClass('active').siblings().removeClass('active');
         imgThumbs.addClass('active').siblings().removeClass('active');
       });
     }
   }
   mql.addListener(screenTest);
   screenTest(mql)
  
  
});





