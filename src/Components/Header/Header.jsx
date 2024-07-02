import React from "react";
import "./Header.css";
import logo from "../../assets/Images/logo.png";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";
import { Link } from "react-router-dom";
import { HiMenu } from "react-icons/hi";
import { IoCloseSharp } from "react-icons/io5";
import { IconContext } from "react-icons";

const Header = ({ show, setShow }) => {
  const [color, setColor] = useState(false);
  const [nav, setNav] = useState(false);
  const [btn, setBtn] = useState(false);

  const ChangeBackground = () => {
    if (window.scrollY >= 10) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", ChangeBackground);
  console.log(color);

  const ChangeNav = () => {
    if (window.scrollY >= 10) {
      setNav(true);
    } else {
      setNav(false);
    }
  };

  window.addEventListener("scroll", ChangeNav);
  console.log(nav);

  const ChangeBtn = () => {
    if (window.scrollY >= 10) {
      setBtn(true);
    } else {
      setBtn(false);
    }
  };

  window.addEventListener("scroll", ChangeBtn);
  console.log(btn);

  return (
    <>
      <div className={color ? "headerHolder active" : "headerHolder"}>
        <div className="headerHolderWrap">
          <div className="headerLogo">
            <Link className="home" to="/">
             <img src={logo} alt="logo" />

            </Link>
           
            <div className="headerNavs">
              <Link style={{ textDecoration: "none" }} to="/service">
                <div className={nav ? "nav active" : "nav"}>
                  <p className={nav ? "nav active" : "navP"}>Services</p>
                  <IoIosArrowDown />
                </div>
              </Link>
              <span className={nav ? "nav active" : "nav"}>
                <p className={nav ? "nav active" : "navP"}>Products</p>

                <IoIosArrowDown />
              </span>
              <span className={nav ? "nav active" : "nav"}>
                <p className={nav ? "nav active" : "navP"}>Blog</p>

                <IoIosArrowDown />
              </span>

              <Link   style={{ textDecoration: "none" }} to="/founder">
              <span className={nav ? "nav active" : "nav"}>
                <p className={nav ? "nav active" : "navP"}>Team</p>
              </span>
              </Link>
              
              <Link   style={{ textDecoration: "none"}} to="/contact">
                <span className={nav ? "nav active" : "nav"}>
                  <p className={nav ? "nav active" : "navP"}>ContactUs</p>
                  <IoIosArrowDown />
                </span>
              </Link>
            </div>
          </div>

          <div className="headerLogin">
            <button
              className={`header-button ${
                btn ? "headerButton active" : "headerButton"
              }`}
            >
              <Link className="contactLink" style={{ textDecoration: "none" }} to="/membership">
                <p className="header-button">join us</p>
              </Link>
            </button>
          </div>


          <div className="burger" onClick={() => setShow(!show)}>
            {show === false? (
              <HiMenu 
              style={{ 
                direction: "right", 
                duration: "0.5",
                fontSize: "30px",
                color: "#4169e1"
               }} />
            ) : (
              <IoCloseSharp
                style={{
                  color: "#4169e1",
                  fontSize: "30px",
                  direction: "right",
                  duration: "0.5",
                }}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;

