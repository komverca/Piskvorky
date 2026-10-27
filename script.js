const boardElement = document.getElementById("board")
let hrac = 0;

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
                if (hrac === 0){
                    targetButton.innerHTML = "O"
                    hrac = 1
                } else if (hrac === 1){
                    targetButton.innerHTML = "X"
                    hrac = 0
                }

            }
        })

        boardElement.appendChild(buttonElement)
    }
}