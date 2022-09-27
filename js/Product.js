
import SProduct from "./SProduct.js";
import CartLogic from "./CartLogic.js";
export default class Product {

    //add event listener to the products
    static setEventListener(productsList) {
        const products = [...document.querySelectorAll(".product")];
        products.forEach(product => {
            product.addEventListener("click", (e) => this.checkClickedItem(e, productsList));
        });
    }

    //check if clicked item is addToCart , quantity or product card
    static checkClickedItem(e, productsList) {
        const classNames = [...e.target.classList];

        if (classNames.includes("add-to-cart-btn") || classNames.includes("fa-cart-shopping")) {

            const id = e.currentTarget.dataset.id;//product id
            CartLogic.addProduct(id);//add this product to cart

        } else if (classNames.includes("cart-product-minus")) {//subtract quantity

            const quantityDom = e.target.nextElementSibling;//card quantity value
            CartLogic.quantityButtons(e.target.dataset.id, quantityDom, "subtract");

        } else if (classNames.includes("cart-product-plus")) {//add quantity

            const quantityDom = e.target.previousElementSibling;//card quantity value
            CartLogic.quantityButtons(e.target.dataset.id, quantityDom, "add");

        } else {//clicked on the product card 

            const productId = e.currentTarget.dataset.id;
            const root = document.querySelector("main");
            new SProduct(productId, productsList, root);//create product details page

        }
    }

    //create product's div
    static createProduct(product, isSlide) {
        const div = document.createElement("div");

        //check if it's a slide product or not
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
                        <button class="cart-product-minus" data-id="${product.id}">-</button>
                        <span class="card-quantity" data-id="${product.id}">1</span>
                        <button class="cart-product-plus" data-id="${product.id}">+</button>
                    </div>
                </div>
            </div>`;
        return div;
    }

}