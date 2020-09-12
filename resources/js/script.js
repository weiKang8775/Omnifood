$(document).ready(function () {
    // Sticky Nav
    $('.js--wp-features').waypoint(function (direction) {
        $('nav').toggleClass('sticky');
    }, { offset: '80px' });

    // Smooth Scroll
    $('a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function (event) {
            // On-page links
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
                &&
                location.hostname == this.hostname
            ) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 500, function () {
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

        // Animation
        $('.js--wp-steps').waypoint(function(direction) {
            $('.js--app-screen').addClass('animate__animated animate__zoomIn');
        });

        $('.js--wp-plans').waypoint(function(direction) {
            $('.js--wp-premium').addClass('animate__animated animate__pulse');
        });

        $('.js--wp-features').waypoint(function(direction) {
            $('.js--wp-about').addClass('animate__animated animate__backInUp')
        }, { offset: '80px'});

        // Mobile Nav
        $('.js--mobile-nav-icon').click(function() {
            var nav = $('.js--main-nav');
            var icon = $('.js--mobile-nav-icon');

            if (icon.attr('name') === 'reorder-three-outline') {
                icon.attr('name', 'close-outline');
            } else if (icon.attr('name') === 'close-outline') {
                icon.attr('name', 'reorder-three-outline');
            }

            nav.slideToggle(200);
        });
});