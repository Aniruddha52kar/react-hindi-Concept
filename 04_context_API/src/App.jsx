import { createContext } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ChildA from './ChildA'

// what is Context API ?
// Create , Provider, Consumer => ye three term hai 
//how to use it ?
// is context api also problematic ?
// => useContext -hook  - aagar aap acche ho is me to aap ye bhi use kar sakh te hai to use context hook 
 
const data = createContext(); // const ke variable ka nam kuch bhi likh sakh te hai
const data1 = createContext();
function App() {

  const name = "Ani"
  const lastName = "bawa"

  return (
  <>
  <data.Provider value = {name}>
    <data1.Provider value = {lastName}>
    <ChildA />
    </data1.Provider>
  </data.Provider>

  </>
  );
}

export default App;
export {data, data1};


// contex app ke is se direct call de sakh te hai export kar ke direct jata wo
