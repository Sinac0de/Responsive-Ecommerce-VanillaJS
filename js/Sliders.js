/*=============
 SLIDER SCRIPTS
==============*/

var swiper = new Swiper(".slider-container", {
    slidesPerView: 3,
    spaceBetween: 25,
    centerSlide: true,
    fade: true,
    loop: true,
    loopFillGroupWithBlank: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: true,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
        1300: {
            slidesPerView: 4,
        },
        1650: {
            slidesPerView: 5,
        }
    }
});

