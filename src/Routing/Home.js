import React,{useState} from 'react';
import {useNavigate} from "react-router-dom"
function Home() {
  const[count,setCount]=useState(300)
  const navigate=useNavigate()
  return <div>
    <h1>Home Component</h1>
    <button onClick={()=>{navigate("/feedback",{state:{count}})}}>Move To Feedback</button>
  </div>;
}

export default Home;
