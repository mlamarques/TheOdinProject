import React from 'react'
import './Card.css'

export default function Card(props){
    
    // const randomImgPath = imgs[randImg].path
    // const randomImgName = imgs[randImg].name

    return (
        <div className="card-container" onClick={props.handleClick}>
            <img src={props.path} alt='symbol'></img>
            <h4>{props.name}</h4>
        </div>
    )
}