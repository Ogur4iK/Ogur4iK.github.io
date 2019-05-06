jQuery(document).ready(function ($) {
   $('.slider').slick({
      pauseOnHover: false,
      dots: true,
      prevArrow: '<button type="button" class="slick-prev"></button>',
      nextArrow: '<button type="button" class="slick-next"></button>',
      autoplay: true,
      speed: 1000,
      fade: true
   });
   $('.slider-modal').slick({
      pauseOnHover: true,
      prevArrow: '<button type="button" class="slick-prev"></button>',
      nextArrow: '<button type="button" class="slick-next"></button>',
      slidesToShow: 1,
      speed: 1000,
      fade: true
   });
   $('.corusel').slick({
      prevArrow: '<button type="button" class="slick-prev-corusel"></button>',
      nextArrow: '<button type="button" class="slick-next-corusel"></button>',
      speed: 1000,
      mobileFirst:true,
      slidesToShow: 3,
      slidesToScroll: 1,
      lazyLoad: 'progressive'
   });
   //Прокрутка
   $(function () {
      $("a[href^='#']").click(function () {
         var _href = $(this).attr("href");
         $("html, body").animate({
            scrollTop: $(_href).offset().top + "px"
         }, 1500);
         return false;
      });
   });
   $('.slick-dots>button').text('');


   // Модальные окна
   $('.js-open-modal').click(function (event) {
      event.preventDefault();

      var modalName = $(this).attr('data-modal');
      var modal = $('.js-modal[data-modal="' + modalName + '"]');

      if (modalName == 'slider') {
         $('.overlay').css("background-color", '#fff');
         $('.modal_full').css("display", "block");
         $('.modal__cross').removeClass("modal__cross_dark");
      } else {
         $('.overlay').css("background-color", 'rgba(0, 0, 0, .9)');
         $('.modal_full').css("display", "none");
         $('.modal__cross').addClass("modal__cross_dark");
      }
      modal.addClass('is-show');
      $('.js-modal-overlay').addClass('is-show');
   });

   $('.js-modal-overlay').click(function () {
      $('.modal_full').removeClass('flaticon-minimize');
      $('.modal_full').addClass('flaticon-expand');
      $('#selected-sevice').attr("value", 'none');
      full = false;
      fullScreenCancel();
      $('.js-modal.is-show').removeClass('is-show');
      $(this).removeClass('is-show');
      $('.video-block').postMessage('{"event": "command", "func": "pauseVideo", "args": ""}', "*");
   });

   //Остановка видео при закрытии окна
   $(document).on('click', '#close_vid', function () {
      jQuery("iframe").each(function () {
         jQuery(this)[0].contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*')
      });
   });

   var linkArray = document.querySelectorAll('.js-open-modal');
   var overlay = document.querySelector('.js-modal-overlay');
   var crossArray = document.querySelectorAll('.js-modal-close');


   linkArray.forEach(function (item) {

      item.addEventListener('click', function (event) {
         event.preventDefault();

         var modalName = this.getAttribute('data-modal');
         var modal = document.querySelector('.js-modal[data-modal="' + modalName + '"]');

         modal.classList.add('is-show');
         overlay.classList.add('is-show');
      });
   });


   crossArray.forEach(function (cross) {

      cross.addEventListener('click', function () {

         var parent = this.parentNode;
         parent.classList.remove('is-show');
         overlay.classList.remove('is-show');
      });

   });


   //Корусель клик
   $('.corusel-item').click(function (event) {
      event.preventDefault();
      var index = this.getAttribute('data-slick-index');
      $('.slider-modal').slick('slickGoTo', index, true);
   });

   //fullscreen
   function fullScreen(element) {
      if (element.requestFullscreen) {
         element.requestFullscreen();
      } else if (element.webkitrequestFullscreen) {
         element.webkitRequestFullscreen();
      } else if (element.mozRequestFullscreen) {
         element.mozRequestFullScreen();
      }
   }

   function fullScreenCancel() {
      if (document.cancelFullScreen) {
         document.cancelFullScreen();
      } else if (document.webkitCancelFullScreen) {
         document.webkitCancelFullScreen();
      } else if (document.mozCancelFullScreen) {
         document.mozCancelFullScreen();
      }
   }

   var full = false;
   $('.modal_full').click(function (event) {
      event.stopPropagation();
      if (!full) {
         var html = document.documentElement;
         fullScreen(html);
         $('.modal_full').removeClass('flaticon-expand');
         $('.modal_full').addClass('flaticon-minimize');
         full = !full;
      } else {
         fullScreenCancel();
         $('.modal_full').removeClass('flaticon-minimize');
         $('.modal_full').addClass('flaticon-expand');
         full = !full;
      }
   });

   //Contact modal
   $('#service-photo').click(function (event) {
      event.stopPropagation();
      var input = $('#selected-sevice');
      input.attr("value", 'Фотосъёмка');
   });

   $('#service-video').click(function (event) {
      event.stopPropagation();
      var input = $('#selected-sevice');
      input.attr("value", 'Видеосъёмка');
   });

   $('#service-photo-plus-video').click(function (event) {
      event.stopPropagation();
      var input = $('#selected-sevice');
      input.attr("value", 'Фото + Видео');
   });

   //galery click
   $('.galery-item').click(function (event) {
      event.preventDefault();
      var index = this.getAttribute('slide-index');
      $('.slider-modal').slick('slickGoTo', index, true);
   });

});