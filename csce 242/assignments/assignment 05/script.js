document.getElementById("hello_column").onclick = () => {
    const helloDisplay = document.getElementById("hello_print");
    helloDisplay.innerHTML += "hello<br>";
};

document.getElementById("color_picker").addEventListener("input", (event) => {
    const pickedColor = event.target.value;
    document.getElementById("star").style.color = pickedColor;
});

const image = document.getElementById("image_switch");
const newImage = "images/200_200_cream_pink_placeholder.png";
const oldImage = image.src;
document.getElementById("image_switch").onclick = () => {
    image.src = (image.src === oldImage) ? newImage : oldImage;
};