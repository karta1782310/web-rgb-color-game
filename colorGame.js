let displayCnt = 6;
let colors = [];
let pickedColor;
let squares = document.querySelectorAll(".square");
let colorDisplay = document.querySelector("#colorDisplay");
let messageDisplay = document.querySelector("#message");
let title = document.querySelector("h1");
let resetButton = document.querySelector("#reset");
let modeBtns = document.querySelectorAll(".mode");

init();

function init() {
    resetButton.addEventListener("click", function(){
        reset();
    });
    setupModeButtons();
    setupSquares();
    reset();
}

function setupModeButtons() {
    for (let i = 0; i < modeBtns.length; i++){
        modeBtns[i].addEventListener("click", function(){        
            modeBtns[0].classList.remove("selected");
            modeBtns[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Easy" ? displayCnt = 3 : displayCnt = 6;
            reset();
        });
    }
}

function setupSquares() {
    for (let i = 0; i < squares.length; i++) {
        squares[i].addEventListener("click", function(){
            let clickedColor = this.style.backgroundColor;
            if (clickedColor === pickedColor) {
                messageDisplay.textContent = "Correct!";
                resetButton.textContent = "Play Again?";
                title.style.backgroundColor = clickedColor;
                changeColors(clickedColor);
            } else {
                messageDisplay.textContent = "Try Again!";
                this.style.backgroundColor = "#232323";
            }
        });      
    }
}

function reset() {
    colors = generateRandomColor(displayCnt);
    pickedColor = pickColor(colors);
    colorDisplay.textContent = pickedColor;
    for (let i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.backgroundColor = colors[i];
            squares[i].style.display = "block";
        } else {
            squares[i].style.display = "none";
        }
    }
    title.style.backgroundColor = "steelblue";
    resetButton.textContent = "New Colors";
    messageDisplay.textContent = "";
}

function generateRandomColor(num) {
    let arr = [];
    for (let i = 0; i < num; i++) {
        arr.push(randomColor());
    }
    return arr;
}

function randomColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}

function pickColor(colors) {
    let random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function changeColors(color) {
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color
    }
}