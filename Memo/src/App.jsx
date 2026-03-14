import { useState, useMemo,useCallback,createContext } from 'react'
import Child from "./child"
import './App.css'
import Parent from "./Parent"


let myContext = createContext()

const App = ()=>{
  let [count,setCount] = useState(0);

  let gift = "I am from gift"

  // function handleInput(){
  //   setCount(count+1);
  // }

  // let handleInput = useCallback(function handleInput(){
  //   setCount(count+1)
  // })
  // console.log("i am from app");

  // function add(a,b){
  //   console.log("I am from add");
  //   return a+b;
    
  // }

  // let add = useCallback(function(a,b){
  //   console.log("I am from add");
  //   return add;
    
  // })

  // let addResult = useMemo(()=>{
  //   return add(5,4)
  // },[])
  
  return (
    <div>
      {/* <h1>{count}</h1>
      <button onClick={handleInput}>Add</button> */}
      {/* <Child count={count}></Child> */}

      <myContext.Provider value={gift}>
         <Parent ></Parent>
      </myContext.Provider>

    

     
    </div>
  )
}
export default App