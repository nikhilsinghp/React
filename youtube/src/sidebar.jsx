import React from "react"
const SideBar = (props)=>{
    console.log(props);

    function handleClick(){
        props.setState(props.index)
    }
    
    return <div>

        <img src={props.element.imgURL} alt="" onClick={handleClick}/>

    </div>
}
export default SideBar