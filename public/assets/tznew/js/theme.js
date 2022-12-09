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
        sliderFull = $('.slick-slider-full'),
        sliderAbout = $('#slider-about'),
        scrollCount = null;
      scroll = null;
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
      if ($('#openNewsletter').length) {
        $('#openNewsletter').on('click', function (e) {
          e.preventDefault();
          if ($('.newsletter-form').length) {
            $('.newsletter-form').addClass('open');
            $('.newsletter-form .close').on('click', function (e) {
              e.preventDefault();
              $('.newsletter-form').removeClass('open');
            });
          }
        });
      }

      // Mentor Page
      if ($('.mentor-share__toggle').length) {
        $('.mentor-share__toggle').on('click', function (e) {
          var overlay = $(this).closest('.mentor-share').find('.overlay');
          $(this).closest('.mentor-share').find('.mentor-share__social').toggleClass('open');
          overlay.addClass('show');
          $(overlay).on('click', function () {
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
      if ($('[data-size-small]').length) {
        $('[data-size-small]').each(function () {
          var screenWidth = $(window).width(),
            dataSize = $(this).data('size-small');
          if (screenWidth <= 576) {
            $(this).css('font-size', dataSize);
          } else {
            $(this).attr('style', '');
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
    },

    blogTabs: function () {
      if ($('.single-post').length) {
        var blogTitle = $('.single-post .entry-content').find('h3');
        blogTitle.each(function (index) {
          $(this).attr("id", "title" + index);
          if ($('.blog-tab').length) {
            $('.blog-tab ul').append('<li><a href="#title' + index + '">' + $(this).text() + '</a></li>')
          }
        })
        if ($('.blog-tab a').length) {
          $('.blog-tab a').on("click", function () {
            var id = $(this).attr('href');
            $('html, body').animate({
              scrollTop: $(id).offset().top - 134
            }, 2000);
          });
        }
      }
    },

    menuToggle: function () {
      var windowW = $(window).width();
      if (windowW <= 767) {
        if ($('.menu-toggle').length) {
          var selecter = $('.menu-toggle').find('.menu-toggle__select');
          selecter.on("click", function () {
            $('.menu-toggle').toggleClass('open').find('.menu').slideToggle();
          });
        }
      }
    },

    iconBoxToggle: function () {
      var windowW = $(window).width();
      if (windowW <= 767) {
        if ($('.icon-box--toggle').length) {
          var selecter = $('.icon-box--toggle').find('.icon-box--toggle__title');
          selecter.on("click", function () {
            $(this).closest('.toggle-wrap').addClass('open');
            $(this).closest('.toggle-wrap').find('.icon-box-content').slideUp();
            $(this).next().slideDown();
          });
        }
      }
    },

    companyToggle: function () {
      var windowW = $(window).width();
      if (windowW <= 767) {
        if ($('.company-list').length) {
          var selecter = $('.company-list').find('.company-item .link');
          selecter.on("click", function () {
            $(this).closest('.toggle-wrap').addClass('open');
            $(this).closest('.toggle-wrap').find('.company-item').removeClass('active');
            $(this).parent().addClass('active');
          });
        }
      }
    },

    timeline: function () {
      if ($('.timeline-item').length) {
        $('.timeline-item').hover(
          function () {
            $(this).closest('.timeline-grid').find('.timeline-item').removeClass('active');
            $(this).addClass('active');
          }, function () {
            $(this).removeClass('active');
          }
        );
      }
    },

    landing: function () {
      function toggleClassBody(status) {
        if (status === 'open') {
          $('body').addClass('open');
        } else {
          $('body').removeClass('open');
        }
      }
      function callLandingContent(elem) {
        if ($('.landing__content').length) {
          if ($(elem).closest('.landing__content').hasClass('open')) {
            $(elem).closest('.landing__content').removeClass('open');
            $(elem).closest('.landing__content').find('.landing-tabs-title').addClass('open-landing');
          } else {
            $(elem).closest('.landing__content').addClass('open');
            $(elem).closest('.landing__content').find('.landing-tabs-title').removeClass('open-landing');
          }
        }
      }

      function closeLanding() {
        toggleClassBody('remove');
        $('.landing-investor').removeClass('active');
        $('.landing-founder').removeClass('active');
        $('.callInvestor').removeClass('active');
        $('.callFounder').removeClass('active');
        setTimeout(function () {
          $('.landing-founder').removeClass('fade-out');
          $('.landing-investor').removeClass('fade-out');
        }, 1000);
      }

      // Call landing tab content
      if ($('.landing-tabs-title').length) {
        $('.landing-tabs-title').on('click', function () {
          if ($(this).hasClass('open-landing')) {
            callLandingContent(this);
          }
        });
      }

      // Close landing tab content
      if ($('.tab-content-close').length) {
        $('.tab-content-close').on('click', function () {
          callLandingContent(this);
        });
      }

      // Call landing popup
      if ($('.callFounder, .callInvestor, .landing-investor, .landing-founder, .landing-begin, .landing-popup-close').length) {
        $('.callFounder').on('click', function () {
          toggleClassBody('open');
          $('.landing-investor').removeClass('active');
          $('.landing-founder').addClass('active');
          $('.callFounder').addClass('active');
          $('.callInvestor').removeClass('active');
          setTimeout(function () {
            $('.landing-founder').addClass('fade-out');
            $('.landing-investor').removeClass('fade-out');
          }, 1000);
        });
        $('.callInvestor').on('click', function () {
          toggleClassBody('open');
          $('.landing-investor').addClass('active');
          $('.callFounder').removeClass('active');
          $('.callInvestor').addClass('active');
          setTimeout(function () {
            $('.landing-investor').addClass('fade-out');
            $('.landing-founder').removeClass('fade-out');
          }, 1000);
          $('.landing-founder').removeClass('active');
        });
        $('.landing-popup-close').on("click", function () {
          closeLanding();
        })
      }

      // Tab Content
      if ($('.landing-tabs').length) {
        var tabTitle = $('.landing-tabs').find('.landing-tabs-title a');
        tabTitle.on('click', function (e) {
          e.preventDefault();
          var targetContent = $(this).data('content');
          $(this).closest('.landing__right').find('.tabs-panel').removeClass('is-active');
          $(this).closest('.landing__right').find('#' + targetContent).addClass('is-active');
          $(this).closest('.landing-tabs').find('.landing-tabs-title').removeClass('active');
          $(this).parent().addClass('active');
        })
      }
      var sliderAbout = $('#slider-about');
      sliderAbout.on("beforeChange", function () {
        closeLanding();
      })
    }
  }
  window.dgtTheme = dgtTheme;

  $(document).ready(function () {
    dgtTheme.init();
    dgtTheme.emptySpace();
    dgtTheme.cardWindow();
    dgtTheme.profilePage();
    dgtTheme.blogTabs();
    dgtTheme.menuToggle();
    dgtTheme.iconBoxToggle();
    dgtTheme.companyToggle();
    dgtTheme.landing();
    dgtTheme.timeline();
  });
  $(window).resize(function () {
    dgtTheme.emptySpace();
    dgtTheme.cardWindow();
    dgtTheme.profilePage();
    dgtTheme.menuToggle();
    dgtTheme.iconBoxToggle();
    dgtTheme.companyToggle();
    dgtTheme.landing();
  });
  var lastScrollTop = 0;
  $(window).scroll(function () {
    var sticky = $('.home-event'),
      scroll = $(window).scrollTop(),
      homeResource = $('#home-resources'),
      titleFixed = $('.part-title--fixed');

    if (scroll > 122) {
      if (scroll > lastScrollTop) {
        sticky.css('top', "-122px");
      } else {
        sticky.css('top', "58px");
      }
      lastScrollTop = scroll;
    }

    if (homeResource.length) {
      if ((scroll + 58) > homeResource.offset().top && (scroll + 58) < homeResource.offset().top + homeResource.outerHeight()) {
        titleFixed.addClass('fixed');
      } else {
        titleFixed.removeClass('fixed');
      }
    }
  });
  $('.card-right .card-body').scroll(function () {
    // $('.card__item').removeClass('window-open');
  });
})(window.jQuery);
