import React from 'react'
import Dots from './Dots'

export default function Die(props) {

    const styles = {
        backgroundColor: props.isHeld ? "#59E391" : "white",
        animation: props.isHeld && "0.5s ease-out 0s 1 normal none running type"
    }

    return (
        <div className="dice-face" style={styles} onClick={props.onClick} >
            {/* <h2 className="die-num">{props.value}</h2> */}
            <Dots value={props.value} />
        </div>
    )
}