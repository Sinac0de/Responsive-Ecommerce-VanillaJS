import CartLogic from "./CartLogic.js";
import Product from "./Product.js";
export default class SProduct {
    constructor(id, products, root) {
        this.createProductPage(id, products, root);//create product detail page
        this.featuredSection();//create featured products
        this.imgController();//changing images
        CartLogic.productBtnsCheck();
        window.scroll({//scroll to the top
            top: 0
        });
    }

    //create and navigate to Product Details page
    createProductPage(id, products, root) {
        const product = products.filter(p => p.id == id);
        const { title, type, price, image, smallImages, description } = product[0];

        window.scroll({//scroll to top
            top: 0,
        });

        //change the page content
        root.innerHTML = `<section id="s-product">
                        <div class="s-product-img-container">
                            <img src="${image}" class="s-product-img-big">
                            <div class="s-product-img-row">
                                <div class="s-product-img-col">
                                    <img src="${smallImages[0]}" class="s-product-img-small">
                                </div>
                                <div class="s-product-img-col">
                                    <img src="${smallImages[1]}" class="s-product-img-small">
                                </div>
                                <div class="s-product-img-col">
                                    <img src="${smallImages[2]}" class="s-product-img-small">
                                </div>
                                <div class="s-product-img-col">
                                    <img src="${smallImages[3]}" class="s-product-img-small">
                                </div>
                            </div>
                        </div>
                        <div class="s-product-info">
                            <h4 class="s-product-type">${type}</h4>
                            <h2 class="s-product-title">${title}</h2>
                            <h2 class="s-product-price gradient-bg">$${price}</h2>
                            <div class="s-product-add-to-cart">
                                <button class="add-to-cart-btn s-product-btn" data-id="${id}">Add To Cart</button>
                                <div class="s-product-quantity quantity-container">
                                    <button class="cart-product-minus" data-id="${id}">-</button>
                                    <span class="card-quantity" data-id="${id}">1</span>
                                    <button class="cart-product-plus" data-id="${id}">+</button>
                                </div>
                            </div>
                            <h4>Product Details:</h4>
                            <p class="s-product-desc">${description}</p>
                        </div>
                    </section>

                    <section class="featured-products">
                        <h2>Featured Products</h2>
                        <p>Level up your style with our products</p>
                        <div class="slider-container swiper mySwiper">

                            <div class="slider-products swiper-wrapper">
                                <template class="template-product">
                                <div class="product swiper-slide product-skeleton">
                                    <div class="product-img skeleton" loading="lazy"></div>
                                    <div class="product-description">
                                        <div class="product-brand-stars">
                                            <div class="skeleton skeleton-brand"></div>
                                            <div class="skeleton skeleton-rating"></div>
                                        </div>
                                        <div class="skeleton skeleton-title"></div>
                                        <div class="skeleton skeleton-title"></div>
                                        <h5 class="skeleton skeleton-price"></h5>
                                    </div>
                                </div>
                                </template>
                            </div>


                            <div class="swiper-button-next slider-next"></div>
                            <div class="swiper-button-prev slider-prev"></div>
                            <div class="swiper-pagination"></div>
                        </div>
                    </section>
                </main>`;

        //set event listener to buttons
        const addToCartBtn = document.querySelector(".add-to-cart-btn");
        const addQuantity = document.querySelector(".cart-product-plus");
        const subQuantity = document.querySelector(".cart-product-minus");
        const quantityDom = document.querySelector(".card-quantity");

        addToCartBtn.addEventListener("click", () => CartLogic.addProduct(id));
        addQuantity.addEventListener("click", () => CartLogic.quantityButtons(id, quantityDom, "add"));
        subQuantity.addEventListener("click", () => CartLogic.quantityButtons(id, quantityDom, "subtract"));


        //remove active nav items and # links
        if (document.querySelector(".active-nav-item") && document.querySelectorAll("[href='#']")) {
            document.querySelector(".active-nav-item").classList.remove("active-nav-item");
            document.querySelectorAll("[href='#']").forEach(link => link.setAttribute("href", window.location.pathname));
        }

        //set the history to "store" or "home" page
        window.history.pushState(null, null, `${window.location.href}`);
        window.addEventListener('popstate', () => {
            window.location.assign(window.location.href);
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

    //change the big picture 
    imgController() {
        const smallImages = document.querySelectorAll(".s-product-img-small");
        const bigImage = document.querySelector(".s-product-img-big");

        smallImages.forEach(img => {
            img.addEventListener("click", (e) => {
                bigImage.setAttribute("src", e.target.src);
            });
        });
    }
}