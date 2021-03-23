import Table from './components/Table'
import Gameboards from './components/Gameboard'
import StartMenu from './components/StartMenu'

import './styles/App.css'
import { useEffect, useState } from 'react';
const ComputerPlay = require('./components/ComputerPlay')

function App() {
  
  const [startMenu, setStartMenu] = useState(true)
  const computerPlayer = ComputerPlay()
  const gameBoardPlayer = Gameboards()
  const gameBoardComputer = Gameboards()
  

  function colorTiles() {
    document.querySelectorAll('.player-table .battlefield-cell').forEach(element => {
      if (gameBoardPlayer.positions.join().split(',').includes(element.id)) {
        element.style.background = shipStyle.background
        if (computerPlayer.hits.join().split(',').includes(element.id)) {
          element.lastChild.lastChild.className = "fas fa-times fa-lg"
        }
      }
      

    });
  }

  function handleClick(event) {
    console.log(event.currentTarget)
    const row = event.currentTarget.parentNode
    const rowIndex = Array.prototype.indexOf.call(row.parentNode.children, row)
    const columnIndex = Array.prototype.indexOf.call(row.children, event.currentTarget)
    const cellLetter = document.querySelectorAll('.battlefield-row')[0].childNodes[columnIndex].children[0].firstChild.innerText
    const cellPosition = `${cellLetter}${rowIndex + 1}`
    console.log(event.currentTarget.id)
    computerPlay()
    checkStatus()
      
    //alert(allPos.includes(cellPosition) ? 'Hit' : 'Miss')
    if (gameBoardComputer.positions.join().split(',').includes(cellPosition)) {
      event.currentTarget.style.background = shipStyle2.background
    } 
    if (!gameBoardComputer.positions.join().split(',').includes(cellPosition)) {
      event.currentTarget.style.background = shipStyle3.background
    }
  }

  function computerPlay() {
    computerPlayer.pickTile()
    const computerAttack = computerPlayer.hits
    gameBoardPlayer.receiveAttack(computerAttack)

    colorTiles()
  }

  function checkStatus() {
    let shipsSunk = 0
    for (let i=0; i < gameBoardPlayer.ships.length; i++) {
      if (gameBoardPlayer.ships[i].isSunk() === true) {
        shipsSunk ++
      }
    }
    if (shipsSunk === gameBoardPlayer.ships.length) {
      alert('You lost')
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
        <Table className={'player-table'} playerName={'You'}/>
        <Table handleClick={handleClick} playerName={'Enemy'}/>
      </div>  
      : 
      <StartMenu handleStart={handleStart} />
      }
    </div>
  );
}

export default App;
