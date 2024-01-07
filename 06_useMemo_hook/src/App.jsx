import { useMemo, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//what is useMemo and why we use it ?
// perfomance  ko boost kar ta hai  hai useMemo ?
// how to use useMemo with example
// ek function lenega aur ek dependance lenga [] -> this is dependance

function App() {

  const [add, setAdd] = useState(0);
  const [minus, setMinus] = useState(100);

  const multiplication = useMemo(function multiply() {
    console.log("******")
    return add*10;
  },[add])

  return (
  <>
  <div className='App'>
    <h1>Learning useMemo</h1>
    {multiplication} <br />
    <button onClick={()=>setAdd(add + 1)}>Addition</button>
    <span>{add}</span><br />

     <button onClick={()=>setMinus(minus - 1)}>Substration</button>
     <span>{minus}</span>

  </div>
  
  </>
  )
}

export default App
