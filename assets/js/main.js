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
    $(".serviceSlider").owlCarousel({
        nav: true,
        dots: true,
        loop: true,
        margin:0,
        items:1,
        center: true,
        navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],


    });
    $(".closeTag").click(function(){
        $(this).parent(".optionsTag").css("display","none")
    });
    $(".moreOptionsBtn").click(function(){
        $(".filterModal").toggle()
    })
    
    
    $("#price-range").slider({
        step: 10,
        range: true,
        min: 50,
        max: 500,
        values: [100, 200],
    
        slide: function (event, ui) { $(".min").html("$" + ui.values[0]);
        $(".max").html("$" + ui.values[1]); }
      });
      $(".min").append("$" + $("#price-range").slider("values", 0) )
      $(".max").append("$" + $("#price-range").slider("values", 1) )
});

