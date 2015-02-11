$(document).ready(function(){
    function resizePromoMainPage(){


        // высота экрана
        var heightH = $(window).height();
        // Высота хедера
        var heightHeader = $('header').outerHeight();
        // высота слайдера
        var heightSlider = $('.main-slider-awards').outerHeight();
        // искомая высота промо блока, такая что все элементы - хедер, промо блок и слайдер отображаются на при загрузке страницы вместе
        var heightPromo = heightH - heightHeader - heightSlider+18;

        var tabletHeightPromo = heightH - heightHeader - heightSlider;
        // ширина экрана
        var widthW = $(window).width();
        // ширина контейнера
        var widthContainer = $('.container').width();
        // разница между шириной экрана и шириной контейнера
        var difference = widthW - widthContainer;
        // Ищем высоту маленькой картинки. С учетом маргинов
        var heightPictSmall = (heightPromo/2) - 5;

        var tabletHeightPictBig = (tabletHeightPromo -5) * 2 / 3;

        var tabletHeightPictSmall = (tabletHeightPictBig/2) - 5;

        var heightParagraph = $('.main-promo>p').outerHeight();

        var heightPromoSlider = tabletHeightPromo - heightParagraph;
        // Присваиваем промо блоку свою высоту
        // $(".main-promo").css("height", heightPromo);

        // alert(heightPictBig);
        if( $(window).width() > 1200 ){

            $(".main-promo, .slider-big").css("height", heightPromo);
            // Т.к. элементы квадратные, то высота равна ширине
            // присваиваем маленькому блоку с картинкой и его оверлею его ширину и высоту
            $('.pict-small, .pict-small-overlay').css({
                'height': heightPictSmall,
                'width': heightPictSmall
            });
            // Присваиваем большому блоку со своим оверлеем его ширину и высоту.
            // Т.к. этот блок растянулся на всю высоту промоблока, то его высота равна высоте промоблока
            $('.pict-big, .pict-big-overlay').css({
                'height': heightPromo,
                'width': heightPromo
            });
            // присваиваем контейнеру для одного большого и двух маленьких блоков свою ширину с учетом маргина
            $('.pict-group').css({
                // 'height': heightPictSmall,
                'width': heightPromo + heightPictSmall+10
            });
            // добавляем паддинг первому элементу
            $('.pict-group:first .pict-big-overlay').css({
                'padding-left': (difference/2) + 30
            });

        } else if ( $(window).width() > 770 && $(window).width() < 1199){

            $(".main-promo, .slider-big").css("height", tabletHeightPromo);
            // Т.к. элементы квадратные, то высота равна ширине
            // присваиваем большому блоку с картинкой и его оверлею его ширину и высоту
            $('.pict-big, .pict-big-overlay').css({
                'height': tabletHeightPictBig,
                'width': tabletHeightPictBig
            });
            // Присваиваем большому блоку со своим оверлеем его ширину и высоту.
            $('.pict-small, .pict-small-overlay').css({
                'height': tabletHeightPictSmall,
                'width': tabletHeightPictSmall
            });
            // присваиваем контейнеру для одного большого и двух маленьких блоков свою ширину с учетом маргина
            $('.pict-group').css({
                // 'height': heightPictSmall,
                'width': tabletHeightPictBig
            });
            // добавляем паддинг первому элементу
            $('.pict-group:first .pict-big-overlay').css({
                'padding-left': (difference/2) + 30
            });
        } else{
            $(".main-promo, .slider-big").css("height", tabletHeightPromo);
            $('.promo-slider').css({
                "height": heightPromoSlider
            });
        }
    }

    resizePromoMainPage();

    $(window).resize(function () {
        resizePromoMainPage();
    });
});