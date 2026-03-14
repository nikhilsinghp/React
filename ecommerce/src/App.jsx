import React,{useState,useEffect} from "react"
import MainPage from './MainPage'
import Spinner from './Spinner'

const App= ()=>{

  let [data,setData] = useState(null)
  useEffect(()=>{
    async function xyz() {
      let res = await fetch("https://fakestoreapi.com/products")
      let dataFromServer = await  res.json();

      setData(dataFromServer)
    }
    xyz()
  },[])
  return (
    <div>
      {data? <MainPage data={data}></MainPage> : <Spinner></Spinner>}
    </div>
  )



}

export default App