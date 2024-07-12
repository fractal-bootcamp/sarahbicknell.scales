import { useState } from 'react'
import './App.css'

type InputFieldProps = {
  placeholder: string, 
  value: string, 
  onChange: (value: string) => void,
}

function InputField(props: InputFieldProps) {
  const{placeholder, value, onChange} = props
  return(
    <input type="text" placeholder={placeholder} value={value} onChange={(event)=>onChange(event.target.value)}/> 
  )
}

function NameDisplay({word}: {word: string}) {
  return (
    <p style={{color: word === "No Input Dummy"? 'red' : 'black'}}> {word}</p>
  )
}



function App() {
  const [input, setInput] = useState("")
  const [savedInput, getSavedInput] = useState("")

  return (
    <>
      <h1> Props & Comps </h1> 
      <InputField placeholder="Holding" value={input} onChange={setInput} /> 
      <button onClick={() => input? getSavedInput(input): getSavedInput("No Input Dummy")} > Save </button>
      <NameDisplay word={savedInput}/> 
    </>
  )
}

export default App
