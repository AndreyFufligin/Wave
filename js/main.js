$(function() {
    $(".menu a, .logo").on("click", function(e) {
        //отменяем стандартную обработку нажатия по ссылке
        e.preventDefault();
        //забираем идентификатор блока с атрибута href
        var id = $(this).attr('href'),
            //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({
            scrollTop: top
        }, 1500);
    });




    var mixer = mixitup('.gallery__content');

    $('.blog__slider-inner').slick({
        dots: true,
        arrows: false,
        responsive: [{
            breakpoint: 555,
            settings: {
                arrows: false,
                dots: false,
                autoplay: true,
                autoplaySpeed: 2000,
            }
        }]
    });

    $('.menu__btn, .menu a').on('click', function() {
        $('.menu__list').toggleClass('menu__list--active');
    });

});