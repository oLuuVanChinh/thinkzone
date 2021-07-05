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
          var slick = $('.slick-slider'),
              sliderPostCenter = $('#slider-post-center');
          if(slick.length){
            slick.slick({
              slidesToShow: 1,
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
          if($('.part-tabs .tabs').length && windowWidth > 768){
            var tabsHeight = $('.part-tabs .tabs').outerHeight(),
                tabsContentheight = $('.part-tabs .tabs-content').outerHeight();
            if(tabsContentheight > tabsHeight){
              $('.part-tabs .tabs-content').css("height", tabsHeight);
            }
          }

          // scrollbar
          if($('.scrollbar-container').length){
            $('.scrollbar-container').customScrollbar();
          }

          // Select popup
          if($('.form-group--select').length){
            $('.form-group--select .form-control-select').each(function(){
              $(this).on('click', function(){
                var selectPopup = $(this).closest('.form-group--select').find('.form-control-popup');
                $('.form-control-popup').removeClass('open');
                selectPopup.toggleClass('open');
              });
            });
            $('.form-control-popup .close, .form-control-popup .apply-select').on('click', function(){
              $(this).closest('.form-control-popup').removeClass('open');
            });
            $('.form-control-popup .reset-select').on('click', function(){
              $(this).closest('.form-control-popup').find('input[type="checkbox"]').prop( "checked", false );
            });
          }

          // Tab
          if($('.icon-box--tabs').length){
            $('.icon-box--tabs a').on('click', function(e){
              e.preventDefault();
              var dataOpen = $(this).data('open'),
                  dataClose = $(this).data('close');
              $(this).closest('.icon-box--tabs').find('a').removeClass('active');
              $(this).addClass('active');
              $('#' + dataClose).slideDown('fast');
              $('#' + dataOpen).slideUp('fast');
            });
          }
        },

        cardWindow: function(){
          if($('.card__item').length){
            $('.card__item').each(function(){
                var cardWindow = $(this).find('.card__item-window'),
                    cardOffset = $(this).offset();
                cardWindow.css('width', parseInt($(this).outerWidth() + 22));
                cardWindow.css('left', parseInt(cardOffset.left - 20));
                cardWindow.css('top', parseInt(cardOffset.top - $(window).scrollTop()));
            });
          }
        },

        emptySpace: function(){
          if($('.empty-space').length){
            $('.empty-space').each(function(){
              var screenWidth = $(window).width(),
                  spaceHeight = $(this).data('height'),
                  spaceHeightSm = $(this).data('height-sm'),
                  spaceHeightMd = $(this).data('height-md'),
                  spaceHeightLg = $(this).data('height-lg'),
                  spaceHeightXl = $(this).data('height-xl'),
                  spaceHeightXxl = $(this).data('height-xxl');
              $(this).css('height', spaceHeight);
              if(typeof spaceHeightSm !== 'undefined'){
                if(screenWidth >= 576){
                    $(this).css('height', spaceHeightSm);
                }
              }
              if(typeof spaceHeightMd !== 'undefined'){
                  if(screenWidth >= 768){
                    $(this).css('height', spaceHeightMd);
                  }
              }
              if(typeof spaceHeightLg !== 'undefined'){
                  if(screenWidth >= 992){
                    $(this).css('height', spaceHeightLg);
                  }
              }
              if(typeof spaceHeightXl !== 'undefined'){
                  if(screenWidth >= 1200){
                    $(this).css('height', spaceHeightXl);
                  }
              }
              if(typeof spaceHeightXxl !== 'undefined'){
                  if(screenWidth >= 1400){
                    $(this).css('height', spaceHeightXxl);
                  }
              }
            });
          }
        }
    }
    window.dgtTheme = dgtTheme;

    $(document).ready(function () {
        dgtTheme.init();
        dgtTheme.emptySpace();
        dgtTheme.cardWindow();
    });
    $(window).resize(function () {
      dgtTheme.emptySpace();
      dgtTheme.cardWindow();
    });
    $(window).scroll(function () {
      dgtTheme.cardWindow();
    });
})(window.jQuery);
