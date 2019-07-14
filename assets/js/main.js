jQuery(document).ready(function () {
    jQuery(".logo-menu-icon").click(function () {
        if ($(".main-menu").css("display") === "block") {
            $(".main-menu").css("display", "none");
        } else {
            $(".main-menu").css("display", "block");
        }
    });

    jQuery('#carousel').owlCarousel({
        loop: true,
        nav: false,
        items: 4,
        smartSpeed: 450,
        autoplay: true,
        autoplayTimeout: 8000,
        autoplayHoverPause: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            768: {
                items: 2,
                nav: false
            },

            1024: {
                items: 3,
                nav: false
            },
            1366: {
                items: 4,
                loop: false
            }
        }
    });

    jQuery('#certificate').owlCarousel({
        loop: true,
        nav: false,
        items: 3,
        smartSpeed: 450,
        autoplay: true,
        autoplayTimeout: 8000,
        autoplayHoverPause: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            1024: {
                items: 2,
                nav: false
            },

            1366: {
                items: 3,
                nav: false
            }
        }
    });

    jQuery('#tweet').owlCarousel({
        loop: true,
        nav: false,
        items: 1,
        smartSpeed: 450,
        autoplay: true,
        autoplayTimeout: 8000,
        autoplayHoverPause: true,

    });

    jQuery('#testimonial').owlCarousel({
        loop: true,
        nav: false,
        items: 1,
        smartSpeed: 450,
        autoplay: true,
        autoplayTimeout: 8000,
        autoplayHoverPause: true,
        dots: true,
        dotsContainer: '.owl-dots',

    });

    $('.owl-dot').click(function () {
        owl.trigger('to.owl.carousel', [$(this).index(), 300]);
    });
});