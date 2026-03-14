import { Component } from "react";

export default class Child extends Component{
    render(){
        console.log(this.props);
        
        return <div>
            <h1>I am from child.{this.props.data2}</h1>
        </div>
    }
}