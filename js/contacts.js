$(document).ready(function() {

    function pageContactsStructure(){
        var blockContactsMap = $('.block-contacts-map');
        if( $(window).width() < 1600 ){
            $('.block-form').before(blockContactsMap);
        } else{
            $('.block-form').after(blockContactsMap);
        }
    }
    function blockContactsStructure(){
        var blockEmail = $('.contacts-info').find('.email');
        var blockAddress = $('.contacts-info').find('.address');
        var blockPhone = $('.contacts-info').find('.phone');
        if( $(window).width() < 770 ){
            $(blockEmail).after(blockAddress);
            $('.contacts-info').find('.address').find('p').removeClass('text-white');
        } else{
            $(blockPhone).before(blockAddress);
            $('.contacts-info').find('.address').find('p').addClass('text-white');
        }
    }
    pageContactsStructure();
    blockContactsStructure();


    $(window).resize(function() {
        pageContactsStructure();
        blockContactsStructure();
    });
});