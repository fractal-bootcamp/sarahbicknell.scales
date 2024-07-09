import { useState } from 'react'

interface InputProps {
  error: string, 
  placeholder: string, 
  value: string, 
  onChange: (value: string) => void
}

function InputField(props: InputProps) {
  const {error, placeholder, value, onChange} = props
  return(
    <>
    <input 
      type="text" 
      placeholder={placeholder} 
      value={value}
      onChange={(splipity) => onChange(splipity.target.value)} />
      <div>{error}</div>
    </>
  )
}

function ShowGuy({guy}: {guy: string}){
  return(
    <p> Yahhoo! {guy} </p>
  )
}

function App() {
  const [doop, setDoop] = useState("")
  const [seizedDoop, setSeizedDoop] = useState("")
  const [ohno, setOhNo] = useState("")

  const handleClick= () => {
    if (doop.trim() === "") {
      setOhNo("Oh no! You're r3t@rd3d!")
    } else {
      setSeizedDoop(doop)
      setOhNo("")
    }
  }

  return (
    <>
      <h1> Proppity Doppity Doo </h1>
      <InputField  error={ohno} value={doop} onChange={setDoop} placeholder="Enter your dipptiy doodah"/> 
      <button onClick={handleClick} > Shoop </button>
      {seizedDoop && <ShowGuy guy={seizedDoop} />}
    </>
  )
}

export default App
