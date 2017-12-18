//ユーザーエージェント判定
var _ua = (function(u) {
	return {
		Tablet: (u.indexOf("windows") != -1 && u.indexOf("touch") != -1) || u.indexOf("ipad") != -1 || (u.indexOf("android") != -1 && u.indexOf("mobile") == -1) || (u.indexOf("firefox") != -1 && u.indexOf("tablet") != -1) || u.indexOf("kindle") != -1 || u.indexOf("silk") != -1 || u.indexOf("playbook") != -1,
		Mobile: (u.indexOf("windows") != -1 && u.indexOf("phone") != -1) || u.indexOf("iphone") != -1 || u.indexOf("ipod") != -1 || (u.indexOf("android") != -1 && u.indexOf("mobile") != -1) || (u.indexOf("firefox") != -1 && u.indexOf("mobile") != -1) || u.indexOf("blackberry") != -1
	}
})(window.navigator.userAgent.toLowerCase());

$(document).ready(function() {

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
			gallery: {
				enabled: true
			}
		}).magnificPopup('open');
	});

	// check height menu responsive
	$(window).on('resize load', function() {
		// This will execute whenever the window is resized
		if ($(window).width() < 780) {
			let headerHeight = $('header').height() + $('header').offset().top;

			$('.menuMain').css('top', headerHeight);

			// Change Images
			$('img').each(function() {
				$(this).attr("src", $(this).attr("src").replace('_pc', '_sp'));
			});
			// Move text SP
			$('.moveSp').insertAfter('.abc');
			$('.moveBefore').insertBefore('.beforeEl');

		}
		return 0;
	});

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