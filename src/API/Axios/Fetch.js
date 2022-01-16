import React, { Component } from 'react'
import axios from 'axios'
export default class Fetch extends Component {
  componentDidMount(){
    axios.get("https://reqres.in/api/users?page=2")
    .then((result)=>{
      console.log(result.data.data)
    })
  }
  render() {
    return (
      <div>
        <h1>Fetching data by using Axios</h1>
      </div>
    )
  }
}
