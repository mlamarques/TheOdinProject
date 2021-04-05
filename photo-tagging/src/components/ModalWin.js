import React, { useState } from 'react'
import '../styles/ModalWin.css'

function Modal(props) {

    const [isSent, setisSent] = useState(false)

    // function handleChange(event) {
    //     console.log(event.currentTarget.value)
    //     setPlayerName(event.currentTarget.value)
    //     console.log(playerName)
    //   }
    function handleClick() {
        setisSent(true)
        props.onClick()
    }

    return (
        <div className='you-won' style={{display: props.display}}>
            {isSent === true ? 
            <div>
                <h1>You Won!</h1>
                <button >New Game</button>
            </div> 
            :
            <div>
                <h1>You Won!</h1>
                <h3>time: {Math.floor(props.time / 60)}:{props.time % 60}</h3>
                <h3>Save your score: <input type='text' placeholder='your name' onChange={props.handleChange} /> <button onClick={handleClick}>Save</button></h3>
            </div>
            }
            
        </div>
    )
}

export default Modal