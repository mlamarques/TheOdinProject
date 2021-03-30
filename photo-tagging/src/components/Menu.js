import React from 'react'
import MenuItem from './MenuItem'
import '../styles/Menu.css'

const Menu = (props) => {

    const allItems = props.charItems.map(item => item.isFound === false ? <MenuItem
                                                                            key={item.id}
                                                                            handleClick={props.handleClick}
                                                                            iconSrc={item.icon}
                                                                            name={item.name}
                                                                        />
                                                                        : null)
    return (
        // <div className={`${props.class}`} style={{left: props.left, top: props.top}}>
        //     <h3 onClick={props.handleClick}>close me</h3>
        // </div>
        <div className={`${props.class}`} style={{left: props.left, top: props.top}}>
            {allItems}
        </div>

    )
}

export default Menu