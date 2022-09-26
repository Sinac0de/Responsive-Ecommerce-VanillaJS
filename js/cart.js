import CartLogic from "./CartLogic.js";
import Storage from "./Storage.js";

const productsContainer = document.querySelector(".cart-products");
const cartContent = document.getElementById("cart");
const totalPrice = document.getElementById("total-price-value");
const clearCartBtn = document.getElementById("cart-clear-btn");
let cart = Storage.getCart() || [];


document.addEventListener("DOMContentLoaded", setup);

function setup() {

    if (cart.length > 0) {
        let productsDiv = "";
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


    } else {
        cartIsEmpty();
    }

}

//if cart is empty
export function cartIsEmpty() {
    cartContent.innerHTML = "";
    let cartEmpty = document.createElement("div");
    cartEmpty.classList.add("cart-is-empty");
    /*------Cart is Empty content-----*/
    cartEmpty.innerHTML = `<svg id="cart-is-empty-icon" stroke="currentColor" fill="currentColor" stroke-width="0" version="1.2" baseProfile="tiny" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><g><path d="M20.756 5.345c-.191-.219-.466-.345-.756-.345h-13.819l-.195-1.164c-.08-.482-.497-.836-.986-.836h-2.25c-.553 0-1 .447-1 1s.447 1 1 1h1.403l1.86 11.164.045.124.054.151.12.179.095.112.193.13.112.065c.116.047.238.075.367.075h11.001c.553 0 1-.447 1-1s-.447-1-1-1h-10.153l-.166-1h11.319c.498 0 .92-.366.99-.858l1-7c.041-.288-.045-.579-.234-.797zm-1.909 1.655l-.285 2h-3.562v-2h3.847zm-4.847 0v2h-3v-2h3zm0 3v2h-3v-2h3zm-4-3v2h-3l-.148.03-.338-2.03h3.486zm-2.986 3h2.986v2h-2.653l-.333-2zm7.986 2v-2h3.418l-.285 2h-3.133z"></path><circle cx="8.5" cy="19.5" r="1.5"></circle><circle cx="17.5" cy="19.5" r="1.5"></circle></g></svg>
    <h2>Cart is empty!</h2>`;
    //render to the Dom
    cartContent.append(cartEmpty);
    cartContent.classList.add("cart-is-empty");
}
