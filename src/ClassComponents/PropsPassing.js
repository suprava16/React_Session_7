import React from "react"
import SecondComponent from "./SecondComponent"
export default class PropsPassing extends React.Component {
  render() {
    console.log(this.props)
    return (
      <div>

        <h1>Passing props</h1>
        <h1>age={this.props.age}</h1>
        <h1>name={this.props.name}</h1>
        <SecondComponent data={this.props}/>
      </div>
    )
  }
}