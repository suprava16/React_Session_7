import React from 'react'

export default function FunctionalProps(props) {
  console.log(props)
  const{name,roll,email}=props
  return (
    <div>
      <h1>Functional props concept</h1>
      <h1>name:{name}</h1>
    </div>
  )
}
