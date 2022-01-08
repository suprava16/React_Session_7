import React, { Component } from 'react'

export default class Conditionalrendering extends Component {
  constructor(){
    super();
    this.state={
      show:"rima"
    }
  }
  render() {
    return (
      <div>
      {this.state.show=="rima"?<h1>true statement</h1>:<h1>false statement</h1>}
      </div>
    )
  }
}
