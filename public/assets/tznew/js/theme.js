;(function ($) {
    "use strict";

    var body = $('body'),
        bodyHeight = body.height(),
        windowHeight = $(window).height(),
        windowWidth = $(window).width();

    // window.getScroll = function(){
    //   var scroll = $(window).scrollTop();
    //   if(scroll > 1){
    //     $('.header-container').css("background-color", '#fff').addClass('is-sticky');
    //   } else {
    //     $('.header-container').css("background-color", 'transparent').removeClass('is-sticky');
    //   }
    //   if($('.header-container').hasClass('header-transparent')){
    //     if(scroll > 1){
    //         $('.logo').find('img').attr("src", "public/assets/tznew/css/images/logo-dark.png");
    //     } else {
    //         $('.logo').find('img').attr("src", "public/assets/tznew/css/images/logo-white.png");
    //     }
    //   }
    // }

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
              responsive: [
                {
                  breakpoint: 640,
                  settings: {
                    slidesToShow: 2,
                  }
                }
              ]
            });
          }
          if(slickSlider.length){
            slickSlider.slick({
              centerMode: true,
              slidesToShow: 1,
              arrows: true,
              autoplay: false,
              centerPadding: '220px',
              responsive: [
                {
                  breakpoint: 1200,
                  settings: {
                    centerPadding: '120px'
                  }
                },
                {
                  breakpoint: 640,
                  settings: {
                    centerPadding: '0'
                  }
                }
              ]
            });
            slickSlider.on('afterChange', function(e, slick, currentSlide, nextSlide) {
              $('.slick-clone-current').removeClass('slick-clone-current');
            });
          }
          if(sliderPostCenter.length){
            sliderPostCenter.slick({
              centerMode: true,
              slidesToShow: 3,
              infinite: true,
              centerPadding: '0',
              dots: true,
              responsive: [
                {
                  breakpoint: 640,
                  settings: {
                    slidesToShow: 1,
                    centerPadding: '0'
                  }
                }
              ]
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

          // tabs
          if($('.part-tabs .tabs').length){
            var tabsHeight = $('.part-tabs .tabs').outerHeight(),
                tabsContentheight = $('.part-tabs .tabs-content').outerHeight();
            if(tabsContentheight > tabsHeight){
              $('.part-tabs .tabs-content').css("height", tabsHeight);
            }
          }
        },
    }
    window.dgtTheme = dgtTheme;

    $(document).ready(function () {
        dgtTheme.init();
        // getScroll();
    });
    // $(window).scroll(function () {
    //   getScroll();
    // });
})(window.jQuery);
