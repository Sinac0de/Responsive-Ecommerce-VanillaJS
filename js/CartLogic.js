import Storage from "./Storage.js";

export default class CartLogic {

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
        const totalQuantity = document.querySelector(".total-quantity");
        totalQuantity.style.display = "flex";
        totalQuantity.textContent = CartLogic.totalQuantity();
    }

    static removeProduct(id) {
        const cart = Storage.getCart();


    }

    static plusQuantity(id) {
        const cart = Storage.getCart();

    }

    static minusQuantity(id) {
        const cart = Storage.getCart();

    }

    static clearCart(cart) {

    }

    static totalPrice() {
        const cart = Storage.getCart();
        const totalprice = cart.reduce((prev, curr) => {
            const price = curr.price;
            return prev + quantity;
        }, 0);
        return totalPrice.toFixed(2);

    }

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

    static addToCartBtnCheck(id) {
        const cart = Storage.getCart();

    }

    static quantityCheck(id) {
        const cart = Storage.getCart();

    }
}