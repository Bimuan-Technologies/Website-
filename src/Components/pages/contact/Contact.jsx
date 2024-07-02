import React from 'react'
import './Contact.css'
import logo from "../../../assets/Images/logo.png";
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <div className='formHolder'>
    <div className='formWrap'>
      <Link to="/">
      <img src={logo} alt='logo'/>
      </Link>
        <form className='myForm'>
          <h1>Welcome to Bimuan</h1>
          <p>Tell us about your need and let us get your project moving</p>
          <div className='formInput'>
            <input className='field' type="text" placeholder='Fullname' />
            <input className='field' type="email" placeholder='Email' />
            <textarea className='fields' typeof='textArea'  placeholder='Quick note'/>
          </div>
          <button className='sendBtn'>Send</button>
        </form>
    </div>

    </div>
  )
}

export default Contact



