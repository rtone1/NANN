$(function(){

  $.fn.searchMore = function(counter,target,action){

    $(target).on('click', function(){
      if (counter === 0 ){
        $(action).addClass('expand');
        $('.searchIcon').addClass('searchActive');
        $(action).removeClass('unexpand');
        counter += 1;
      } else{
        $(action).addClass('unexpand');
        $(action).removeClass('expand');
        $('.searchIcon').removeClass('searchActive');
        counter -= 1;
      }
    });
  };

}());

$(document).ready(function(){
  console.log('Hey I\'m loaded and ready to rumble');

  $.fn.searchMore( 0, $('.searchIcon'), $('.textSearch') );

}); // END OF DOCUMENT READY
