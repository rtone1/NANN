$(function(){
  // COUNTER SHARE BETWEEN windowResize AND searchMore FUNCTIONS
  var counter = 0;

  // ANIMATION SHOW SEARCH BOX //
  var clockWise = function(){
    $('.searchIcon').addClass('searchActive');
    $('.searchIcon').removeClass('unActivate');
  };

  // ANIMATION HIDE SEARCH BOX //
  var counterClockWise = function(){
    $('.searchIcon').removeClass('searchActive');
    $('.searchIcon').addClass('unActivate');
  };

  // WINDOW RESIZING FUNCTION //
  var windowResize = function( action ){
    $(window).resize(function(){
      if($(window).width() < 655){
        $('.searchForm').css({ width: 90 + '%'});
        $('.textSearch').css({ width: 100 + '%', opacity: 1 });
        $('.ctaLarge').last().show();
      } else if ($(window).width() > 655) {
        $('.searchForm').removeAttr('style');
        $('.textSearch').removeAttr('style');
        $('.ctaLarge').last().hide();
      }
      if(counter === 1 && $(window).width() > 655){
        $(action).css({width: 250, opacity: 1});
      }
      if(counter === 1 && $(window).width() > 1600){
        $(action).css({width: 400, opacity: 1});
      }
    });
  };

  // OPEN AND CLOSE SEARCH FUNCTION //
  $.fn.searchMore = function( target, action ){
    $(target).on('click', function(){
      if (counter === 0 ){
        if ($(window).width() > 1600){
          $(action).animate({width: 400},200,"linear").css({opacity: 1});
        }
        if ($(window).width() < 1600){
          $(action).animate({width: 250},200,"linear").css({opacity: 1});
        }
        $(action).focus();
        clockWise();
        counter += 1;
      } else{
        if ($(window).width() > 1600){
          $(action).animate({width: 80},200,"linear",function() {
            $(action).css({opacity: 0});
          });
        }
        if ($(window).width() < 1600){
          $(action).animate({width: 45},200,"linear",function() {
            $(action).css({opacity: 0});
          });
        }
        counterClockWise();
        counter -= 1;
      }
    });
    windowResize( action );
  };

  // ZOOM IMAGE FUNCTION //
  $.fn.zoomImage = function( counter ){
    if($(window).width() < 650){
      $('.art-ct img').on('click', function(){
        if(counter === 0){
          counter += 1;
          var that = this;
            $(that).css({ position: "fixed", top: 25 + '%', width: 90+ '%', margin: 0, left: -300, zIndex: 1000 }).animate({left: 5 + '%'}, 200, 'linear');
            $('.back').addClass('black');
        $('.back').on('click', function(){
          $(that).removeAttr('style');
          $('.back').removeClass('black');
          counter = 0;
        });
        }
      });
    };
  };

  // MMENU DISPLAY ON MOBILE FUNCTION //
  $.fn.mMenu = function(){
    $('#mobile-menu').mmenu({
      }, {
        pageNodetype: 'div',
        clone: true
    });
  };

  // FUNCTION TO FIX IE8 AND BELOW BUG //
  $.fn.ie8BugFix = function(){
    if ( $(window).width() > 655 ){
      $('.ctaLarge').last().hide();
    } else {
      $('.ctaLarge').last().show();
    }
  };

}()); // END OF CLOSURE

$(document).ready(function(){

  // CALL FUNTIONS ON DOM
  $.fn.searchMore( $('.searchIcon'), $('.textSearch') );
  $.fn.zoomImage(0);
  $.fn.ie8BugFix();
  $.fn.mMenu();

}); // END OF DOCUMENT READY
