$(document).ready(function(){$(".slider").owlCarousel({items:1,loop:!0,nav:!0,dots:!0,navText:["<img class='slider_prev' src='img/slider/arrow.svg'>","<img class='slider_next' src='img/slider/arrow.svg'>"],dotsContainer:"#slider_dots"}),$(".projects_carousel").owlCarousel({items:3,loop:!0,nav:!0,navContainerClass:"owl-nav container",navText:["<img class='projects_prev' src='img/projects/arrow.svg'>","<img class='projects_next' src='img/projects/arrow.svg'>"],dots:!1}),$(".trust_carousel").owlCarousel({items:5,loop:!0,nav:!0,navText:["<img class='trust_prev' src='img/projects/arrow.svg'>","<img class='trust_next' src='img/projects/arrow.svg'>"],center:!0,dots:!1})});