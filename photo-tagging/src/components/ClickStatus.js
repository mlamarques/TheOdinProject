import React from 'react'
import '../styles/ClickStatus.css'

export function ClickStatus(props) {
    return (
         <div className={props.className} style={{top: props.top, left: props.left}} >
             <h1>Click Status</h1>
         </div>
    )
}