import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(5)
  // let counter = 5;

  const addVal = () => {
    if (counter < 20) {
      counter = counter + 1;
      setCounter(counter)
      console.log(counter);
    }
  }

  const removeVal = () => {
    // counter--;
    if (counter > 0) {
      counter = counter - 1;
      setCounter(counter)
    }
  }

  return (
    <>
      <h1>chai aur react</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addVal}>Add value {counter} </button>
      <br /> <br />
      <button onClick={removeVal}>Remove value {counter}</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
