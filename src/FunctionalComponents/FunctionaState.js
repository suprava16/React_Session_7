import React, { useState } from 'react'

export default function FunctionaState() {
  const [username, setUsername] = useState("rima")
  const [email, setEmail] = useState("rima@gmail.com")
  const handleClick = () => {
    setUsername("supriya")
    setEmail("supriya@gmail.com")
  }

  // const handleReset=()=>{
  //   setUsername("rima")
  //   setEmail("rima@gmail.com")
  // }
  return (
    <div>
      <h1>State varibale in functional Component</h1>
      <h1>name:{username}</h1>
      <h1>email:{email}</h1>
      <button onClick={handleClick}>UPDATE</button>
      {/* <button onClick={handleReset}>RESET</button> */}
      <button onClick={() => {
        setUsername("rima")
        setEmail("rima@gmail.com")
      }}>
        RESET
      </button>
    </div>
  )
}
