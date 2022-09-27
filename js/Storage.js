export default class Storage {
    static getProduct(id) {//get a product with id
        const products = JSON.parse(localStorage.getItem("products"));
        return products.find(p => p.id == id);
    }

    static setProducts(products) {//save all products to the storage
        localStorage.setItem("products", JSON.stringify(products));
    }

    static getCart() {
        return JSON.parse(localStorage.getItem("cart"));
    }

    static setCart(cart) {
        localStorage.setItem("cart", JSON.stringify(cart));
    }
}