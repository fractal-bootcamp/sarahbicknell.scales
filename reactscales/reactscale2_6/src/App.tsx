import { useState } from 'react'
import './App.css'

function InputField({valueProp, onChangeProp: setInput}: {valueProp: string, onChangeProp: (value: string)=> void}){
  return(
    <>
      <input type="text" value={valueProp} onChange={(event)=> setInput(event.target.value)} /> 
    </>
  )
}

function NameDisplay({name}: {name: string}) {
  return(
    <div> {name} </div>
  )
}

function ErrorBar() {
return(
  <div style={{color: 'red'}}>U dumbo!! </div> 
)
}

function App() {
  const [input, setInput] = useState('')
  const [gotInput, getInput] = useState('')

  function doClick() { 
    getInput(input)
  }

  return (
    <>
      <h1> Props & Comps</h1>
      <InputField valueProp={input} onChangeProp={setInput}/> 
      <button onClick={doClick} > Submit </button>
      <NameDisplay name={gotInput} /> 
      {gotInput === "" && <ErrorBar /> }
    </>
  )
}

export default App
