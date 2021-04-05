import React from 'react'
import '../styles/ClickStatus.css'

export function ClickStatus(props) {
    return (
         <div className={props.className} style={{top: props.top, left: props.left}} >
             <div>{props.content}</div>
         </div>
    )
}