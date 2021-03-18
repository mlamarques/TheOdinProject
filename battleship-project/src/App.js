import Table from './components/Table'
import Gameboards from './components/Gameboard'
import StartMenu from './components/StartMenu'
import './styles/App.css'
import { useEffect, useState } from 'react';

function App() {

  const [startMenu, setStartMenu] = useState(true)

  function colorTiles() {
    document.querySelectorAll('.player-table .battlefield-cell').forEach(element => {
      if (allPos.includes(element.id)) {
        element.style.background = shipStyle.background
      }
    });
  }

  function handleClick(event) {
    console.log(event.currentTarget)
    const row = event.currentTarget.parentNode
    const rowIndex = Array.prototype.indexOf.call(row.parentNode.children, row)
    const columnIndex = Array.prototype.indexOf.call(row.children, event.currentTarget)
    const cellLetter = document.querySelectorAll('.battlefield-row')[0].childNodes[columnIndex].children[0].lastChild.innerText
    const cellPosition = `${cellLetter}${rowIndex + 1}`
    console.log(cellPosition)
      
    //alert(allPos.includes(cellPosition) ? 'Hit' : 'Miss')
    if (allPos.includes(cellPosition)) {
      event.currentTarget.style.background = shipStyle2.background
    } 
    if (!allPos.includes(cellPosition)) {
      event.currentTarget.style.background = shipStyle3.background
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

  const allPos = Gameboards().positions.join().split(',')
  
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
