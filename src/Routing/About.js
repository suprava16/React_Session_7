import React from 'react';
import {useLocation} from "react-router-dom"
function About() {
  const location=useLocation()
  console.log(location)
  return <div>
    <h1>About Component and object value={location.state.name}</h1>
  </div>;
}

export default About;
