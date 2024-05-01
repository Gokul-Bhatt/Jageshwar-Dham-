import React from 'react'
import "./Home.css";
import { BsInstagram } from 'react-icons/bs'
import { BsFacebook } from 'react-icons/bs'
import { BsTwitterX } from 'react-icons/bs'
import { BsLinkedin } from 'react-icons/bs'

const Footer = () => {
  return (
    <div className='footer'>
    <div className='footerin'>
        <div className="footerleft">
                <h1>JAGESHWAR DHAM</h1>
                <p>All right reserved by @Jageshwar Dham</p>
        </div>
        <div className="footerlink">
            <h1>Follow us </h1>
            <a href="https://www.instagram.com/kewal_bhatt_11?igsh=MW9jbmEycmF0Z2p5Zg==">
            <BsInstagram className='icon' />
            </a>
            <a href="https://www.facebook.com/profile.php?id=100064619352837">
            <BsFacebook className='icon' />
            </a>
            <a href="https://x.com/Gokul15891775?t=ZNaAwE4oK75uw2EHMnnc6w&s=09">
            <BsTwitterX className='icon'/>
            </a>
            <a href="https://www.linkedin.com/in/gokul-bhatt-5b9a80222?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
            <BsLinkedin  className='icon'/>
            </a>
        </div>
      
    </div>
    </div>
  )
}

export default Footer
