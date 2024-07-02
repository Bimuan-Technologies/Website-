import React from 'react'
import "./Founder.css"
import Header from "../../Header/Header";
import team from "../../../assets/Images/Teem.jpg"
import Footer from "../../Footer/Footer"
import { Link } from 'react-router-dom';
import Keycard from '../../keys/KeyCard';
import ella from "../../../assets/Images/ella.png"
import Profilecard from '../../Profile/ProfileCard';
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { TiSocialTwitterCircular } from "react-icons/ti";
import { TiSocialInstagramCircular } from "react-icons/ti";




const Founder = () =>{

return(
    <>
    <Header/>

    <div className="founderHolder">
        <img src={team} alt='team'/>
    </div>

    <div className="keyPillarsHolder">
        <div className="keyPillarsWrap">
            <div className="PillarIntro">
                <h1 className='keyTitle'>Key Pillars</h1>
                <p className='keyDes'>At Bimuan Technologies, we believe that these key pillars support our vision, mission, and values....</p>
            </div>

            <div className="pillarCardHolder">
                <div className="pillarCardWrap">
                    {
                        Keycard.map((e)=>(
                            <div className="pillarCard">
                            <div className="pillarImage">
                                <img src={e.image} alt='img'/>
                            </div>
    
                            <div className="pillarText">
                                <h2>{e.title}</h2>
                                <p>{e.desc}</p>
                            </div>
                        </div>
                        ))
                    }
                   
                </div>
            </div>
            <Link style={{ textDecoration: "none" }}to="/membership">
                    <div className='click'>
                <button className='joinn'>Join Us</button>
                </div>
                </Link> 
                    
                
        </div>
    </div>

    <div className="teamPictureHolder">
        <div className="teamPicturesWrap">
            <h1>Our Founders</h1>

            <div className="profileCardWrap">
                {
                    Profilecard.map((e)=>(
                        <div className="profileCard">
                    <div className="imageFrame">
                        <img src={e.image} alt='img'/>
                    </div>
                    <div className="profileText">
                        <h2>{e.title}</h2>
                        <h3>{e.desc}</h3>
                        <p>{e.data}</p>
                        <div className="reach">
                            
                                    <div>
                                    <a
                                    href={e.url} 
                                    target='_blank'
                                    >
                                         <TiSocialLinkedinCircular style={{color: "#e18c00"}}/>
                                        </a>
                                        </div>
                                    
                                   <div>
                                   <a
                                    href={e.url2} 
                                    target='_blank'
                                   >
                                    <TiSocialTwitterCircular style={{color: "#e18c00"}}/>
                                    </a>
                                    </div>
                                    
                                   <div>
                                   <a
                                    href={e.url3} 
                                    target='_blank'
                                   >
                                    <TiSocialInstagramCircular style={{color: "#e18c00"}}/>
                                    </a>
                                    </div>
                        
                        </div>
                        
                    </div>
                </div>
                    ))
                }
                
            </div>
        </div>
    </div>

    <Footer/>
    </>
)




}

export default Founder