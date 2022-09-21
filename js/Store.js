import Product from "./Product.js";
const typeButtons = document.querySelectorAll(".type-btn");
const storeProductsDiv = document.getElementById("products-container");
const templateProduct = document.querySelector(".template-product");
const searchInput = document.getElementById("search-bar");
const filterByOrder = document.getElementById("filter-products");

let allproducts = [];//all the products

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
    allproducts = await productApi;

    //render the products
    renderProducts(allproducts);
}


/*=====================
 Search-Filter Scripts
======================*/


/*------FILTER By TYPE-------*/
typeButtons.forEach(btn => {
    btn.addEventListener("click", filterByType);
})

function filterByType(e) {
    /*--unselect prev active type*/
    const prevType = document.querySelector(".active-type");
    prevType.classList.remove("active-type");
    /*--style the clicked type*/
    const activeType = e.target;
    activeType.classList.add("active-type");

    const filteredProducts = checkActiveType();//get filtered products(with order & type)

    //clear the search input
    searchInput.value = "";
    //render products 
    renderProducts(filteredProducts);
}

//apply type filter
function checkActiveType() {
    const activeType = document.querySelector(".active-type");
    const type = activeType.dataset.type;//current active type
    let filteredProducts;
    if (type.toLowerCase() == "all") {//if type is "ALL"
        filteredProducts = allproducts;
    } else {
        filteredProducts = allproducts.filter(p => p.type.toLowerCase() === type.toLowerCase());
        filteredProducts = checkActiveOrder(filteredProducts); //order the products
    }
    return filteredProducts;//with order and type applied
}

/*------SEARCH Products-------*/
searchInput.addEventListener("input", searchProducts);

/*search for products*/
function searchProducts(e) {
    const searchValue = e.target.value.trim().toLowerCase();
    const filteredProducts = checkActiveType();
    const searchedProducts = filteredProducts.filter(p => p.title.toLowerCase().includes(searchValue));
    /*if ENTER key is pressed*/
    document.addEventListener("keypress", (key) => {
        if (key.keyCode == 13) {
            e.target.blur();//unfocus the search bar
            window.scroll({//scroll down a little
                top: 50,
                behavior: 'smooth'
            });
        }
    });

    /*render the result*/
    if (searchValue == null) {
        renderProducts(filteredProducts);
    } else {
        if (searchedProducts.length > 0) {
            renderProducts(searchedProducts);
        } else {//there are no products
            productNotFound();//render "PRODUCTS NOT FOUND"
        }
    }
}

//if searched product not found
function productNotFound() {
    storeProductsDiv.innerHTML = "";
    let notFound = document.createElement("div");
    notFound.setAttribute("id", "products-not-found");
    /*------Not Found Content*-----*/
    notFound.innerHTML = `<svg id="store-not-found-icon" stroke="currentColor" fill="none" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
    <h2>Unfortunately we couldn't find what you are looking for.</h2>`;
    //render not found on the page
    storeProductsDiv.append(notFound);
}

/*------Filter By Order-------*/
filterByOrder.addEventListener("change", filterProductsByOrder);

function filterProductsByOrder(e) {
    const typeFilteredProducts = checkActiveType();//check for current active type and get products with that type
    const orderFilteredProducts = checkActiveOrder(typeFilteredProducts); //order the type-filtered-products
    renderProducts(orderFilteredProducts);//render products with both type and order
}

//apply order filter
function checkActiveOrder(products = allproducts) {
    const order = filterByOrder.value;
    let filteredProducts = [];
    switch (order) {
        case 'Newest':
            filteredProducts = products.sort((a, b) => {
                return a.date < b.date ? 1 : -1;
            });
            break;
        case 'Oldest':
            filteredProducts = products.sort((a, b) => {
                return a.date < b.date ? -1 : 1;
            });
            break;
        case 'Price':
            filteredProducts = products.sort((a, b) => {
                return a.price < b.price ? 1 : -1;
            });
            break;
        case 'Popularity':
            filteredProducts = products.sort((a, b) => {
                return a.rate < b.rate ? 1 : -1;
            });
    }
    return filteredProducts;
}

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




