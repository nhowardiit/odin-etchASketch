const game = document.querySelector(".game");
const inputElement = document.querySelector("input");
const resetButton = document.querySelector("button");
const defaultValue = 250;

inputElement.value = defaultValue;
makeGrids(defaultValue);

resetButton.addEventListener("click", resetGame);

function resetGame(event) {
    event.preventDefault();
    let inputValue = inputElement.value;
    if ((!inputValue) instanceof Number) {
        inputElement.value = "Enter Valid Number";
        return;
    }
    makeGrids(inputValue);
}

function makeGrids(numberOfGridSqures) {
    game.replaceChildren();
    for (let i = 0; i < numberOfGridSqures ** 2; i++) {
        const grids = document.createElement("div");
        grids.className = "grids";
        grids.id = "div-" + i;
        grids.style.flexBasis = `${(1 / numberOfGridSqures) * 100}%`;
        game.appendChild(grids);

        grids.addEventListener("mouseenter", (event) => {
            event.target.style.backgroundColor = "black";
        });
    }
}
