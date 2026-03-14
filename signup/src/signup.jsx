import { useState } from "react"


const Signup = ()=>{

    let[state,setState] = useState({
        userName:"",
        email:"",
        mobile:"",
        gender:"",
        skills:[]
    })

    function handleSubmit(e){
       e.preventDefault();

         setState({
            userName:"",
            email:"",
            mobile:"",
        })
        console.log(state);
        
    }

    function handleInput(e){

        if(e.target.type == "checkbox"){
            console.log("this is for checkbox");

           let index = state.skills.findIndex((ele)=>ele==e.target.value)
           console.log(index);

           if(index==-1){
            state.skills.push(e.target.value)
            setState(...state,skills:state.skills)
           }
           
            
           console.log(index);
           
        }
        else{
            console.log("this is for other input boxes");
            state.skills.splice(index,1)
            setState({...state ,[e.target.name]:e.target.value})
         }
}
    return (
       <div>
        <form action="" onSubmit={handleSubmit}>
            <input type="text" placeholder=" enter username" name="userName" value={state.userName} onInput={handleInput}/><br />
            <input type="email" placeholder="enter email" name="email" value={state.email} onInput={handleInput} /><br />
            <input type="tel" placeholder="enter mobile" name="mobile" value={state.mobile} onInput={handleInput}/> <br />
            <label htmlFor="">Gender</label>
            <input type="radio"  onInput={handleInput} name="male"/> <label>Male</label> 
            <input type="radio"  onInput={handleInput} name="female"/> <label>Female</label> <br />
            
            
            


            <label htmlFor="">Skills:</label>
            <input type="checkbox" onInput={handleInput}  name="skills" value="HTML"/> <label htmlFor="">HTML</label>
            <input type="checkbox"  onInput={handleInput} name="skills" value="CSS"/> <label htmlFor="">CSS</label>
            <input type="checkbox"  onInput={handleInput} name="skills" value="JS" /> <label htmlFor="">JS</label>
            <input type="checkbox"  onInput={handleInput} name="skills" value="React"/> <label htmlFor="">React</label> <br />
            <button>Submit</button> <br />

         </form>   

        </div>
    )
}

export default Signup