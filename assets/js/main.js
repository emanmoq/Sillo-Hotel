jQuery(function ($) {
    $(".datepicker").datepicker({

    });
    $('.select').selectric({
        disableOnMobile: false,
        nativeOnMobile: false,
        arrowButtonMarkup: '<b class="button"><i class="fa fa-chevron-down"></i></b>',
    }
    );
    $(".guestCar").owlCarousel({
        nav: false,
        dots: true,
        loop: true,
        margin: 30,
        responsive: {
            0: {
                items: 1,
            },
            700: {
                items: 2,
            },
            1000: {
                items: 3,
            }
        }
    });
    $(".serviceCar").owlCarousel({
        nav: true,
        dots: true,
        loop: true,
        margin:0,
        items:1,
        navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],

    });
    $(".aboutCar").owlCarousel({
        nav: true,
        dots: false,
        loop: true,
        margin:0,
        items:1,
        center: true,
        navText: ['<i class="fa fa-arrow-left"></i>', '<i class="fa fa-arrow-right"></i>'],
        responsive: {
            0: {
                stagePadding: 0,
            },
            800: {
                stagePadding: 100,
            }
        }

    });
});

