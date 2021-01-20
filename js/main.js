$(document).ready(function () {
    var owl = $("#intro_sliders");

    $("#intro_sliders").owlCarousel({
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: true,
        autoPlay: 3000, //Set AutoPlay to 3 seconds
    });
    $("#intro-sliders").owlCarousel({

        autoPlay: 3000, //Set AutoPlay to 3 seconds
        items: 3,
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [979, 3]

    });

    $(".next").click(function () {
        owl.trigger('owl.next');
    })
    $(".previous").click(function () {
        owl.trigger('owl.prev');
    })


    $("#testimonial_sliders").owlCarousel({
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: true
    });

});