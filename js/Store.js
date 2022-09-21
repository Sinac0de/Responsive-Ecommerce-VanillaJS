import Product from "./Product.js";
const typeButtons = document.querySelectorAll(".type-btn");
const storeProductsDiv = document.getElementById("products-container");
const templateProduct = document.querySelector(".template-product");

let productsList = [];//all the products

/*=====================
        StartUp
======================*/
document.addEventListener("DOMContentLoaded", setup);

async function setup() {
    /*--create 10 template products--*/
    for (let i = 0; i < 10; i++) {
        storeProductsDiv.append(templateProduct.content.cloneNode(true));
    }

    //get products from api
    const productApi =
        axios.get("https://api.npoint.io/1457b931488d039da03f").then(res => {
            return res.data.items;//all products
        }).catch(err => console.log(err));

    //assign values to an array
    productsList = await productApi;

    //render the products
    renderProducts(productsList);
}


/*=====================
 Search-Filter Scripts
======================*/

typeButtons.forEach(btn => {
    btn.addEventListener("click", filterByType);
})

function filterByType(e) {
    /*--unselect prev active type*/
    const prevType = document.querySelector(".active-type");
    prevType.classList.remove("active-type");

    const activetype = e.target;
    activetype.classList.add("active-type");
    /*---------------------------*/
    const type = activetype.dataset.type;

    const filteredProducts = productsList.filter(p => p.type.toLowerCase() === type.toLowerCase());

    if (type.toLowerCase() === "all") {
        renderProducts(productsList);
    } else {
        renderProducts(filteredProducts);
    }
}

/*======================
 loading products Scripts
========================*/


/*-------render products-------*/
function renderProducts(products) {
    //clear products container
    storeProductsDiv.innerHTML = "";
    //render products
    products.forEach(product => {
        const productDiv = Product.createProduct(product, false);
        storeProductsDiv.append(productDiv);
    });
    //add event listener to products card
    Product.setEventListener();
}





