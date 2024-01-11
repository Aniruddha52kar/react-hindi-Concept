
import './App.css';
import Counter from './Counter';
import React from "react";


// what is reducer ?

// Reducer is a function accepts two paramentrer

// newState = reducer(currentState, action)


// what is useReducer ? => state ko manage kar ke deta hai aur ka kam hai manage kar na wo bhi cation ke kahene se 
// dispatch ka khel hai pura 

// 1. useReducer is a reactHook used for state management.
//2. Alternative of useState() hook/
//3. Preferable for complex state management logic.

//Syntax : const[state, dispatch] = useReduce(reducer.initialstate) => reducer (currentState, action)  



function App() {
  return (
   <div>
    <Counter />
   </div>
  );
}

export default App;
