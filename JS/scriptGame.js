let images = document.getElementsByTagName("img");
let toggleButton = document.getElementById("toggleButton");
let heading = document.querySelector("h1");
let audioSound = document.getElementById("myAudio");
let matchSound = document.getElementById("matchSound");
let bodyTag = document.querySelector("body");
const defaultColor = "rgb(240, 11, 11)";
let firstImageClicked; 
let arrayOfImages = [];

window.onload = init;

for(let i = 0; i < images.length; i++) {
    arrayOfImages .push(images[i].src);
}
arrayOfImages  = randomizeArray(arrayOfImages);

for(let i = 0; i < images.length; i++) {
    images[i].src = arrayOfImages[i];
}

function init() {
    let images = document.getElementsByTagName("img");
    for (let i = 0; i < images.length; i++) {
        images[i].onclick = revealImage;
    }
};

function revealImage(eventObject) {
    let clikedImage = eventObject.target; // the target tells what element generated the event
    clikedImage.style.filter = "none";
    clikedImage.classList.add("flipImg");
    let myFunction = function(){
        if (firstImageClicked == undefined) {
            firstImageClicked = clikedImage;
        }else {
            if (firstImageClicked.src == clikedImage.src) {
                matchSound.play();
            } else {
                audioSound.play();
                brightnessOut(firstImageClicked)
                brightnessOut(clikedImage)
            }
            firstImageClicked = undefined;
        }
    }
    setTimeout(myFunction , 400);
}


function brightnessOut(image) {
    image.style.filter = "brightness(0%)";
    image.classList.remove("flipImg");
}

function revealImages() {
    for(let i = 0; i < images.length; i++) {
        images[i].style.filter = "none";
    }
    toggleButton.innerHTML = "Hide Images";
    heading.style.color = defaultColor;
    //bodyTag.style.backgroundColor = bodyBackgroundColor;
}
function hideImages() {
    toggleButton.innerHTML = "Reveal Images";
    heading.style.color="";
    bodyTag.style.backgroundColor="";
    for(let i = 0; i < images.length; i++) {
        images[i].style.filter = "brightness(0%)";
    }
}
toggleButton.addEventListener("click", () => {
    if (heading.style.color != defaultColor ) {
        revealImages();
    } else {
        hideImages();
    }
});

// show the images randomly
function randomizeArray(origalArray) {
    let array = [...origalArray];
    let randomArray = [];
    for (let i = 0; i < images.length; i++) {
        let randomIndex = Math.floor(Math.random() * ( array.length));
        randomArray.push( array[randomIndex]);
        array.splice(randomIndex, 1);
    }
return randomArray
}
    


