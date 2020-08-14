let colors = generateRandomColor(6);
let squares = document.querySelectorAll(".square");
let pickedColor = pickColor(colors);
let colorDisplay = document.querySelector("#colorDisplay");
let messageDisplay = document.querySelector("#message");
let title = document.querySelector("h1");

colorDisplay.textContent = pickedColor;

for (let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
    
    squares[i].addEventListener("click", function(){
        let clickedColor = this.style.backgroundColor;

        if (clickedColor === pickedColor) {
            messageDisplay.textContent = "Correct!";
            title.style.backgroundColor = clickedColor;
            changeColors(clickedColor);
        } else {
            messageDisplay.textContent = "Try Again!";
            this.style.backgroundColor = "#232323";
        }
    });      
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
    let random = Math.floor(Math.random() * 6 + 1);
    return colors[random];
}

function changeColors(color) {
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color
    }
}