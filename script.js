//your JS code here. If required.
const container = document.getElementById("container");
const SQUARES = 800;

for (let i = 0; i < SQUARES; i++) {
    const square = document.createElement("div");
    square.classList.add("square");

    square.addEventListener("mouseover", () => {
        square.style.backgroundColor = getRandomColor();
    });

    square.addEventListener("mouseout", () => {
        setTimeout(() => {
            square.style.backgroundColor = "#1d1d1d";
        }, 1000);
    });

    container.appendChild(square);
}

function getRandomColor() {
    return `hsl(${Math.random() * 360}, 100%, 50%)`;
}
