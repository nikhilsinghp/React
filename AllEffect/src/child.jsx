import { memo } from "react";

const Child = memo( ()=>{
    console.log("child");
    
    return (
        <div>child</div>
    )
})

export default Child