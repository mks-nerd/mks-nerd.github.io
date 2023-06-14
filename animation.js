let expand = document.querySelectorAll(".expand-skills-toggle");
let action = document.getElementById("expand-skills");
expand.forEach(e => {
    e.addEventListener("click", () => {
        if (action.style.display === "none") {
            action.style.display = "block";
        } else {
            action.style.display = "none";
        };
    });
});

let animate = document.querySelector("#animate");
let interval = setInterval(animation, 1000);
function animation() {
    if (animate.innerHTML.length === 3) {
        animate.innerHTML = "";
    } else {
        animate.innerHTML += ".";
    };
};
