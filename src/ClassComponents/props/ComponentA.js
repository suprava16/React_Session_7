import React from "react"
import ComponentB from "./ComponentB"
export default class ComponentA extends React.Component {
  render() {
    return (
      <div>
        <h1>Component A</h1>
        <ComponentB  email="suprava@gmail.com" name="suprava"/>
      </div>

    )
  }
}