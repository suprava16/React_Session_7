import React, { useState } from 'react'

export default function ChangeEvent() {
  const [user, setUser] = useState({ email: "", password: "" })

  const handleEmail=(event)=>{
    setUser({
      ...user,
      email:event.target.value
    })
  }

  const handlePassword=(event)=>{
    setUser({
      ...user,
      password:event.target.value
    })
  }
  return (
    <div>
      <input type="text" placeholder='enter email' onChange={handleEmail}/>
      <input type="text" placeholder='enter email' onChange={handlePassword}/>
      <h1>email:{user.email}</h1>
      <h1>password:{user.password}</h1>
    </div>
  )
}
