
let button = document.querySelector(".arrow");


function toggleMatches() {
    if (button.ariaExpanded === "false") {
        button.setAttribute("aria-expanded", "true")
    }
    else {
        button.setAttribute("aria-expanded", "false")
    }
}

button.addEventListener("click", toggleMatches);