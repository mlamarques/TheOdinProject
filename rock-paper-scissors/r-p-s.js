l = ["Rock", "Paper", "Scissors"]

function computerPlay() {
    return l[Math.floor(Math.random() * l.length)]
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return "Draw"
    } else if (playerSelection == "Rock") {
        if (computerSelection == "Paper") {
            return "Rock < Paper, you lose"
        } else {
            return "Rock > Scissors, you win"
        }
    } else if (playerSelection == "Paper") {
        if (computerSelection == "Rock") {
            return "Paper > Rock, you win"
        } else {
            return "Paper < Scissors, you lose"
        }
    } else {
        if (computerSelection == "Rock") {
            return "Scissors < Rock, you lose"
        } else {
            return "Scissors < Paper, you win"
        }
    }
}

let playerSelection = "Rock"

let score = [0,0] // [0] is you, [1] is computer
//console.log(score)

function game() {
    for (; score[0] <= 4 && score[1] <= 4;) {
        let computerSelection = computerPlay()
        //console.log(computerSelection)
        result = playRound(playerSelection, computerSelection)
        if (result.includes("win")) {
            score[0]++
        } else if (result.includes("lose")) {
            score[1]++
        }
    }
    if (score[0] > score[1]) {
        return "Player wins!"
    } else {
        return "Computer wins!"
    }
}
console.log(game())
console.log(score)
