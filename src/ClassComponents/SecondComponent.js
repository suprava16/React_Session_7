import React from "react"

export default class SecondComponent extends React.Component{
  render(){
    console.log(this.props)
    return(
      <div>
        <h1>Second component</h1>
        <h1>name={this.props.data.name}</h1>
      </div>
    )
  }
}