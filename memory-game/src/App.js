import './App.css';
import Card from './Card'
import React, { useEffect, useState } from 'react'
import Header from './Header'

let array = [0,1,2,3,4,5,6,7,8,9]

const images = [
  { id: 0, path: "img/Earth_Spirit_Large.png", name: 'Earth Spirit' },
  { id: 1, path: "img/Kunkka_large.png", name: 'Kunkka' },
  { id: 2, path: "img/Tusk_Large.png", name: 'Tusk' },
  { id: 3, path: "img/Snapfire_Large.png", name: 'Snapfire' },
  { id: 4, path: "img/Shadow_Fiend_Large.png", name: 'Shadow Fiend' },
  { id: 5, path: "img/Slardar_Large.png", name: 'Slardar' },
  { id: 6, path: "img/Invoker_Large.png", name: 'Invoker' },
  { id: 7, path: "img/Windranger_Large.png", name: 'Windranger' },
  { id: 8, path: "img/Queen_of_Pain_Large.png", name: 'Queen of Pain' },
  { id: 9, path: "img/Pangolier_Large.png", name: 'Pangolier' },
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
