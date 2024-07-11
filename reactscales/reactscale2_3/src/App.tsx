import { useState } from 'react'
import './App.css'

interface poopProps {
  placeholderProp: string, 
  valueProp: string, 
  onChangeProp: (value: string) => void
}

function InputField(poop: poopProps) {
  const {placeholderProp: placeholder, valueProp: value, onChangeProp: setInputState} = poop
  return(
    <input 
      type="text" 
      placeholder={placeholder} 
      value={value} 
      onChange={(event) => setInputState(event.target.value)}/> 
  )
}

function DisplaySnapshot({ send }: {send: string}) {
  return(
    <>
      {send}
    </>
  )
}

function ErrorBar() {
  return( 
    <p style={{color: 'red'}}> You can't do that silly! </p>
  )
}

function App() {
  const [inputState, setInputState] = useState("")
  const [currentSnapshotofInputState, updateCurrentSnapshotofInputState] = useState("")
  const [error, setError] = useState(false)

  function clickHandler() {
    if (inputState === ""){
      setError(true)
      updateCurrentSnapshotofInputState("")
    } else {
      setError(false)
      updateCurrentSnapshotofInputState(inputState)
    }
  }

  return (
    <>
      <h1> Props and Controlled Components </h1>
      <InputField 
        placeholderProp="Holding place" 
        valueProp={inputState} 
        onChangeProp={setInputState} />
      <button onClick={clickHandler}> Snapshot </button> 
      <DisplaySnapshot send={currentSnapshotofInputState}/> 
      {error && <ErrorBar />}

    </>
  )
}

export default App
