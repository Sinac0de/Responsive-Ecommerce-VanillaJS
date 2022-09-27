import CartLogic from "./CartLogic.js";
import Storage from "./Storage.js";

const productsContainer = document.querySelector(".cart-products");
const cartContent = document.getElementById("cart");
const totalPrice = document.getElementById("total-price-value");
const clearCartBtn = document.getElementById("cart-clear-btn");
let cart = Storage.getCart() || [];


document.addEventListener("DOMContentLoaded", setup);

function setup() {

    /*--render cart products--*/
    if (cart.length > 0) {//cart isn't empty
        let productsDiv = "";

        //create cart products
        cart.forEach(cProduct => {
            const { id, title, price, quantity, image } = cProduct;
            const productPrice = (quantity * price).toFixed(2);
            productsDiv += `
            <div class="cart-product" data-id="${id}">
            <div class="cart-img-container">
                <img src="${image}">
            </div>
            <div class="cart-product-desc">
                <div class="cart-product-header">
                    <h2>${title}</h2>
                </div>
                <div class="quantity-price">
                    <div class="quantity-container">
                        <button class="cart-product-minus" data-id="${id}">-</button>
                        <span class="card-quantity" data-id="${id}">${quantity}</span>
                        <button class="cart-product-plus" data-id="${id}">+</button>
                    </div>
                    <div class="cart-product-price-container">
                        <h4 class="cart-each-price">Each: $${price}</h4>
                        <h4 class="cart-price" data-id="${id}">Total: $${productPrice}</h4>
                    </div>
                </div>
            </div>
            <button class="cart-delete-product" data-id="${id}">&times;</button>
        </div>`;
        });

        totalPrice.textContent = CartLogic.totalPrice();

        productsContainer.innerHTML = productsDiv;

        const allPlusQuantity = document.querySelectorAll(".cart-product-plus");
        const allMinusQuantity = document.querySelectorAll(".cart-product-minus");
        const allCartDeleteBtns = document.querySelectorAll(".cart-delete-product");

        allPlusQuantity.forEach(btn => {
            const quantityDom = btn.previousElementSibling;
            const id = btn.dataset.id;
            btn.addEventListener("click", () => CartLogic.quantityButtons(id, quantityDom, "add"));
        });

        allMinusQuantity.forEach(btn => {
            const quantityDom = btn.nextElementSibling;
            const id = btn.dataset.id;
            btn.addEventListener("click", () => CartLogic.quantityButtons(id, quantityDom, "subtract"));
        });

        allCartDeleteBtns.forEach(btn => {
            btn.addEventListener("click", (e) => CartLogic.removeProduct(e.target.dataset.id));
        })

        clearCartBtn.addEventListener("click", () => CartLogic.clearCart());

        cartContent.classList.remove("cartIsEmpty");


    } else {//cart is empty
        CartLogic.cartIsEmpty();
    }

}


