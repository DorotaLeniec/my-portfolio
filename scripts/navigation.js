var navigation_closed = false;

function closeNavigation() {
  $('.navigation-item-link').animate({right: '300px'}, 200);
  $('.left-line').css({'transform': 'rotate(90deg)'});
  $('.additional-line').show().css({'transform': 'rotate(90deg)'});
  $('.right-line').css({'transform': 'rotate(-90deg) translate(10px,2px)'});
  $('.navigation-background').css({'transform': 'translate(-220px,-220px)'});
  navigation_closed = true;
}

function openNavigation() {
  $('.left-line').css({'transform': 'rotate(45deg)'});
  $('.right-line').css({'transform': 'rotate(-45deg) translate(0px,0px)'});
  $('.additional-line').hide();
  $('.navigation-background').css({'transform': 'translate(0px,0px)'});
  $('.navigation-item-link').animate({right: '0'},1100);
  navigation_closed = false;
}


$('.close-button').on('click', function () {
  if (navigation_closed) {
    openNavigation()
  } else {
    closeNavigation()
  }
})

$(document).ready(function(){
  $('.navigation-item').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
      && location.hostname == this.hostname) {
      var $target = $(this.hash);
      $target = $target.length && $target
        || $('[name=' + this.hash.slice(1) +']');
      if ($target.length) {
        var targetOffset = $target.offset().top;
        $('html,body')
          .animate({scrollTop: targetOffset}, 1500);
        return false;
      }
    }
  });
});

