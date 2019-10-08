$(document).ready(function(){
    $(".slider").owlCarousel({
        items: 1,
        loop: true,
        nav: true,
        dots: true,
        navText: ["<img class='slider_prev' src='img/slider/arrow.svg'>", 
        "<img class='slider_next' src='img/slider/arrow.svg'>"],
        dotsContainer: '#slider_dots'
    });
    $(".projects_carousel").owlCarousel({
        items: 4,
        loop: true,
        nav: true,
        navContainerClass: "owl-nav container",
        navText: ["<img class='projects_prev' src='img/projects/arrow.svg'>", 
        "<img class='projects_next' src='img/projects/arrow.svg'>"],
        center: true,
        dots: false
    });
});