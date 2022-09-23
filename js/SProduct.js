import Product from "./Product.js";
export default class SProduct {
    constructor(id) {
        this.featuredSection();//create featured products
        window.scroll({//scroll to the top
            top: 0
        });
    }

    //create featured section
    featuredSection() {
        const featuredProductsDiv = document.querySelector(".featured-products .slider-products");
        const templateProduct = document.querySelector(".template-product");

        /*--create slider--*/
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
        };

        /*--get and replace products in the Featured Products section--*/
        axios.get("https://api.npoint.io/ca6b5ba76fcbfafeffac").then(res => {
            const allproducts = res.data.items;
            const featuredProducts = res.data.featured;//featured products

            featuredProductsDiv.innerHTML = "";

            featuredProducts.forEach(product => {
                //create a slide product
                const productDiv = Product.createProduct(product, true);
                //add slide to swiper slides
                swiper.appendSlide(productDiv);
            });

            //add event listener to products card
            Product.setEventListener(allproducts);

        }).catch(err => console.log(err));
    }
}