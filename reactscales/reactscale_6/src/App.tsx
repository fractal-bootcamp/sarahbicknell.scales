import { useState } from 'react'
import './App.css'

function App() {
  const [input, setInput] = useState("")
  const [grabbedInput, grabInput] = useState("")


  return (
    <div> 
      <input type="text" value={input} onChange={(event)=> setInput(event.target.value)}/>
      <button onClick={()=> grabInput(input)}> Clicky</button>
      <div style={{border: '1px solid black'}}> Output: {grabbedInput} </div>
    </div> 

  )
}

export default App
