$(document).ready(function() {
//     var indexSlider = $('.slider').attr('data-index-slider');
//     var totalItems = $('[data-index-slider="'+ indexSlider +'"] ' + '.owl-item:not(.cloned)').length;
//     var container = $('.bx-prev').after('<div class="num"><span class="currentSlide"></span><span class="allSlides"></span></div>');


//     var currentIndex = $('.owl-item:not(.cloned)').find('.active').index()+2;


    // alert(currentIndex);
    // $('.num').html(''+currentIndex+'/'+totalItems+'');

    // $('#myCarousel').bind('slid', function() {
    //     currentIndex = $('div.active').index() + 1;
    //    $('.num').html(''+currentIndex+'/'+totalItems+'');
    // });
    
    // sliderLocation = $('.portfolio-content').find('.slider')
    // dataProjectIndex = $('.portfolio-content').find('.row').attr('data-project');


    $(window).resize(function () {

        if( $(window).width() < 770 ){
            $('.abstract-project').find('.button').text('Посмотреть проект подробно');

        } else{
            $('.abstract-project').find('.button').text('Посмотреть проект');
        }

    });


});