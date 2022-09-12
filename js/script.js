// ----------- Slider ---------------------- //
const owl = $('.owl-carousel');
owl.owlCarousel({
    center: true,
    margin: 30,
    loop: true,
    startPosition: 0,
    items: 3,

    responsive: {
        320: {
            items: 1,
            startPosition: 1
        },
        540: {
            items: 3,
            startPosition: 1
        },

        // breakpoint from 768 up
        1200: {
            items: 3,
            margin: 30,
        }
    }
});
$('.slider__btn--next').click(function () {
    owl.trigger('next.owl.carousel');
})
$('.slider__btn--prev').click(function () {
    owl.trigger('prev.owl.carousel');
})

// --- Burger ----------------------- \\
const menuBurger = document.querySelector('.nav__burger-menu')
const nav = document.querySelector('.nav')
const menuIcon = document.querySelector('.menu-icon')

menuBurger.onclick = function () {
    nav.classList.toggle('nav--mobile')
    menuIcon.classList.toggle('menu-icon-active');
}