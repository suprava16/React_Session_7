import React,{useState} from 'react';
import {Link,Outlet} from "react-router-dom"
function Navbar() {
const[count,setCount]=useState(200)
  return (<div>
      <Link to="/home" >Home</Link> |
      <Link to="/about" state={{name:"ReactJs"}}>About</Link> | {/* Passing an Object*/}
      <Link to="/contact/123">Contact</Link> 
       {/* <Link to={"/contact/"+count}>Contact</Link>  Dynamic routing */}
       <Outlet/> {/*used to render nested route */}
  </div>)
}

export default Navbar;
