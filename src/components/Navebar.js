import React, {useEffect, useState} from 'react';
import {Link, useLocation } from 'react-router-dom';
import "../styles/Navebar.css";
import {FaEllipsisV} from "react-icons/fa";

function Navebar() {
  const [expandNavbar, setExpandNavbar] = useState(false);
  const location = useLocation();

  useEffect (()=> {
    setExpandNavbar (false)
  }, [location])
  return (
    <div className='navbar' id={expandNavbar ? "open" : "close"}>
      <div className='toggleButton'>
        <button 
          onClick={()=> {
            setExpandNavbar ((prev)=> !prev);
          }}
        > 
          <FaEllipsisV/> 
        </button>
      </div>
      <div className='links'>
        <Link to="/"> Home </Link>
        <Link to="/Projects"> Projects </Link>
        <Link to="/Experince"> Experince </Link>
      </div>
    </div>
  )
}

export default Navebar