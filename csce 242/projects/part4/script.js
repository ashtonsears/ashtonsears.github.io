const toggleNav = () => {
    document.getElementById("main_nav_items").classList.toggle("hidden");
}


window.onload = () => {
    document.getElementById("nav_toggle").onclick = toggleNav;
}