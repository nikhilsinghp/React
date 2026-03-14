
import { createContext } from "react"

export let myContext1 = createContext()

import Child from "./Child"
const Parent = ()=>{
    let data1 = "gift from Parent"
    return (
        <div>
            Parent
            <myContext1.Provider value={data1}>
                <Child></Child>
            </myContext1.Provider>
        </div>
    )
}

export default Parent
