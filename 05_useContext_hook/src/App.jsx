import { createContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ChildA from './ChildA'

// interview mai puch te hai useContext hook hot Q hai ye 
// what is useContext hook ?
//Ans => sab se best hai useContext jabhi aapne parents se data pass kar na hota hai humare hararigi lower level pr without sending  each and every component is liye useContext use kar te hai 
// create, provider, useContext
// how  to use it ?

const data = createContext();
const data1 = createContext();



function App() {
  const name = "Ani"
  const gender = "Male"
  
// same to same code hai waha par bhi yaha par bhi
  return (
    <>
    <data.Provider value={name}>
      <data1.Provider value = {gender}>
    <ChildA/>
      </data1.Provider>
    </data.Provider>
        
    </>
   
  )
}

export default App
export {data, data1}