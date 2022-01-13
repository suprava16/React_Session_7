import React, { Component } from 'react'

export default class Child extends Component {
constructor(){
  super();
  this.state={
    data:""
  }
}
  componentDidMount(){
    console.log("hello from component did mount method");
  }

  componentDidUpdate(){
    console.log("hello from compoentdid update method");
  }

  componentWillUnmount(){
    console.log("hello from compoent will unmount method");
  }
handleChange=(event)=>{
  this.setState({
    data:event.target.value
  })
}
  render() {
    console.log("hello from render method")
    return (
      <div>
        <h1>Child Component</h1>
        <input type="text" onChange={this.handleChange}/>
      </div>
    )
  }
}

