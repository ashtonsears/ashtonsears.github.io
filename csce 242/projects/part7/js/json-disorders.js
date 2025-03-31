const toggleNav = () => {
    document.getElementById("main_nav_items").classList.toggle("hidden");
}


window.onload = () => {
    document.getElementById("main_nav_items").classList.add("hidden");
    document.getElementById("nav_toggle").onclick = toggleNav;
}

const getDisorders = async() => {
    const url = "https://ashtonsears.github.io/csce%20242/json/sleep_disorders.json";

    try {
        const response = await fetch(url);
        return response.json();
    } catch(error){
        console.log(error);
    }
};

const showDisorders = async () => {
    const disordersDiv = document.getElementById("grid");
    const disorders = await getDisorders();
    
    disorders.forEach((disorder)=> {
        const section = document.createElement("section");
        section.classList.add("disorder");
        disordersDiv.append(section);

        const h4 = document.createElement("h4");
        h4.innerHTML = disorder.name;
        section.append(h4);
        h4.classList.add("grid_title");

        const img = document.createElement("img");
        img.src = disorder.image;
        img.alt = disorder.name;
        section.append(img);
        img.classList.add("grid_img");

        section.addEventListener("click", () => showModal(disorder));
    });
};

const showModal = (disorder) => {
    const modal = document.getElementById("modal");
    const modalContent = document.getElementById("modal_content");

    modalContent.innerHTML = `
        <span class="close" onclick="closeModal()">&times;</span>
        <h2 class="modal_center">${disorder.name}</h2>
        <div class="modal_img"><img src="${disorder.image}" alt="${disorder.name}"></div>
        <p class="modal_center">${disorder.description}</p>
        <h3>Symptoms</h3>
        <ul>${disorder.symptoms.map((symptom) => `<li>${symptom}</li>`).join("")}</ul>
        <h3>Diagnostic Tests</h3>
        <ul>${disorder.diagnostic_tests.map((test) => `<li>${test}</li>`).join("")}</ul>
        <h3>Prevalence</h3>
        <p class="modal_center">${disorder.prevalence}</p>
        <h3>Treatments</h3>
        <ul>${disorder.treatment.map((treatment) => `<li>${treatment}</li>`).join("")}</ul>
    `;

    modal.style.display = "block";
};

const closeModal = () => {
    document.getElementById("modal").style.display = "none";
};

showDisorders();