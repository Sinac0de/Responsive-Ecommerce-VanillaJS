export default class Storage {
    static getProduct(id) {
        const products = JSON.parse(localStorage.getItem("products"));
        return products.find(p => p.id == id);
    }

    static setProducts(products) {
        localStorage.setItem("products", JSON.stringify(products));
    }

    static getCart() {
        return JSON.parse(localStorage.getItem("cart"));
    }

    static setCart(cart) {
        localStorage.setItem("cart", JSON.stringify(cart));
    }
}