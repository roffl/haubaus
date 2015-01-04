$(document).ready(function() {

    function pageInteriorStructure(){
        // var breadcrumbsWrapper = $('.interior').prepend('<div class="upper-breadcrumbs wrapper bg-dark"></div>');

        var titleProject = $('.project').find('h1').clone().addClass('abs-left-align');

        if( $(window).width() < 770 ){
            if( !$('.upper-breadcrumbs').length>0 ){
                $('.project')
                    .find('.breadcrumbs')
                    .clone()
                    .insertBefore('.slider').wrap('<div class="upper-breadcrumbs wrapper bg-dark"><div class="container"><div class="row"><div class="col-xs-6"></div></div></div></div>');
            }
            if( !$('.abs-left-align').length>0 ){
                $('.slider').append(titleProject);
            }
        } else{
            $('.upper-breadcrumbs').remove();
            $('.abs-left-align').remove();
        }
    }
    pageInteriorStructure();


    $(window).resize(function() {
        pageInteriorStructure();
    });
});