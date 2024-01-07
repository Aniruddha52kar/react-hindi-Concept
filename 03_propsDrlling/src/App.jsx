import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ChildA from './childA'

// Concept of prop drilling ?
// how to avoid It ?
// ek dusre me transfer kar te hai is me us ko hi bol te hai prop drilling 
// parents to child then child and child its the chain of process

function App() {
  const name = "Ani.bawa"

  return (
    <>
    <ChildA name={name}/>

    </>
  )
}

export default App
