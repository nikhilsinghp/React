import { useState } from "react"
import "./theme.css"

const ThemeComp= ()=>{
    let [color,setColor] = useState("light")

    function handleClick(){
        if(color == "light"){
            setColor("dark")
        }
        else{
            setColor("light")
        }
    }
    return <div className={`cont ${color}`}>

        <h1>{color}</h1>
        <button onClick={handleClick}>change Theme</button>


    </div>
}

export default ThemeComp