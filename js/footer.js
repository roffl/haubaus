$(document).ready(function() {
    $(window).resize(function(){
        var contacts = $('.block-contacts');
        if( $(window).width() < 770 ){
            $('.block-about:first').after(contacts);
        } else{
            
        }
    });
});