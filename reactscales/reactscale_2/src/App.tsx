import { useState } from 'react'
import './App.css'

function App() {
  const [input, setInput] = useState("")
  const[grabbedInput, grabInput] = useState("")

  return (
    <>
      <input type="text" value={input} id="inputId" onChange={(event) => setInput(event.target.value)}/> 
      <button onClick={() => grabInput(input)}> Submit </button> 
      {grabbedInput}
    </>
  )
}

export default App
