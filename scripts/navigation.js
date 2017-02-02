
var navigation_closed = false;



$('.close-button').on('click',function () {
  if(navigation_closed){
    $('.left-line').css({'transform' : 'rotate(45deg)'});
    $('.right-line').css({'transform' : 'rotate(-45deg) translate(0px,0px)'});
    $('.additional-line').hide();
    $('.navigation-background').css({'transform' :  'translate(0px,0px)'});
    $('.navigation-item-link').animate({right: '0'}, 'slow');
    navigation_closed=false;
  } else {
      $('.navigation-item-link').animate({right: '300px'});
      $('.left-line').css({'transform' : 'rotate(90deg)'});
      $('.additional-line').show().css({'transform' : 'rotate(90deg)'});
      $('.right-line').css({'transform' : 'rotate(-90deg) translate(10px,-6px)'});
      $('.navigation-background').css({'transform' :  'translate(-220px,-220px)'});
      navigation_closed=true;
    }
})