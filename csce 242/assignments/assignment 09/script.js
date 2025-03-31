class Pasta {
    constructor(name, img, ingredients, sauce, noodle, price) {
        this.name = name;
        this.img = img;
        this.ingredients = ingredients;
        this.sauce = sauce;
        this.noodle = noodle;
        this.price = price;
    }

    //Get section method which returns only the title and the image for the pastas, formatted as an html section
    getSection = () => `
        <div class="modal-container pasta" data-name="${this.name}">
            <div class="modal-content-main">
                <h3>${this.name}</h3>
                <img width="200" height="200" src="${this.img}" alt="${this.name}">
            </div>
        </div>
    `;

    //getModalContent method that generates the modal dialog conent
    getModalContent = () => `
        <div class="modal hidden" id="modal-${this.name.replace(/\s+/g, "-")}">
            <div class="modal-content">
                <span class="close button" data-name="${this.name}">&times;</span>
                <div class="flex-container modal-content">
                    <div class="modal-text">
                        <h3>${this.name}</h3>
                        <p><strong>Ingredients:</strong> ${this.ingredients}</p>
                        <p><strong>Sauce:</strong> ${this.sauce}</p>
                        <p><strong>Noodle:</strong> ${this.noodle}</p>
                        <p><strong>Price:</strong> $${this.price}</p>
                    </div>
                    <div class="modal-image-container modal-text">
                        <img class="modal-image" width="200" height="200" src="${this.img}" alt="${this.name}">
                    </div>
                </div>
            </div>
        </div>
    `;
}

//Array of class Pasta objects
const pastas = [
    //Recipe for Penne alla Vodka from https://www.delish.com/cooking/recipe-ideas/a26556220/penne-alla-vodka-recipe/
    new Pasta("Penne alla Vodka", "images/freepik__penne__vodka.png", "Butter, Shallot, Garlic, Tomato Paste, Red Pepper Flakes, Vodka, Salt, Penne, Heavy Cream, Parmesan", "Vodka Sauce", "Penne", 12.99),
    //Recipe for Fettuccine Alfredo from https://www.allrecipes.com/recipe/23431/to-die-for-fettuccine-alfredo/
    new Pasta("Fettuccine Alfredo", "images/freepik__alfredo__pasta.png", "Fettuccine, Butter, Heavy Cream, Salt, Pepper, Garlic Salt, Romano, Parmesan", "Alfredo Sauce", "Fettuccine", 10.99),
    //Recipe for Lasagna from https://thecozycook.com/easy-lasagna-recipe/
    new Pasta("Lasagna", "images/lasagna__pasta.jpg", "Ricotta, Eggs, Mozzarella, Parmesan, Italian Seasoning, Salt, Pepper, Olive Oil, Onion, Ground Beef, Ground Italian Sausage, Lasagna Sheets, Garlic, Chicken Broth, Marinara Sauce, Tomato Paste, Hot Sauce, Worcestershire Sauce", "Marinara Sauce", "Lasagna Sheets", 14.99),
    //Recipe for Spaghetti from https://www.inspiredtaste.net/38940/spaghetti-with-meat-sauce-recipe/
    new Pasta("Spaghetti", "images/spaghetti__pasta.jpg", "Spaghetti, Ground Beef, Olive Oil, Onion, Garlic, Tomato Paste, Oregano, Red Pepper Flakes, Water, Salt, Pepper, Basil, Parmesan", "Mariana Sauce", "Spaghetti", 11.99),
    //Recipe for Mac and Cheese from https://www.thechunkychef.com/family-favorite-baked-mac-and-cheese/
    new Pasta("Macaroni and Cheese", "images/mac_and_cheese__pasta.jpg", "Macaroni, Butter, Flour, Milk, Half and Half, Cheddar Cheese, Gruyere, Salt, Pepper, Smoked Paprika", "Cheese Sauce", "Macaroni", 9.99),
];

//Function to load pasta items to page
const displayPastas = () => {
    const container = document.getElementById("classes");

    pastas.forEach(pasta => {
        const pastaDiv = document.createElement("div");
        pastaDiv.innerHTML = pasta.getSection();
        container.appendChild(pastaDiv.firstElementChild);
        const modalDiv = document.createElement("div");
        modalDiv.innerHTML = pasta.getModalContent();
        document.body.appendChild(modalDiv.firstElementChild);
    });

    //Event listeners for modals
    document.querySelectorAll(".modal-container").forEach(item =>
        item.addEventListener("click", openModal)
    );
    document.querySelectorAll(".close").forEach(button =>
        button.addEventListener("click", closeModal)
    );
};

//Function to open the modal
const openModal = (e) => {
    const pastaName = e.currentTarget.dataset.name;
    const modal = document.getElementById(`modal-${pastaName.replace(/\s+/g, "-")}`);
    if(modal) {
        modal.classList.remove("hidden");
    }
};

//Function to close the modal
const closeModal = (e) => {
    const pastaName = e.currentTarget.dataset.name;
    const modal = document.getElementById(`modal-${pastaName.replace(/\s+/g, "-")}`);
    if(modal) {
        modal.classList.add("hidden");
    }
};

//Intitialize the page content
document.addEventListener("DOMContentLoaded", displayPastas);