import { useState } from 'react'
import './App.css'

function App() {
  const [inputValue, setInputValue] = useState("")
  const [outputValue, setOutputValue] = useState("")

  return (
    <div>
      <input type="text" value={inputValue} onChange={(event) => setInputValue(event.target.value)} />
      <button type="submit" onClick={() => setOutputValue(inputValue)}> Submit </button> 
      {outputValue}
    </div>
  )
}

export default App
