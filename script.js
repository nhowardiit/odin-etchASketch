const game = document.querySelector(".game");
makeGrids(1);

function makeGrids(numberOfGridSqures) {
    const grids = document.createElement("div");
    grids.className = "grids";
    game.appendChild(grids);
}
