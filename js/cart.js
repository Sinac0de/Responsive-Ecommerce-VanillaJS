import CartLogic from "./CartLogic.js";
import Storage from "./Storage.js";


let cart = Storage.getCart() || [];

document.addEventListener("DOMContentLoaded", setup);

function setup() {
  /*--render cart products--*/
  if (cart.length > 0) {//cart isn't empty
    const cartContent = document.getElementById("cart");

    //products in cart ui
    const cartProductsDiv = document.createElement("div");
    cartProductsDiv.setAttribute("id", "cart-products");
    cartProductsDiv.innerHTML = `<h2>Your Cart:</h2>
        <div class="cart-products"></div>`;

    cartContent.appendChild(cartProductsDiv);


    //cartCheckout ui
    const cartCheckoutDiv = document.createElement("div");
    cartCheckoutDiv.setAttribute("id", "cart-checkout");
    cartCheckoutDiv.innerHTML = `<div id="cart-total-price">
        <h2>Total:</h2>
        <h2 id="total-price-value"></h2>
      </div>
      <button id="cart-checkout-btn">
        Checkout
        <svg
          stroke="currentColor"
          fill="currentColor"
          stroke-width="0"
          viewBox="0 0 512 512"
          height="18px"
          width="18px"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M170.718 216.482L141.6 245.6l93.6 93.6 208-208-29.118-29.118L235.2 279.918l-64.482-63.436zM422.4 256c0 91.518-74.883 166.4-166.4 166.4S89.6 347.518 89.6 256 164.482 89.6 256 89.6c15.6 0 31.2 2.082 45.764 6.241L334 63.6C310.082 53.2 284.082 48 256 48 141.6 48 48 141.6 48 256s93.6 208 208 208 208-93.6 208-208h-41.6z"
          ></path>
        </svg>
      </button>
      <p>
        This site is protected by reCAPTCHA and the Google
        <a
          href="https://policies.google.com/privacy"
          class="google-recaptcha-link"
          >Privacy Policy</a
        >
        and
        <a
          href="https://policies.google.com/terms"
          class="google-recaptcha-link"
          >Terms of Service</a
        >
        apply.
      </p>
      <button id="cart-clear-btn">
        Clear Cart
        <svg
          stroke="currentColor"
          fill="currentColor"
          stroke-width="0"
          version="1.1"
          viewBox="0 0 16 16"
          height="15px"
          width="15px"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8 0c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zM8 14.5c-3.59 0-6.5-2.91-6.5-6.5s2.91-6.5 6.5-6.5 6.5 2.91 6.5 6.5-2.91 6.5-6.5 6.5z"
          ></path>
          <path
            d="M10.5 4l-2.5 2.5-2.5-2.5-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 2.5-2.5 2.5 2.5 1.5-1.5-2.5-2.5 2.5-2.5z"
          ></path>
        </svg>
      </button>`;

    cartContent.appendChild(cartCheckoutDiv);

    const productsContainer = document.querySelector(".cart-products");

    const totalPrice = document.getElementById("total-price-value");
    const clearCartBtn = document.getElementById("cart-clear-btn");
    const cartCheckoutBtn = document.getElementById("cart-checkout-btn");


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

    productsContainer.innerHTML = productsDiv;

    //update total price
    totalPrice.textContent = CartLogic.totalPrice();

    /*get product buttons*/
    const allPlusQuantity = document.querySelectorAll(".cart-product-plus");
    const allMinusQuantity = document.querySelectorAll(".cart-product-minus");
    const allCartDeleteBtns = document.querySelectorAll(".cart-delete-product");

    //product add (plus) button
    allPlusQuantity.forEach(btn => {
      const quantityDom = btn.previousElementSibling;
      const id = btn.dataset.id;
      btn.addEventListener("click", () => CartLogic.quantityButtons(id, quantityDom, "add"));
    });

    //product subtract button
    allMinusQuantity.forEach(btn => {
      const quantityDom = btn.nextElementSibling;
      const id = btn.dataset.id;
      btn.addEventListener("click", () => CartLogic.quantityButtons(id, quantityDom, "subtract"));
    });

    //product delete button
    allCartDeleteBtns.forEach(btn => {
      btn.addEventListener("click", (e) => CartLogic.removeProduct(e.target.dataset.id));
    })

    //clear cart button
    clearCartBtn.addEventListener("click", () => CartLogic.clearCart());

    //cart checkout button
    cartCheckoutBtn.addEventListener("click", () => CartLogic.checkout());

    //remove empty class from main content
    cartContent.classList.remove("cartIsEmpty");


  } else {//cart is empty
    CartLogic.cartIsEmpty();
  }

}


