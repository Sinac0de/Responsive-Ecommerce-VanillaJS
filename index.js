const sidebar = document.querySelector(".nav-items");
const sidebarOpener = document.querySelector(".sidebar-opener");
const sidebarCloser = document.querySelector(".sidebar-closer");
const sidebarBackdrop = document.querySelector(".sidebar-backdrop");
const body = document.body;

sidebarOpener.addEventListener("click", openSidebar);

[sidebarCloser, sidebarBackdrop].forEach(element => {
    element.addEventListener("click", closeSidebar);
});

//show sidebar
function openSidebar() {
    sidebarBackdrop.style.display = "block";
    sidebar.style.transform = "translateX(0)";
    body.style.height = "100vh";
    body.style.overflowY = "hidden";
}

//hide sidebar
function closeSidebar() {
    sidebarBackdrop.style.display = "none";
    sidebar.style.transform = "translateX(100%)";
    body.style.height = "unset";
    body.style.overflowY = "unset";
}
