import { useState, useEffect, React } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// useEffect =  kyu use kar te hai jabhi function componets ke under side task kar na padh ta hai 
// aur task kya hota hai 
// 2 (aise task jese set interval, set time out,  ya to dom me deta ko fetch kar te hai  )


// 1. componentDidMount 
// 2. componentDidUpdate
// 3. componentDidUnmount combined

// there are tow common kind of side effect in React components


// jese hi page reload hota hai to direct wo run hota hai jitne bar bhu=i use kar te utne bare run hota hai wo useEffect

// koi bhi state run hoti hai to to wo bhinrun hota hai 

// * aur useffect do paramiter( ( ) ) use kar ta hai to use me empty aaray pass kar ta hai []



function App() {

  const [count, setCounter] = useState(0);
  const [data, setData] = useState("Ram");

  useEffect (()=>{
    console.log("component mounted")
  },[count]) // data state update hora hai to wo bhi update ho 



  function updateCount(){
    setCounter(count + 1)
  }

  function updateData(){
    setData ("Sita")
  }

  return (
  <>
  <h1>Learning useState </h1>
  <h1>btn clicked {count} times</h1>
  <button onClick={updateCount}>Click me </button>
  <button onClick={updateData}>Update Data</button>
  
  </>
  )
}

export default App
