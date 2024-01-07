import { useCallback, useState } from 'react'
import './App.css'
import ChildA from './Child';


  // what is useCallback and why we use it ?
  //how to use useCallback with example ?

  // Note - useMemo/useCallback same hote hai
  //  1. useCallback - the useCallback and useMemo Hooks are similar.the main difference is that useMemo returns
  // a memoized value and useCallback returns a memorized function. you can learn more about useMemo inn the useMemo chapter


function App() {
 const [add, setAdd]= useState(0);
 // ek vairable banate hai
 const [count, setCount] = useState(0);
 const Learning = useCallback( ()=>{
  //some opration
 },[count]) // sirf ek bar render ho 


  

  return (
   <>
   <div className='App'>
    <h1>Learning useCallback</h1>
    <ChildA Learning={Learning} count = {count}/>
    <h1>{add}</h1>
    <button onClick={()=>setAdd(add + 1)}> Addition</button>
    <h1>{count}</h1>
    <button onClick={()=>setCount(count + 2)}>Count</button>
   </div>

   </>
  );
}

export default App
