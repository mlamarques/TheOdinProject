import React from 'react'
import '../styles/ModalWin.css'

function Modal(props) {
    return (
        <div className='you-won' style={{display: props.display}}>
            <h1>You Won!</h1>
        </div>
    )
}

export default Modal