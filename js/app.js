

$('.home-main a').hide();
$('.home-main a').fadeIn(2000);

//SCROLL ANIMATION
$('.home-main a').click(function() {
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 2000);
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