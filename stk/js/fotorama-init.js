jQuery(function($){
    var $fotoramaDiv = $('.fotorama').fotorama({
        shadows: false,
        nav: 'thumbs',
        fit: 'cover',
        loop: true,
        arrows: 'always'
    });

    var fotorama = $fotoramaDiv.data('fotorama');
    $(window).resize(function() {
        recalcWidth();
    });

    $('.fotorama').on('fotorama:ready', function (e, fotorama) {
        recalcWidth();
    });

    function recalcWidth(){
        var windowWidth = $(window).width();
        if(windowWidth >= 0 && windowWidth < 425){
            fotorama.setOptions({
                thumbwidth: widthCalc(2, 10),
                thumbheight: (widthCalc(2, 10) * 0.58),
                thumbmargin: 10
            });
        }else if(windowWidth >= 425 && windowWidth < 768){
            fotorama.setOptions({
                thumbwidth: widthCalc(3, 15),
                thumbheight: (widthCalc(3, 15) * 0.58),
                thumbmargin: 15
            });
        }else  if(windowWidth >= 768){
            fotorama.setOptions({
                thumbwidth: widthCalc(4, 20),
                thumbheight: (widthCalc(4, 20) * 0.58),
                thumbmargin: 20
            });
        }
    }

    function widthCalc(items, padding){
        var paddings = (items-1) * padding;
        return ($('.fotorama__stage__shaft').width() - paddings) / items;
    }
});