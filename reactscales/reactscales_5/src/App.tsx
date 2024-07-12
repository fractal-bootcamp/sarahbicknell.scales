import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [input1, setInput1] = useState(0)
  const [input2, setInput2] = useState(0)
  const [gotInput, setGotInput] = useState(0)


  function handleChange(event) {
    if (event.target.name === "input1") {
      setInput1(event.target.value)
    } else if (event.target.name === "input2") {
      setInput2(event.target.value)
  }
}

  function handleAdd() {
    const firstNumber = Number(input1)
    const secondNumber = Number(input2)
    setGotInput(firstNumber + secondNumber)

  }

  function handleSubtract() {
    const firstNumber = Number(input1)
    const secondNumber = Number(input2)
    setGotInput(firstNumber - secondNumber)
  }

  return (
    <div>
      <input type='text' value={input1} name="input1" onChange={handleChange}/>
      <input type='text' value={input2} name="input2" onChange={handleChange} />
      <button onClick={handleAdd}> + </button>
      <button onClick={handleSubtract} > - </button>
      {gotInput}
    </div>
  )
}

export default App
