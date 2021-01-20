$(document).ready(function() {
    var owl = $("#intro_sliders");

    $("#intro_sliders").owlCarousel({
        slideSpeed : 300,
        paginationSpeed : 400,
        singleItem:true
    });




    $(".next").click(function(){
        owl.trigger('owl.next');
    })
    $(".previous").click(function(){
        owl.trigger('owl.prev');
    })






    $("#testimonial_sliders").owlCarousel({
        slideSpeed : 300,
        paginationSpeed : 400,
        singleItem:true
    });

});