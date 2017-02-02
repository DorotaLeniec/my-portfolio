

$('#navigation-close-button').on('click',function () {
  $('.navigation-item-link').animate({right: '300px'}, "slow");
  $('.left-line').css({'transform' : 'rotate(90deg)'});
  $('.additional-line').show().css({'transform' : 'rotate(90deg)'});
  $('.right-line').css({'transform' : 'rotate(-90deg) translate(10px,-6px)'});

})
