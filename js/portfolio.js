$(document).ready(function() {

    $(window).resize(function () {

        if( $(window).width() < 770 ){
            $('.abstract-project').find('.button').text('Посмотреть проект подробно');

        } else{
            $('.abstract-project').find('.button').text('Посмотреть проект');
        }

    });


});