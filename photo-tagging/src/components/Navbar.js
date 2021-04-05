import React, { useState } from 'react'
import '../styles/Navbar.css'
import characters from '../characters.json'
import Stopwatch from './Stopwatch'
import useTimer from '../hooks/useTimer';
// import waldo from '../img/waldo.png'
// import wizard from '../img/wizard.png'
// import odlaw from '../img/odlaw.png'
// import wenda from '../img/wenda.png'

export function Navbar(props) {
    

    

    return (
         <div className='navbar'>
             <ul>
                <li style={{opacity: characters[0].opacity}}>
                    <img id='waldo-img' src='https://firebasestorage.googleapis.com/v0/b/whereswaldo-6ffb4.appspot.com/o/waldo.png?alt=media&token=4377e517-d538-4650-96ab-d60586a4577f' alt='waldo'></img>
                    <label htmlFor='waldo-img'>Waldo</label>
                </li>
                <li style={{opacity: characters[1].opacity}}>
                    <img id='wenda-img' src='https://firebasestorage.googleapis.com/v0/b/whereswaldo-6ffb4.appspot.com/o/wenda.png?alt=media&token=73635825-fc88-4ff4-adbe-c74ad35c8596' alt='wenda'></img>
                    <label htmlFor='wenda-img'>Wenda</label>
                </li>
                <li style={{opacity: characters[2].opacity}}>
                    <img id='odlaw-img' src='https://firebasestorage.googleapis.com/v0/b/whereswaldo-6ffb4.appspot.com/o/odlaw.png?alt=media&token=c09c9d48-e873-498b-8544-44616bb57ca2' alt='odlaw'></img>
                    <label htmlFor='odlaw-img'>Odlaw</label>
                </li>
                <li style={{opacity: characters[3].opacity}}>
                    <img id='wizard-img' src='https://firebasestorage.googleapis.com/v0/b/whereswaldo-6ffb4.appspot.com/o/wizard.png?alt=media&token=a77daf0e-aca1-4ccf-a85d-28d1291a6d1e' alt='wizard'></img>
                    <label htmlFor='wizard-img'>Wizard</label>
                </li>
             </ul>
             <Stopwatch hours={props.hours} minutes={props.minutes} seconds={props.seconds} />
         </div>
    )
}