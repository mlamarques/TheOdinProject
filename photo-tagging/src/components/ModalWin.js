import React, { useState } from 'react'
import '../styles/ModalWin.css'

function Modal(props) {

    // const [playerName, setPlayerName] = useState('')

    // function handleChange(event) {
    //     console.log(event.currentTarget.value)
    //     setPlayerName(event.currentTarget.value)
    //     console.log(playerName)
    //   }

    return (
        <div className='you-won' style={{display: props.display}}>
            <div>
                <h1>You Won!</h1>
                <h3>time: {Math.floor(props.time / 60)}:{props.time % 60}</h3>
                <h3>Save your score: <input type='text' placeholder='your name' onChange={props.handleChange} /> <button onClick={props.onClick}>Save</button></h3>
            </div>
        </div>
    )
}

export default Modal