import "./mainpage.css"
import React ,{useState} from "react"


const MainPage = (props)=>{

    let[product,setProduct] = useState(props.data)
    console.log(props.data);

    function handleInput(eve){


        let filteredData = props.data.filter((ele,i)=>{

            if(ele.title.toLowerCase.includes(eve.target.value.toLowerCase)){
                return ele;
            }

        })
        setProduct(filteredData)
    }
    


    return (
        <div>
            <div>
                <input type="text" placeholder="enter the product name" onInput={handleInput}/>
                
            </div>
            <section className="main">
                {product.map((e,i)=>{

                    return <div key={e.id}>
                        <img src={e.image} alt="" />
                        <h3>{e.title}</h3>
                        <h3>Price: Rs. {e.price}</h3>
                        <h3>Rating: {e.rating.rate}</h3>
                        <button>add to cart</button>
                        
                    </div>

                })}
            </section>
        </div>
    )
}

export default MainPage