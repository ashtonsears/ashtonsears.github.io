const toggleNav = () => {
    document.getElementById("main_nav_items").classList.toggle("hidden");
    document.getElementById("nav_triangle").classList.toggle("rotated");
};

window.onload = () => {
    document.getElementById("nav_toggle").onclick = toggleNav;
};

const showExercise = (num) => {
    if(num === 1) {
        document.getElementById("exercise1").classList.remove("hidden");
        document.getElementById("exercise2").classList.add("hidden");
    } else {
        document.getElementById("exercise1").classList.add("hidden");
        document.getElementById("exercise2").classList.remove("hidden");
    }
};

document.getElementById("transport_input").oninput = () => {
    const value = document.getElementById("transport_input").value.toLowerCase();
    const validImages = {bike: 'images/bike_img.jpg', 
        car: 'images/car_img.png', 
        scooter: 'images/scooter_img.jpg', 
        skateboard: 'images/skateboard_img.jpg'};
    const imageDiv = document.getElementById("transport_img");

    if(validImages[value]) {
        imageDiv.innerHTML = `<img src="${validImages[value]}" alt="${value}">`;
    } else {
        imageDiv.innerHTML = '';
    }
};

const changeHeartColor = (color) => {
    if(color === 'red' || color === 'blue' || color === 'green') {
        document.querySelector(".heart").style.color = color;
    }
};