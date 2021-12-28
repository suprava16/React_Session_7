import React, { Component } from 'react'

export default class OnChangeEvent extends Component {
  constructor(){
    super();
    this.state={
      name:"",
      email:"",
      password:""
    }
  }
  handleName=(event)=>{
    this.setState({
      name: event.target.value
    })
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
  render() {
    return (
      <div>
        <input type="text" placeholder='enter name' onChange={this.handleName}/>
        <input type="email" placeholder='enter email' onChange={this.handleEmail}/>
        <input type="password" placeholder='enter password' onChange={this.handlePassword}/>
     
     <h1>name:{this.state.name}</h1>
     <h1>email:{this.state.email}</h1>
     <h1>password:{this.state.password}</h1>
      </div>
    )
  }
}
