!function(r){r(".scroll-container").mCustomScrollbar({axis:"y",theme:"custom-theme",scrollInertia:250}),new Glide(".slider",{type:"slider",swipeThreshold:!1,dragThreshold:!1,animationDuration:500}).mount();var e=new Glide(".phone-slider",{type:"slider",swipeThreshold:!1,dragThreshold:!1,animationDuration:500});e.on("run",function(){r(".phone-sldr-counter .current-sldr").text(e.index+1)}),e.on("mount.after",function(){r(".phone-sldr-counter .all-sldr").text(r(".phone-slider .glide__slide").length),r(".phone-sldr-counter .current-sldr").text(e.index+1)}),e.mount();var t=new Glide(".cert-slider",{type:"slider",swipeThreshold:!1,dragThreshold:!1,animationDuration:500});t.on("run",function(){r(".cert-sldr-counter .current-sldr").text(t.index+1)}),t.on("mount.after",function(){r(".cert-sldr-counter .all-sldr").text(r(".cert-slider .glide__slide").length),r(".cert-sldr-counter .current-sldr").text(t.index+1)}),t.mount(),r("#feedback-modal").iziModal({overlayColor:"rgba(0,0,0,0.7)",borderBottom:!1,radius:20}),r("#stock-modal").iziModal({overlayColor:"rgba(0,0,0,0.7)",borderBottom:!1,radius:20}),r("[data-modal]").click(function(){r(this.getAttribute("data-modal")).iziModal("open")}),r("a[href^='#']").click(function(){var e=r(this).attr("href");return r("html, body").animate({scrollTop:r(e).offset().top+"px"}),!1}),r(".burger").click(function(){r(".header-top").addClass("open")}),r(".close").click(function(){r(".open.header-top").removeClass("open")}),SmoothScroll({animationTime:800});new Datepicker("#datepicker")}(jQuery),$(window).on("load",function(){$(".before-after").twentytwenty({default_offset_pct:.5,no_overlay:!0}),!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)&&768<=screen.width&&$(window).stellar({responsive:!0})});