import Product from "./Product.js";
import CartLogic from "./CartLogic.js";
/*=============================
      products loading
=============================*/

/*--------Variables------*/
const featuredProductsDiv = document.querySelector(".featured-products .slider-products");
const newArrivalProductsDiv = document.querySelector(".new-arrival .slider-products");
const templateProduct = document.querySelector(".template-product");

/*--------Event listeners-------*/
document.addEventListener("DOMContentLoaded", setup);

/*--------FUNCTIONS-------*/

/*---setup the sliders-----*/
function setup() {
    /*--------Swiper--------- */
    const swiper = new Swiper(".slider-container", {
        slidesPerView: 3,
        spaceBetween: 25,
        centerSlide: true,
        fade: true,
        focusableElements: true,
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
    /*---------------------- */

    /*--create 10 template products--*/
    for (let i = 0; i < 10; i++) {
        featuredProductsDiv.append(templateProduct.content.cloneNode(true));
        newArrivalProductsDiv.append(templateProduct.content.cloneNode(true));
    };

    /*--get and replace products in the featured and newArrival section--*/
    fetch("https://api.npoint.io/ca6b5ba76fcbfafeffac").then(res => res.json()).then(data => {
        const featuredProducts = data.featured;//featured products
        const newArrivalProducts = data.newArrival;//featured products
        const allproducts = data.items;//all products

        featuredProductsDiv.innerHTML = "";
        newArrivalProductsDiv.innerHTML = "";

        featuredProducts.forEach(product => {
            //create a slide product
            const productDiv = Product.createProduct(product, true);
            //add slide to swiper slides
            swiper[0].appendSlide(productDiv);
        });

        newArrivalProducts.forEach(product => {
            //create a slide product
            const productDiv = Product.createProduct(product, true);
            //add slide to swiper slides
            swiper[1].appendSlide(productDiv);
        });

        //add event listener to products card
        Product.setEventListener(allproducts);

        if (CartLogic.totalQuantity() > 0) {
            CartLogic.productBtnsCheck();
        }

    }).catch(err => console.log(err));
}
