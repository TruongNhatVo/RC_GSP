//ユーザーエージェント判定
var _ua = (function(u) {
    return {
        Tablet: (u.indexOf("windows") != -1 && u.indexOf("touch") != -1) || u.indexOf("ipad") != -1 || (u.indexOf("android") != -1 && u.indexOf("mobile") == -1) || (u.indexOf("firefox") != -1 && u.indexOf("tablet") != -1) || u.indexOf("kindle") != -1 || u.indexOf("silk") != -1 || u.indexOf("playbook") != -1,
        Mobile: (u.indexOf("windows") != -1 && u.indexOf("phone") != -1) || u.indexOf("iphone") != -1 || u.indexOf("ipod") != -1 || (u.indexOf("android") != -1 && u.indexOf("mobile") != -1) || (u.indexOf("firefox") != -1 && u.indexOf("mobile") != -1) || u.indexOf("blackberry") != -1
    }
})(window.navigator.userAgent.toLowerCase());


var win = $(this);
$(window).on('resize load', function() {
    if (win.width() < 780) {
        let headerHeight = $('header').height() + $('header').offset().top;
        $('.menuMain').css('top', headerHeight);
        // Change Images
        $('img').each(function() {
            $(this).attr("src", $(this).attr("src").replace('_pc', '_sp'));
        });
        // Move text SP
        $('.move_SP').insertAfter('.post01 .Flag_moveSp');
    } else {
        $('img').each(function() {
            $(this).attr("src", $(this).attr("src").replace('_sp', '_pc'));
        });
    }
});


// first view animation when window on load
$(window).on('load', function() {
    $('.animate01').animate({
        top: 40,
        opacity: 0.4
    }, {
        duration: 1000, //time to run animation
        // When first completed, the second will continue
        complete: function() {
            $('.animate01').animate({ opacity: 0.15 });
            $('.animate02').animate({
                opacity: 0.3
            }, {
                duration: 800,
                complete: function() {
                    $('.animate02').delay(200).animate({ opacity: 0.8 });
                    $('.animate03').animate({
                        top: 50 + '%',
                        opacity: 1
                    }, {
                        duration: 500,
                        complete: function() {
                            $('.animate04').delay(200).animate({
                                bottom: 166,
                                opacity: 1
                            }, {
                                duration: 500,
                                complete: function() {
                                    $('.animate05').delay(200).animate({
                                        right: 130,
                                        top: 55 + '%',
                                        opacity: 1
                                    }, {
                                        duration: 500,
                                        complete: function() {
                                            $('.animate06').delay(200).animate({
                                                opacity: 1
                                            });
                                        }
                                    })
                                }
                            })
                        }
                    });
                },
            });
        }
    });
});


$(document).ready(function() {
    if (win.width() > 780) {
        var target = $('#bg_brn');
        var targetHeight = target.outerHeight();
        $(window).scroll(function(e) {
            var scrollPercent = (targetHeight - window.scrollY - 150) / targetHeight;
            if ($(this).scrollTop() > 10) {
                $('.graph').fadeIn();
                target.css('opacity', scrollPercent);
            }
            // Blur
            var scrollElem = $(window).scrollTop();
            $('.graph_slider_blur').css({
                'opacity': 1 - (scrollElem / 500)
            });
            // Fade title_slider
            $('.fadeDown').each(function() {
                let elemPos = $(this).offset().top;
                let scroll = $(window).scrollTop();
                let windowHeight = $(window).height();
                if (scroll > elemPos - windowHeight + 700) {
                    $('.fadeDown').addClass('ef-slide');
                }
            });

        }).trigger("scroll");
    }

    // Button and responsive menu transform
    $('.btnSp').click(function() {
        $('.btnSp').toggleClass('active');
        $('.menuMain').stop().slideToggle('1200', function() {
            let headerHeight = $('header').height() + $('header').offset().top;
            $('.menuMain').css('top', headerHeight);
            $('.menuMain').css('display') == 'block' ?
                $('body').css('overflow', 'hidden') :
                $('body').css('overflow', 'auto');
            $('.menuMain a').click(function() {
                $('.menuMain').slideUp();
                $('.btnSp').removeClass('active');
                $('body').css('overflow', 'auto');
            });
        });
    });

    /* Tabs transform */
    $('ul.tabs li').click(function() {
        var tab_id = $(this).attr('data-tab');

        $('ul.tabs li').removeClass('current');
        $('.tab-content').removeClass('current');

        $(this).addClass('current');
        $("#" + tab_id).addClass('current');
    });

    // Magnific Popup

    $('.zoom').click(function(event) {
        event.preventDefault();
        var gallery = $(this).attr('href');
        $(gallery).magnificPopup({
            delegate: 'a',
            type: 'image',
            mainClass: 'mfp-no-margins mfp-with-zoom',
            image: {
                verticalFit: true
            },
            zoom: {
                duration: 300
            }
        }).magnificPopup('open');
    });

    /* Scrool bookmark
    -------------------------------------- */
    // smooth scroll
    $('a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .not('.zoom') // disable zoom click to scroll
        .click(function(event) {
            // On-page links
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
                location.hostname == this.hostname
            ) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').delay(300).animate({
                        scrollTop: target.offset().top
                    }, 1300, function() {
                        // Callback after animation
                        // Must change focus!
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) { // Checking if the target was focused
                            return false;
                        } else {
                            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                            $target.focus(); // Set focus again
                        };
                    });
                }
            }
        });

})