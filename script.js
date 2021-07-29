function makeGrid(sideLength = 16) {
    const grid = document.querySelector("#Grid-Container");
    // This is to prevent grids from accumulating
    while (grid.hasChildNodes()) {
        const childNode = grid.lastElementChild;
        grid.removeChild(childNode);
    }

    const gridSize = Math.pow(sideLength, 2);
    for (let i = 0; i < gridSize; ++i) {
        const div = document.createElement("div");
        div.setAttribute("id", i);
        div.classList.add("Grid-Box");
        div.addEventListener("mouseover", turnWhite);
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

function turnWhite() {this.style.backgroundColor = "white";}
function turnRainbow() {
    let randomColor = Math.floor(Math.random() * 16777215).toString(16);
    this.style.backgroundColor = "#" + randomColor;
}

function changeWhite() {
    const boxes = document.querySelectorAll(".Grid-Box");
    boxes.forEach(function (box) {
        box.removeEventListener("mouseover", turnRainbow);
        box.addEventListener("mouseover", turnWhite);
    });
}

function changeRainbow() {
    const boxes = document.querySelectorAll(".Grid-Box");
    boxes.forEach(function (box) {
        box.removeEventListener("mouseover", turnWhite);
        box.addEventListener("mouseover", turnRainbow);
    });
}

function clearGrid() {
    console.log("Reached");
    const boxes = document.querySelectorAll(".Grid-Box");
    boxes.forEach(function (box) {
        box.style.backgroundColor = "black";
    });
}

makeGrid();