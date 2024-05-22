import React from "react"
import "./Header.css"
import logo from "../../assets/Images/logo.png"
import { IoMdArrowDropdown } from "react-icons/io";
import { useState } from "react";



const Header = () =>{
    const [color, setColor] = useState(false);
    const [nav, setNav] = useState(false);
    const [btn, setBtn] = useState(false);



    const ChangeBackground = () => {
        if (window.scrollY >= 10) {
            setColor(true)
        }else{
            setColor(false)
        }
    };

    window.addEventListener("scroll", ChangeBackground)
    console.log(color)


    const ChangeNav = () => {
        if (window.scrollY >= 10) {
            setNav(true)
        }else{
            setNav(false)
        }
    };

    window.addEventListener("scroll", ChangeNav)
    console.log(nav)

    const ChangeBtn = () => {
        if (window.scrollY >= 10) {
            setBtn(true)
        }else{
            setBtn(false)
        }
    };

    window.addEventListener("scroll", ChangeBtn)
    console.log(btn)

return(
        <>

       <div className={color ? "headerHolder active": "headerHolder"}>
        <div className="headerHolderWrap">
            <div className="headerLogo">
                <img src={logo}  alt="logo"/>


                <div className="headerNavs">
                <span className={nav ? "nav active": "nav"}>
                <p>Services</p>
                <IoMdArrowDropdown />
                </span>
                <span className={nav ? "nav active": "nav"}>
                   <p>Products</p> 
                   <IoMdArrowDropdown />
                </span>
                <span className={nav ? "nav active": "nav"}>
                    <p>Blog</p>
                    <IoMdArrowDropdown />
                </span>
                <span className={nav ? "nav active": "nav"}>
                    <p>Team</p>
                </span>
                <span className={nav ? "nav active": "nav"}>
                    <p>Contact Us</p>
                    <IoMdArrowDropdown />
                </span>
            </div>
            </div>


            <div className="headerLogin">
               <button className={btn? "headerButton active": "headerButton"}>
                <p>Login</p>
               </button>
            </div>
        </div>
       </div>

        </>


)
}


export default Header