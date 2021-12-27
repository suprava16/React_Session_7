import React, { Component } from 'react'

export default class ComponentD extends Component {
  render() {
    const{name,email}=this.props.data
    return (
      <div>
        <h1>name:{name} & email:{email}</h1>
      </div>
    )
  }
}
