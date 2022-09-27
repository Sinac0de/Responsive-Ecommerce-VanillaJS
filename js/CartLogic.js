import Storage from "./Storage.js";

export default class CartLogic {

    //add single product to the cart
    static addProduct(id) {
        let cart = Storage.getCart() || [];

        //change button styles
        const addToCartBtn = document.querySelector(`.add-to-cart-btn[data-id='${id}']`);
        addToCartBtn.style.display = 'none';
        const quantityDiv = addToCartBtn.nextElementSibling;
        quantityDiv.style.display = "flex";

        //add product to cart
        const addedProduct = { ...Storage.getProduct(id), quantity: 1 };
        cart = [...cart, addedProduct];
        Storage.setCart(cart);

        //render total quantity
        const totalQuantities = document.querySelectorAll(".total-quantity");
        totalQuantities.forEach(tQuantity => {
            tQuantity.style.display = "flex";
            tQuantity.textContent = CartLogic.totalQuantity();
        })

    }

    //remove a cart product with id
    static removeProduct(id) {
        let cart = Storage.getCart();
        //remove item from cart
        cart = cart.filter(p => parseInt(p.id) !== parseInt(id));
        //update storage
        Storage.setCart(cart);

        //change style of card buttons
        const addToCartBtn = document.querySelector(`.add-to-cart-btn[data-id='${id}']`);

        //check if it's card product or cart product
        if (addToCartBtn) {//card product 

            addToCartBtn.style.display = "flex";
            const quantityConatiner = addToCartBtn.nextElementSibling;
            quantityConatiner.style.display = "none";

        } else {//cart product

            /*--remove cart product--*/
            const product = document.querySelector(`.cart-product[data-id="${id}"]`);
            product.remove();
            /*--Check if cart is empty--*/
            if (CartLogic.totalQuantity() < 1) {
                this.cartIsEmpty();
            } else {
                const cartTotalPrice = document.getElementById("total-price-value");
                cartTotalPrice.textContent = this.totalPrice();
            }
        }

        const totalQuantities = document.querySelectorAll(".total-quantity");
        totalQuantities.forEach(tQuantity => {
            tQuantity.innerHTML = CartLogic.totalQuantity();
        });

    }

    static quantityButtons(id, quantityDom, operation) {
        let cart = Storage.getCart();
        const totalQuantities = document.querySelectorAll(".total-quantity");
        let quantityValue = quantityDom.textContent;

        //operation on the quantity
        if (operation == "add") {
            quantityValue++;
        } else if (operation == "subtract") {
            quantityValue--;
        }
        if (quantityValue > 0) {
            quantityDom.textContent = quantityValue;//set new quantity value
        }

        //change cart quantity value
        cart.forEach(p => {
            if (p.id == id) {
                p.quantity = quantityValue;
            }
        });

        //save to storage
        Storage.setCart(cart);

        //remove product if quantity is less than 1 
        if (quantityValue < 1) {
            this.removeProduct(id);
        }

        //update cart total Price
        const cartTotalPrice = document.getElementById("total-price-value");
        if (cartTotalPrice) {
            cartTotalPrice.textContent = this.totalPrice();
        }

        const productTotalPrice = document.querySelector(`.cart-price[data-id="${id}"]`);
        if (productTotalPrice) {
            const cartProduct = cart.find(p => p.id == id);
            const cartProductPrice = (cartProduct.quantity * cartProduct.price).toFixed(2);
            productTotalPrice.textContent = `Total: $${cartProductPrice}`;
        }

        //Update totalQuantity
        if (CartLogic.totalQuantity() < 1) {

            totalQuantities.forEach(tQuantity => {
                tQuantity.style.display = "none";
            });

        } else {//total quantity >= 1

            totalQuantities.forEach(tQuantity => {
                tQuantity.innerHTML = CartLogic.totalQuantity();
            });
        }

    }

    //delete all cart products
    static clearCart() {
        const cart = [];
        const allCartProducts = document.querySelectorAll(".cart-product");
        const totalQuantities = document.querySelectorAll(".total-quantity");

        Storage.setCart(cart);
        allCartProducts.forEach(cartProduct => {
            cartProduct.remove();
        });
        this.cartIsEmpty();


        totalQuantities.forEach(tQuantity => {
            tQuantity.style.display = "none";
        });
    }

    //if cart is empty
    static cartIsEmpty() {
    //main content of cart page 
    const cartContent = document.getElementById("cart");
    cartContent.innerHTML = "";
    //create cart is empty content
    let cartEmpty = document.createElement("div");
    cartEmpty.classList.add("cart-is-empty");
    /*------Cart is Empty content-----*/
    cartEmpty.innerHTML = `<svg id="cart-is-empty-icon" stroke="currentColor" fill="currentColor" stroke-width="0" version="1.2" baseProfile="tiny" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><g><path d="M20.756 5.345c-.191-.219-.466-.345-.756-.345h-13.819l-.195-1.164c-.08-.482-.497-.836-.986-.836h-2.25c-.553 0-1 .447-1 1s.447 1 1 1h1.403l1.86 11.164.045.124.054.151.12.179.095.112.193.13.112.065c.116.047.238.075.367.075h11.001c.553 0 1-.447 1-1s-.447-1-1-1h-10.153l-.166-1h11.319c.498 0 .92-.366.99-.858l1-7c.041-.288-.045-.579-.234-.797zm-1.909 1.655l-.285 2h-3.562v-2h3.847zm-4.847 0v2h-3v-2h3zm0 3v2h-3v-2h3zm-4-3v2h-3l-.148.03-.338-2.03h3.486zm-2.986 3h2.986v2h-2.653l-.333-2zm7.986 2v-2h3.418l-.285 2h-3.133z"></path><circle cx="8.5" cy="19.5" r="1.5"></circle><circle cx="17.5" cy="19.5" r="1.5"></circle></g></svg>
    <h2>Cart is empty!</h2>`;
    //render to the Dom
    cartContent.append(cartEmpty);
    cartContent.classList.add("cart-is-empty");
}

    //calculate total cart price
    static totalPrice() {
        const cart = Storage.getCart();
        const totalPrice = cart.reduce((prev, curr) => {
            const price = curr.price * curr.quantity;
            return prev + price;
        }, 0);
        return "$" + totalPrice.toFixed(2);
    }

    //calculate total cart quantity
    static totalQuantity() {
        const cart = Storage.getCart();
        if (cart) {
            const totalQuantity = cart.reduce((prev, curr) => {
                const quantity = curr.quantity;
                return prev + quantity;
            }, 0);
            return totalQuantity;
        }
    }

    //change product card btns if the product is in cart
    static productBtnsCheck() {
        const cart = Storage.getCart();
        const addToCartBtns = document.querySelectorAll(".add-to-cart-btn");
        addToCartBtns.forEach(addToCartBtn => {
            const id = addToCartBtn.dataset.id;//product id
            if (cart.find(product => product.id == id)) {
                //hide addToCartBtn
                addToCartBtn.style.display = "none";

                //show and style card quantity
                const quantityDiv = addToCartBtn.nextElementSibling;
                quantityDiv.style.display = "flex";
                const quantityValue = document.querySelector(`.card-quantity[data-id='${id}']`);
                quantityValue.textContent = cart.find(p => p.id == id).quantity;

                /*hide card quantity*/
                if (quantityValue.textContent < 1) {
                    quantityValue.textContent = 1;
                    quantityDiv.style.display = "none";
                    addToCartBtn.style.display = "flex";
                }
            }
        });

    }

}