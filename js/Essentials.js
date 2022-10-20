import CartLogic from "./CartLogic.js";
import Storage from "./Storage.js";

const sidebar = document.querySelector(".nav-items");
const sidebarOpener = document.querySelector(".sidebar-opener");
const sidebarCloser = document.querySelector(".sidebar-closer");
const sidebarBackdrop = document.querySelector(".sidebar-backdrop");
const totalQuantities = document.querySelectorAll(".total-quantity");
const body = document.body;

/*==============
 Sidebar Scripts
===============*/

/** EVENT LISTENERS **/
sidebarOpener.addEventListener("click", openSidebar);

//close sidebar
[sidebarCloser, sidebarBackdrop].forEach(element => {
    element.addEventListener("click", closeSidebar);
});

/** Functions **/
//show sidebar
function openSidebar() {
    sidebarBackdrop.style.display = "block";
    sidebar.style.transform = "translateX(0)";
    body.style.overflowY = "hidden";
}

//hide sidebar
function closeSidebar() {
    sidebarBackdrop.style.display = "none";
    sidebar.style.transform = "translateX(100%)";
    body.style.overflowY = "unset";
}

/*==================
    Start up setup
===================*/
document.addEventListener("DOMContentLoaded", setup)

async function setup() {
    const productApi =
        fetch("https://api.npoint.io/ca6b5ba76fcbfafeffac").then(res => res.json()).then(data => {
            return data.items//all products
        });
    //assign products to an array
    const allproducts = await productApi;
    //save products on localstorage
    Storage.setProducts(allproducts);

    //render cart quantity & change addToCart
    if (CartLogic.totalQuantity() > 0) {
        totalQuantities.forEach(tQuantity => {
            tQuantity.style.display = "flex";
            tQuantity.textContent = CartLogic.totalQuantity();
        });
    }


}