const lantern = document.getElementById("lantern");

lantern.addEventListener("mouseenter", () => {
    lantern.style.animationPlayState = "paused";
});

lantern.addEventListener("mouseleave", () => {
    lantern.style.animationPlayState = "running";
});