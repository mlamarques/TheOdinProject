import React from 'react'
import '../styles/MenuItem.css'

const MenuItem = (props) => {
    return (
        <div className="menu-item" onClick={props.handleClick}>
            <img src={props.iconSrc} alt={props.altimg}></img>
            <h3>{props.name}</h3>
        </div>
    )
}

export default MenuItem