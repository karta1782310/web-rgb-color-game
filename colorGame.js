let colors = [
    "rgb(255, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 255, 255)",
    "rgb(0, 0, 255)",
    "rgb(255, 0, 255)"
];

let squares = document.querySelectorAll(".square");
let pickedColor = colors[3];
let colorDisplay = document.querySelector("#colorDisplay");

colorDisplay.textContent = pickedColor;

for (let i = 0; i < squares.length; i++) {
    // 初始化顏色
    squares[i].style.backgroundColor = colors[i];
    // 新增事件
    squares[i].addEventListener("click", function(){
        // 抓取點擊顏色
        let clickedColor = this.style.backgroundColor;
        // 比對選取顏色
        if (clickedColor == pickedColor) {
            alert("CORRECT!");
        } else {
            alert("WRONG!!!");
        }
    });      
}