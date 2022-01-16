import React, { Component } from 'react'

export default class FetchData extends Component {
  constructor() {
    super();
    this.state = {
      user: []
    }
  }
  componentDidMount() {
    fetch("https://reqres.in/api/users?page=2")
      .then((response) => (response.json()))
      .then((result) => {
        console.log(result.data)
        this.setState({
          user: result.data
        })
      })

  }
  render() {
    return (
      <div>
        <h1>Fetching data from API</h1>
        {this.state.user.map((u,i)=>{
          return(
            <div key={i}>
              <h1>email:{u.email} and lastname: {u.last_name}</h1>
              <img src={u.avatar} alt="images"/>
            </div>
          )
        })}
      </div>
    )
  }
}
