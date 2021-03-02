import React from 'react'
import './Header.css'

export default function Header(props){
    return (
        <div className="header">
            <div className="info-text">
                <h2>Get points by clicking on an image but don't click on any more than once!</h2>
            </div>
            <div className="score">
                <h3>Score: {props.points}</h3>
                <h3>Best Score: {props.best}</h3>
            </div>
            
        </div>
    )
}