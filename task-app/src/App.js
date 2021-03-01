import React, {useState} from 'react'
import Overview from './components/Overview'

function App() {
  const [taskArray, setTaskArray] = useState([])
  const [inputValue, setinputValue] = useState("")

  function handleSubmit(event) {
    event.preventDefault()
    //setTaskArray(oldArray => [...oldArray, inputValue])

    //odin answer
    setTaskArray(oldArray => oldArray.concat(inputValue))
    setinputValue("")
  }

  // function handleChange(event) {
  //   const {value} = event.target
  //   setinputValue(value)
  // }

  //odin answer
  //----------
  const handleChange = (e) => { 
    setinputValue(
      e.target.value,
    );
  };
  //----------
  return (
    <div>
      <Overview handleSubmit={handleSubmit} handleChange={handleChange} value={inputValue}/>
      <div>
        {taskArray.map((item, index) => <div>{index} {item}</div>)}
      </div>
    </div>
  )
}

export default App;
