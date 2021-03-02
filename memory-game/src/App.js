import './App.css';
import Card from './Card'
import React, { useEffect, useState } from 'react'
import Header from './Header'

let array = [0,1,2,3,4,5,6,7,8,9]

const images = [
  { id: 0, path: "img/circle-black.png", name: 'Black Circle' },
  { id: 1, path: "img/circle-yellow.png", name: 'Yellow Circle' },
  { id: 2, path: "img/cross-black.png", name: 'Black Cross' },
  { id: 3, path: "img/cross-red.png", name: 'Red Cross' },
  { id: 4, path: "img/square-black.png", name: 'Black Square' },
  { id: 5, path: "img/square-purple.png", name: 'Purple Square' },
  { id: 6, path: "img/star-black.png", name: 'Black Star' },
  { id: 7, path: "img/star-green.png", name: 'Green Star' },
  { id: 8, path: "img/wave-black.png", name: 'Black Wave' },
  { id: 9, path: "img/wave-blue.png", name: 'Blue Wave' },
]

function App() {
  const [symbolClicked, setSymbolClicked] = useState([])
  const [clickCount, setClickCount] = useState(0)
  const [randomList, setRandomList] = useState([0,1,2,3,4,5,6,7,8,9])
  const [bestScore, setBestScore] = useState(0)

  function handleClick(event) { 
    for (let i = array.length -1; i > 0; i--){ //Fisher-Yates Algorithm
      const j = Math.floor(Math.random() * i)
      const temp = array[i]
      array[i] = array[j]
      array[j] = temp
      }

    setRandomList(array)
    const tempEvent = event.currentTarget.innerText
    setSymbolClicked(array => [...array, tempEvent])
    //setRandImg(item => item.sort(() => Math.random() - 0.5)) NOT SO GOOD SOLUTION
    setClickCount(item => item + 1)
  }

  useEffect(() => {
    if (new Set(symbolClicked).size !== symbolClicked.length) {
      setBestScore(value => value < clickCount ? clickCount - 1 : value)
      setClickCount(0)
      setSymbolClicked([])
    }
  }, [clickCount, symbolClicked])

  const allCards = randomList.map((item) => <Card
                                          key={images[item].id}
                                          handleClick={handleClick}
                                          path={images[item].path}
                                          name={images[item].name}  
                                        />)
  return (
    <div className="App">
      <Header points={clickCount} best={bestScore}/>
      <div className="cards-container">{allCards}</div>
    </div>
  );
}

export default App;
