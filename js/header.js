$(document).ready(function() {

  function dropdownMenuTablet() {
    $(".inner-dropdown-toggle").click(function(event) {

      event.preventDefault;

      if( $(".inner-list").hasClass('active') ){



        $(".inner-list")
          .removeClass('active')
          .appendTo('.nav-holder');

        $(".inner-dropdown-toggle").removeClass("open");

        $('.inner-nav').remove();

      } else{

        $('header').after('<div class="inner-nav"></div>');

        $(".inner-list")
          .addClass('active')
          .appendTo('.inner-nav');

          $(".inner-dropdown-toggle").addClass("open");
      }
    });
  }



  function dropdownMenuPhone() {

    $('.outer-dropdown-toggle').click(function (event) {
      event.preventDefault();

      if( $(".outer-list").hasClass('outer-active') ){

        $(".outer-list")
          .removeClass('outer-active')
          .appendTo('.nav-portfolio');

        $('.inner-nav').remove();

      } else{

        $('header').after('<div class="inner-nav"></div>');

        $(".outer-list")
          .addClass('outer-active')
          .appendTo('.inner-nav');
      }
    });
  }



  dropdownMenuPhone();
  dropdownMenuTablet();

});