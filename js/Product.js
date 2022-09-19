export default class Product {

    static setEventListener() {
        const products = [...document.querySelectorAll(".product")];
        products.forEach(product => {
            product.addEventListener("click", this.checkClickedItem);
        });
    }

    //check if the clicked item is AddToBtn or product card 
    static checkClickedItem(e) {
        const classNames = [...e.target.classList];
        if (classNames.includes("add-to-cart-btn") || classNames.includes("fa-cart-shopping")) {
            const btnId = e.currentTarget.dataset.id;
            Product.addToCart(btnId);
        }
    }

    //add product with specific id to the cart
    static addToCart(id) {
        const addToCartBtn = document.querySelector(`.add-to-cart-btn[data-id='${id}']`);
        addToCartBtn.style.display = 'none';
        const quantityDiv = addToCartBtn.nextElementSibling;
        quantityDiv.style.display = "flex";
    }

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

}