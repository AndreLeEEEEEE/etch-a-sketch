function makeGrid(sideLength = 16) {
    const grid = document.querySelector("#Grid-Container");
    while (grid.hasChildNodes()) {
        const childNode = grid.lastElementChild;
        grid.removeChild(childNode);
    }

    const gridSize = Math.pow(sideLength, 2);
    for (let i = 0; i < gridSize; ++i) {
        const div = document.createElement("div");
        div.setAttribute("id", i);
        div.classList.add("Grid-Box");
        div.addEventListener("mouseover", () => 
            div.classList.add("hover")
        );
        grid.appendChild(div);
    }
    grid.style.gridTemplateColumns = `repeat(${sideLength}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${sideLength}, 1fr)`;
}

function resizeGrid() {
    const sideLength = prompt("Number of squares per side: ");
    if (sideLength > 100) {
        alert("That number is too high");
        return;
    }
    makeGrid(sideLength);
}

makeGrid();