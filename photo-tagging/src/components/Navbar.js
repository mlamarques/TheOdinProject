import React from 'react'
import '../styles/Navbar.css'
import characters from '../characters.json'
// import waldo from '../img/waldo.png'
// import wizard from '../img/wizard.png'
// import odlaw from '../img/odlaw.png'
// import wenda from '../img/wenda.png'

export function Navbar() {
    return (
         <div className='navbar'>
             <ul>
                <li style={{opacity: characters[0].opacity}}>
                    <img id='waldo-img' src={characters[0].icon} alt='waldo'></img>
                    <label htmlFor='waldo-img'>Waldo</label>
                </li>
                <li style={{opacity: characters[1].opacity}}>
                    <img id='wenda-img' src={characters[1].icon} alt='wenda'></img>
                    <label htmlFor='wenda-img'>Wenda</label>
                </li>
                <li style={{opacity: characters[2].opacity}}>
                    <img id='odlaw-img' src={characters[2].icon} alt='odlaw'></img>
                    <label htmlFor='odlaw-img'>Odlaw</label>
                </li>
                <li style={{opacity: characters[3].opacity}}>
                    <img id='wizard-img' src={characters[3].icon} alt='wizard'></img>
                    <label htmlFor='wizard-img'>Wizard</label>
                </li>
             </ul>
         </div>
    )
}