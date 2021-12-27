import React from "react"
import ComponentD from "../props/ComponentD";
export default class StateVariable extends React.Component{
constructor(){
  super();
  this.state={
    name:"suprava",
    email:"suprava@gmail.com"
  }
}

  render(){
    const{name,email}=this.state
    return(
      <div>
        <h1>state variables</h1>
        {/* <h1>name:{this.state.name}</h1>
        <h1>email:{this.state.email}</h1> */}

        <h1>name:{name}</h1>
        <h1>email:{email}</h1>
        <ComponentD data={this.state} />
      </div>
    )
  }
} 


