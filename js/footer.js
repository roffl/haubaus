$(document).ready(function() {

    function footerStructure(){
        $(window).resize(function(){
            var contacts = $('.block-contacts');
            if ( $(window).width() < 1200 && $(window).width() > 770 ){
                $('.block-about:first').before(contacts);
            } else if( $(window).width() < 770 ){
                $('.block-about:first').after(contacts);
            } else{
                $('.block-about:last').after(contacts);
            }
        });
    }

    function contactsStructure(){
        $(window).resize(function() {
            var address = $('.address');
            var phone = $('.phone');
            var email = $('.email');
            var social = $('.middle-footer .social')
            var copy = $('.copy');
            if( $(window).width() < 770 ){
                $(address).before(phone);
                $(phone).after(email);
                $(social).after(copy);
            }
        });
    }

    footerStructure();
    contactsStructure();
});