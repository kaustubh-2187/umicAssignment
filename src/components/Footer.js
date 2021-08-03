import React from 'react'
import { FaFacebookF, FaLinkedin, FaInstagram, FaYoutube, FaMapMarkerAlt } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi"

import "./Footer.css";

const Footer = () => {
    return (
        <div className="footer">

            <div className="footer-image col">
                <div>
                    <img className="logo" src="https://www.umiciitb.com/static/img/icon.png" alt="logo" />
                </div>
            </div>

            <div className="footer-info col">
                <div className="element footer-info-address">
                    <a href="https://www.google.com/maps/search/F3+Shed,+near+BETiC+Lab+%2F+OrthoCAD,+IIT+Area,+Powai,+Mumbai,+Maharashtra+400076/@19.1340382,72.9165208,17z/data=!3m1!4b1" target="_blank"><FaMapMarkerAlt className="icon" /> F3 Shed, near BETiC Lab / OrthoCAD, IIT Area, Powai, Mumbai, Maharashtra 400076</a>
                </div>

                <div className="element footer-info-email">
                     <a href="#"><HiOutlineMail className="icon" />contact@umiciitb.com</a>
                </div>

                
            </div>

            <div className="footer-socials col">
                <h2>Socials</h2> 
                <a href="https://www.youtube.com/" target="_blank"><FaFacebookF className="icon social" style={{color:'#4267B2'}} /></a>
                <a href="https://www.youtube.com/" target="_blank"><FaLinkedin  className="icon social" style={{color:'#2867B2'}} /></a>
                <a href="https://www.youtube.com/" target="_blank"><FaInstagram className="icon social" style={{color:'#bc2a8d'}} /></a>
                <a href="https://www.youtube.com/" target="_blank"><FaYoutube   className="icon social" style={{color:'#FF0000'}}/></a>  
            </div>

        </div>
    )
}

export default Footer
