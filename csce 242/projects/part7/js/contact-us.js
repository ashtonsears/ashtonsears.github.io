const toggleNav = () => {
    document.getElementById("main_nav_items").classList.toggle("hidden");
};

window.onload = () => {
    document.getElementById("main_nav_items").classList.add("hidden");
    document.getElementById("nav_toggle").onclick = toggleNav;
};

//https://web3forms.com/
const form = document.getElementById('form');
const result = document.getElementById('result');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const formData = new FormData(form);
  const object = Object.fromEntries(formData);
  const json = JSON.stringify(object);

  result.classList.remove("hidden");
  result.innerHTML = "Please wait..."

    fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: json
        })
        .then(async (response) => {
            let json = await response.json();
            if (response.status == 200) {
                result.innerHTML = "Form submitted successfully!";
            } else {
                console.log(response);
                result.innerHTML = "An error occurred, try again later!";
            }
        })
        .catch(error => {
            console.log(error);
            result.innerHTML = "Something went wrong!";
        })
        .then(function() {
            form.reset();
            setTimeout(() => {
                result.style.display = "none";
            }, 3000);
        });
});