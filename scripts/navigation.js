

$('.close-button').on('click',function () {
  $('.navigation-item-link').animate({right: '300px'});
  $('.left-line').css({'transform' : 'rotate(90deg)'});
  $('.additional-line').show().css({'transform' : 'rotate(90deg)'});
  $('.right-line').css({'transform' : 'rotate(-90deg) translate(10px,-6px)'});
  $('#navigation-close-button').removeClass('close-button');
  $('#navigation-close-button').addClass('open-button');
  $('.navigation-background').css({'transform' :  'translate(-220px,-220px)'});
})

$('body').on('click','open-button', function () {
  $('.open-button').hide()
})
