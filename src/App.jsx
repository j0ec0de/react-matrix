import React, { useState } from 'react'
import './App.css'

function App() {

  //can use hooks only inside a function
  // current state, update the current state

  const [count, setCount] = useState(0)

  function decrementCount() {
    setCount(previousCount => previousCount-1)
  }

  function incrementCount() {
    setCount(previousCount => previousCount+1)
  }


  return (
    <>
      <button onClick={decrementCount}>-</button>
      <span> {count} </span>
      <button onClick={incrementCount}>+</button>

    </>
  )
}

export default App
