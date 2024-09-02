import React from 'react'
import "./Footer.css"
import footer_logo from "../Assets/logo_big.png"
import InstaIcon from "../Assets/instagram_icon.png"
import PinterestIcon from "../Assets/pintester_icon.png"
import WhatsappIcon from "../Assets/whatsapp_icon.png"
const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={footer_logo} alt="" />
            <p>SHOOPER</p>
        </div>
        <ul className="footer-links">
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className="footer-social-icons">
            <div className="footer-icon-container">
                <img src={InstaIcon} alt="" />
            </div>
            <div className="footer-icon-container">
                <img src={PinterestIcon} alt="" />
            </div>
            <div className="footer-icon-container">
                <img src={WhatsappIcon} alt="" />
            </div>
        </div>
        <div className="footer-copyright">
            <hr />
            <p>Copyright @ 2023 - All Right Reserved</p>
        </div>
    </div>
  )
}

export default Footer
