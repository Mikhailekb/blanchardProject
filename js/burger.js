let burger = document.querySelector('.burger');
let menu = document.querySelector('.header__inner');
let menuLinks = menu.querySelectorAll('.nav__link');

burger.addEventListener('click', function () {

    burger.classList.toggle('burger--active');
    menu.classList.toggle('header__inner--active');
    document.body.classList.toggle('stop-scroll');
});

menuLinks.forEach(function (el) {

    el.addEventListener('click', function () {

    burger.classList.remove('burger--active');
    menu.classList.remove('header__inner--active');
    document.body.classList.remove('stop-scroll');
    })
})