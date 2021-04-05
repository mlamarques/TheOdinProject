import React from 'react'
import '../styles/Stopwatch.css'

function Stopwatch(props) {
    const hours = props.hours
    const minutes = props.minutes
    const seconds = props.seconds

    const [hourLeft, hourRight] = String(hours).padStart(2, '0').split('')
    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('')
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('')

    return (
        <div className='stopwatch'>
            <div>
                <span>{hourLeft}</span>
                <span>{hourRight}</span>
            </div>
            <span>:</span>
            <div>
                <span>{minuteLeft}</span>
                <span>{minuteRight}</span>
            </div>
            <span>:</span>
            <div>
                <span>{secondLeft}</span>
                <span>{secondRight}</span>
            </div>
        </div>
    )
}

export default Stopwatch
                