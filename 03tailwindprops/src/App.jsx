import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    user: "aryan",
    age: 21
  }

  let arr = [1, 2, 4]

  return (
    <>
      <h1 className='bg-green-400 p-5 mb-4'>Tailwind test</h1>
      <Card username="chaiaurcode" btntext="click me" />
      <Card username="aryansinghai" btntext="click me" />
    </>
  )
}

export default App
