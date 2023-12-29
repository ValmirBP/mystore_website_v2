$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        autoPlay: 3000, //Set AutoPlay to 3 seconds
 
        items : 2,
        itemsDesktop : [1199,3],
        itemsDesktopSmall : [979,3]

        // navigation : true,
        // slideSpeed : 300,
        // paginationSpeed : 400,
        // items : 1, 
        // itemsDesktop : false,
        // itemsDesktopSmall : true,
        // itemsTablet: true,
        // itemsMobile : true,
          
        // items: 1,
        // loop: true,
        // autoplay: false,
        // autoplayTimeout: 2000,
        // autoplayHoverPause: true,
        // center: true,
        // dots: true,
        // nav: true,
        // navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
        // responsive: {
        //     768: {
        //         items: 2
        //     },
        //     992: {
        //         items: 3
        //     }
        //}
    });
});