import Storage from "./Storage.js";

export default class CartLogic {

    static addProduct(id) {
        let cart = Storage.getCart() || [];
        const addToCartBtn = document.querySelector(`.add-to-cart-btn[data-id='${id}']`);
        addToCartBtn.style.display = 'none';
        const quantityDiv = addToCartBtn.nextElementSibling;
        quantityDiv.style.display = "flex";
        const addedProduct = { ...Storage.getProduct(id), quantity: 1 };
        cart = [...cart, addedProduct];
        Storage.setCart(cart);
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

    static calculateQuantity() {
        const cart = Storage.getCart();

    }

    static addToCartBtnCheck(id) {
        const cart = Storage.getCart();

    }

    static quantityCheck(id) {
        const cart = Storage.getCart();

    }
}