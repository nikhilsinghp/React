import { useState,createContext,useReducer } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Parent from './Parent'
import Reducer from './reducer'


 export let myContext = createContext()
const App = ()=>{

  // let[count,setState] = useState(0)

  // function handleIncrease(){
  //   setState(count+1);
  // }

  // function handleDecrease(){
  //   setState(count-1)
  }
  // let data = "gift from app"
  return (
    <div>
      App
      {/* <myContext.Provider value={data}>
        <Parent></Parent>

      </myContext.Provider> */}

      {/* <h1>{count}</h1>
      <button onClick={handleIncrease}>Add</button>
      <button onClick={handleDecrease}>Subtract</button> */}

      <Reducer></Reducer>

      <Api></Api>
      
    </div>
  )
}

export default App