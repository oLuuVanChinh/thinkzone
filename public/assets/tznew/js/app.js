$(document).foundation();
var navButton = $('header .mobile-nav-button');
navButton.on('click', function (e) {
    e.preventDefault();
    let navClass = $(this).attr('href');
    let isClosed = $(navClass).hasClass('is-close');
    if (isClosed == true) {
        $(navClass).removeClass('hide is-close');
        $(this).addClass('is-open');
        $(navClass).addClass('is-open');
    }
    else {
        $(navClass).addClass('is-close');
        $(this).removeClass('is-open');
        $(navClass).removeClass('is-open');
        setTimeout(function () {
            $(navClass).addClass('hide');
        }, 500);
    }
});

function scrollTo(e, time=200, paddingTop=120) {
    $([document.documentElement, document.body]).animate({
        scrollTop: e.offset().top - paddingTop
    }, time);
}

$(function () {
    $('.scroll-btn').on('click', function (e) {
        e.preventDefault();
        var ev = $($(this).attr('href'));
        var paddingTop = 0;
        scrollTo(ev, 200, paddingTop);
    });
});

// animation offer box
/*
var cardOffer = $('.card-offer');
cardOffer.each(function() {
    $(this).hover(
        function(){
            if( ! $(this).hasClass('highlight')) {
                cardOffer.toggleClass('highlight');
                cardOffer.parent().css({'z-index':0});
                $(this).parent().css({'z-index':10});
            }
        },
        function(){}
    );
});
 */

var journey = $('.journey-step');

function switchStepJourney() {
    let isActive = journey.find('li.is-active');
    isActive.removeClass('is-active').next().addClass('is-active');

    if(isActive.is(":last-child")){
        journey.find('li:last-child').removeClass('is-active');
        journey.find('li:first-child').addClass('is-active');
    }
}

setInterval(function () {
    switchStepJourney();
}, 5000);

journey.find('li').each(function () {
    $(this).hover(
        function () {
            $(this).closest(journey).find('li').removeClass('is-active');
            // pause node animation
            journey.find('.node').css({'animation': 'none', '-webkit-animation': 'none'});
        },
        function () {
            $(this).addClass('is-active');
            // resume node animation
            journey.find('li').each(function (index) {
                let delay = 0.2 * index;
                let setAnmation = 'sk-bouncedelay 1.4s infinite ease-in-out both';
                $(this).find('.node').css({
                    'animation': setAnmation,
                    '-webkit-animation': setAnmation,
                    'animation-delay': delay + 's',
                    '-webkit-animation-delay': delay + 's'
                });
            });
        }
    );
});

// Journey Expand Mobile
var mobileJourney = $('.mobile-journey');
var deviceWidth = $(window).width();
if (deviceWidth < 1024) {
    var node = mobileJourney.find('li'),
        steper = mobileJourney.find('.steper'),
        nameNode = mobileJourney.find('.step-name');
    steper.on('click', function () {
        if ($(this).find('.step-expand').offset()) {
            let step = $(this);
            let expand = step.find('.step-expand');
            let isOpen = expand.hasClass('open');
            $('.step-expand').slideUp('fast').removeClass('open');
            if (!isOpen) {
                expand.slideDown('fast').addClass('open');
                stopMobileNodeAnimation();
            }
            else {
                startMobileNodeAnimation();
            }
        }
    });
}

var stopMobileNodeAnimation = function () {
    mobileJourney.find('li').find('.is-node:before').css({'animation': 'unset', '-webkit-animation': 'unset'})
}

var startMobileNodeAnimation = function () {
    mobileJourney.find('li').each(function (index) {
        let li = $(this);
        let delay = index * 0.2;
        if (li.find('.is-node').offset()) {
            li.find('.is-node:before').css({
                '-webkit-animation': 'mobile-bouncedelay 1.4s infinite ease-in-out both',
                'animation': 'mobile-bouncedelay 1.4s infinite ease-in-out both',
                '-webkit-animation-delay': delay + 's',
                'animation-delay': delay + 's'
            });
        }
    });
}

if ($('.video-container').offset()) {
    var homeVideo = $('.video-container');
    var videoPlay = homeVideo.find('img');
    var video = document.getElementById('home-video');
    videoPlay.on('click', function () {
        homeVideo.addClass('playing');
        video.play();
        return false;
    });
    video.addEventListener('ended', function () {
        homeVideo.removeClass('playing');
    });
}
