const boardElement = document.getElementById("board")
let hrac = "O";

let boardButtons = []

for (let column = 0; column < 10; column++){
    boardButtons[column] = []
}

for (let row = 0; row < 10; row++) {
    for (let column = 0; column < 10; column++){
        const buttonElement = document.createElement("button")
        buttonElement.innerHTML = "-"

        boardButtons[column][row] = buttonElement
        buttonElement.addEventListener("click", event => {
            let lowestRow = -1
            for (let r = 9; r >= 0;r--){
                if (boardButtons[column][r].innerHTML === "-"){
                    lowestRow = r
                    break
                }
            }

            if (lowestRow !== -1){
                let targetButton = boardButtons[column][lowestRow]
                if (hrac === "O"){
                    targetButton.innerHTML = "O"
                    winCheck(column, lowestRow, hrac)
                    hrac = "X"
                } else if (hrac === "X"){
                    targetButton.innerHTML = "X"
                    winCheck(column, lowestRow, hrac)
                    hrac = "O"
                }

            }
        })

        boardElement.appendChild(buttonElement)
    }
}

function winCheck (column, row, hrac){
    let count = 0

    count = 0
    for (let c = column - 4; c <= column + 4; c++) {
        if (c >= 0 && c < 10) { 
            if (boardButtons[c][row].innerHTML === hrac) {
                count++
                if (count === 5) { alert("HRÁČ " + hrac + " VYHRÁL!!!")
                     return
                }
            } else {
                count = 0
            }
        }
    }

    count = 0
    for (let r = column - 4; r <= column + 4; r++) {
        if (r >= 0 && r < 10) { 
            if (boardButtons[column][r].innerHTML === hrac) {
                count++
                if (count === 5) { alert("HRÁČ " + hrac + " VYHRÁL!!!")
                     return
                }
            } else {
                count = 0
            }
        }
    }

    count = 0
    for (let i = - 4; i <= 4; i++) {
        let c = column + 1
        let r = row + 1
        if (c >= 0 && c < 10 && r >= 0 && r < 10) { 
            if (boardButtons[c][r].innerHTML === hrac) {
                count++
                if (count === 5) { alert("HRÁČ " + hrac + " VYHRÁL!!!")
                     return
                }
            } else {
                count = 0
            }
        }
    }

    count = 0
    for (let i = - 4; i <= 4; i++) {
        let c = column - 1
        let r = row - 1
        if (c >= 0 && c < 10 && r >= 0 && r < 10) { 
            if (boardButtons[c][r].innerHTML === hrac) {
                count++
                if (count === 5) { alert("HRÁČ " + hrac + " VYHRÁL!!!")
                     return
                }
            } else {
                count = 0
            }
        }
    }

}
