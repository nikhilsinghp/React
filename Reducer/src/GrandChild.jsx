import React,{useContext} from "react"
import { myContext } from "./App"

const GrandChild = ()=>{

    let myGift = useContext(myContext)
    return (
        <div>
            grandchild
            <h1>{myGift}</h1>
        </div>
    )
}
export default GrandChild