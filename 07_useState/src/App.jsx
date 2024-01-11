import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//   State in React

// 1 - the state is a built-in-React object that is used to contain data or information about the component.
// 2 - A State can be modified based on user action or network changes.
// 3 - Every time when the state of an object changes, React re-render the component to the browser 

// ****** Rule of Hooks ********

// 1 - Must be written inside function component.
// 2 - Must be import in component.
// 3 - Must be call at top level of component.
// 4 - cannot be conditional.

function App() {

  const [count, setCounter] = useState(0);

  function updateCount(){
    setCounter(count + 1)
  }

  return (
  <>
  <h1>Learning useState </h1>
  <h1>btn clicked {count} times</h1>
  <button onClick={updateCount}>Click me </button>
  
  </>
  )
}

export default App
