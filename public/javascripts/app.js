$(function(){

  $.fn.searchMore = function(counter,target,action){
    $(target).on('click', function(){
      if (counter === 0 ){
        // $(action).addClass('expand');
        $(action).animate({width: 250},200,"linear");
        // $(action).removeClass('unexpand');
        $('.searchIcon').addClass('searchActive');
        $('.searchIcon').removeClass('unActivate');
        counter += 1;
      } else{
        // $(action).addClass('unexpand');
        $(action).animate({width: 45},200,"linear");
        // $(action).removeClass('expand');
        $('.searchIcon').removeClass('searchActive');
        $('.searchIcon').addClass('unActivate');
        counter -= 1;
      }
    });
  };

}());

$(document).ready(function(){
  // console.log('Hey I\'m loaded and ready to rumble');

  $.fn.searchMore( 0, $('.searchIcon'), $('.textSearch') );

}); // END OF DOCUMENT READY
