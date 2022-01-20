import React from 'react'
import reactLogo from '../images/reactjs-icon-small.png'

export default function Navbar() {
    return (
        <div className="navbar">
            <img src={reactLogo} alt="logo react" className="nav--icon"/>
            <h3 className="nav--logo_text">ReactFacts</h3>
            <h4 className="nav--title">React Course - Project 1</h4>
        </div>
    )
}