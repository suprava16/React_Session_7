import React, { Component } from 'react'

export default class ArrayObject extends Component {
  constructor(){
    super();
    this.state={
      user:[
        {
          name:"supriya",
          email:"supriya@gmail.com",
          age:20
        },
        {
          name:"Rahul",
          email:"Rahul@gmail.com",
          age:29
        },
        {
          name:"Rima",
          email:"Rima@gmail.com",
          age:22
        },
        {
          name:"Sony",
          email:"Sony@gmail.com",
          age:26
        },
        {
          name:"Gita",
          email:"gita@gmail.com",
          age:22
        },

      ]
    }
  }
  handlePush=()=>{
    var temp=this.state.user
    temp.push({
      name:"Laxman",
      email:"laxman@gmail.com",
      age:30
    })
    this.setState({
      user:temp
    })
  }
  handlePop=()=>{
    var temp=this.state.user
    temp.pop()
    this.setState({
      user:temp
    })
  }
  render() {
    return (
      <div>
      <h1>Accessing Array of Objects</h1>
        {this.state.user.map((item,i)=>{
          return(
            <div>
              {item.name}{" "}
              {item.email}{" "}
              {item.age}

            </div>
          )
        })}
        <button onClick={this.handlePush}>PUSH</button>
        <button onClick={this.handlePop}>POP</button>
        <input type="text"></input>
      </div>
    )
  }
}

