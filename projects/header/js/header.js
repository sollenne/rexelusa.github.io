$(document).ready(function(){

  // TABLET DROPDOWN HAMBURGER
  $('.nav-icon-tabletUp').click(function(){
    $(this).toggleClass('open');
  });

  $('.nav-icon-mobile').click(function(){
    $(this).toggleClass('open');
  });

  // SET VAR FOR VIEWPORT WIDTH
  var _vp = $(window).width();
  $(window).resize(function() {
    var _vp = $(window).width();
  });

  // HERE WE START THE HEADER-HIDE FOR MOBILE
  var didScroll;
  var lastScrollTop = 0;
  var delta = 5;
  var navbarHeight = $('header').outerHeight();

  $(window).scroll(function(){
    var _vp = $(window).width();
    if (_vp <= 768) {
      didScroll = true;
    }
  });

  setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
  }, 250);

  function hasScrolled() {
    var st = $(this).scrollTop();
    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta) {
      return;
    }
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
      // Scroll Down
      $('header').removeClass('nav-down').addClass('nav-up');
    } else {
      // Scroll Up
      if(st + $(window).height() < $(document).height()) {
        $('header').removeClass('nav-up').addClass('nav-down');
      }
    }
    lastScrollTop = st;
  }

}); // END DOCUMENT READY

// FUNCTIONS TO SHRINK HEADER ON TABLET +
$(function(){
  
   var shrinkHeader = 200;
    $(window).scroll(function() {
      var _vp = $(window).width();
      var scroll = getCurrentScroll();
        if ( scroll >= shrinkHeader ) {
            if (_vp > 768) {
              $('.header').addClass('shrink');
            }  
          }
          else {
              $('.header').removeClass('shrink');
          }
    });

    function getCurrentScroll() {
        return window.pageYOffset || document.documentElement.scrollTop;
        }
    });
  

// ENABLE BOOTSTRAP SELECT
$('.selectpicker').selectpicker();

// ENABLE BOOTSTRAP POPOVER FOR HEADER ICONS 
$(function () {
  $('[data-toggle="popover"]').popover();
});




