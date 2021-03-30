import Menu from './components/Menu'
import './App.css';
// import img from 'img/background.jpg'
import characters from './characters.json'
import { useState, useRef } from 'react';
import { Navbar } from './components/Navbar';
import { ClickStatus } from './components/ClickStatus'
import ModalWin from './components/ModalWin'

function App() {
  const [myCharacters, setMyCharacters] = useState(characters)
  const [currentCharacter, setCurrentCharacter] = useState([])
  const [menuStatus, setMenuStatus] = useState('menu-off')
  const [posX, setposX] = useState(0)
  const [posY, setposY] = useState(0)
  const [msgStatus, setMsgStatus] = useState('click-status')
  const [msgContent, setMsgContent] = useState('test')
  const [modalDisplay, setModalDisplay] = useState('none')

  console.log(setMyCharacters)

  ////////////////////////////// STOPWATCH
  
  const [timer, setTimer] = useState(0.00 * 60)
  const [isActive, setisActive] = useState(false)

  const minutes = Math.floor(timer / 60)
  const seconds = timer % 60

  const increment = useRef(null)

  function startCountdown() {
      setisActive(true)
      increment.current = setInterval(() => {
        setTimer((timer) => timer + 1)
      }, 1000)
  }

//   naturalHeight: 1828
//   naturalWidth: 2828

  function handleClick(event) {
    console.log(event.pageY)
    console.log(event.pageX)
    
    if (event.pageX >= 2700) {
      setposX((event.pageX) - 115)
    } else {
      setposX(event.pageX + 15)
    }
    if (event.pageY >= 1700) {
      setposY((event.pageY) - 115)
    } else {
      setposY(event.pageY + 15)
    }
    if (menuStatus === 'menu-off') {
      setMenuStatus('menu')
    } else {
      setMenuStatus('menu-off')
    }

    if (hitTarget(event.pageX, event.pageY).length === 1) {
      setCurrentCharacter(hitTarget(event.pageX, event.pageY)[0])
    }
    
    if (checkWon()) {
      if(isActive) {
        clearInterval(increment.current)
        setisActive(false)
      }
      setModalDisplay('block')
      window.scrollTo(0, 0)
    }
  }

  function handleClick2(event) {

    if (currentCharacter.name === event.currentTarget.innerText) {
      myCharacters.map(char => char.name === currentCharacter.name ? char.opacity = 0.5 : char.opacity)
      myCharacters.map(char => char.name === currentCharacter.name ? char.isFound = true : char.isFound)

      setMsgContent('Correct')
      
    } else {
      setMsgContent('Incorrect')
    }

    setMsgStatus('click-status visible')
      setTimeout(() => {
        setMsgStatus('click-status')
      }, 2000)
    
    setMenuStatus('menu-off')
    setCurrentCharacter([])
  }

  function hitTarget(posX, posY) {
    const hit = myCharacters.filter(char => char.minPosX <= posX && posX <= char.maxPosX && char.minPosY <= posY && posY <= char.maxPosY)
    return hit
  }

  function checkWon() {
    return myCharacters.filter(char => char.opacity === 1).length < 1 ? true : false
  }

  return (
    <div className="App" >
      <Navbar minutes={minutes} seconds={seconds} />
      <div onClick={handleClick}>
        <img src='img/background.jpg' alt='img' ></img>
      </div>
      <Menu charItems={myCharacters} class={menuStatus} handleClick={handleClick2} left={posX} top={posY}/>
      <ClickStatus content={msgContent} className={msgStatus} top={window.screenY + window.pageYOffset - 250} left={(window.screenX / 2) + window.pageXOffset}/>
      <ModalWin display={modalDisplay}/>
    </div>
  );
}

export default App;
