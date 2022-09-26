import Storage from "./Storage.js";
import { cartIsEmpty } from "./cart.js";

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
                cartIsEmpty();
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
        cartIsEmpty();


        totalQuantities.forEach(tQuantity => {
            tQuantity.style.display = "none";
        });
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