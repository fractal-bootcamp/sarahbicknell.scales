import { useState } from 'react'
import './App.css'

function App() {
  const [inputValue, setInputValue] = useState('')
  const [getInputValue, setGetInputValue] = useState('')

  return (
    <div> 
      <input type="text" value={inputValue} onChange={(event)=> setInputValue(event.target.value)} /> 
      <button onClick={()=> setGetInputValue(inputValue)}> submit </button>
      {getInputValue}
    </div>

  )
}

export default App
