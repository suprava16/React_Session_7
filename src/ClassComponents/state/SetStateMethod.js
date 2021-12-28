import React from "react";

export default class SetStateMethod extends React.Component{
  constructor(){
    super();
    this.state={
      name:"suprava",
      city:"bbsr"
    }
  }
  handleClick=()=>{
    this.setState({
      name:"supriya",
      city:"Delhi"
    })
  }
  render(){
    return(
      <div>
        <h1>set state method</h1>
        <h1>name:{this.state.name}</h1>
        <h1>city:{this.state.city}</h1>
        <button onClick={this.handleClick}>UPDATE</button>
        <button onClick={()=>{
          this.setState({
            name:"suprava",
            city:"bbsr"
          })
        }}>Reset</button>
      </div>
    )
  }
}