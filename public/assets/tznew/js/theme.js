;(function ($) {
    "use strict";

    var body = $('body'),
        bodyHeight = body.height(),
        windowHeight = $(window).height(),
        windowWidth = $(window).width();

    var dgtTheme = {
        init: function () {
          // Slick Slider
          var slick = $('#section-partner'),
              slickSlider = $('#slider-top'),
              sliderPostCenter = $('#slider-post-center');
          slick.slick();
          slickSlider.slick({
            centerMode: true,
            slidesToShow: 1,
            infinite: true,
            centerPadding: '220px',
          });
          sliderPostCenter.slick({
            centerMode: true,
            slidesToShow: 3,
            infinite: true,
            centerPadding: '0',
          });

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
    });
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if(scroll > 1){
          $('.header-container').css("background-color", '#fff');
        } else {
          $('.header-container').css("background-color", 'transparent');
        }
    });
})(window.jQuery);
