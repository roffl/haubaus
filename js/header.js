$(document).ready(function() {

  function dropdownMenuTablet() {
    $(".inner-dropdown-toggle").click(function(event) {

      event.preventDefault;

      if( $(".inner-list").hasClass('active') ){

        $("header .inner-list")
          .removeClass('active')
          .appendTo('.nav-holder');

        $(".inner-dropdown-toggle").removeClass("open");

        $('.inner-nav-tablet').remove();

      } else{

        $('header').after('<div class="inner-nav-tablet"></div>');

        $(".inner-list").clone()
          .addClass('active')
          .appendTo('.inner-nav-tablet');

          $(".inner-dropdown-toggle").addClass("open");
      }
    });
  }



  function dropdownMenuPhone() {

    $('.outer-dropdown-toggle').click(function (event) {
      event.preventDefault();

      if( $(".outer-list").hasClass('outer-active') ){

        $("header .outer-list")
          .removeClass('outer-active')
          .appendTo('.nav-portfolio');

        $('.inner-nav').remove();

      } else{

        $('header').after('<div class="inner-nav"></div>');

        $(".outer-list").clone()
          .addClass('outer-active')
          .appendTo('.inner-nav');
      }
    });
  }

  function delInnerNav() {

    $(window).resize(function() {    
      if ( $(window).width() < 770 ){
        $('.inner-nav-tablet').remove();
        $(".inner-dropdown-toggle").removeClass("open");
      } else {
        $('.inner-nav').remove();
        $('.inner-nav-tablet').remove();
        $(".inner-dropdown-toggle").removeClass("open");
      } 
    });
  }


  dropdownMenuPhone();
  dropdownMenuTablet();
  delInnerNav();

});