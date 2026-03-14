import GrandChild from "./GrandChild"
import { useContext } from "react"
import { myContext1 } from "./Parent"

const Child = ()=>{
    let childGift = useContext(myContext1)
    return (
        <div>
            Child
            <GrandChild></GrandChild>
            <h1>{childGift}</h1>
        </div>
    )
}
export default Child