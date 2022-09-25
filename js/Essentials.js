import CartLogic from "./CartLogic.js";
import Storage from "./Storage.js";

const sidebar = document.querySelector(".nav-items");
const sidebarOpener = document.querySelector(".sidebar-opener");
const sidebarCloser = document.querySelector(".sidebar-closer");
const sidebarBackdrop = document.querySelector(".sidebar-backdrop");
const totalQuantity = document.querySelector(".total-quantity");
const body = document.body;

/*==============
 Sidebar Scripts
===============*/

/** EVENT LISTENERS **/
sidebarOpener.addEventListener("click", openSidebar);

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
        axios.get("https://api.npoint.io/ca6b5ba76fcbfafeffac").then(res => {
            return res.data.items;//all products
        });
    //assign products to an array
    const allproducts = await productApi;
    //save products on localstorage
    Storage.setProducts(allproducts);

    //render total quantity
    if (CartLogic.totalQuantity() > 0) {
        totalQuantity.style.display = "flex";
        totalQuantity.textContent = CartLogic.totalQuantity();
    }
}