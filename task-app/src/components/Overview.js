import React from 'react'

function Overview(props) {
    return (
        <div>
          <input type='text' onChange={props.handleChange} value={props.value} placeholder='Insert your task here'/>
          <button onClick={props.handleSubmit}>Submit</button>
        </div>
      )
}

export default Overview