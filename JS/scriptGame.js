let images = document.getElementsByTagName("img");
let toggleButton = document.getElementById("toggleButton");
let heading = document.querySelector("h1");
let audioSound = document.getElementById("myAudio");
const defaultColor = "rgb(240, 11, 11)";

window.onload = init;
function init() {
    let images = document.getElementsByTagName("img");
    for (let i = 0; i < images.length; i++) {
        images[i].onclick = revealImage;
    }
};

function revealImage(eventObject) {
    let image = eventObject.target; // the target tells what element generated the event
        image.style.filter = "none";
        audioSound.play();
        setTimeout(brightnessOut, 3000, image);
}

function brightnessOut(image) {
    let name;
    name = image.style.filter = "brightness(0%)";
}
function revealImages() {
    for(let i = 0; i < images.length; i++) {
        images[i].style.filter = "none";
    }
    toggleButton.innerHTML = "Hide Images";
    heading.style.color= defaultColor;
}
function hideImages() {
    toggleButton.innerHTML = "Reveal Images";
    heading.style.color="";
    for(let i = 0; i < images.length; i++) {
        images[i].style.filter = "brightness(0%";
    }
}
toggleButton.addEventListener("click", () => {
    if (heading.style.color != defaultColor ) {
        revealImages();
    } else {
        hideImages();
    }
});