/*==============
 Sidebar Scripts
===============*/
const sidebar = document.querySelector(".nav-items");
const sidebarOpener = document.querySelector(".sidebar-opener");
const sidebarCloser = document.querySelector(".sidebar-closer");
const sidebarBackdrop = document.querySelector(".sidebar-backdrop");
const body = document.body;

/** EVENT LISTENERS **/
sidebarOpener.addEventListener("click", openSidebar);

[sidebarCloser, sidebarBackdrop].forEach(element => {
    element.addEventListener("click", closeSidebar);
});

/** Functions **/
//show sidebar
function openSidebar() {
    sidebarBackdrop.style.display = "block";
    sidebar.style.transform = "translateX(0)";
    body.style.overflowY = "hidden";
}

//hide sidebar
function closeSidebar() {
    sidebarBackdrop.style.display = "none";
    sidebar.style.transform = "translateX(100%)";
    body.style.overflowY = "unset";
}


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
        disableOnInteraction: false,
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
        }
    }
});

/*=====================
 Search-Filter Scripts
======================*/
const typeButtons = document.querySelectorAll(".type-btn");
const activeType = document.querySelector(".active-type");

/** EVENT LISTENERS **/
typeButtons.forEach(btn => {
    btn.addEventListener("click", (e) => {
        const activetype = document.querySelector(".active-type");
        activetype.classList.remove("active-type");
        e.target.classList.add("active-type");
    });
})