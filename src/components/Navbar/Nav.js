import React from 'react'
import "./Nav.css"
import {Link} from 'react-router-dom';

const nav = () => {
  return (
    <div className='navbar'>
      <h1>JAGESHWAR DHAM</h1>
      <div className="menubar">
        <Link className='menuitem' to="/" >Home</Link>
        <Link className='menuitem'to="/About" >About</Link>
        <Link className='menuitem' to="/puja" >Book Puja</Link>
        <Link className='menuitem' to="/Contact" >Contact</Link>
      </div>
    </div>
  )
}

export default nav
