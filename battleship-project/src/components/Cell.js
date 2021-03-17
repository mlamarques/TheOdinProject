import React from 'react'

const Cell = (props) => {
    return (
        <td style={props.style} className='battlefield-cell' onClick={props.handleClick}>
            <div className='battlefield-cell-content'>
                {props.children}
            </div>
        </td>
    )
}

export default Cell