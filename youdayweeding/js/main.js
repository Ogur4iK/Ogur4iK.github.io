jQuery(document).ready(function(t){function o(){var e=window.document,o=e.documentElement,n=o.requestFullscreen||o.mozRequestFullScreen||o.webkitRequestFullScreen,t=e.exitFullscreen||e.mozCancelFullScreen||e.webkitExitFullscreen;e.fullscreenElement||e.mozFullScreenElement||e.webkitFullscreenElement?t.call(e):n.call(o)}t(".slider").slick({pauseOnHover:!1,dots:!0,prevArrow:'<button type="button" class="slick-prev"></button>',nextArrow:'<button type="button" class="slick-next"></button>',autoplay:!0,speed:1e3,fade:!0}),t(".slider-modal").slick({pauseOnHover:!0,prevArrow:'<button type="button" class="slick-prev"></button>',nextArrow:'<button type="button" class="slick-next"></button>',speed:1e3,fade:!0}),t(".corusel").slick({prevArrow:'<button type="button" class="slick-prev"></button>',nextArrow:'<button type="button" class="slick-next"></button>',speed:1e3,mobileFirst:!0,slidesToShow:3,slidesToScroll:1}),t(function(){t("a[href^='#']").click(function(){var e=t(this).attr("href");return t("html, body").animate({scrollTop:t(e).offset().top+"px"},1500),!1})}),t(".slick-dots>button").text(""),t(".js-open-modal").click(function(e){e.preventDefault();var o=t(this).attr("data-modal"),n=t('.js-modal[data-modal="'+o+'"]');"slider"==o?(t(".overlay").css("background-color","#fff"),t(".srceen__icon").css("display","block"),t(".modal__full").css("display","block"),t(".flaticon-cross-out").removeClass("modal__cross__dark")):(t(".overlay").css("background-color","rgba(0, 0, 0, .9)"),t(".srceen__icon").css("display","none"),t(".modal__full").css("display","none"),t(".flaticon-cross-out").addClass("modal__cross__dark")),n.addClass("is-show"),t(".js-modal-overlay").addClass("is-show")}),t(".js-modal-overlay").click(function(){n(),t(".srceen__icon").removeClass("flaticon-minimize"),t(".srceen__icon").addClass("flaticon-expand"),t("#selected-service").attr("value","none"),t(".js-modal.is-show").removeClass("is-show"),t(this).removeClass("is-show")}),t(".modal__cross").click(function(){event.stopPropagation(),n(),t(".srceen__icon").removeClass("flaticon-minimize"),t(".srceen__icon").addClass("flaticon-expand"),t("#selected-service").attr("value","none"),t(".js-modal.is-show").removeClass("is-show"),t(".js-modal-overlay").removeClass("is-show")}),t(".modal__full").click(function(e){e.stopPropagation(),o()}),t(".srceen__icon").click(function(e){e.stopPropagation(),o()});function e(e){var o=document.fullscreenElement||document.mozFullscreenElement||document.webkitFullscreenElement;document.fullscreenEnabled||document.mozFullscreenEnabled||document.webkitFullscreenEnabled,o?(t(".srceen__icon").removeClass("flaticon-expand"),t(".srceen__icon").addClass("flaticon-minimize")):(t(".srceen__icon").removeClass("flaticon-minimize"),t(".srceen__icon").addClass("flaticon-expand"))}function n(){document.cancelFullScreen?document.cancelFullScreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitCancelFullScreen&&document.webkitCancelFullScreen()}document.addEventListener("webkitfullscreenchange",e),document.addEventListener("mozfullscreenchange",e),document.addEventListener("fullscreenchange",e),t(".close_video").click(function(){t("iframe").each(function(){t(this)[0].contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}',"*")})}),t(".corusel-item").click(function(e){e.preventDefault();var o=this.getAttribute("data-slick-index");t(".slider-modal").slick("setPosition"),t(".slider-modal").slick("slickGoTo",o,!0)}),t("#service-photo").click(function(e){e.stopPropagation(),t("#selected-service").attr("value","Фотосъёмка")}),t("#service-video").click(function(e){e.stopPropagation(),t("#selected-service").attr("value","Видеосъёмка")}),t("#service-photo-plus-video").click(function(e){e.stopPropagation(),t("#selected-service").attr("value","Фото + Видео")}),t(".galery-item").click(function(e){e.preventDefault();var o=this.getAttribute("slide-index");t(".slider-modal").slick("setPosition"),t(".slider-modal").slick("slickGoTo",o,!0)}),t("button").focus(function(){this.blur()}),t("a").focus(function(){this.blur()})});