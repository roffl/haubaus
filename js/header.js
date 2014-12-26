$(document).ready(function() {

  var headerHeight = $('header').outerHeight();

  var displayWidth = $(window).width();

  $(".dropdown-toggle").click(function(event) {

    event.preventDefault;

    if( $(".inner-list").hasClass('active') ){

      $(".inner-list")
        .removeClass('active')
        .removeAttr('style');

        $(".dropdown-toggle").removeClass("open");

    } else{

      $(".inner-list")
        .addClass('active')
        .css({
          "width": displayWidth,
          "height": headerHeight,
          "top": headerHeight

        });

        $(".dropdown-toggle").addClass("open");
    }
  });
});