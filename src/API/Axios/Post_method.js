import axios from 'axios';
import React, { Component } from 'react'

export default class Post_api extends Component {
  constructor(){
    super();
    this.state={
      email:"",
      password:""
    }
  }
  handleEmail=(event)=>{
    this.setState({
      email:event.target.value
    })
  }
  handlePassword=(event)=>{
    this.setState({
      password:event.target.value
    })
  }
  handleClick=()=>{
   axios.post("https://reqres.in/api/login",this.state)
   .then((result)=>{
     console.log(result)
   })
  }
  render() {
    return (
      <div>
        <h1>Using Post Api</h1>
        <input type="text" onChange={this.handleEmail}/>
        <input type="password" onChange={this.handlePassword}/>
        <button onClick={this.handleClick}>LOGIN</button>
      </div>
    )
  }
}
