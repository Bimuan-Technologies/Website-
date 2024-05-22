import React from "react";
import "./Home.css";
import Header from "../Header/Header";
import hero from "../../assets/Images/imageHero.png";
import top from "../../assets/Images/3.png";
import left from "../../assets/Images/5.png";
import right from "../../assets/Images/6.png";
import middle from "../../assets/Images/7.png";
import mid from "../../assets/Images/8.png";
import midzzz from "../../assets/Images/11.png";
import midzs from "../../assets/Images/14.png";
import Data from "../Datas/datas";
import { FaArrowRightLong } from "react-icons/fa6";
import team from "../../assets/Images/group.jpg";
import solution from "../../assets/Images/solution.jpg"
import cutting from "../../assets/Images/cutting-edge.jpg"
import excellence from "../../assets/Images/excellence.jpg"
import innovate from "../../assets/Images/innovate3.jpg"
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <div className="heroHolder">
        <div className="heroHolderWrap">
          <div className="heroHolderText">
            <h1 className="animate-charcter">Bimuan Technologies</h1>
            <h3>Fostering Digital Innovation</h3>
            <p className="heroPTag">
              Specialization in AI, software developmwnt, cloud computing,
              cybersecurity, blockchain, and IoT solutions.
            </p>

            <div className="started">
              <button className="start">
                <p>Get Started</p>
              </button>
            </div>
          </div>

          <div className="heroHolderImage">
            <img src={hero} alt="image" />
          </div>
        </div>

        <div className="scatteredImages">
          <div className="div1">
            <img className="float" src={top} alt="image" />
          </div>
          <div className="div2">
            <img className="float" src={left} alt="image" />
          </div>
          <div className="div3">
            <img className="float" src={middle} alt="image" />
          </div>
          <div className="div4">
            <img className="float" src={right} alt="image" />
          </div>
          <div className="div5">
            <img className="float" src={mid} alt="image" />
          </div>
          {/* <div className="div6">
                        <img  className="float" src={midzz} alt="image"/>
                    </div> */}
          <div className="div7">
            <img className="float" src={midzzz} alt="image" />
          </div>
          <div className="div8">
            <img className="float" src={midzs} alt="image" />
          </div>
        </div>
      </div>

      <div className="whyChooseHolder">
        <div className="whyChooseHolderWrap">
          <h1>Why Choose Bimuan</h1>

          <div className="lowerWrap">
            <div className="bimuanCarde">
              <div className="bimuanLeft">
                <img src={innovate} alt="innovation" />
              </div>
              <div className="bimuanRight">
                <h2>Inovative Solutions</h2>
                <p>
                  We are at the forefront of technological advancements,
                  offering cutting-edge solutions that transform your business.
                </p>
                <button>Learn more</button>
              </div>
            </div>

            <div className="bimuanCard">
              <div className="bimuanCardRights">
                <h2>Client-Centric Approach</h2>
                <p>
                  We are at the forefront of technological advancements,
                  offering cutting-edge solutions that transform your business.
                </p>
                <button>Learn more</button>
              </div>
              <div className="bimuanCardsLefts">
                <img src={solution} alt="client" />
              </div>
            </div>

            <div className="bimuanCarde">
              <div className="bimuanLeft">
                <img src={cutting} alt="innovation" />
              </div>
              <div className="bimuanRight">
                <h2>Cutting-Edge Technology</h2>
                <p>
                  We are at the forefront of technological advancements,
                  offering cutting-edge solutions that transform your business.
                </p>
                <button>Learn more</button>
              </div>
            </div>

            <div className="bimuanCard">
              <div className="bimuanCardRights">
                <h2>Commitment To Excellence</h2>
                <p>
                  We are at the forefront of technological advancements,
                  offering cutting-edge solutions that transform your business.
                </p>
                <button>Learn more</button>
              </div>
              <div className="bimuanCardsLefts">
                <img src={excellence} alt="client" />
              </div>
            </div>
          </div>
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

      <div className="teamBond">
        <div className="teamBondWrap">
          <div className="teamBondLeft">
            <div className="topText">
              <h6>Services & Support</h6>
            </div>
            <div className="boldText">
              <h1 className="animate-charcter">Our team is your team</h1>
            </div>
            <div className="paragraphText">
              <p>
                Whether you need help setting up a website, hosting your first
                page, or building your entire webApp from scratch—our human
                experts are here for you.
              </p>
            </div>
            <div className="teamNav">
              <p>Meet Our Team</p>
              <FaArrowRightLong style={{ color: "#E18C00" }} />
            </div>
          </div>

          <div className="teamBondRight">
            <div className="images">
              <img src={team} alt="" />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Home;
