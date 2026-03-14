import { ChildComp } from "./Child";

export default function ParentComp(props){

    let player = ["Rohit","Virat","Shubman"]
    let obj = {Name:"Nikhil",email:"nikhil@gmail.com"}


    console.log(props);
    console.log(props.x);
    console.log(props.c);
    
    
    return <div>
        i am from parent component
        <h1>sum of {props.x} and {props.c} is {props.x+props.c}</h1>
        <ChildComp myArr={player} obj={obj}></ChildComp>
    </div>
}