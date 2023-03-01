import "./HeroimgStyles.css";
import IntroImg from "../assets/intro-bg.jpg"
import resume from "../assets/sivaranjani resume.pdf"


import React from 'react'
import { Link } from "react-router-dom";
import { FaDownload } from "react-icons/fa";

const Heroimg = () => {
    return (
        <div className="hero">
            <div className="mask">
                <img className="intro-img" src={IntroImg} alt="IntroImg" />
            </div>
            <div className="content">
                <p>HI, I'M SIVARANJANI.</p>
                <h1>FullStack Developer.</h1>
                <div>
                    <Link to={"/project"} className="btn">Projects</Link>
                    <a href={resume} download=""><button class="btn"> download CV <FaDownload size={16} style={{ color: "#fff", marginRight: "1rem" }} /></button></a>
                </div>
            </div>
        </div>
    )
}

export default Heroimg
