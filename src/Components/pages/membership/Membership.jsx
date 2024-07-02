import React from 'react'
import './Membership.css'
import logo from "../../../assets/Images/logo.png";
import { Link } from 'react-router-dom';

const Membership = () => {
  return (
    <div className='formHolders'>
    <div className='formWraps'>
      <Link to="/founder">
      <img src={logo} alt='logo'/>
      </Link>
      
        <form className='myForms'>
          <h1>Welcome to Bimuan</h1>
          <p>Tell us about your need and let us get your project moving</p>
          <div className='formInputs'>
            <input className='fieldd' type="text" placeholder='Fullname' />
            <input className='fieldd' type="email" placeholder='Email' />
            <input className='fieldd' type="text" placeholder='stack' />
            <textarea className='fieldds' typeof='textArea'  placeholder='Quick note'/>
          </div>
          <button className='sendBtns'>Send</button>
        </form>
    </div>

    </div>
  )
}

export default Membership



