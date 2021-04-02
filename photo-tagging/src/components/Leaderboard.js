import React from 'react'
import '../styles/Leaderboard.css'

const Leaderboard = (props) => {

    

    return (
        <div className="leaderboard-container" style={{display: props.leaderDisplay}}>
            <h3>LEADERS</h3>
            <span onClick={props.close}>X</span>
        </div>
    )
}

export default Leaderboard