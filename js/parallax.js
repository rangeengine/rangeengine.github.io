const el = document.querySelector(".backvideo");

function updateVideoPosition() {
    const rateTop = window.pageYOffset * -0.3;
    el.style.top = rateTop + "px";
    const rateTransform = window.pageYOffset * 0.2;
    el.style.transform = "translate3d(0px, " + rateTransform + "px, 0px)";
}
updateVideoPosition();
window.addEventListener("scroll", updateVideoPosition);