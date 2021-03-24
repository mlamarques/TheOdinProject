import Table from './components/Table'
import Gameboards from './components/Gameboard'
import StartMenu from './components/StartMenu'
import Player from './components/Player'

import './styles/App.css'
import React from "react"
import { useEffect, useState } from 'react';
const ComputerPlay = require('./components/ComputerPlay')

const App = () => {
  
  const [startMenu, setStartMenu] = useState(true)
  const [isLoading, setIsLoading] = useState(false)
  const [playerClicks, setPlayerClicks] = useState([])
  const [playerTurn, setPlayerTurn] = useState('Your')
  const [winner, setWinner] = useState('')

  const computerPlayer = ComputerPlay()
  const player1 = Player()
  const gameBoardPlayer = Gameboards()
  const gameBoardComputer = Gameboards()
  console.log(gameBoardComputer.positions)

  function colorTiles() {
    document.querySelectorAll('.player-table .battlefield-cell').forEach(element => {
      if (gameBoardPlayer.positions.join().split(',').includes(element.id)) {
        element.style.background = shipStyle.background
      }
    });
  }

  const handleClick = (event) => {
    console.log(event.currentTarget.id)
    let id = event.currentTarget.id
    //event.currentTarget.lastChild.lastChild.className = "fas fa-times fa-lg"
    
    console.log(playerClicks)
    if (!playerClicks.includes(id)) {
      setPlayerClicks(element => [...element, id])
      playerPlay(id)

      setPlayerTurn('Computer')
      setTimeout(() => {
        //computerPlay()
        setPlayerTurn('Your')
      }, 300)
    }
    
    // console.log(event.currentTarget.id)
    // console.log(player1.clicks)
    // computerPlay(event.currentTarget.id)
    // !player1.clicks.includes(event.currentTarget.id) && player1.clicks.push(event.currentTarget.id)
    // if (!player1.clicks.includes(event.currentTarget.id)) {
    //   computerPlay()
    // }
    
  }

  function playerPlay(id) {
    
    
    //console.log(shipsPositions.join().split(',').includes(id))
  }

  function computerPlay() {
      computerPlayer.pickTile()
      const computerAttack = computerPlayer.hits
      gameBoardPlayer.receiveAttack(computerAttack)

      console.log(computerAttack)
      let computerHit = document.querySelector(`.player-table #${computerAttack}`)
      computerHit.lastChild.lastChild.className = "fas fa-times fa-lg"

      // document.querySelectorAll('.player-table .battlefield-cell').forEach(element => {
      //   if (computerPlayer.hits.join().split(',').includes(element.id)) {
      //     element.lastChild.lastChild.className = "fas fa-times fa-lg"
      //   }
      // });

    // checkStatusPlayerBoard()
    // setPlayerTurn('You')
      
  }

  function checkStatusPlayerBoard() {
    let shipsSunk = 0
    for (let i=0; i < gameBoardPlayer.ships.length; i++) {
      if (gameBoardPlayer.ships[i].isSunk() === true) {
        shipsSunk ++
      }
    }
    if (shipsSunk === gameBoardPlayer.ships.length) {
      setWinner('Computer')
      alert('You lost')
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
      setWinner('You')
      alert('You win!')
      //disable mouse
    }
  }

  function handleStart() {
    setStartMenu(false)
  }

  useEffect(() => {
    colorTiles()
  }, [startMenu])

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
          <Table handleClick={handleClick} playerName={'Enemy'}/>
        </div>
      </div>  
      : 
      <StartMenu handleStart={handleStart} />
      }
    </div>
  );
}

export default App;
