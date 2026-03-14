import React from "react"   // react logics
import ReactDOM from "react-dom/client"   // communication with real dom 


// Create only one element

//ReactDOM.createRoot(document.getElementById("root")).render(<h1>i am from react</h1>)

/* Create multiple element*/ 

ReactDOM.createRoot(document.getElementById("root")).render(<div>
    <h1>I am header 1</h1>
    <h2>I am header2</h2>
    <label htmlFor="">userName</label>
    <input type="text" className="abc"></input>
    <input type="text" />
    
</div>)