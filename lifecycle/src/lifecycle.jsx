import {Component} from "react"

class Life extends Component{

   

    render(){
       
        return <div>
            <h1>Life cycle</h1>
        </div>
    }

    componentDidMount(){
        console.log("I am from mounting");
        
    }
    componentDidUpdate(){
        console.log("I am from updating");
        
    }

    componentWillUnmount(){
        console.log("i am from  unmount ");
        
    }


}

export default Life