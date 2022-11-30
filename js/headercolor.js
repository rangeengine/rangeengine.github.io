$(document).on('scroll', function(){
    if ( $(window).scrollTop() > 80) {
        $('.header').addClass('activeh');
    } else {
        $('.header').removeClass('activeh');
    }
});