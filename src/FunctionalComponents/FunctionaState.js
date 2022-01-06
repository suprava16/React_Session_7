import React,{useState} from 'react'

export default function FunctionaState() {
const[username,setUsername]=useState("rima")
const[email,setEmail]=useState("rima@gmail.com")
  return (
    <div>
      <h1>State varibale in functional Component</h1>
      <h1>name:{username}</h1>
      <h1>email:{email}</h1>
    </div>
  )
}
