import React from 'react'
import '../styles/Leaderboard.css'
import useDatabase from '../hooks/useDatabase'

const Leaderboard = (props) => {

    const { playersScore } = useDatabase('leaderboard')

    const players = playersScore.map(item => <div key={item.key}>
                                                <div className='player-score' >
                                                    {item.item.name}
                                                </div> 
                                                <div className='player-score'> {Math.floor(item.item.time / 60 / 60).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false})}
                                                    :
                                                    {Math.floor(item.item.time / 60 % 60).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false})}
                                                    :
                                                    {(item.item.time % 60).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false})}
                                                </div>
                                            </div>)

    return (
        <div className="leaderboard-container" style={{display: props.leaderDisplay}}>
            <h1>LEADERS</h1>
            <span onClick={props.close}>X</span>
            <div>
                {players}
            </div>
        </div>
    )
}

export default Leaderboard