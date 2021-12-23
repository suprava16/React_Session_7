import React from "react"
import ComponentC from "./ComponentC"
export default class ComponentB extends React.Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <h1>Component B</h1>
        <h1>name:{this.props.name}</h1>

        <ComponentC roll={100} data={this.props.name} email={this.props.email} value={this.props}/>
      </div>

    )
  }
}
// props drilling