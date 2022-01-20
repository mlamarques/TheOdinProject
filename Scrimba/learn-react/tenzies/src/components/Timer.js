import React from 'react'

export default function Timer(props) {

    React.useEffect(() => {
        if (props.time < 3600 && !props.tenzies) { //max time 1hr (60 * 60)
            setTimeout(() => {
                props.setTime(prevTime => prevTime + 1)
            }, 1000)
        }

    }, [props.time, props.tenzies])

    const minutes = Math.floor(props.time / 60)
    const seconds = props.time % 60

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('')
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('')

    return (
        <h3>{`${minuteLeft}`}{`${minuteRight}`} : {`${secondLeft}`}{`${secondRight}`}</h3>
    )
}