import React from "react"
import ReactDOM from "react-dom/client"


let ipl = ["mi","csk","srh","rcb"]
let actor = ["vicky kaushal","akshay kumar","salman khan","shahrukh khan"]
let actress = ["depika padukone","katrina kaif","alia bhatt","rashmika"]
let storage = [
    {productName:"samosa",price:20,rating:4.9},
    {productName:"chat",price:25,rating:4.8},
    {productName:"paavBhaji",price:40,rating:5.0},
    {productName:"paanipuri",price:10,rating:3.8},
    {productName:"Chaumin",price:50,rating:4.7}
]

ReactDOM.createRoot(document.getElementById("root")).render(<div>
    <h1>IPL Teams:</h1>
    <ul>
        {ipl.map((e,i,arr)=>{
            return <li key={i}>{e}</li>
        })}
    </ul>

    <h1>Actors:</h1>

    <ul>
        {actor.map((e,i,arr)=>{
            return <li key = {i}>{e}</li>
        })}
    </ul>

    <h1>Actress:</h1>

    <ul>
        {actress.map((e,i,arr)=>{     //e ==> element, i ==> index, arr==> value
            return <li key={i}>{e}</li>
        })}

    </ul>

    {storage.map((e,arr,i)=>{
        return <div key={i}>
            <h3>Dish Name:{e.productName}</h3>
            <h4>Price:{e.price}</h4>
            <h4>Rating:{e.rating}</h4>
            <button>Add To Cart</button>

        </div>
    })}
</div>)