;(function ($) {
    "use strict";

    var body = $('body'),
        bodyHeight = body.height(),
        windowHeight = $(window).height(),
        windowWidth = $(window).width();

    window.getScroll = function(){
      var scroll = $(window).scrollTop();
      if(scroll > 1){
        $('.header-container').css("background-color", '#fff').addClass('is-sticky');
      } else {
        $('.header-container').css("background-color", 'transparent').removeClass('is-sticky');
      }
      if($('.header-container').hasClass('header-transparent')){
        if(scroll > 1){
            $('.logo').find('img').attr("src", "public/assets/tznew/css/images/logo-dark.png");
        } else {
            $('.logo').find('img').attr("src", "public/assets/tznew/css/images/logo-white.png");
        }
      }
    }

    var dgtTheme = {
        init: function () {
          // Slick Slider
          var slick = $('#section-partner'),
              slickSlider = $('#slider-top'),
              sliderPostCenter = $('#slider-post-center');
          if(slick.length){
            slick.slick({
              slidesToShow: 5,
              infinite: true,
            });
          }
          if(slickSlider.length){
            slickSlider.slick({
              centerMode: true,
              slidesToShow: 1,
              infinite: true,
              arrows: false,
              autoplay: true,
              centerPadding: '220px',
            });
            slickSlider.on('init', function(slick){
              $(this).find('.slick-current').next().addClass('works');
            });
          }
          if(sliderPostCenter.length){
            sliderPostCenter.slick({
              centerMode: true,
              slidesToShow: 3,
              infinite: true,
              centerPadding: '0',
              dots: true,
            });
          }

          // Video Player
          var videoPlay = $('button.btn-play')
          videoPlay.on('click', function () {
              $(this).addClass('hide');
              let src = $('#video-ifr').attr('src').split('?');
              $('#video-ifr').attr('src', src[0] + '?autoplay=1&rel=0&controls=0');
              $('#video-modal').removeClass('hide');
          });
        },
    }
    window.dgtTheme = dgtTheme;

    $(document).ready(function () {
        dgtTheme.init();
        getScroll();
    });
    $(window).scroll(function () {
      getScroll();
    });
})(window.jQuery);
