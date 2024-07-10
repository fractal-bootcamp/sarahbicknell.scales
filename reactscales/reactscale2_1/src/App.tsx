import { useState } from 'react'

type InputFieldProps = {
  placeholder: string,
  value: string,
  onChange: (value: string) => void,
  error: string
}

function InputField(props: InputFieldProps) {
  
  return(
    <div>
      <input 
        type="text" 
        placeholder={props.placeholder} 
        value={props.value} 
        onChange={(event) => props.onChange(event.target.value)}/>
        {props.error && <p> Error: {props.error} </p>}
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
