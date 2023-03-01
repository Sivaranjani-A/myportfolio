import "./FooterStyles.css";

import React from 'react'
import { FaGithub, FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="left">
                    <div className="location">
                        <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                        <div>
                            <p>46/1, kailasapuram street, kovilpatty, Natham,</p>
                            <p>Dindigul, TamilNadu-624401.</p>
                        </div>
                    </div>
                    <div className="phone">
                        <h4><FaPhone size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                            7708227570
                        </h4>
                    </div>
                    <div className="email">
                        <h4><FaMailBulk size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                            ranjani731997@gmail.com
                        </h4>
                    </div>
                </div>
                <div className="right">
                    <div className="social">
                        <NavLink to="https://github.com/Sivaranjani-A"><FaGithub size={20} style={{ color: "#fff", marginRight: "1rem" }} /></NavLink>
                        <NavLink to="https://www.linkedin.com/in/sivaranjani-a-656a59257/"><FaLinkedin size={20} style={{ color: "#fff", marginRight: "1rem" }} /></NavLink>
                        <NavLink to="https://www.instagram.com/sree731997/?next=%2F"><FaInstagram size={20} style={{ color: "#fff", marginRight: "1rem" }} /></NavLink>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer
