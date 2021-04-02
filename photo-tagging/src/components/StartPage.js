import React from 'react'
import '../styles/StartPage.css'

function StartPage({setStartPage, handleStart, ...props }) {

    const handleClick = () => {
        setStartPage(false)
        handleStart()
    }

    return (
        <div className='start-page'>
            <div className='title'>
                <h1>Can you find these characters?</h1>
            </div>
            <button className='leader-btn' onClick={props.openLeaderboard}>Leaderboard</button>
            <div className='figures'>
                <img src='https://firebasestorage.googleapis.com/v0/b/whereswaldo-6ffb4.appspot.com/o/waldo-body.png?alt=media&token=8e24cad8-246b-4bb4-9a22-8160ac1bb85f' alt='char1 full body'/>
                <img src='https://firebasestorage.googleapis.com/v0/b/whereswaldo-6ffb4.appspot.com/o/wenda-body.png?alt=media&token=bb2b9f18-b280-49cc-b79a-644b56d60ddc' alt='char2 full body'/>
                <img src='https://firebasestorage.googleapis.com/v0/b/whereswaldo-6ffb4.appspot.com/o/odlaw-body.png?alt=media&token=7b8e28af-1757-44fd-8a0b-f476062c105a' alt='char3 full body'/>
                <img src='https://firebasestorage.googleapis.com/v0/b/whereswaldo-6ffb4.appspot.com/o/wizard-body.png?alt=media&token=81ed382e-a496-46f2-823e-a3f43aebe2a4' alt='char4 full body'/>
            </div>
            <button className='start-btn' onClick={handleClick}>Start</button>
        </div>
    )
}

export default StartPage