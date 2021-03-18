import React from 'react'

const StartMenu = (props) => {
    return (
        <div>
            <div>
                <h1>Battleship</h1>
                <button onClick={props.handleStart}>START</button>
            </div>
        </div>
    )
}

export default StartMenu