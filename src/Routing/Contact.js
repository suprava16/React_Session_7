import React from 'react';
import {useParams} from "react-router-dom"

export default function Contact() {
  const parameters=useParams()
  console.log(parameters)

  return <div>
    <h1>Contact Component and your id is {parameters.id}</h1>
  </div>;
}
