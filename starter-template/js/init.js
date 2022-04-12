(function($){
  $(function(){

    $('.button-collapse').sideNav();

    $(document).ready(function(){
      $('.carousel').carousel();
    });

    $('.carousel.carousel-slider').carousel({fullWidth: true});

    $(document).ready(function(){
      $('.materialboxed').materialbox();
    });

    $(document).ready(function(){
      // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
      $('.modal').modal();
    });

    $('.carousel.carousel-slider').carousel({fullWidth: true});

  }); // end of document ready
})(jQuery); // end of jQuery name space