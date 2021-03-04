import React from 'react'

const Cart = (props) => {
    return (
        <div>
            <h1>{props.count}</h1>
            <button onClick={props.handleClick}>Sum</button>
        </div>
    )
}

export default Cart