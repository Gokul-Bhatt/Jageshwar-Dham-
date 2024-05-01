import React, { useState } from 'react'
import "./Nav.css"
import {Link} from 'react-router-dom';
import menu from "../Aasets/menu.png";

const Nav = () => {
  const [showMenu, setShowMenu] = useState(false)
  return (
    <div className='navbar'>
      <h1>JAGESHWAR DHAM</h1>
      <div className="menubar">
        <Link className='menuitem' to="/" >Home</Link>
        <Link className='menuitem'to="/About" >About</Link>
        <Link className='menuitem' to="/puja" >Book Puja</Link>
        <Link className='menuitem' to="/Contact" >Contact</Link>
      </div>
      <img src={menu} alt="menu" className='mobmenu' onClick={()=>setShowMenu(!showMenu)}/>
      <div className="mobmenubar" style={ {display: showMenu? 'flex': 'none'}}>

       <Link className='mobmenuitem' spy={true} to="/" onClick={()=>setShowMenu(false)} >Home</Link>
       <Link className='mobmenuitem' spy={true} to="/About" onClick={()=>setShowMenu(false)} >About</Link>
       <Link className='mobmenuitem' spy={true}  to="/puja" onClick={()=>setShowMenu(false)} >Book Puja</Link>
       <Link className='mobmenuitem' spy={true} to="/Contact" onClick={()=>setShowMenu(false)} >Contact</Link>  
      </div>
    </div>
  )
}

export default Nav
