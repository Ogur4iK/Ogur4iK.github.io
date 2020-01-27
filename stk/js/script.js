jQuery(function($){
    $('.slider').owlCarousel({
        loop: true,
        items: 1,
        nav: true,
        autoplay: true,
        autoplayHoverPause: true,
        navText: ['<svg class="slider-icon"><use xlink:href="#arrow-right"></use></svg>',
        '<svg class="slider-icon"><use xlink:href="#arrow-left"></use></svg>']
    });

    $('#feedback-modal').iziModal({
        overlayColor: 'rgba(0,0,0,0.7)',
        borderBottom: false,
        radius: 5,
        history: true
    });

    $('#services-modal').iziModal({
        overlayColor: 'rgba(0,0,0,0.7)',
        borderBottom: false,
        radius: 5,
        history: true
    });

    $('.feedback-open').click(function(){
        $('#feedback-modal').iziModal('open');
    });

    $('.buy-open').click(function(){
        $(this).parents('[id*="modal"]').iziModal('close');
        $('#feedback-modal').iziModal('open');
    });

    $('.more-link').click(function(){
        event.preventDefault();
        $('#services-modal').iziModal('open');
    });

    $(".close-icon").click(function(){
        $(this).parents('[id*="modal"]').iziModal('close');
    });

    $('.burger').click(function(){
        $('.burger, .top-nav-wrap').toggleClass('active');
        $('body').toggleClass('lock');
    });

    $('.menu-item').click(function(){
        $('.burger, .top-nav-wrap').removeClass('active');
        $('body').removeClass('lock');
    });

    $('.price-table').stacktable();
});