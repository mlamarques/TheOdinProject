import Menu from './components/Menu'
import './App.css';
// import img from 'img/background.jpg'
import characters from './characters.json'
import { useEffect, useState } from 'react';
import { Navbar } from './components/Navbar';
import { ClickStatus } from './components/ClickStatus'
import { projectDatabase } from './firebase/config'
import ModalWin from './components/ModalWin'
import StartPage from './components/StartPage'
import Leaderboard from './components/Leaderboard'
import useTimer from './hooks/useTimer';
import Cookies from 'js-cookie'

function App() {
  const [myCharacters, setMyCharacters] = useState(characters)
  const [currentCharacter, setCurrentCharacter] = useState([])
  const [menuStatus, setMenuStatus] = useState('menu-off')
  const [posX, setposX] = useState(0)
  const [posY, setposY] = useState(0)
  const [msgStatus, setMsgStatus] = useState('click-status')
  const [msgContent, setMsgContent] = useState('test')
  const [modalDisplay, setModalDisplay] = useState('none')
  const [startPage, setStartPage] = useState(true)
  const [startTime, setStartTime] = useState(null)
  // const [currentTimer, setCurrentTimer] = useState(Cookies.get('session') ? Math.floor((new Date() - startTime) / 1000) : 0)
  const [leaderboardContainer, setLeaderboardContainer] = useState('none')
  const [playerName, setPlayerName] = useState('')
  const [isSent, setisSent] = useState(false)

  // if (Cookies.get('session')) {
  //   setModalDisplay(false)
  //   setCurrentTimer(Date.now() - startTime)
  // }

  // if (!Cookies.get('session')) {
  //   setModalDisplay(true)
  //   setCurrentTimer(0)
  // }

  const { timer, isActive, handleStart, handleReset, handlePause } = useTimer(0)

  const hours = Math.floor(timer / 60 / 60)
  const minutes = Math.floor(timer / 60 % 60)
  const seconds = timer % 60
 
//   naturalHeight: 1828
//   naturalWidth: 2828

  function handleClick(event) {
    console.log(event.pageY)
    console.log(event.pageX)
    console.log(myCharacters[3].isFound)
    
    
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
  }

  function handleMenuClick(event) {

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
    if (checkWon()) {
      console.log(`User time: ${timer}`)
      handlePause()
      setModalDisplay('block')
      window.scrollTo(0, 0)
      Cookies.remove('session')
    }
  }

  function handleChange(event) {
    setPlayerName(event.currentTarget.value)
  }

  function sendPlayerData(event) {
    if (document.querySelector('input').value !== '' && isActive === false && isSent === false) {
      // event.currentTarget.disabled = true
      const data = {
        name: playerName,
        time: timer,
        timestamp: Date.now()
      }

      document.querySelector('input').value = ''
      setisSent(true)

      // firebase.database().ref('users/' + userId).set({
      //   username: name,
      //   email: email,
      //   profile_picture : imageUrl
      // });

      return projectDatabase.ref().child('leaderboard').push(data)
      }
      
  }

  function hitTarget(posX, posY) {
    const hit = myCharacters.filter(char => char.minPosX <= posX && posX <= char.maxPosX && char.minPosY <= posY && posY <= char.maxPosY)
    return hit
  }

  function checkWon() {
    return myCharacters.filter(char => char.opacity === 1).length < 1 ? true : false
  }

  function openLeader() {
    if (leaderboardContainer === 'block') {
      setLeaderboardContainer('none')
    }
    if (leaderboardContainer === 'none') {
      setLeaderboardContainer('block')
    }
    
  }

  function closeLeader() {
    setLeaderboardContainer('none')
  }

  function createCookie() {
    Cookies.set('session', 'created', { expires: 1 })
  }

  // useEffect(() => {
  //   Cookies.set('wizard', myCharacters[3].isFound)
  // }, [myCharacters])

  return (
    <div className="App" >
      { startPage && !isActive ?
        <>
          <StartPage setStartPage={setStartPage} setStartTime={setStartTime} createCookie={createCookie} handleStart={handleStart} openLeaderboard={openLeader} />
          <Leaderboard leaderDisplay={leaderboardContainer} close={closeLeader} />
        </>
      : 
        <>
          <Navbar hours={hours} minutes={minutes} seconds={seconds}/>
          <div onClick={handleClick}>
            <img src='https://firebasestorage.googleapis.com/v0/b/whereswaldo-6ffb4.appspot.com/o/background.jpg?alt=media&token=c5e03fa3-301f-479b-897a-7e1282a395b3' alt='img background' ></img>
          </div>
          <Menu charItems={myCharacters} class={menuStatus} handleClick={handleMenuClick} left={posX} top={posY}/>
          <ClickStatus content={msgContent} className={msgStatus} top={window.screenY + window.pageYOffset - 250} left={(window.screenX / 2) + window.pageXOffset}/>
          <ModalWin display={modalDisplay} time={timer} playerName={playerName} handleChange={handleChange} onClick={sendPlayerData} />
        </>
      }
    </div>
  );
}

export default App;
