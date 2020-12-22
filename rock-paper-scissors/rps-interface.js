function computerPlay() {
    return l[Math.floor(Math.random() * l.length)]
}

function game() {
    let item = document.createElement('h4')
    scoreLog.appendChild(item)
    if (playerSelection == computerSelection) {
        let t = document.createTextNode("draw")
        item.appendChild(t)
        return score = 'draw' //draw
    } else if (playerSelection == "rock") {
        if (computerSelection == "paper") {
            let t = document.createTextNode("rock < paper, you lose")
            item.appendChild(t)
            return score = 'lose' //rock < paper, you lose
        } else {
            let t = document.createTextNode("rock > scissors, you win ")
            item.appendChild(t)
            return score = 'win' //rock > scissors, you win 
        }
    } else if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            let t = document.createTextNode("paper > rock, you win")
            item.appendChild(t)
            return score = 'win' //paper > rock, you win
        } else {
            let t = document.createTextNode("paper < scissors, you lose")
            item.appendChild(t)
            return score = 'lose' //paper < scissors, you lose
        }
    } else {
        if (computerSelection == "rock") {
            let t = document.createTextNode("scissors < rock, you lose")
            item.appendChild(t)
            return score = 'lose' //scissors < rock, you lose
        } else {
            let t = document.createTextNode("scissors > paper, you win")
            item.appendChild(t)
            return score = 'win'  //scissors > paper, you win
        }
    }
}

function addCount() {
    if (score == 'win') {
        playerScore.innerText = Number(playerScore.innerText) + 1
    } else if (score == 'lose') {
        computerScore.innerText = Number(computerScore.innerText) + 1
    } else return
}

function removeTransition() {
    this.classList.remove('playing')
}

const playerScore = document.querySelector('#player-score')
const computerScore = document.querySelector('#computer-score')
let buttons = document.querySelectorAll('[data-key]')
let playerSelection = ''
let computerSelection = ''
let l = ["rock", "paper", "scissors"]
let score = ''
const scoreLog = document.querySelector('#score-log')

buttons.forEach(button => {
    button.addEventListener('click', () => {
        button.classList.add('playing')
        playerSelection = button.dataset.key
        computerSelection = computerPlay()
        game()
        addCount()
    })
})

buttons.forEach(button => button.addEventListener('transitionend', removeTransition))