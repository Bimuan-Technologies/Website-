import "./Dropdown.css"
// import { FiToggleRight } from "react-icons/fi";
import { GiPentarrowsTornado } from "react-icons/gi";
// import { motion } from "framer-motion"
import { Link } from "react-router-dom";


export default function Dropdown(){
    

    return(
     
     <div className="dropdown">
    
      <div className="option">
        <Link className="link" to="/service">
        <p>Services</p>
        </Link>

            <Link className="link" to="/">
            <GiPentarrowsTornado style={{fontSize: "20px", color: "#4169e1"}}/>
            </Link>
        </div>

        <div className="option">
        <Link className="link" to="/product">
        <p>Products</p>
        </Link>
        <Link className="link" to="/">
        <GiPentarrowsTornado style={{fontSize: "20px",color: "#4169e1"}}/>
        </Link>
            
        </div>

        <div className="option">
            <Link className="link" to="/blog">
            <p>Blog</p>
            </Link>
            <Link className="link" to="/">
            <GiPentarrowsTornado style={{fontSize: "20px", color: "#4169e1"}}/>
        </Link>
        </div>
        
       
        <div className="option">
        <Link className="link" to="/membership">
        <p>Team</p>
            </Link>
        <Link className="link" to="/">
            <GiPentarrowsTornado style={{fontSize: "20px", color: "#4169e1"}}/>
        </Link>
        </div>

        <div className="option">
        <Link className="link" to="/contact">
        <p>Contact Us</p>
            </Link>
            <Link className="link" to="/">
            <GiPentarrowsTornado style={{fontSize: "20px", color: "#4169e1"}}/>
            </Link>
        </div>

        <div className="exit">
        <button>
            <Link className="linked"  
            style={{textDecoration: "none"}}
            to="/contact">
            <p>Contact Us</p>
            </Link>
            </button>
           
           
        </div>
       </div>
     
    )
}

