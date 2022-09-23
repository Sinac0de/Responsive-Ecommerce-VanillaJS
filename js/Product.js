
import SProduct from "./SProduct.js";
export default class Product {

    //add event listener to the products
    static setEventListener(productsList) {
        const products = [...document.querySelectorAll(".product")];
        products.forEach(product => {
            product.addEventListener("click", (e) => this.checkClickedItem(e, productsList));
        });
    }

    //check if the clicked item is AddToBtn or product card 
    static checkClickedItem(e, productsList) {
        const classNames = [...e.target.classList];
        if (classNames.includes("add-to-cart-btn") || classNames.includes("fa-cart-shopping")) {
            const btnId = e.currentTarget.dataset.id;
            Product.addToCart(btnId);
        } else {//clicked on the product card 
            const productId = e.currentTarget.dataset.id;
            const root = document.querySelector("main");
            this.createProductPage(productId, productsList, root);
        }
    }

    //add product with specific id to the cart
    static addToCart(id) {
        const addToCartBtn = document.querySelector(`.add-to-cart-btn[data-id='${id}']`);
        addToCartBtn.style.display = 'none';
        const quantityDiv = addToCartBtn.nextElementSibling;
        quantityDiv.style.display = "flex";
    }

    //create product's div
    static createProduct(product, isSlide) {
        const div = document.createElement("div");

        if (isSlide) {
            div.classList.add("product", "swiper-slide");
        } else {
            div.classList.add("product");
        }

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
                    <div class="product-quantity quantity-container">
                        <button id="cart-product-minus">-</button>
                        <span id="quantity">1</span>
                        <button id="cart-product-plus">+</button>
                    </div>
                </div>
            </div>`;
        return div;
    }

    static createProductPage(id, products, root) {
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
                            <h2 class="s-product-price">$${price}</h2>
                            <div class="s-product-add-to-cart">
                                <button class="s-product-btn" data-id="${id}">Add To Cart</button>
                                <div class="s-product-quantity quantity-container">
                                    <button id="cart-product-minus">-</button>
                                    <span id="quantity">1</span>
                                    <button id="cart-product-plus">+</button>
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

        //remove active nav items
        document.querySelector(".active-nav-item").classList.remove("active-nav-item");
        //set all the # links to original link
        document.querySelectorAll("[href='#']").forEach(link => link.setAttribute("href", window.location.pathname));

        //create and navigate to product details page
        new SProduct(id);
    }

}