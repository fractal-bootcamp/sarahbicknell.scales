import { useState } from 'react'
import './App.css'

function InputField({value: input, onChange: setInput}: {value: string, onChange: (value: string)=> void}){
  return(
    <input type="text" value={input} onChange={(event)=> setInput(event.target.value)} /> 
  )
}

function ShowText({text: getInput}: {text: string}){
  return(
    <div> 
      {getInput}
    </div>
  )
}

function ShowError({error}: {error: string}){
  return(
    <div style={{color: 'red'}}> 
      {error}
    </div>
  )

}

function App() {
  const [input, setInput] = useState("")
  const [getInput, setGetInput] = useState("")
  const [error, setError] = useState("")

  function handle(){
    if(input === ""){
      setError("No text entered!")
      setGetInput("")
    } else{
      setError("")
      setGetInput(input)
    }
  }

  return (
    <>
    <h1>Props&Comps</h1>
    <InputField value={input} onChange={setInput} /> 
    <button onClick={handle} > Clicky </button>
    {getInput && <ShowText text={getInput} /> }
    {error && <ShowError error={error} /> } 
    </>
  )
}

export default App
