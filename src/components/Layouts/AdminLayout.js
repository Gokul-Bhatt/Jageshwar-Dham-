import React from 'react'
import "./AdminLayout.css"
import {Link, Outlet} from "react-router-dom"
import { FaHome, FaUser } from 'react-icons/fa'
import { FaMessage } from 'react-icons/fa6'
// import {useAuth } from "../Store/auth";

const AdminLayout = () => {
  // const user = useAuth();
  // console.log(" admin layout data",user);
  return (
    <>
   <header>
    <div className="container">
      <nav>
        <ul className='menu'>
          <Link to="/admin/users"><FaUser/>users</Link>
          <Link to="/admin/contact"><FaMessage/>contact</Link>
          <Link to="/admin"><FaHome/>home</Link>
        </ul>
      </nav>
    </div>
   </header>
   <Outlet/>
   </>
  )
}

export default AdminLayout
