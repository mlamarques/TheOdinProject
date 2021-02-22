import React, {useState} from 'react'
import Overview from './components/Overview'

function App() {
  const [taskArray, setTaskArray] = useState([])
  const [inputValue, setinputValue] = useState("")

  function handleSubmit(event) {
    event.preventDefault()
    setTaskArray(oldArray => [...oldArray, inputValue])
  }

  function handleChange(event) {
    const {value} = event.target
    setinputValue(value)
  }

  return (
    <div>
      <Overview handleSubmit={handleSubmit} handleChange={handleChange}/>
      <div>
        {taskArray.map(item => <div>{item}</div>)}
      </div>
    </div>
  )
}

export default App;
