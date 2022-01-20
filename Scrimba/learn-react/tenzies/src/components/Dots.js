import React from 'react'

export default function Dots(props) {
    const diceStyles = [ "one", "two", "three", "four", "five", "six"]

    const dieNumber = props.value

    const diceOptionOne = [2, 3, 4, 5, 6]
    const diceOptionTwo = [4, 5, 6]
    const diceOptionThree = [1, 3, 5]

    return (
        <div className="dots-container">
            <div className="quadrant">
                {diceOptionOne.includes(dieNumber) && <div className={`dot ${diceStyles[dieNumber - 1]}`}></div>}
            </div>
            <div className="quadrant">
                {/* <div className="dot"></div> */}
            </div> 
            <div className="quadrant">
                {diceOptionTwo.includes(dieNumber) && <div className={`dot ${diceStyles[dieNumber - 1]}`}></div>}
            </div> 
            <div className="quadrant">
                {dieNumber === 6 && <div className="dot six"></div>}
            </div> 
            <div className="quadrant">
                {diceOptionThree.includes(dieNumber) && <div className={`dot ${diceStyles[dieNumber - 1]}`}></div>}
            </div> 
            <div className="quadrant">
                {dieNumber === 6 && <div className="dot six"></div>}
            </div> 
            <div className="quadrant">
                {diceOptionTwo.includes(dieNumber) && <div className={`dot ${diceStyles[dieNumber - 1]}`}></div>}
            </div> 
            <div className="quadrant">
                {/* <div className="dot"></div> */}
            </div> 
            <div className="quadrant">
                {diceOptionOne.includes(dieNumber) && <div className={`dot ${diceStyles[dieNumber - 1]}`}></div>}
            </div> 
        </div> 
    )
}