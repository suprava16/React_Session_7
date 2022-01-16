import React, { Component } from 'react'
import Tree from "../ConditionalRendering/images/tree.jpg"
import "./style.css" 
const root={
  color:"red",
  fontSize:"40px",
  backgroundImage:`url(${Tree})`,
  height:"400px"
}
export default class Conditionalrendering extends Component {
  constructor(){
    super();
    this.state={
      show:"rima",
      text:"",
    }
  }
  handleChange=(event)=>{
    this.setState({
      text:event.target.value
    })
  }
  render() {
    
    return (
      <div>
      
      {this.state.show=="rima"?<h1>true statement</h1>:<h1>false statement</h1>}
      <input type="text" onChange={this.handleChange}/>
      <button disabled={this.state.text===""?true:false}>Add</button>

      {/* simple if statement */}
      {this.state.show==="rima" &&
      <h1>simple if statement</h1>}

      <h1 style={{color:"red" ,backgroundColor:"black",fontSize:50}}>Nextstacks</h1>
      <h2>Online Portal</h2>
      <p style={root}>Welcome everyone</p>
      {/* <img src={Tree} alt="images"/> */}
      </div>
    )
  }
}

// a=10
// b="10"
// a==b//true
// a===b//false
