import { useContext } from "react";
import { myContext } from "./App";
import "./All.css"

const All = () => {
    let Data = useContext(myContext)
    let cartItems = [...Data.cart]
    
    return <div className="all">
        {
            Data.data.map((e, i) => {
                return <div key={e.id}>
                    
                    <img src={e.images[0]} alt="" />
                    <h2>Title : {e.title}</h2>
                    <h2>Price : {e.price}</h2>
                    <button onClick={()=>{
                        cartItems.push(e)
                        console.log(cartItems);
                        dispatch({msg:"addCart",payload:cartItems})
                        
                    }}>Add To Cart</button>
                </div>
            })
        }
    </div>
}
export default All;