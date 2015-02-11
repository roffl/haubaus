$(document).ready(function() {

    function footerStructure(){
        if ( !$('footer').hasClass('main-footer') ){
            var contacts = $('.block-contacts');
            if ( $(window).width() < 1199 && $(window).width() > 770 ){
                $('.block-about:first').before(contacts);
            } else if( $(window).width() < 770 ){
                $('.block-about:first').after(contacts);
            } else{
                $('.block-about:last').after(contacts);
            }
        } else{
            if ( $(window).width() > 770 && $(window).width() < 1199 ){
                $('.block-contacts').insertBefore('.block-about:first');
            } else if ( $(window).width() < 770 || $(window).width() > 1200 ) {
                $('.block-contacts').insertAfter('.block-about:last');
            } 

            $('.main-footer')
                .find('iframe')
                .insertAfter('.block-contacts');
        }
    }

    function footerContactsStructure(){
        var address = $('footer .address');
        var phone = $('footer .phone');
        var email = $('footer .email');
        var social = $('.middle-footer .social')
        var copy = $('footer .copy');
        if( $(window).width() < 770 ){
            $(address).before(phone);
            $(phone).after(email);
            $(social).after(copy);
        } else{
            $(phone).before(address);
            $('footer .contacts').after(copy);
        }
    }

    $('.move-up').on('click', function (e) {
        e.preventDefault();
        var current_position = $(document).scrollTop();
        var scroll_time = current_position/3;
        $('body, html').animate({'scrollTop': 0}, scroll_time);
    });

    footerStructure();
    footerContactsStructure();
    
    $(window).resize(function() {
        footerStructure();
        footerContactsStructure();
    });
});