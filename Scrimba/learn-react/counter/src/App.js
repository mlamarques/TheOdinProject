import logo from './logo.svg';
import React, { useState, useEffect } from 'react'
import './App.css';
import randomcolor from "randomcolor"

function App() {

  const [ count, setCount ] = useState(0) //this is a destructed array. The useState hook takes 2 arguments, a value and a f(). It's conventional to use 'set' + the variable name as a function name.
  const [color, setColor] = useState("")

  function increment() {
    setCount(prevCount => prevCount + 1)
  }

  function decrement() {
      setCount(prevCount => prevCount - 1)
  }

  useEffect(() => { //useEffect is a hook. The second argument is the element you want to watch with the hook, so if it is an empty array [], it only runs useEffect() once after mount.
    setColor(randomcolor())
  }, [count])

  /* In this example, if we want useEffect to act as componentWillUnmount (clear up the setInterval), we create the setInterval as a const and return a function
  called clearInterval() with the const name as argument

  useEffect(() => {
        const intervalId = setInterval(() => {
            // setCount(prevCount => prevCount + 1)
        }, 1000)
        return () => clearInterval(intervalId)
    }, [])
  */

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div>
            <h1 style={{color: color}}>{count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
      </div>
      </header>
      
    </div>
  );
}

export default App;
