import React, { Component } from 'react'

export default class AddData extends Component {
  constructor(){
    super();
    this.state={
      num1:0,
      num2:0,
      sum:0
    }
  }
  handleNum1=(event)=>{
    this.setState({
      num1:event.target.value
    })
  }
  handleNum2=(event)=>{
    this.setState({
      num2:event.target.value
    })
  }
  handleClick=()=>{
    this.setState({
      sum:parseInt(this.state.num1)+parseInt(this.state.num2)
    })
  }
  render() {
    return (
      <div>
        <input type="text" value={this.state.num1} onChange={this.handleNum1}/>
        <input type="text" value={this.state.num2} onChange={this.handleNum2}/>
        <button onClick={this.handleClick}>+</button>
        <h1>Result:{this.state.sum}</h1>
      </div>
    )
  }
}
