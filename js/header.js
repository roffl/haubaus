$(document).ready(function() {



  // var headerHeight = $('header').outerHeight();

  // var displayWidth = $(window).width();

  $(".dropdown-toggle").click(function(event) {

    event.preventDefault;

    if( $(".inner-list").hasClass('active') ){



      $(".inner-list")
        .removeClass('active')
        .appendTo('.nav-holder');

      $(".dropdown-toggle").removeClass("open");

      $('.inner-nav').remove();

    } else{

      $('header').after('<div class="inner-nav"></div>');

      $(".inner-list")
        .addClass('active')
        .appendTo('.inner-nav');

        $(".dropdown-toggle").addClass("open");
    }
  });
});