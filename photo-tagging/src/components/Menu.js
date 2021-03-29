import React from 'react'
import '../styles/Menu.css'

const Menu = (props) => {
    return (
        <div className={`${props.class}`} style={{left: props.left, top: props.top}}>
            <h3 onClick={props.handleClick}>close me</h3>
        </div>
    )
}

export default Menu