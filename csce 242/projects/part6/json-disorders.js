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

        const img = document.createElement("img");
        img.src = disorder.image;
        section.append(img);

        disordersDiv.append(section);


        /*const a = document.createElement("a");
        a.href = brewery.website_url;
        section.append(a);

        const h3 = document.createElement("h3");
        h3.innerHTML = brewery.name;
        a.append(h3);
        
        const p = document.createElement("p");
        p.innerHTML = brewery.brewery_type + " brewery";
        section.append(p);

        const ul = document.createElement("ul");
        section.append(ul);

        shoe.reviews.forEach((review)=>{
            const li = document.createElement("li");
            li.append(review);
            ul.append(li);
        });*/
    }); 
};

showDisorders();