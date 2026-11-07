const boardElement = document.getElementById("board")
const currentPlayerElement = document.getElementById("current-player")
const restartBtn = document.getElementById("restart-btn")

let hrac = "O";
let boardButtons = []
let gameOver = false;

for (let column = 0; column < 10; column++){
    boardButtons[column] = []
}

for (let row = 0; row < 10; row++) {
    for (let column = 0; column < 10; column++){
        const buttonElement = document.createElement("button")
        buttonElement.innerHTML = "-"

        boardButtons[column][row] = buttonElement
        buttonElement.addEventListener("click", event => {
            if(gameOver) return;

    //AI Generated - Gemini
    //pomoc s vymyšlení jak najít nejnižší volné pole ve sloupci
            let lowestRow = -1
            for (let r = 9; r >= 0;r--){
                if (boardButtons[column][r].innerHTML === "-"){
                    lowestRow = r
                    break
                }
            }
            if (lowestRow !== -1){
                let targetButton = boardButtons[column][lowestRow]

                targetButton.innerHTML = hrac;
                if (hrac === "O"){
                    targetButton.style.backgroundColor = "darkmagenta"

                } else {
                    targetButton.style.backgroundColor = "darkcyan"
                }
                if (winCheck(column, lowestRow, hrac)){
                    gameOver = true
    //AI Used - Gemini
    //setTimeout - protože se mi nevypisovalo poslední pole
                    setTimeout(() =>alert("HRÁČ " + hrac + " VYHRÁL!!!"), 10)
                    return
                }else if(remiza()){
                    setTimeout(() =>alert("REMÍZA"), 10)
                    gameOver = true
                    return
                }
                
                hrac = hrac === "O" ? "X" : "O"
                updateTurnInfo();
            }
        })
        boardElement.appendChild(buttonElement)
    }
}

restartBtn.addEventListener("click", resetGame);

function resetGame() {
    hrac = "O";
    gameOver = false;
    updateTurnInfo();

    for (let col = 0; col < 10; col++) {
        for (let row = 0; row < 10; row++) {
            const btn = boardButtons[col][row];
            btn.innerHTML = "-";
            btn.style.backgroundColor = "aliceblue";
            btn.style.border = "1px solid lightslategray";
        }
    }
}

function updateTurnInfo() {
    currentPlayerElement.innerText = hrac;
}

function winCheck (column, row, hrac){
    let targetButtonWin = boardButtons[column][row]

    let count = 0
    for (let c = column - 4; c <= column + 4; c++) {
        if (c >= 0 && c < 10) { 
            if (boardButtons[c][row].innerHTML === hrac) {
                count++
                if (count === 5) {
                    targetButtonWin.style.border = "5px solid red"
                    return true
                }
            } else {
                count = 0
            }
        }
    }

    count = 0
    for (let r = row - 4; r <= row + 4; r++) {
        if (r >= 0 && r < 10) { 
            if (boardButtons[column][r].innerHTML === hrac) {
                count++
                if (count === 5) {
                    targetButtonWin.style.border = "5px solid red"
                    return true
                }
            } else {
                count = 0
            }
        }
    }

    count = 0
    for (let i = - 4; i <= 4; i++) {
        let c = column + i
        let r = row + i
        if (c >= 0 && c < 10 && r >= 0 && r < 10) { 
            if (boardButtons[c][r].innerHTML === hrac) {
                count++
                if (count === 5) {
                    targetButtonWin.style.border = "5px solid red"
                    return true
                }
            } else {
                count = 0
            }
        }
    }

    count = 0
    for (let i = - 4; i <= 4; i++) {
        let c = column + i
        let r = row - i
        if (c >= 0 && c < 10 && r >= 0 && r < 10) { 
            if (boardButtons[c][r].innerHTML === hrac) {
                count++
                if (count === 5) {
                    targetButtonWin.style.border = "5px solid red"
                    return true
                }
            } else {
                count = 0
            }
        }
    }

    return false
}

function remiza() {
    for (let x = 0; x < 10; x++) {
        for (let y = 0; y < 10; y++){
            if(boardButtons[x][y].innerHTML === "-"){
                return false
            }
        }
    }
    return true
}
