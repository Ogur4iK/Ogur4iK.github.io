jQuery(document).ready(function(l){l(".slider").slick({pauseOnHover:!1,dots:!0,prevArrow:'<button type="button" class="slick-prev"></button>',nextArrow:'<button type="button" class="slick-next"></button>',autoplay:!0,speed:1e3,fade:!0}),l(".slider-modal").slick({pauseOnHover:!0,prevArrow:'<button type="button" class="slick-prev"></button>',nextArrow:'<button type="button" class="slick-next"></button>',slidesToShow:1,speed:1e3,fade:!0}),l(".corusel").slick({prevArrow:'<button type="button" class="slick-prev"></button>',nextArrow:'<button type="button" class="slick-next"></button>',speed:1e3,mobileFirst:!0,slidesToShow:3,slidesToScroll:1,lazyLoad:"progressive"}),l(function(){l("a[href^='#']").click(function(){var e=l(this).attr("href");return l("html, body").animate({scrollTop:l(e).offset().top+"px"},1500),!1})}),l(".slick-dots>button").text(""),l(".js-open-modal").click(function(e){e.preventDefault();var o=l(this).attr("data-modal"),t=l('.js-modal[data-modal="'+o+'"]');"slider"==o?(l(".overlay").css("background-color","#fff"),l(".modal_full").css("display","block"),l(".modal__cross").removeClass("modal__cross_dark")):(l(".overlay").css("background-color","rgba(0, 0, 0, .9)"),l(".modal_full").css("display","none"),l(".modal__cross").addClass("modal__cross_dark")),t.addClass("is-show"),l(".js-modal-overlay").addClass("is-show")}),l(".js-modal-overlay").click(function(){l(".modal_full").removeClass("flaticon-minimize"),l(".modal_full").addClass("flaticon-expand"),l("#selected-sevice").attr("value","none"),a=!1,s(),l(".js-modal.is-show").removeClass("is-show"),l(this).removeClass("is-show"),l(".video-block").postMessage('{"event": "command", "func": "pauseVideo", "args": ""}',"*")}),l(document).on("click","#close_vid",function(){jQuery("iframe").each(function(){jQuery(this)[0].contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}',"*")})});var e=document.querySelectorAll(".js-open-modal"),t=document.querySelector(".js-modal-overlay"),o=document.querySelectorAll(".js-modal-close");function s(){document.cancelFullScreen?document.cancelFullScreen():document.webkitCancelFullScreen?document.webkitCancelFullScreen():document.mozCancelFullScreen&&document.mozCancelFullScreen()}e.forEach(function(e){e.addEventListener("click",function(e){e.preventDefault();var o=this.getAttribute("data-modal");document.querySelector('.js-modal[data-modal="'+o+'"]').classList.add("is-show"),t.classList.add("is-show")})}),o.forEach(function(e){e.addEventListener("click",function(){this.parentNode.classList.remove("is-show"),t.classList.remove("is-show")})}),l(".corusel-item").click(function(e){e.preventDefault();var o=this.getAttribute("data-slick-index");l(".slider-modal").slick("slickGoTo",o,!0)});var a=!1;l(".modal_full").click(function(e){(e.stopPropagation(),a)?(s(),l(".modal_full").removeClass("flaticon-minimize"),l(".modal_full").addClass("flaticon-expand"),a=!a):(function(e){e.requestFullscreen?e.requestFullscreen():e.webkitrequestFullscreen?e.webkitRequestFullscreen():e.mozRequestFullscreen&&e.mozRequestFullScreen()}(document.documentElement),l(".modal_full").removeClass("flaticon-expand"),l(".modal_full").addClass("flaticon-minimize"),a=!a)}),l("#service-photo").click(function(e){e.stopPropagation(),l("#selected-sevice").attr("value","Фотосъёмка")}),l("#service-video").click(function(e){e.stopPropagation(),l("#selected-sevice").attr("value","Видеосъёмка")}),l("#service-photo-plus-video").click(function(e){e.stopPropagation(),l("#selected-sevice").attr("value","Фото + Видео")}),l(".galery-item").click(function(e){e.preventDefault();var o=this.getAttribute("slide-index");l(".slider-modal").slick("slickGoTo",o,!0)})});