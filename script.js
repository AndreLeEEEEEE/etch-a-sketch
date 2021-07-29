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
        div.addEventListener("mouseover", turnChalk);
        grid.appendChild(div);
    }
    clearGrid();
    grid.style.gridTemplateColumns = `repeat(${sideLength}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${sideLength}, 1fr)`;
}

function resizeGrid() {
    const sideLength = prompt("Number of squares per side: ");
    if (sideLength === null) {
        return
    }
    else if (sideLength > 100) {
        alert("That number is too high");
        return;
    }
    makeGrid(sideLength);
}

function turnChalk() {this.style.backgroundColor = "#FFF";}

function turnRainbow() {
    let randomColor = Math.floor(Math.random() * 16777215).toString(16);
    this.style.backgroundColor = "#" + randomColor;
}

function makeLighter() {
    let color = this.style.backgroundColor;
    let rgbValues = color.match(/(\d+)/g);
    for (let i = 0; i < 3; ++i) {
        rgbValues[i] = Number(rgbValues[i]) + 26;
        if (rgbValues[i] > 255) {
            rgbValues[i] -= (rgbValues[i] - 255)
        }
        rgbValues[i] = rgbValues[i].toString(16);
    }
    this.style.backgroundColor =
            `#${rgbValues[0]}${rgbValues[1]}${rgbValues[2]}`;
}

function changeChalk() {
    const grid = document.querySelector("#Grid-Container");
    const boxes = document.querySelectorAll(".Grid-Box");
    boxes.forEach(function (box) {
        let clone = box.cloneNode(true);
        clone.addEventListener("mouseover", turnChalk);
        grid.replaceChild(clone, box);
    });
}

function changeRainbow() {
    const grid = document.querySelector("#Grid-Container");
    const boxes = document.querySelectorAll(".Grid-Box");
    boxes.forEach(function (box) {
        let clone = box.cloneNode(true);
        clone.addEventListener("mouseover", turnRainbow);
        grid.replaceChild(clone, box);
    });
}

function sapColor() {
    const grid = document.querySelector("#Grid-Container");
    const boxes = document.querySelectorAll(".Grid-Box");
    boxes.forEach(function (box) {
        let clone = box.cloneNode(true);
        clone.addEventListener("mouseover", makeLighter);
        grid.replaceChild(clone, box);
    });
}

function clearGrid() {
    const boxes = document.querySelectorAll(".Grid-Box");
    boxes.forEach(function (box) {
        box.style.backgroundColor = "#000";
    });
}

makeGrid();