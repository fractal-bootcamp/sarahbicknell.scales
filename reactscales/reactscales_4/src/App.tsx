import { useState } from 'react'
import './App.css'

function App() {
  const [input, setInput] = useState(0)
  const[grabInput, setGrabInput] = useState(0)

  function handleChange(event) {
    setInput(event.target.value)
  }

  function handleAdd() {
    let firstNum = Number(input)
    let secondNum = Number(grabInput)
    setGrabInput(firstNum + secondNum)
  }

  function handleSubtract() {
    let firstNum = Number(input)
    let secondNum = Number(grabInput)
    setGrabInput(firstNum - secondNum)
  }

  return (
    <div className="calc"> 
      <input type="text" value={input} onChange={handleChange}/> 
      <button onClick={handleAdd}> + </button>
      <button onClick={handleSubtract}> - </button>
      <button > * </button>
      <button > / </button> 
      {grabInput}
    </div> 
  )
}

export default App
