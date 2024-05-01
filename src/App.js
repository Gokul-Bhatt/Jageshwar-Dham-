import 'bulma/css/bulma.min.css';
import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Nav from "./components/Navbar/Nav.js"
import ImageSlide from "./components/Home/ImageSlide.js"
import Puja from './components/Puja/puja.js';
import About from './components/About/about.js';
import Contact from './components/Contact/contact.js';
import Home from './components/Home/Home.js';
import Register from './components/Registration/register.js';
import Admin from "./components/Layouts/AdminLayout.js";
import AdminUsers from './components/Layouts/AdminUsers.js';
import AdminContact from './components/Layouts/AdminContact.js';


const App = () => {
  return (
    <div>
        <BrowserRouter>
        <Nav/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/puja' element={<Puja/>} />
          <Route path='/puja/register' element={<Register/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/admin' element={<Admin/>}>
            <Route path='users' element={<AdminUsers/>} />
            <Route path='contact' element={<AdminContact/>} />
          </Route>

        </Routes>
        </BrowserRouter>

    </div>
  )
}

export default App
  