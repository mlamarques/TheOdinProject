import React from 'react'
import Main from './components/Main'

export default function App() {
    
    return (
        <div className="app">
            <h1 className="title">Tenzies</h1>
            <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
            <Main />
        </div>
    )
}