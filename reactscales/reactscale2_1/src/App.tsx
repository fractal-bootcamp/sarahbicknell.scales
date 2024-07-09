import { useState } from 'react'

function InputField({placeholder, value, onChange, error} : {placeholder: string, value: string, error: string, onChange: (value: string) => void}) {
  
  return(
    <div>
      <input 
        type="text" 
        placeholder={placeholder} 
        value={value} 
        onChange={(event) => onChange(event.target.value)}/>
        {error && <p> Error: {error} </p>}
    </div>
  )
}

function DisplayInput({input}: {input: string}) {
  return (
    <>
    {input && <p> Output: {input} </p>} 
    </>
  )
}

function App() {
  const [input, setInput] = useState("")
  const [getInput, setGetInput] = useState("")
  const [error, setError] = useState("")

  function handleClick() {
    if (input.trim() === ''){
      setError("Input cannot be empty")
    } else{
    setGetInput(input)
    setError("")
    }
  }

  return (
    <>
      <h1> Props and Controlled Components </h1>
      <InputField 
        placeholder="hiii"
        value={input}
        onChange={setInput}
        error={error} />
      <button onClick={handleClick}> Submit </button> 
      <DisplayInput input={getInput} />
    </>
  )
}

export default App
