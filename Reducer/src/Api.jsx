import { useEffect, useState } from "react"


const Api = ()=>{
    let [data,setData] = useState(null)
    let [loading,setLoading] = useState(true)
    let [error,setError] = useState(false)

    useEffect(()=>{

        async function abc() {

            let res = await fetch("https://fakestoreapi.com/products")
            console.log(res);
            if(res.status != 200){
                setError(true)
                setLoading(false)
                setError(true)
            }
            else {
                let data = await res.json()
                setData(data)
                setLoading(false)
                setError(false)

            }
            
            
        }
        abc()

    },[])

    if(loading){
        return <div>
            page is loading
        </div>
    }
    if(error){
        return <div>
            there is error
        </div>
    }
    if(data){
        return <div>
            actual data 
        </div>
    }
    
    return (
        <div>
            api
        </div>
    )

}
export default Api