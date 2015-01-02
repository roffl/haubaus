$(document).ready(function() {

    function footerStructure(){
        var contacts = $('.block-contacts');
        if ( $(window).width() < 1200 && $(window).width() > 770 ){
            $('.block-about:first').before(contacts);
        } else if( $(window).width() < 770 ){
            $('.block-about:first').after(contacts);
        } else{
            $('.block-about:last').after(contacts);
        }
    }

    function contactsStructure(){
        var address = $('.address');
        var phone = $('.phone');
        var email = $('.email');
        var social = $('.middle-footer .social')
        var copy = $('.copy');
        if( $(window).width() < 770 ){
            $(address).before(phone);
            $(phone).after(email);
            $(social).after(copy);
        } else{
            $(phone).before(address);
        }
    }

    footerStructure();
    contactsStructure();
    $(window).resize(function() {
        footerStructure();
        contactsStructure();
    });
});