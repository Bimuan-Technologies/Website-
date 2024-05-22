import React from "react"
import "./Footer.css"
import facebook from "../../assets/Images/facebook.png"
import instagram from "../../assets/Images/instagram.png"
import linkedin from "../../assets/Images/linkedin.png"
import twitter from "../../assets/Images/twitter.png"
import logo from "../../assets/Images/logo.png"


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
                <div className="links">
                    <h6 className="text">Platforms</h6>
                    <p>Services</p>
                    <p>Team</p>
                </div>
                <div className="links">
                    <h6 className="text">Resources</h6>
                    <p>Blog</p>
                    <p>Resources</p>
                </div>
                <div className="links">
                    <h6  className="text">Community</h6>
                    <p>Help center</p>
                    <p>Refer A friend</p>
                </div>
                <div className="links">
                    <h6  className="text">Company</h6>
                    <p>Contact</p>
                    <p>Products</p>
                    <p>Careers</p>
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
                        <img src={facebook} alt="" />
                    </div>
                    <div className="div">
                        <img src={instagram} alt="" />
                    </div>
                    <div className="div">
                        <img src={linkedin} alt="" />
                    </div>
                    <div className="div">
                        <img src={twitter} alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    
    </>
)




}

export default Footer