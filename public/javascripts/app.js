$(function(){
  var clockWise = function(){
    $('.searchIcon').addClass('searchActive');
    $('.searchIcon').removeClass('unActivate');
  };
  var counterClockWise = function(){
    $('.searchIcon').removeClass('searchActive');
    $('.searchIcon').addClass('unActivate');
  };

  $.fn.searchMore = function(counter,target,action){
    $(target).on('click', function(){
      if (counter === 0 ){
        $(action).animate({width: 250},200,"linear").css({opacity: 1});
        clockWise();
        counter += 1;
      } else{
        $(action).animate({width: 45},200,"linear",function() {
          $(action).css({opacity: 0});
        });
        counterClockWise();
        counter -= 1;
      }
    });

    $(window).resize(function(){
      if($(window).width() < 650){
        $('.searchForm').css({ width: 90 + '%'});
        $('.textSearch').css({ width: 100 + '%', opacity: 1 });
      } else if ($(window).width() > 650) {
        $('.searchForm').removeAttr('style');
        $('.textSearch').removeAttr('style');
      }
      if(counter === 1 && $(window).width() > 650){
        $(action).css({width: 250, opacity: 1});
      }
    });

  };

}());

$(document).ready(function(){

  // CALL FUNTIONS ON DOM
  $.fn.searchMore( 0, $('.searchIcon'), $('.textSearch') );
}); // END OF DOCUMENT READY
