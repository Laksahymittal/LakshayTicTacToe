let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let win=document.querySelector(".game");
let gameover = new Audio("gameover.mp3");
let turnO = true; //player0

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            box.innerHTML = "X";
            box.style.color = "black";
            turnO = false;
        }
        else {
            box.innerHTML = "O";
            box.style.color = "brown";
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
    })
})
const resetGame = () => {
    turnO = true;
    anableBoxes();
    msgContainer.classList.add("hide");
    win.style.backgroundColor="#548687";
}

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);


const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}
const anableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerHTML = "";
    }
}
const showWinner = (winner) => {
    msg.innerHTML = `Congratulations,Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    win.style.backgroundColor="grey";
    gameover.play();
    disableBoxes();
}
const checkWinner = () => {
    for (let pattern of winPatterns) {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if (pos1 != "" && pos2 != "" && pos3 != "") {
            if (pos1 === pos2 && pos2 === pos3) {
                showWinner(pos1);
                
            }
        }
    }
}


