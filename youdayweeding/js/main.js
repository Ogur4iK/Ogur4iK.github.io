jQuery(document).ready(function(s){function o(){var e=window.document,o=e.documentElement,n=o.requestFullscreen||o.mozRequestFullScreen||o.webkitRequestFullScreen,s=e.exitFullscreen||e.mozCancelFullScreen||e.webkitExitFullscreen;e.fullscreenElement||e.mozFullScreenElement||e.webkitFullscreenElement?s.call(e):n.call(o)}s(".slider").slick({pauseOnHover:!1,dots:!0,prevArrow:'<button type="button" class="slick-prev"></button>',nextArrow:'<button type="button" class="slick-next"></button>',autoplay:!0,speed:1e3,fade:!0}),s(".slider-modal").slick({pauseOnHover:!0,prevArrow:'<button type="button" class="slick-prev"></button>',nextArrow:'<button type="button" class="slick-next"></button>',speed:1e3,fade:!0}),s(".corusel").slick({prevArrow:'<button type="button" class="slick-prev"></button>',nextArrow:'<button type="button" class="slick-next"></button>',speed:1e3,mobileFirst:!0,slidesToShow:3,slidesToScroll:1}),s(function(){s("a[href^='#']").click(function(){var e=s(this).attr("href");return s("html, body").animate({scrollTop:s(e).offset().top+"px"},1500),!1})}),s(".slick-dots>button").text(""),s(".js-open-modal").click(function(e){e.preventDefault();var o=s(this).attr("data-modal"),n=s('.js-modal[data-modal="'+o+'"]');"slider"==o?(s(".overlay").css("background-color","#fff"),s(".srceen__icon").css("display","block"),s(".modal__full").css("display","block"),s(".flaticon-cross-out").removeClass("modal__cross__dark")):(s(".overlay").css("background-color","rgba(0, 0, 0, .9)"),s(".srceen__icon").css("display","none"),s(".modal__full").css("display","none"),s(".flaticon-cross-out").addClass("modal__cross__dark")),n.addClass("is-show"),s(".js-modal-overlay").addClass("is-show")}),s(".js-modal-overlay").click(function(){n(),s(".srceen__icon").removeClass("flaticon-minimize"),s(".srceen__icon").addClass("flaticon-expand"),s("#selected-service").attr("value","none"),s(".js-modal.is-show").removeClass("is-show"),s(this).removeClass("is-show"),s(".video-block").postMessage('{"event": "command", "func": "pauseVideo", "args": ""}',"*")}),s(".modal__cross").click(function(){event.stopPropagation(),n(),s(".srceen__icon").removeClass("flaticon-minimize"),s(".srceen__icon").addClass("flaticon-expand"),s("#selected-service").attr("value","none"),s(".js-modal.is-show").removeClass("is-show"),s(".js-modal-overlay").removeClass("is-show"),s(".video-block").postMessage('{"event": "command", "func": "pauseVideo", "args": ""}',"*")}),s(".modal__full").click(function(e){e.stopPropagation(),o()}),s(".srceen__icon").click(function(e){e.stopPropagation(),o()});function e(e){var o=document.fullscreenElement||document.mozFullscreenElement||document.webkitFullscreenElement;document.fullscreenEnabled||document.mozFullscreenEnabled||document.webkitFullscreenEnabled,o?(s(".srceen__icon").removeClass("flaticon-expand"),s(".srceen__icon").addClass("flaticon-minimize")):(s(".srceen__icon").removeClass("flaticon-minimize"),s(".srceen__icon").addClass("flaticon-expand"))}function n(){document.cancelFullScreen?document.cancelFullScreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitCancelFullScreen&&document.webkitCancelFullScreen()}document.addEventListener("webkitfullscreenchange",e),document.addEventListener("mozfullscreenchange",e),document.addEventListener("fullscreenchange",e),s(document).on("click","#close_vid",function(){jQuery("iframe").each(function(){jQuery(this)[0].contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}',"*")})}),s(".corusel-item").click(function(e){e.preventDefault();var o=this.getAttribute("data-slick-index");s(".slider-modal").slick("setPosition"),s(".slider-modal").slick("slickGoTo",o,!0)}),s("#service-photo").click(function(e){e.stopPropagation(),s("#selected-service").attr("value","Фотосъёмка")}),s("#service-video").click(function(e){e.stopPropagation(),s("#selected-service").attr("value","Видеосъёмка")}),s("#service-photo-plus-video").click(function(e){e.stopPropagation(),s("#selected-service").attr("value","Фото + Видео")}),s(".galery-item").click(function(e){e.preventDefault();var o=this.getAttribute("slide-index");s(".slider-modal").slick("setPosition"),s(".slider-modal").slick("slickGoTo",o,!0)}),s("button").focus(function(){this.blur()}),s("a").focus(function(){this.blur()})});