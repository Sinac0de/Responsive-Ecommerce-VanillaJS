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
        addToCartBtn.style.display = "flex";
        const quantityConatiner = addToCartBtn.nextElementSibling;
        quantityConatiner.style.display = "none";
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

        //Update totalQuantity
        if (CartLogic.totalQuantity() < 1) {
            totalQuantities.forEach(tQuantity => {
                tQuantity.style.display = "none";
            })
        } else {

            totalQuantities.forEach(tQuantity => {
                tQuantity.innerHTML = CartLogic.totalQuantity();
            })
        }

    }

    //delete all cart products
    static clearCart() {
        const cart = [];
        Storage.setCart(cart);
    }

    //calculate total cart price
    static totalPrice() {
        const cart = Storage.getCart();
        const totalprice = cart.reduce((prev, curr) => {
            const price = curr.price;
            return prev + quantity;
        }, 0);
        return totalPrice.toFixed(2);

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