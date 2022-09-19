
/*=====================
 Search-Filter Scripts
======================*/
const typeButtons = document.querySelectorAll(".type-btn");
const activeType = document.querySelector(".active-type");

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
const storeProductsDiv = document.getElementById("products-container");
const templateProduct = document.querySelector(".template-product");

/*--create 10 template products--*/
for (let i = 0; i < 10; i++) {
    storeProductsDiv.append(templateProduct.content.cloneNode(true));
}

/*--Get products and replace them with templates--*/
axios.get("https://api.npoint.io/1457b931488d039da03f").then(res => {
    const products = res.data.items;//all products
    storeProductsDiv.innerHTML = "";
    products.forEach(product => {
        const div = document.createElement("div");
        div.classList.add("product");
        div.innerHTML = `
        <img src="${product.image}" alt="${product.imageAlt}" class="product-img" loading="lazy">
        <div class="product-description">
            <div class="product-brand-stars">
                <span class="product-brand">${product.brand}</span>
                <div class="product-stars">
                    ${product.rate} <i class="fa-solid fa-star"></i>
                </div>
            </div>
            <h3 class="product-title">${product.title}</h3>
            <div class="product-price-cart">
                <h5 class="product-price gradient-bg">$${product.price}</h5>
                <button class="add-to-cart-btn" data-id="${product.id}"><i class="fa-solid fa-cart-shopping"></i></button>
            </div>
        </div>`;
        storeProductsDiv.append(div);
    });
}).catch(err => console.log(err));





