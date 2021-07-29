function makeGrid() {
    const grid = document.querySelector("#Grid-Container");
    for (let i = 0; i < 256; ++i) {
        const div = document.createElement("div");
        div.setAttribute("id", i);
        div.classList.add("Grid-Box");
        div.addEventListener("mouseover", () => 
            div.classList.add("hover")
        );
        grid.appendChild(div);
    }
}

makeGrid();