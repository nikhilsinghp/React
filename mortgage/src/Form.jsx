 import "./form.css"
 import React,{useState} from 'react'


 
 
 const Form = ()=>{

    let  [data,setData] = useState({
        amount:"",
        years:"",
        rate:"",
        display:""
    })

    function handleInput(e){

        console.log(e.target.value);

        setData({...data,[e.target.name]:e.target.value})
        

    }

    function handleSubmit(e){


        e.preventDefault();

        let si = (data.amount*data.years*data.rate)/100;
        console.log(si);
        
        setData({amount:"",rate:"",display:"",years:""})

    }

    return (
    <div className="left">

        <section>

            
                <div className="same"><h3>Mortgage Calculator</h3>
                <span>clear all</span> </div>

                <form action="" onInput={handleSubmit}></form>
                <div>
                    <label htmlFor="">mortage amount</label>
                    <input type="number" name="amount" value="{data.years}" onInput={handleInput} placeholder="enter the mortgage amount" />


                </div>
                <div className="same">
                    <div >
                        <label htmlFor="">Mortgage Term</label>
                        <input type="number" name="years" value={data.years} onInput={handleInput}/>
                    </div>
                    <div>
                        <label htmlFor="">Interest Rate</label>
                        <input type="number" name="rate" value={data.rate} onInput={handleInput}/>
                    </div>
                    
                </div>
                <div>
                    <label htmlFor="">Mortgage Type</label>
                    <div>
                        <input type="radio" name="display" value="total" onInput={handleInput}/>
                        <label htmlFor="">Repayment</label>
                    </div>
                    <div>
                        <input type="radio" name="display" value="interest" onInput={handleInput}/>
                        <label htmlFor="">Interest Only</label>
                    </div>
                </div>

                <div>
                    <button>Calculate Repayments</button>
                </div>
            

        </section>

    </div>)

}
export default Form
