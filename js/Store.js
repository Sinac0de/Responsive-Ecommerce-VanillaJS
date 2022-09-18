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