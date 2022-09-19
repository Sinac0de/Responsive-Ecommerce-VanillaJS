/*=====================
 Search-Filter Scripts
======================*/
const typeButtons = document.querySelectorAll(".type-btn");

/** EVENT LISTENERS **/
typeButtons.forEach(btn => {
    btn.addEventListener("click", (e) => {
        const activetype = document.querySelector(".active-type");
        activetype.classList.remove("active-type");
        e.target.classList.add("active-type");
    });
})

/*======================
 loading products Scripts
========================*/
import Product from "./Product.js";

const storeProductsDiv = document.getElementById("products-container");
const templateProduct = document.querySelector(".template-product");

/*--create 10 template products--*/
for (let i = 0; i < 10; i++) {
    storeProductsDiv.append(templateProduct.content.cloneNode(true));
}

/*--Get products and replace them with templates--*/
axios.get("https://api.npoint.io/1457b931488d039da03f").then(res => {
    const products = res.data.items;//all products
    //clear slides container
    storeProductsDiv.innerHTML = "";
    //append slides
    products.forEach(product => {
        const productDiv = Product.createProduct(product, false);
        storeProductsDiv.append(productDiv);
    });

    //add event listener to products card
    Product.setEventListener();

}).catch(err => console.log(err));





