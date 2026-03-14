import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css" 

ReactDOM.createRoot(document.getElementById("root")).render(<div>
    <form action="">
        <label htmlFor="">Enter userName</label>
        <input type="text" placeholder="enter username" />
        <label>Enter password</label>
        <input type="password" placeholder="enter password"/>
        <button>login</button>
    </form>
</div>)

