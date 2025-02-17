const toggleNav = () => {
    document.getElementById("main_nav_items").classList.toggle("hidden");
    document.getElementById("nav_triangle").classList.toggle("rotated");
}


window.onload = () => {
    document.getElementById("nav_toggle").onclick = toggleNav;
}