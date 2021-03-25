import Table from './components/Table'
import Gameboards from './components/Gameboard'
import StartMenu from './components/StartMenu'
//import Player from './components/Player'

import './styles/App.css'
import React from "react"
import { useEffect, useState } from 'react';
const ComputerPlay = require('./components/ComputerPlay')

const computerPlayer = ComputerPlay()
//const player1 = Player()
const gameBoardPlayer = Gameboards()
const gameBoardComputer = Gameboards()

///////////////////////////////////////////
//TODO
//Create a drag-and-drop for players ships
///////////////////////////////////////////

const App = () => {  
  const [startMenu, setStartMenu] = useState(true)
  const [playerClicks, setPlayerClicks] = useState([])
  const [playerTurn, setPlayerTurn] = useState('Your')

  function colorTiles() {
    document.querySelectorAll('.player-table .battlefield-cell').forEach(element => {
      if (gameBoardPlayer.positions.join().split(',').includes(element.id)) {
        element.style.background = shipStyle.background
      }
    });
  }

  const handleClick = (event) => {
    let id = event.currentTarget.id
    playerPlay(id)
    computerPlay(id)
  }

  function playerPlay(id) {
    if (!playerClicks.includes(id)) {
      let playerHit = document.querySelector(`.computer-table #${id}`)
      gameBoardComputer.receiveAttack([id])
      setPlayerClicks(element => [...element, id])
      setPlayerTurn('Computer')
      
      if (gameBoardComputer.positions.join().split(',').includes(id)) {
        playerHit.style.background = shipStyle2.background
      } else {
        playerHit.style.background = shipStyle3.background
      }
    }
  }

  function computerPlay(id) {
    if (!playerClicks.includes(id)) {
      document.querySelector(`.App`).style.cursor = 'wait'
      document.querySelector(`.computer-table`).style.pointerEvents = 'none'
      setTimeout(() => {
        
        computerPlayer.pickTile()
        const computerAttacks = computerPlayer.hits
        gameBoardPlayer.receiveAttack([computerAttacks[computerAttacks.length-1]])
        let computerHit = document.querySelector(`.player-table #${computerAttacks[computerAttacks.length-1]}`)
        computerHit.lastChild.lastChild.className = "fas fa-times fa-lg"
        setPlayerTurn('Your')
        document.querySelector(`.App`).style.cursor = 'default'
        document.querySelector(`.computer-table`).style.pointerEvents = 'auto'
      }, 600)
    }
  }

  function checkStatusPlayerBoard() {
    let shipsSunk = 0
    for (let i=0; i < gameBoardPlayer.ships.length; i++) {
      if (gameBoardPlayer.ships[i].isSunk() === true) {
        shipsSunk ++
      }
    }
    if (shipsSunk === gameBoardPlayer.ships.length) {
      alert(`You lost`)
      //disable mouse
    }
  }

  function checkStatusComputerBoard() {
    let shipsSunk = 0
    for (let i=0; i < gameBoardComputer.ships.length; i++) {
      if (gameBoardComputer.ships[i].isSunk() === true) {
        shipsSunk ++
      }
    }
    if (shipsSunk === gameBoardComputer.ships.length) {
      alert(`You win!`)
      //disable mouse
    }
  }

  function handleStart() {
    setStartMenu(false)
  }

  useEffect(() => {
    colorTiles()
    checkStatusComputerBoard()
    checkStatusPlayerBoard()
  })

  const shipStyle = {
    'background': 'blue'
  }

  const shipStyle2 = {
    'background': 'red'
  }

  const shipStyle3 = {
    'background': 'grey'
  }

  
  return (
    <div className="App">
      {!startMenu ?
      <div> 
        <div className='turn-title'>
          <h1 >{playerTurn} Turn</h1>
        </div>
        <div className='gameboards'>
          <Table className={'player-table'} playerName={'You'}/>
          <Table className={'computer-table'} handleClick={handleClick} playerName={'Enemy'}/>
        </div>
      </div>  
      : 
      <StartMenu handleStart={handleStart} />
      }
    </div>
  );
}

export default App;
