$(document).ready(function() {
    $('.center').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000
    });
    $(".lazy").slick({
        lazyLoad: 'ondemand',
        infinite: true
    });
});

$(document).ready(function() {
    $('.footer__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<i class="icon-circle-left footer-nav nav-prev"></i>',
        nextArrow: '<i class="icon-circle-right footer-nav nav-next"></i>',
    });
    $(".lazy").slick({
        lazyLoad: 'ondemand',
        infinite: true
    });
});
$(document).ready(function(){

    $('ul.tabs li').click(function(){
        var tab_id = $(this).attr('data-tab');

        $('ul.tabs li').removeClass('current');
        $('.tab__content').removeClass('current');

        $(this).addClass('current');
        $("."+tab_id).addClass('current');
    })

})