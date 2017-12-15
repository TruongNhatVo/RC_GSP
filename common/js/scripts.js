//ユーザーエージェント判定
var _ua = (function(u) {
    return {
        Tablet: (u.indexOf("windows") != -1 && u.indexOf("touch") != -1) || u.indexOf("ipad") != -1 || (u.indexOf("android") != -1 && u.indexOf("mobile") == -1) || (u.indexOf("firefox") != -1 && u.indexOf("tablet") != -1) || u.indexOf("kindle") != -1 || u.indexOf("silk") != -1 || u.indexOf("playbook") != -1,
        Mobile: (u.indexOf("windows") != -1 && u.indexOf("phone") != -1) || u.indexOf("iphone") != -1 || u.indexOf("ipod") != -1 || (u.indexOf("android") != -1 && u.indexOf("mobile") != -1) || (u.indexOf("firefox") != -1 && u.indexOf("mobile") != -1) || u.indexOf("blackberry") != -1
    }
})(window.navigator.userAgent.toLowerCase());

// Reload brower on resize
// if ((navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0) || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {} else {
//     $(function() {
//         var timer = false;
//         $(window).resize(function() {
//             if (timer !== false) {
//                 clearTimeout(timer);
//             }
//             timer = setTimeout(function() {
//                 location.reload();
//             }, 200);
//         });
//     });
// }

$(document).ready(function() {

    // Button responsive transform
    $('.btnSp').click(function() {
        $('.btnSp').toggleClass('active');
        $('.menuMain').stop().slideToggle('1200', function() {
            let headerHeight = $('header').height() + $('header').offset().top;
            $('.menuMain').css('top',headerHeight);
            $('.menuMain').css('display') == 'block'
                ? $('body').css('overflow', 'hidden')
                : $('body').css('overflow', 'auto');
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
            gallery: {
                enabled: true
            }
        }).magnificPopup('open');
    });



    // check height menu responsive
    $(window).on('resize load',function() {
        // This will execute whenever the window is resized
        if($(window).width() < 780) {
            let headerHeight = $('header').height() + $('header').offset().top;

            $('.menuMain').css('top',headerHeight);

            // Change Images
            $('img').each(function() {
                $(this).attr("src", $(this).attr("src").replace('_pc', '_sp'));
            });
            // Move text SP
            $('.moveSp').insertAfter('.abc');
            $('.moveSP_02').insertAfter('.technology_03_03 .get_move_02');

        }
        return 0;
    });
})
