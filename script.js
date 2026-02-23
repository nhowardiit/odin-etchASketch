const defaultValue = 10;
const colorShift = 5;
const lighnessShift = -5;

let hue = 0;

const game = document.querySelector(".game");
const inputElement = document.querySelector("input");
const resetButton = document.querySelector("button");

inputElement.value = defaultValue;
makeGrids(defaultValue);

resetButton.addEventListener("click", resetGame);

// clears the input text box when user clicks
inputElement.addEventListener("click", (event) => {
    event.preventDefault();
    inputElement.value = "";
});

function colorGrid(event) {
    let bgColor = event.target.style.backgroundColor;
    if (!bgColor) {
        event.target.style.backgroundColor = `hsl(${hue} 80% 60% )`;
        hue += colorShift;
    } else {
        // let newColor = darkenHSLColor(bgColor);
        let newColor = `hsl( from ${bgColor} h s calc( l - 10%) )`;
        console.log(newColor);
        event.target.style.backgroundColor = newColor;
    }
}

function darkenHSLColor(hslStr) {
    const [hue, saturation, lightness] = hslStr.match(/\d+/g).map(Number);

    const newLightness = Math.max(0, Math.min(100, lightness + lighnessShift));

    return `hsl(${hue}, ${saturation}%, ${newLightness}%)`;
}

function resetGame(event) {
    event.preventDefault();
    let inputValue = inputElement.value;
    if (inputValue > 250) {
        inputElement.value = "Enter a number < 250";
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

        grids.addEventListener("mouseenter", colorGrid);
    }
}
