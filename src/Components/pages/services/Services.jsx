import React from "react";
import "./Services.css"
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import Data from "../../Datas/datas";
import Smallcard from "../../SmallData/Datacard";
import photo from "../../../assets/Images/photo.png"



const Services =()=>{

    return(
   <>
    <Header/>

    <div className="pageLayout">
        <div className="pageLayoutWrap">
            <h1>Our Services</h1>
            <p>Bimuan Technologies offers a comprehensive suite of products and services designed to empower businesses with cutting-edge technology solutions. We specialize in various fields to cater to your specific needs:</p>
        </div>
    </div>

    
    <div className="services">
        <h1 className="servicesH1">A glance into our services</h1>

        <div className="serviceCardHolder">
          <div className="serviceCardWrapper">
            {Data.map((e) => (
              <div className="serviceCard">
                <div
                  className="circle"
                  style={
                    e.title === "WEB DEVELOPMENT"
                      ? { backgroundColor: "#7B97EA" }
                      : e.title == "BLOCKCHAIN"
                      ? { backgroundColor: "#995F00" }
                      : e.title == "AI OPTIMIZATION"
                      ? { backgroundColor: "#A7B9F1" }
                      : e.title == "CLOUD COMPUTING"
                      ? { backgroundColor: "#4169E1" }
                      : e.title == "CYBERSECURITY"
                      ? { backgroundColor: "#CC7F00" }
                      : e.title == "INTERNET OF THINGS"
                      ? { backgroundColor: "#4169E1" }
                      : {}
                  }
                >
                  <img src={e.image} alt="icon" />
                </div>

                <div className="titles">
                  <h1>{e.title}</h1>
                </div>

                <div className="paragraph">
                  <p>{e.desc}</p>
                </div>

                <div className="divButton">
                  <button>Contact us</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="signUpNav">
        <div className="signUpWrap">
          <h4>SIGNUP FOR FREE</h4>
          <h1>Take your business to the next level</h1>
          <p>Book a call with our team of expert to build your product</p>

          <div className="callAction">
            <button>contact us</button>
          </div>
        </div>
      </div>


      <div className="boost">
        <div className="boostWrap">
          <h1>BOOSTING</h1>
          <p>Outstanding Digital Experience</p>

            <div className="boostCardWrap">
              {Smallcard.map((e)=>(
                    <div className="boostCard" style={
                      e.title == "Email Marketing"? {backgroundColor: "#995F00"}:
                      e.title == "Real-Time-Analytics"? 
                      {backgroundColor: "#A7B9F1"}:
                      e.title == "Search Engine Optiization"?{backgroundColor: "white", color: "#339AF0"}:
                      e.title == "Pay-Per-Click"? {backgroundColor: "#7B97EA", color: "#e0b943"}:{}
                      
                    }
                    >
                    <div className="imgz">
                        <img src={e.image} alt="" />
                    </div>
                    <p>{e.title}</p>
                  </div>
              ))}
            </div>
           
        </div>
      </div>

      <Footer/>
   </>
    )
}



export default Services