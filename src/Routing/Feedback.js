import React from 'react';
import {useLocation} from "react-router-dom"
function Feedback() {
  const location=useLocation()
  console.log(location)
  return (<div>
    <h1>Feedback Component</h1>
  </div>)
}

export default Feedback;
