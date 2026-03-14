import React,{Fragment} from "react"
import ReactDOM from "react-dom/client"
import NavBar from "./Nav"
import FooterBar from "./Footer";
import { FormTag } from "./Form";
import NavBar2 from "./NavByClass";

// ReactDOM.createRoot(document.getElementById("root")).render(<Fragment>
//     <h1>I am header 1</h1>
//     <h2>I am header 2</h2>
// </Fragment>)

function anyName(a,b){
    return a+b;
}

function MyComponent(){
    return <div>
        <h1>My first component</h1>
    </div>
}

function YourComponent(){
    return <div>
        <h1>Your component</h1>
    </div>
}

function TheComponent(){
    return <div>
        <h1>The component</h1>
    </div>
}


ReactDOM.createRoot(document.getElementById("root")).render(<>
    {/* <h1>I am header 1</h1>
    <h2>I am header 2</h2> */}

    {anyName(10,5)}

    <MyComponent></MyComponent>
    <YourComponent></YourComponent>
    <TheComponent></TheComponent>

    <NavBar></NavBar>
    <FooterBar></FooterBar>
    <FormTag></FormTag>
    <NavBar2></NavBar2>


</>)



