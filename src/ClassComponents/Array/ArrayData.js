import React, { Component } from 'react'

export default class ArrayData extends Component {
  constructor(){
    super();
    this.state={
      data:["Ram",30,"gita",90,33,78,"sima"]
    }
  }
  render() {
    return (
      <div>
        <h1>Displaying Array values</h1>
        {this.state.data.map((item,i)=>{
          return(
           <div key={i}>
            {i}- {item}
           </div>
          )
        })}
      </div>
    )
  }
}
