document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".container");
    const SQUARES = 800;

    for (let i = 0; i < SQUARES; i++) {
        const square = document.createElement("div");
        square.classList.add("square");

        square.addEventListener("mouseover", () => {
            square.style.backgroundColor = getRandomColor();
        });

        square.addEventListener("mouseout", () => {
            
            square.style.backgroundColor = "rgb(29, 29, 29)";
        });

        container.appendChild(square);
    }
});

function getRandomColor() {
    return `hsl(${Math.random() * 360}, 100%, 50%)`;
}
