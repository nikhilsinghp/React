import { useState,useEffect, useLayoutEffect, useInsertionEffect,useMemo } from 'react'
import Child from './child'

const App = ()=>{
  // useEffect(()=>{
  //   console.log("I am from useEffect");
    
  // },[])

  // useLayoutEffect(()=>{

  //   console.log("I am from layoutEffect");
    

  // },[])

  // useInsertionEffect(()=>{
  //   console.log("I am from insertion effect!!");
    
  // },[])
  <Child></Child>

  let[count,setCount] = useState(0)
  function handleClick(){
    setCount(count+1)
  }
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleClick}>Add</button>
    </div>
  )
}

export default App