import React from "react"
import "./Footer.css"
import facebook from "../../assets/Images/facebook.png"
import instagram from "../../assets/Images/instagram.png"
import linkedin from "../../assets/Images/linkedin.png"
import twitter from "../../assets/Images/twitter.png"
import logo from "../../assets/Images/logo.png"
import { Link } from "react-router-dom"


const Footer = ()=>{
return(
    <>
    <div className="footerFrame">
        <div className="footerFrameWrap">
            <div className="footerTop">
                <div className="link">
                    <div className="image">
                        <img src={logo} alt="logo" />
                    </div>
                    <div className="linkText">
                        <h6>Fostering Digital Innovation</h6>
                    </div>
                </div>
                <div className="links-Platforms">
                    <h6 className="text">Platforms</h6>
                    <Link  style={{ textDecoration: "none"}} to="/service">
                    <p className="links-P">Services</p>
                    </Link>
                    <Link  style={{ textDecoration: "none"}} to="/founder">
                    <p className="links-P">Team</p>
                    </Link>
                    
                </div>
                <div className="links-Resources">
                    <h6 className="text">Resources</h6>
                    <p className="links-P">Blog</p>
                    <p className="links-P">Resources</p>
                </div>
                <div className="links-community">
                    <h6  className="text">Community</h6>
                    <p className="links-P">Help center</p>
                    <Link  style={{ textDecoration: "none"}} to="/membership">
                    <p className="links-P">Refer A friend</p>
                    </Link>
                </div>
                <div className="links-Company">
                    <h6  className="text">Company</h6>
                   <Link  style={{textDecoration: "none" }} to="/contact">
                   <p className="links-P">Contact</p>
                   </Link>
                    <p className="links-P">Products</p>
                </div>
            </div>
            <div className="footerLine">
                <hr/>
            </div>
            <div className="footerBottom">
                <div className="follow">
                    <p style={{color: "#4169E1", fontWeight: "900"}}>Follow Us</p>
                </div>

                <div className="followLink">
                    <div className="div">
                        <a 
                         href="https://facebook.com/bimuantech" 
                         target="_blank"
                        >
                        <img src={facebook} alt="" />
                        </a>
                        
                    </div>
                    <div className="div">
                        <a
                         href="https://instagram.com/bimuantech" 
                         target="_blank"
                        >
                        <img src={instagram} alt="" />
                        </a>
                    </div>
                    <div className="div">
                        <a
                         href="https://linkedin.com/company/bimuantech" 
                         target="_blank"
                        >
                        <img src={linkedin} alt="" />
                        </a>
                    </div>
                    <div className="div">
                        <a
                         href="https://twitter.com/bi_muan" 
                         target="_blank"
                        >
                        <img src={twitter} alt="" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    
    </>
)




}

export default Footer