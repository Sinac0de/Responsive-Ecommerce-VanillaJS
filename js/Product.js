
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
            const htmlBody = document.body;
            this.createProductPage(productId, productsList, htmlBody);
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

    static createProductPage(id, products, htmlBody) {
        const product = products.filter(p => p.id == id);
        const { title, type, price, image, smallImages, description } = product[0];

        window.scroll({//scroll to top
            top: 0,
        });

        //change the page content
        htmlBody.innerHTML = `<header>
                    <h1 class="nav-logo"><a href="index.html">WearMe</a></h1>
                    <ul class="nav-items">
                        <button class="sidebar-closer">&times;</button>
                        <div id="nav-links">
                            <li class="nav-item"><a href="index.html" class="nav-link">Home</a></li>
                            <li class="nav-item"><a href="store.html" class="nav-link">Store</a></li>
                            <li class="nav-item"><a href="about.html" class="nav-link">About</a></li>
                            <li class="nav-item"><a href="contact-us.html" class="nav-link">Contact Us</a></li>
                            <li class="nav-item"><a href="FAQ.html" class="nav-link">FAQ</a></li>
                        </div>
                        <div class="sidebar-btns">
                            <a class="nav-btn" href="cart.html">My Cart <i class="fa-solid fa-bag-shopping"></i></a>
                            <a class="nav-btn" href="sign-in.html">My Account <i class="fa-solid fa-user"></i></a>
                        </div>
                    </ul>
                    <button class="sidebar-opener"><i class="fa-solid fa-bars"></i></button>
                    <div class="sidebar-backdrop"></div>
                </header>

                <main>

                    <section id="s-product">
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
                </main>

                <footer>
                    <div class="footer-row">
                        <div class="footer-col">
                            <h1 class="footer-logo">WearMe</h1>
                            <h3>Contact</h3>
                            <p><strong>Address: </strong>Kermanshah,Iran</p>
                            <p><strong>Email: </strong>support@wearme.com</p>
                            <p><strong>Hours: </strong>10:00 - 18:00.Mon - Sat</p>
                            <h3>Follow Us</h3>
                            <div class="footer-socials">
                                <a href="https://www.facebook.com/" id="facebook"><i class="fa-brands fa-facebook"></i></a>
                                <a href="https://twitter.com/" id="twitter"><i class="fa-brands fa-twitter"></i></a>
                                <a href="https://www.instagram.com/" id="instagram"><i class="fa-brands fa-instagram"></i></a>
                                <a href="https://www.pinterest.com/" id="pinterest"><i class="fa-brands fa-pinterest"></i></a>
                                <a href="https://youtube.com/" id="youtube"><i class="fa-brands fa-youtube"></i></a>
                            </div>
                        </div>

                        <div class="footer-col">
                            <h3>About</h3>
                            <a href="about.html">About Us</a>
                            <a href="FAQ.html">Delivery Information</a>
                            <a href="FAQ.html">Privacy Policy</a>
                            <a href="FAQ.html">Terms & Conditions</a>
                            <a href="contact-us.html">Contact Us</a>
                        </div>

                        <div class="footer-col">
                            <h3>My Account</h3>
                            <a href="sign-in.html">Sign In</a>
                            <a href="cart.html">View Cart</a>
                            <a href="cart.html">Track My Order</a>
                            <a href="FAQ.html">Help</a>
                        </div>
                        <div id="install-app" class="footer-col">
                            <h3>Install App</h3>
                            <p>From App Store or Google Play Store</p>
                            <a href="https://www.apple.com/app-store" class="btn"><i class="fa-brands fa-app-store"></i> app
                                store</a>
                            <a href="https://play.google.com/" class="btn"><i class="fa-brands fa-google-play"></i> Google
                                Play</a>
                        </div>
                    </div>
                    <div class="credit">
                        <p>&copy;2022 WearMe</p>
                        <p>Made with ♥ by <a href="https://github.com/Sinac0de">Sina Moradian</a></p>
                    </div>
                </footer>
                <script src="js/essentials.js"></script>
                <script src="js/swiper-bundle.min.js"></script>
            <script src="js/s-product.js"></script>`;

        //create and navigate to product details page
        new SProduct(id);
    }

}