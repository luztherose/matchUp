let images = document.getElementsByTagName("img");
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
        setTimeout(timerHandler, 10000);
}

function timerHandler() {
    for(let i = 0; i < images.length; i++) {
        images[i].style.filter = "brightness(0%)";
    }
}
