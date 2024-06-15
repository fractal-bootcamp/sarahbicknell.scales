import { useState } from 'react'
import './App.css'

function App() {
  const [input1, setInput1] = useState(0)
  const [input2, setInput2] = useState(0)
  const[grabInput, setGrabInput] = useState(0)

  function handleChange1(event) {
    setInput1(event.target.value)
  }

  function handleChange2(event) {
    setInput2(event.target.value)
  }

  function handleAdd() {
    let firstNum = Number(input1)
    let secondNum = Number(input2)
    setGrabInput(firstNum + secondNum)
  }

  function handleSubtract() {
    let firstNum = Number(input1)
    let secondNum = Number(input2)
    setGrabInput(firstNum - secondNum)
  }

  return (
    <div className="calc"> 
      <input type="text" value={input1} onChange={handleChange1}/> 
      <input type="text" value={input2} onChange={handleChange2} />
      <button onClick={handleAdd}> + </button>
      <button onClick={handleSubtract}> - </button>
      {grabInput}
    </div> 
  )
}

export default App
