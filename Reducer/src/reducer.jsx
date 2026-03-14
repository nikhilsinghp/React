import { useReducer } from "react"

function abc(){

}

const Reducer = ()=>{
    let [state,setState]=useReducer(abc,{count:0})
    return (
        <div>
            <h1>{state.count}</h1>
            <button>Increase</button>
            <button>Decrease</button>
        </div>
    )
}

export default Reducer