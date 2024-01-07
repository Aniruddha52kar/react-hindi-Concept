import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import{ useRef } from 'react';

// what is useRef? -dom manipulate
// How to use it ?
// Note - useRef mai is mai value nu;ll hoti hai
 
// useRef - The useRef Hook allows you to persist values between renders.
// It can be used to store a mutable value that does not cause a re-render when updated.
// It can be used to access a DOM element directly.
//

function App() {
  const refElement = useRef("");
  const [name, setName] = useState("Ani");
  console.log(refElement);

  // ek function banaye aapn ne 
  function Rest() {
    setName("")
    refElement.current.focus()
    // puri function me apply kar ti hai
    // aur ise focus nahi hata yane border bold thi wo nahi gai aapni i se  
  }
   
  function handleInput(){
    refElement.current.style.color="blue"
    refElement.current.value="bawa"
    // is se aaapn dekh sakh te hai colours ko 
  }



  return (
    // is se wo input me dom manipulation kar ne wale hai wo bhi input me 
    <>
    <h1>Learning useRef</h1>
    <input ref={refElement} type="text" value={name} onChange={(e)=>setName(e.target.value)}></input>
    <button onClick={Rest}>Rest</button>
    <button onClick={handleInput}>handle Input</button>
    </>
  )
}

export default App
