const images = {
    "Happy Birthday" : "images/birthday.jpg",
    "Crazy Clown" : "images/clown.jpg",
    "It's Raining" : "images/rain.jpg",
    "Quiet Time" : "images/read.jpg",
    "Working Hard" : "images/shovel.jpg",
    "Work from Home" : "images/work.jpg"
};

const titlesDiv = document.getElementById("titles");
const popup = document.getElementById("popups");
const popupTitle = document.getElementById("popup_title");
const popupImage = document.getElementById("popup_image");
const closeButton = document.getElementById("close");

const createTitles = () => {
   for(let title in images) {
       const p = document.createElement("p");
       p.textContent = title;
       p.classList.add("title");
       p.addEventListener("click", () => showPopup(title));
       titlesDiv.appendChild(p);
   }
};

const showPopup = title => {
    popupTitle.textContent = title;
    popupImage.src = images[title];
    popup.classList.remove("hidden");
    closeButton.classList.remove("hidden");
};

const closePopup = () => {
    popup.classList.add("hidden");
}

closeButton.addEventListener("click", closePopup);
document.addEventListener("DOMContentLoaded", createTitles);