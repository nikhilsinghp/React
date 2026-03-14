import React from "react"      // for logic
import ReactDOM from "react-dom/client"     // real dom communication

let div = document.getElementById("root")

let header = React.createElement("h1",{},"i am header from react")  // createElement is a method present in React object and it will accept three arguments:1. elementName, 2.empty object(attribute object): to create attributes of element, 3. displayingContent
let anchor = React.createElement("a",{},"i am anchor tag")
let input = React.createElement("input",{type:"password",placeholder:"enter password"})

let header2 = <h1 id ="head1" title="csk">I am using header using jsx</h1>

ReactDOM.createRoot(div).render(header2)

