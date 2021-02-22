import React from 'react'

function Overview(props) {
    return (
        <div>
          <input type='text' onChange={props.handleChange}/>
          <button onClick={props.handleSubmit}>Submit</button>
        </div>
      )
}

export default Overview