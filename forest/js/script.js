jQuery(function ($) {

    $('.builds').magnificPopup({
        delegate: 'a',
        tClose: 'Закрыть (Esc)', // Alt text on close button
        tLoading: 'Загрузка...',
        gallery: {
            enabled: true,
            tPrev: 'Предыдущее изображение', // title for left button
            tNext: 'Следующее изображение)', // title for right button
            tCounter: '<span class="mfp-counter">%curr% из %total%</span>',
        },
        
        image: {
            tError: 'Неудалось загрузить <a href="%url%">Изображение</a>.',// Error message when image could not be loaded
        },
        type: 'image'
    });

    $('#modal-feedback').iziModal({
        overlayColor: 'rgba(0,0,0,0.7)',
        borderBottom: false,
        transitionOut: 'fadeOutLeft',
        transitionIn: 'fadeInRight',
        radius: 10,
        // history: true
    });

    $('#modal-thank').iziModal({
        overlayColor: 'rgba(0,0,0,0.7)',
        borderBottom: false,
        transitionOut: 'fadeOutLeft',
        transitionIn: 'fadeInRight',
        radius: 10,
        // history: true
    });

    $('form').submit(function () {
        $('#modal-feedback').iziModal('close');
        $('#modal-thank').iziModal('open');
        return false;
    });

    $('.feedback-btn').click(function () {
        $('#modal-feedback').iziModal('open');
    });

    $(".icon-close").click(function () {
        $(this).parents('[id*="modal"]').iziModal('close');
    });

    logoAdaptive();

    menuOpacity();

    $(window).resize(function () {
        logoAdaptive();
    });

    function logoAdaptive() {
        if ($(window).width() + scrollbarWidth() <= 1199) {
            $('.mobile-logo .container').prepend($('#top-logo'));
            $('.menu-wrap').prepend($('.nav-btn'));

        } else {
            $('.nav-row').prepend($('#top-logo'))
            $('.nav-wrap').append($('.nav-btn'))
        }
    }

    function menuOpacity() {
        if ($('.mobile-logo').offset().top > 50) {
            $('.mobile-logo').addClass('scrolled');
        } else {
            $('.mobile-logo').removeClass('scrolled');
        }
    };

    function scrollbarWidth() {
        var documentWidth = parseInt(document.documentElement.clientWidth);
        var windowsWidth = parseInt(window.innerWidth);
        var scrollbarWidth = windowsWidth - documentWidth;
        return scrollbarWidth;
    }

    $('#burger').click(function () {
        $(this).toggleClass('active');
        $('.mobile-logo').toggleClass('active');
        $('body').toggleClass('lock');
        $('body').hasClass('lock') ? $('.main-menu').toggleClass('active') : setTimeout(function () {
            $('.main-menu').toggleClass('active');
        }, 400);
        $('.menu-wrap').toggleClass('active');
    });

    $(window).scroll(menuOpacity);

    $('.catalog-table').stacktable();
});