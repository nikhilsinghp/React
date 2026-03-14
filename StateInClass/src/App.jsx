import { Component } from "react";
import Parent from "./Parent";

export default class App extends Component{


state={
  count:0
}
increment = ()=>{
  this.setState({
    count:this.state.count+1
  })
}
decrement = ()=>{
  this.setState({
    count:this.state.count-1
  })
}

addBy2 = ()=>{
  this.setState({
    count:this.state.count+2
  })
}

  render(){

    let data = "rohit sharma"


    return <div>
      <h1>{this.state.count}</h1>
      <button onClick={this.increment}>Increase</button>
      <button onClick={this.decrement}>Decrease</button>
      <button onClick={this.addBy2}>AddBy2</button>

      <Parent data={data}></Parent>

    </div>
    
  }
}

