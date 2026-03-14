import ThemeComp from "./Theme";

import {useState} from "react"

let App = ()=>{

  let [state,setState] = useState(0)
  console.log(state);
  

  function handleClickIncrease(){
    setState(++state);
  }
  function handleClickDecrease(){
    setState(--state)
  }
  
  return <div>
    <ThemeComp></ThemeComp>
  </div>
  // <div>
  //   <h1>{state}</h1>
  //   <button onClick={handleClickIncrease}>Increase</button>
  //   <button onClick={handleClickDecrease}>Decrease</button>
  // </div>
}


export default App