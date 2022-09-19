const accordionBtn = document.querySelectorAll(".accordion");

/* Event Listeners */
accordionBtn.forEach(btn => {
    btn.addEventListener("click", toggleAccordionContent);
})

/* toggle accordion content */
function toggleAccordionContent(e) {
    e.target.classList.toggle("active-accordion");
    const accordionContent = e.target.nextElementSibling;//get the accordion content next to clicked btn
    if (accordionContent.style.maxHeight) {//has max-height
        accordionContent.style.maxHeight = null;
    } else {
        accordionContent.style.maxHeight = accordionContent.scrollHeight + "px"; //Add content height including border and padding to the max-height
    }
}


