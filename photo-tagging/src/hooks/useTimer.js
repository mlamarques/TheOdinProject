import { useState, useRef } from 'react';

const useTimer = (initialState = 0) => {
    const [timer, setTimer] = useState(initialState)
    const [isActive, setIsActive] = useState(false)
    const countRef = useRef(null)
  
    const handleStart = () => {
      setIsActive(true)
      countRef.current = setInterval(() => {
        setTimer((timer) => timer + 1)
      }, 1000)
    }

    const handleReset = () => {
      clearInterval(countRef.current)
      setIsActive(false)
      setIsPaused(false)
      setTimer(0)
    }
  
    return { timer, isActive, handleStart, handleReset }
  }
  
  export default useTimer