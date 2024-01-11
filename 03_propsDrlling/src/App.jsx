import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ChildA from './childA'

// Concept of prop drilling ?
// how to avoid It ?
// ek dusre me transfer kar te hai is me us ko hi bol te hai prop drilling 
// parents to child then child and child its the chain of process


// ********* Prop Drilling ************ imp topic hai aur ye interview me puch te hi hai 


// concept of prop drilling ?
// How to avoid 

// Prop Drilling kya hota hai => ek data ko dusre data me call kar te hai.


// Parent => Child A => Child B => Child C 

// ek dusre ko pass kar na padh ta hai data ko
// tab jake last wale ko mil ta hai 



function App() {
  const name = "Ani_bawa"

  return (
    <>
    <ChildA name={name}/>

    </>
  )
}

export default App
