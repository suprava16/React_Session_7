import React,{useEffect,useState} from 'react'

function UseEffect_method() {
const[count,setCount]=useState(0)
useEffect(()=>{
  console.log("hello from useEffect")
},[])
  return (
    <div>
      <h1>USE EFFECT FUNCTION</h1>
      <button onClick={()=>{setCount(count+1)}}>count {count} times</button>
    </div>
  )
}

export default UseEffect_method
