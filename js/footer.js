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

    footerStructure();
    footerContactsStructure();
    
    $(window).resize(function() {
        footerStructure();
        footerContactsStructure();
    });
});