var $root = $('html, body');

$('.home-main a').hide();
$('.home-main a').fadeIn(4000);

//SCROLL ANIMATION
$('.home-main a').click(function() {
    $root.animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 1000);
    return false;
});


//TEXTILATION
$(function () {
    $('.tlt').textillate(
        { in: { effect: 'fadeInDownBig',
                sync: false,
                delay: 8
              },
        }
    );
})