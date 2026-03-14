import React from "react"
import ReactDOM,{createRoot} from "react-dom/client"


let a = 10;
let b = 20;

let str = "abc"

let ipl = ["csk","mi","rcb","srh"]


createRoot(document.getElementById("root")).render(<div>
    <h1>sum of {a} and {b} is {a+b}</h1>
    <h1>subtract of {a} and {b} is {a-b}</h1>
    <h1>multiplication of {a} and {b} is {a*b}</h1>
    <h1>Division of {a} and {b} is {a/b}</h1>
    <h2>{a%2==0 ? "even number" : "odd number"}</h2>
    <h2>{a%2==0 && "this will displayed if it is even only"}</h2>
    <h2>{a%2==0 || "this will displayed if it is even or odd"}</h2>

    <h1>{str.length < 5 ? <a href="#">this is anchor tag</a> : <span>this is span tag</span>}</h1>

    <ul>
        {ipl.map((e)=>{
            return <li>{e}</li>
        })}
    </ul>

</div>)



