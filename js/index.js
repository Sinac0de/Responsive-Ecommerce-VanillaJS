/*=============================
   Featured products loading
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
    swiper = new Swiper(".slider-container", {
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
    axios.get("https://api.npoint.io/1457b931488d039da03f").then(res => {
        const featuredProducts = res.data.featured;//featured products
        const newArrivalProducts = res.data.newArrival;//featured products

        featuredProductsDiv.innerHTML = "";
        newArrivalProductsDiv.innerHTML = "";

        featuredProducts.forEach(product => {
            const div = document.createElement("div");
            div.classList.add("product", "swiper-slide");
            div.setAttribute("data-id", product.id);
            div.innerHTML = `
        <img src="${product.image}" alt="${product.imageAlt}" class="product-img" loading="lazy">
        <div class="product-description">
            <div class="product-brand-stars">
                <span class="product-brand">${product.brand}</span>
                <div class="product-stars">
                    ${product.rate} <i class="fa-solid fa-star"></i>
                </div>
            </div>
            <h3 class="product-title">${product.title}</h3>
            <div class="product-price-cart">
                <h5 class="product-price gradient-bg">$${product.price}</h5>
                <button class="add-to-cart-btn" data-id="${product.id}"><i class="fa-solid fa-cart-shopping"></i></button>
            </div>
        </div>`;
            swiper[0].appendSlide(div);
        });

        newArrivalProducts.forEach(product => {
            const div = document.createElement("div");
            div.classList.add("product", "swiper-slide");
            div.innerHTML = `
        <img src="${product.image}" alt="${product.imageAlt}" class="product-img" loading="lazy">
        <div class="product-description">
            <div class="product-brand-stars">
                <span class="product-brand">${product.brand}</span>
                <div class="product-stars">
                    ${product.rate} <i class="fa-solid fa-star"></i>
                </div>
            </div>
            <h3 class="product-title">${product.title}</h3>
            <div class="product-price-cart">
                <h5 class="product-price gradient-bg">$${product.price}</h5>
                <button class="add-to-cart-btn" data-id="${product.id}"><i class="fa-solid fa-cart-shopping"></i></button>
            </div>
        </div>`;
            swiper[1].appendSlide(div);
        });

    }).catch(err => console.log(err));
}
