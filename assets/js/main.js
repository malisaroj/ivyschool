jQuery(document).ready(function () {
    jQuery(".logo-menu-icon").click(function () {
        if ($(".main-menu").css("display") === "block") {
            $(".main-menu").css("display", "none");
            $(".main-menu").css("width", "0");

        } else {
            $(".main-menu").css("display", "block");
            $(".main-menu").css("width", "70%");
            $(".mobile-nav").css("display", "none");
        }
    });

    jQuery(".closebtn").click(function () {
        $(".main-menu").css("width", "0");
        $(".mobile-nav").css("display", "block");
    });

    jQuery(".login").click(function () {
        $(".card").css("display", "block");
    });


    jQuery(".register").click(function () {
        $("#login").css("display", "none");
        $("#register").css("display", "block");
    });

    jQuery(".closelogin").click(function () {
        $('.card').hide();
    });

    jQuery(".search").click(function () {
        $('#search').css("width", "100%");
    });

    jQuery('#owl-banner').owlCarousel({
        loop: true,
        nav: false,
        smartSpeed: 450,
        autoplay: true,
        autoplayTimeout: 8000,
        autoplayHoverPause: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            }
        }
    });

    jQuery('#carousel').owlCarousel({
        loop: true,
        nav: true,
        navText: [
            "<i class='fa fa-chevron-left'></i>",
            "<i class='fa fa-chevron-right'></i>"
        ],
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


    jQuery('#portfolio-carousel').owlCarousel({
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

    jQuery('#testimonial-carousel').owlCarousel({
        loop: true,
        nav: false,
        items: 1,
        smartSpeed: 450,
        autoplay: true,
        autoplayTimeout: 8000,
        autoplayHoverPause: true,
        dots: true,
        dotsContainer: '#carousel-custom-dots',

    });
    jQuery('.owl-dot').click(function () {
        owl.trigger('to.owl.carousel', [$(this).index(), 300]);
    });
});