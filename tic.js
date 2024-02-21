let boxs = document.querySelectorAll(".box");
let resetBtn = document.querySelector('#reset-btn');
let newGame = document.querySelector('#new-game');
let msgConatiner = document.querySelector('.msg-container');
let msg = document.querySelector('#msg');
let player0 = true;
let clickCount = 0;
const patterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];
boxs.forEach(box => {
    box.addEventListener('click', ()=>{
        if(player0) {
            box.innerText = "O";
            box.style.color = 'red';
            player0 = false;
            box.disabled = true;
        } else {
            box.innerText = "X";
            box.style.color = 'blue';
            player0 = true;
            box.disabled = true;
        }
        clickCount++;
        checkWinner();
    })
});

function checkWinner(){
    for (const pattern of patterns) {
            let pos1Val = boxs[pattern[0]].innerText;
            let pos2Val = boxs[pattern[1]].innerText;
            let pos3Val = boxs[pattern[2]].innerText;
            if(pos1Val != "" && pos2Val !="" && pos3Val != ""){
                if(pos1Val == pos2Val && pos1Val == pos3Val) {
                    console.log("Winner", pos2Val);
                    showWinner(pos1Val);
                } 
            }
            if ((clickCount === 9) && (!(pos1Val == pos2Val) && (pos1Val == pos3Val))) {
                gameDraw();
                console.log("It's a draw!");
            }
        }
    }

const showWinner = (pos1Val)=>{
    msg.innerText = `WINNER IS ${pos1Val}`;
    msgConatiner.classList.remove('none'); 
    for(let box of boxs) {
        box.disabled = true;
    }
}

const resetGame = ()=>{
    player0 = true;
    for (let box of boxs) {
        box.disabled = false;
        box.innerText = "";
    }
    msgConatiner.classList.add('none');

}

const gameDraw = () =>{
    player0 = true;
    for (let box of boxs) {
        box.disabled = false;
    }
    msgConatiner.classList.remove('none'); 
    msg.innerText = "NO MORE POSSIBLE MOVES";
}
resetBtn.addEventListener('click',resetGame);
newGame.addEventListener('click',resetGame);