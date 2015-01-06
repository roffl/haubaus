$(document).ready(function(){

    var heightH = $(window).height();
    var heightHeader = $('header').height();
    var heightSlider = $('.slider-awards').height();
    var heightPromo = heightH - heightHeader - heightSlider - heightSlider;

    alert(heightH);
    alert(heightHeader);
    alert(heightSlider);
    alert(heightPromo);
    
    var widthW = $(window).width();
    var widthContainer = $('.container').width();
    var difference = widthW - widthContainer;
    var heightPictSmall = (heightPromo/2) - 5;


    $(".main-promo").css("height", heightPromo);

    $('.pict-small, .pict-small-overlay').css({
        'height': heightPictSmall,
        'width': heightPictSmall
    });
    $('.pict-big, .pict-big-overlay').css({
        'height': heightPromo,
        'width': heightPromo
    });
    $('.pict-group').css({
        // 'height': heightPictSmall,
        'width': heightPromo + heightPictSmall+10
    });

    $('.pict-group:first .pict-big-overlay').css({
        'padding-left': (difference/2) + 30
    });
});