import { useState } from 'react'
import './App.css'

type InputProps = {
  valueProp: string, 
  onChange: (value: string) => void, 

}

function InputField({valueProp, onChange: setInput}: InputProps) {
  return (
      <input type="text" value={valueProp} onChange={(event)=> setInput(event.target.value)}/> 
  )
}

function DisplayInput({value}: {value: string}) {
  return(
    <div> Input: {value} </div>
  )
}

function DisplayError({value}: {value: string}){
  return(
    <div style={{color: "red"}}> Error: {value} </div>
  )
}

function App() {
  const [input, setInput] = useState("")
  const [grabbedInput, setGrabbedInput] = useState("")
  const [error, setError] = useState("")

  function handleClick() {
    if (input === ""){
      setError("No characters!")
      setGrabbedInput("")
    } else{
      setError("")
      setGrabbedInput(input)
    }

  }

  return (
    <>
      <h1> Props & Comps </h1>
      <InputField valueProp={input} onChange={setInput} /> 
      <button onClick={handleClick}> Submit</button>
      {grabbedInput && <DisplayInput value={grabbedInput} /> }
      {error && <DisplayError value={error} /> }

    </>
  )
}

export default App
