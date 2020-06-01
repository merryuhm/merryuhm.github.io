$(document).ready(function () {
    $('.menu-toggler').on('click', function () {
        $(this).toggleClass('open');
        $('.top-nav').toggleClass('open');
    });

    $('.top-nav .nav-link').on('click', function () {
        $('.menu-toggler').removeClass('open');
        $('.top-nav').removeClass('open');
    });
/* not working, hambuger menu tap and "scroll" zoom effect 18:49 pt2
    $('nav a[href*="#"]').on('click', function () {
        $('html, body').animate(KeyframeEffect:{
           scrollTop: $($(this).attr('href')).offset().top - 100 
        }, options: 2000);
    }); */

/* also not working.. to top of page button. 20:02
    $('#up').on('click', function () {
        $('html, body').animate(keyframes: {
            scrollTop: 0
        }, options: 2000);
    }); */

    AOS.init({
        easing: 'ease',
        duration: 1800,
        once: true
    });
});