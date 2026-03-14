 export default function ChildComp(props){

    console.log(props);
    
    
    return <div>

        i am from child component
        <ul>
        {props.myArr.map((ele,i)=>{
            
           return <li key={i}>{ele}</li>
            
            
        })}

        </ul>

        {props.obj.name}



    </div>
 }