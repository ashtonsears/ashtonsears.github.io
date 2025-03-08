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

const showDisorders = async() => {
    const disordersDiv = document.getElementById("grid");
    const disorders = await getDisorders();
    
    disorders.forEach(async(disorder)=> {
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

        const pDesc = document.createElement("p");
        pDesc.innerHTML = disorder.description;
        section.append(pDesc);

        const h3Symptom = document.createElement("h3");
        h3Symptom.innerHTML = `<strong>Symptoms</strong>`;
        section.append(h3Symptom);

        const symptomsList = document.createElement("ul");
        disorder.symptoms.forEach(symptom => {
            const li = document.createElement("li");
            li.textContent = symptom;
            symptomsList.append(li);
        });
        section.append(symptomsList);

        const h3Diagnosis = document.createElement("h3");
        h3Diagnosis.innerHTML = `<strong>Diagnostic Tests</strong>`;
        section.append(h3Diagnosis);

        const diagnosticList = document.createElement("ul");
        disorder.diagnostic_tests.forEach(test => {
            const li = document.createElement("li");
            li.textContent = test;
            diagnosticList.append(li);
        });
        section.append(diagnosticList);

        const h3Prevalence = document.createElement("h3");
        h3Prevalence.innerHTML = `<strong>Prevalence</strong>`;
        section.append(h3Prevalence);

        const pPrevalence = document.createElement("p");
        pPrevalence.innerHTML = disorder.prevalence;
        section.append(pPrevalence);

        const h3Treatment = document.createElement("h3");
        h3Treatment.innerHTML = `<strong>Treatments</strong>`;
        section.append(h3Treatment);

        const treatmentList = document.createElement("ul");
        disorder.treatment.forEach(treatment => {
            const li = document.createElement("li");
            li.textContent = treatment;
            treatmentList.append(li);
        });
        section.append(treatmentList);
    }); 
};

showDisorders();