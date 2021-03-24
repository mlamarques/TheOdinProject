import React from 'react'

const StartMenu = (props) => {
    return (
        <div className='start-menu'>
            <div>
                <h1>Battleship</h1>
                <button onClick={props.handleStart}>START</button>
            </div>
        </div>
    )
}

export default StartMenu