import React from 'react'
import Die from './Die'
import Score from './Score'
import {nanoid} from "nanoid"
import Confetti from 'react-confetti'

export default function Main(props) {

    const [allDice, setAllDice] = React.useState(() => allNewDice())
    const [tenzies, setTenzies] = React.useState(false)
    const [rollsCount, setRollsCount] = React.useState(() => Number(0))
    const [time, setTime] = React.useState(0)
    const [bestScore, setBestScore] = React.useState(() => JSON.parse(localStorage.getItem("best-score")) || 0) //Lazy STATE

    React.useEffect(() => {
        // if ((allDice.reduce((total, item) => item.isHeld ? total + 1 : total, 0) === 10) &&
        //     allDice.every(element => element.value === allDice[0].value)) {
        //         setTenzies(true)  
        //         console.log("You won")
        // }
        const allHeld = allDice.every(element => element.isHeld)
        const allSameValue = allDice.every(element => element.value === allDice[0].value)
        if (allHeld && allSameValue) {
            checkBestScore()
            setTenzies(true)  
        }

    }, [allDice, checkBestScore])

    function allNewDice() {
        const newDice = []
        for (let i = 0; i < 10; i++) {
            newDice.push({
                id: nanoid(),
                value: Math.ceil(Math.random() * 6),
                isHeld: false
            })
        }
        return newDice
    }

    function handleRoll() {
        if (!tenzies) {
            setAllDice(oldDice => oldDice.map(die => {
                return die.isHeld ?
                    die : 
                    {
                        ...die, 
                        id: nanoid(),
                        value: Math.ceil(Math.random() * 6)
                    }
            }))
            
            setRollsCount(prev => prev + 1)
        } else {
            // checkBestScore()
            setTenzies(false)
            setTime(0)
            setAllDice(allNewDice())
            setRollsCount(0)
        }
    }

    function holdDice(id) {
        setAllDice(prevAllDice => prevAllDice.map(die => {
            return die.id === id ? 
                {...die, isHeld: !die.isHeld} :
                die
        }))
    }

    function checkBestScore() {
        if (JSON.parse(localStorage.getItem("best-score") > rollsCount)) {
            setBestScore(rollsCount)
            localStorage.setItem("best-score", JSON.stringify(bestScore))
        }
        
    }

    const diceElements = allDice.map((dice) => 
                            <Die 
                                key={dice.id}
                                value={dice.value}
                                isHeld={dice.isHeld}
                                onClick={() => holdDice(dice.id)}
                            />)
 
    return (
        <div className="main">
            {diceElements}
            <button className="roll-button" onClick={handleRoll}>{tenzies ? "New Game" : "Roll"}</button>
            <Score rolls={rollsCount} tenzies={tenzies} time={time} setTime={setTime} bestScore={bestScore} />
            {tenzies && <Confetti />}
        </div>
    )
}