//gameBoard -> module
//players -> factories
/* TODO
// create a button for going to main page (change names)
// organize code order
*/
const gameBoard = (() => {
    const player = (name, symbol) => {  // function player(name, symbol) {}
        const turn = undefined
        const score = 0
        return {name, symbol, turn, score}
    }  
    
    function eventsInit() {
        submitNames.addEventListener('click', hideModal)
        newGameBtn.addEventListener('click', clearBoard)
        modalClose.addEventListener('click', closeWinModal)
        boardTiles.forEach(tile => tile.addEventListener('click', fillTile))
    }
    
    function hideModal() {
        modalStart.style.display = "none"
        turnP2.style.display = "none"
        player1.name = player1Input.value || "Player 1"
        player2.name = player2Input.value || "Player 2"
        player1Txt.innerHTML = player1.name
        player2Txt.innerHTML = player2.name
    }

    function findValues() {
        for (let i=0; i < boardTiles.length; i++) {
            boardValues[i] = boardTiles[i].innerHTML
        }
    }

    function changeTurn() {
        player1.turn = !player1.turn
        player2.turn = !player2.turn
        if (player1.turn) {
            turnP1.style.display = "block"
            turnP2.style.display = "none"     
        } else {
            turnP1.style.display = "none"
            turnP2.style.display = "block"
        }
    }

    function checkWinner() {
        if (player1.turn === true) {
            return winningConditions.some((combination) => {
                return combination.every((i) => {
                  return boardValues[i] === "X"
                });
            })
        }
        return winningConditions.some((combination) => {
            return combination.every((i) => {
              return boardValues[i] === "O"
            });
        })
    }
        

    function fillTile(e) {
        if (e.target.innerHTML == "") {
            e.target.innerHTML = players.find(obj => obj.turn == true).symbol//player1.turn ? player1.symbol : player2.symbol
            findValues()
            winnerWindow()
        }
    }

    function clearBoard() {
        for (let i=0; i < boardTiles.length; i++) {
            boardTiles[i].innerHTML = ''
            changeTurn()
            boardTiles.forEach(tile => tile.addEventListener('click', fillTile))
        }
    }

    function closeWinModal() {
        modalWin.style.display = "none"
    }

    function winnerText(winner) {
        return `${winner} wins!`
    }

    function winnerWindow() {
        if (checkWinner()) {
            const winnerPlayer = players.find(obj => obj.turn == true).name
            players.find(obj => obj.turn == true).score ++
            winText.innerHTML = winnerText(winnerPlayer)
            let item = document.createElement('h1')
            item.innerHTML = "CONGRATS! 🎉"
            winText.appendChild(item)
            scoreP1.innerHTML = player1.score
            scoreP2.innerHTML = player2.score
            setTimeout(function(){ modalWin.style.display = "block"; }, 200)
            boardTiles.forEach(tile => tile.removeEventListener('click', fillTile))
        } else if (!boardValues.includes("")) {
                setTimeout(function(){ modalWin.style.display = "block"; }, 200)
                winText.innerHTML = "It's a DRAW!"
        } else {
            changeTurn()
        }
        
    }

    const player1Txt = document.querySelector('#player-left h3')
    const player2Txt = document.querySelector('#player-right h3')
    const player1Input = document.querySelector('#p1-input')
    const player2Input = document.querySelector('#p2-input')
    const turnP1 = document.querySelector('#left-side h2')
    const turnP2 = document.querySelector('#right-side h2')
    const submitNames = document.querySelector('input[type="submit"]')
    const modalStart = document.querySelector('#modal-start')
    const modalWin = document.querySelector("#modal-win")
    const modalClose = document.querySelector(".close")
    let winText = document.querySelector(".winner-card h1")
    const boardTiles = document.querySelectorAll(".square")
    let scoreP1 = document.querySelector('#scoreP1')
    let scoreP2 = document.querySelector('#scoreP2')
    const newGameBtn = document.getElementById("newGameBtn")
    const boardValues = ["", "", "", "", "", "", "", "", ""]
    winningConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]
    const player1 = player("nome", "X")
    player1.turn = true
    const player2 = player("nome", "O")
    const players = [player1, player2]

    eventsInit()
    return {player1Txt, player1,modalWin}
})()
