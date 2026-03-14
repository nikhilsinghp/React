import { Component } from "react";
import Child from "./Child";

export default class Parent extends Component{
    
    render(){
        let data2= "virat"
        console.log(this.props);
        
        return <div>
            <h1>Hi I am parent.{this.props.data}</h1>
            <Child data2 = {data2}></Child>
        </div>
    }
}