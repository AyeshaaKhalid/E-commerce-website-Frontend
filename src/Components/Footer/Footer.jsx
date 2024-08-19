import React from 'react'
import './Footer.css';
import logo from '../Assets/Logo.png';
import insta_logo from '../Assets/insta_logo.jpeg';
import pinterest_logo from '../Assets/pinterest_logo.png';
import whatsapp_logo from '../Assets/whatsapp_logo.png';

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-logo'>
            <img src={logo} alt="" />

        </div>
        <ul className="footer-links">
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>

        <div className="footer-social-icon">
            <div className="footer-icons-container">
                <img src={insta_logo} alt="" />
            </div>
            <div className="footer-icons-container">
                <img src={pinterest_logo} alt="" />
            </div>
            <div className="footer-icons-container">
                <img src={whatsapp_logo} alt="" />
            </div>
        </div>
        <div className="footer-copyright">
            <hr/>
            <p>Copyright @ 2024 - All Rights Reserved.</p>
        </div>

    </div>
  )
}

export default Footer;