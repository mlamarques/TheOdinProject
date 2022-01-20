import React from 'react'
import Timer from './Timer'

export default function Score(props) {
    return (
        <div className="score">
            <Timer tenzies={props.tenzies} time={props.time} setTime={props.setTime}/>
            <h3>Rolls: {props.rolls}</h3>
            <br />
            <h3>Best Score: {props.bestScore}</h3>

        </div>
    )
}