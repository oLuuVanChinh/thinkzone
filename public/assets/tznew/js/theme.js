; (function ($) {
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
        sliderPostCenter = $('#slider-post-center'),
        sliderFull = $('.slick-slider-full');
      if (slick.length) {
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
      if (sliderPostCenter.length) {
        sliderPostCenter.slick({
          variableWidth: true,
          infinite: true,
        });
      }
      if (sliderFull.length) {
        sliderFull.slick({
          arrows: false,
          variableWidth: true,
          infinite: true,
          autoplay: true,
          autoplaySpeed: 0,
          speed: 4000,
          cssEase: 'linear'
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
      if ($('.part-tabs .tabs').length && windowWidth > 768) {
        var tabsHeight = $('.part-tabs .tabs').outerHeight(),
          tabsContentheight = $('.part-tabs .tabs-content').outerHeight();
        if (tabsContentheight > tabsHeight) {
          $('.part-tabs .tabs-content').css("height", tabsHeight);
        }
      }

      // Select popup
      if ($('.form-group--select').length) {
        $('.form-group--select .form-control-select').each(function () {
          $(this).on('click', function () {
            var selectPopup = $(this).closest('.form-group--select').find('.form-control-popup');
            $('.form-control-popup').removeClass('open');
            selectPopup.toggleClass('open');
          });
        });
        $('.form-control-popup .close, .form-control-popup .apply-select').on('click', function () {
          $(this).closest('.form-control-popup').removeClass('open');
        });
        $('.form-control-popup .reset-select').on('click', function () {
          $(this).closest('.form-control-popup').find('input[type="checkbox"]').prop("checked", false);
        });
      }

      // Tab
      if ($('.icon-box--tabs').length) {
        $('.icon-box--tabs a').on('click', function (e) {
          e.preventDefault();
          var dataOpen = $(this).data('open'),
            dataClose = $(this).data('close');
          $(this).closest('.icon-box--tabs').find('a').removeClass('active');
          $(this).addClass('active');
          $('#' + dataClose).slideDown('fast');
          $('#' + dataOpen).slideUp('fast');
        });
      }

      // Newsletter
      if($('#openNewsletter').length){
        $('#openNewsletter').on('click', function(e){
          e.preventDefault();
            if($('.newsletter-form').length){
              $('.newsletter-form').addClass('open');
              $('.newsletter-form .close').on('click', function(e){
                e.preventDefault();
                $('.newsletter-form').removeClass('open');
              });
            }
        });
      }

      // Mentor Page
      if($('.mentor-share__toggle').length){
        $('.mentor-share__toggle').on('click', function(e){
          var overlay = $(this).closest('.mentor-share').find('.overlay');
          $(this).closest('.mentor-share').find('.mentor-share__social').toggleClass('open');
          overlay.addClass('show');
          $(overlay).on('click', function(){
            $(this).removeClass('show').closest('.mentor-share').find('.mentor-share__social').removeClass('open');
          })
        });
      }
    },

    cardWindow: function () {
      if ($('.card__item > .card__item-img').length) {
        $('.card__item').each(function () {
          var cardImg = $('.card__item > .card__item-img'),
            cardInfo = $('.card__item > card__item-info');
          $('.card__item > .card__item-img, .card__item > .card__item-info').on('click', function () {
            var cardWindow = $(this).closest('.card__item').find('.card__item-window'),
              cardOffset = $(this).closest('.card__item').offset();
            $(this).closest('.card-body').find('.card__item').removeClass('window-open');
            $(this).closest('.card__item').addClass('window-open');
            cardWindow.css('width', parseInt($(this).closest('.card__item').outerWidth() + 22));
            cardWindow.css('left', parseInt(cardOffset.left - 20));
            cardWindow.css('top', parseInt(cardOffset.top - $(window).scrollTop() + $(this).closest('.card__item').outerHeight()));
          });
          $('.card__item-close').on('click', function () {
            $(this).closest('.card__item').removeClass('window-open');
          });
        });
      }
    },

    emptySpace: function () {
      if ($('.empty-space').length) {
        $('.empty-space').each(function () {
          var screenWidth = $(window).width(),
            spaceHeight = $(this).data('height'),
            spaceHeightSm = $(this).data('height-sm'),
            spaceHeightMd = $(this).data('height-md'),
            spaceHeightLg = $(this).data('height-lg'),
            spaceHeightXl = $(this).data('height-xl'),
            spaceHeightXxl = $(this).data('height-xxl');
          $(this).css('height', spaceHeight);
          if (typeof spaceHeightSm !== 'undefined') {
            if (screenWidth >= 576) {
              $(this).css('height', spaceHeightSm);
            }
          }
          if (typeof spaceHeightMd !== 'undefined') {
            if (screenWidth >= 768) {
              $(this).css('height', spaceHeightMd);
            }
          }
          if (typeof spaceHeightLg !== 'undefined') {
            if (screenWidth >= 992) {
              $(this).css('height', spaceHeightLg);
            }
          }
          if (typeof spaceHeightXl !== 'undefined') {
            if (screenWidth >= 1200) {
              $(this).css('height', spaceHeightXl);
            }
          }
          if (typeof spaceHeightXxl !== 'undefined') {
            if (screenWidth >= 1400) {
              $(this).css('height', spaceHeightXxl);
            }
          }
        });
      }
    },

    profilePage: function () {
      var windowH = $(window).height(),
        windowW = $(window).width();
      if (windowW < 640) {
        if ($('.profile__desc').length) {
          var profileFilterH = $('.profile-filter').outerHeight(),
            headerH = $('.header-primary').outerHeight(),
            profileHeadH = $('.profile__head').outerHeight();
          $('.profile__desc').css('height', parseInt(windowHeight - profileFilterH - headerH - profileHeadH - 16));
        }
      } else {
        $('.profile__desc').removeAttr('style');
      }
    }
  }
  window.dgtTheme = dgtTheme;

  $(document).ready(function () {
    dgtTheme.init();
    dgtTheme.emptySpace();
    dgtTheme.cardWindow();
    dgtTheme.profilePage();
  });
  $(window).resize(function () {
    dgtTheme.emptySpace();
    dgtTheme.cardWindow();
    dgtTheme.profilePage();
  });
  $('.card-right .card-body').scroll(function () {
    // $('.card__item').removeClass('window-open');
  });
})(window.jQuery);
