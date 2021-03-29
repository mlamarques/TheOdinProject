import Menu from './components/Menu'
import './App.css';
// import img from 'img/background.jpg'
import characters from './characters.json'
import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { ClickStatus } from './components/ClickStatus'

function App() {
  const [menuStatus, setMenuStatus] = useState('menu-off')
  const [posX, setposX] = useState(0)
  const [posY, setposY] = useState(0)
  const [msgStatus, setMsgStatus] = useState('click-status')

//   naturalHeight: 1828
// ​​​
//   naturalWidth: 2828

  function handleClick(event) {
    console.log(event.pageY)
    console.log(event.pageX)
    if (hitTarget(event.pageX, event.pageY).length === 1) {
      const character = hitTarget(event.pageX, event.pageY)[0]
      characters.map(char => char.name === character.name ? char.opacity = 0.5 : char.opacity)
    }

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
    setMenuStatus('menu')

    console.log(checkWon())
  }

  function handleClick2() {
    setMenuStatus('menu-off')
    setMsgStatus('click-status visible')
    setTimeout(() => {
      setMsgStatus('click-status')
    }, 2000)
    
  }

  function hitTarget(posX, posY) {
    const hit = characters.filter(char => char.minPosX <= posX && posX <= char.maxPosX && char.minPosY <= posY && posY <= char.maxPosY)
    return hit
  }

  function checkWon() {
    return characters.filter(char => char.opacity === 1).length < 1 ? true : false
  }

  return (
    <div className="App" >
      <Navbar/>
      <div onClick={handleClick}>
        <img src='img/background.jpg' alt='img' ></img>
      </div>
      <Menu class={menuStatus} handleClick={handleClick2} left={posX} top={posY}/>
      <ClickStatus className={msgStatus} top={window.screenY + window.pageYOffset - 250} left={(window.screenX / 2)}/>
    </div>
  );
}

export default App;
