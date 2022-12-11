const hero = new Swiper(".hero-swiper", {
    allowTouchMove: false,
    loop: true,
    effect: "fade",
    speed: 10000,
    autoplay: {
        delay: 10000,
    },
});

const galary = new Swiper(".gallary-swiper", {
    spaceBetween: 20,
    grid: {
        rows: 1,
        fill: "row"
    },
    loopFillGroupWithBlank: true,
    pagination: {
        el: ".gallary-pagination",
        type: "fraction",
    },
    navigation: {
        nextEl: ".gallary-btn-next",
        prevEl: ".gallary-btn-prev",
    },
    a11y: {
        prevSlideMessage: 'Предыдущий слайд',
        nextSlideMessage: 'Следующий слайд',
    },
    breakpoints: {
        600: {
            slidesPerView: 2,
            spaceBetween: 38,
            slidesPerGroup: 2,
        },

        1010: {
            slidesPerView: 2,
            spaceBetween: 33,
            slidesPerGroup: 2,
        },

        1597: {
            slidesPerView: 3,
            spaceBetween: 50,
            slidesPerGroup: 3,
        }
    },
});

const events = new Swiper(".events__swiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
        nextEl: ".events-btn-next",
        prevEl: ".events-btn-prev",
    },
    pagination: {
        el: '.events-pagination',
        clickable: true,
    },
    a11y: {
        prevSlideMessage: 'Предыдущий слайд',
        nextSlideMessage: 'Следующий слайд',
    },
    breakpoints: {
        500: {
            slidesPerView: 2,
            spaceBetween: 34,
            slidesPerGroup: 2,
        },

        962: {
            slidesPerView: 3,
            spaceBetween: 27,
            slidesPerGroup: 3,
        },

        1400: {
            slidesPerView: 3,
            spaceBetween: 50,
            slidesPerGroup: 3,
        }
    },
});

const projects = new Swiper(".projects-swiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
        nextEl: ".projects-btn-next",
        prevEl: ".projects-btn-prev",
    },
    a11y: {
        prevSlideMessage: 'Предыдущий слайд',
        nextSlideMessage: 'Следующий слайд',
    },
    breakpoints: {
        650: {
            slidesPerView: 2,
            spaceBetween: 32,
            slidesPerGroup: 2,
        },

        1000: {
            slidesPerView: 2,
            spaceBetween: 47,
            slidesPerGroup: 2,
        },

        1400: {
            slidesPerView: 3,
            spaceBetween: 50,
            slidesPerGroup: 3,
        }
    },
});