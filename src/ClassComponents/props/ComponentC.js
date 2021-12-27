import React from "react"

export default class ComponentC extends React.Component{
  render(){
    // const{name,email}=this.props.data
    return(
      <div>
        <h1>Component C</h1>
        <h1>roll={this.props.roll}</h1>
        <h1>name:{this.props.data}</h1>
        <h1>email-{this.props.email}</h1>
        <h1>name:{this.props.value.name}</h1>

        {/* <h1>stateVariable name:{this.props.data.name} & {this.props.data.email}</h1> */}
      </div>
      
    )
  }
}