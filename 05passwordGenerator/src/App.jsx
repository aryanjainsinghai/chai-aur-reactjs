import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState()

  // useRef hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*+-"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length)
      pass += str.charAt(char)
    }
    setPassword(pass)

  }, [length, numberAllowed, charAllowed, setPassword])

  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select()
    // passwordRef.current?.setSelectionRange(0,3)
    window.navigator.clipboard.writeText(password)
    alert("Password copied to clipboard!")

  }, [password])

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])

  return (
    <>
      <div className='w-full text-center mb-4 max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-green-500 bg-gray-800 p-10'>
        Password Generator
        <div className='flex m-5 shadow rounded-lg overlow-hidden mb-4'>
          <input type="text" value={password} className=' rounded-lg outline-none w-full py-1 px-3 p-4 bg-white' placeholder='password' readOnly ref={passwordRef}/>
          <button className='outline-none  bg-blue-700 text-white px-3 py-0.5 shrink-0 ' onClick={copyPasswordToClipboard}>copy</button>
        </div>
        <div className=' flex text-sm gap-x-2 '>
          <div className='flex items-center gap-x-1'>
            <input type="range" min={6} max={20} className='cursor-pointer' onChange={(e) => { setLength(e.target.value) }} />
            <label>Length :{length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
              defaultChecked={numberAllowed}
              id='numberInput'
              onChange={() => { setNumberAllowed((prev) => !prev) }} />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
              defaultChecked={charAllowed}
              id='charInput'
              onChange={() => { setCharAllowed((prev) => !prev) }} />
            <label htmlFor="charInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
