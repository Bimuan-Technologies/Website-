import React from 'react'
import './ContactUs.css'

const ContactUs = () => {
  return (
    <form>
        <h1>Welcome to Bimuan</h1>
        <p>Tell us about your need and let us get your project moving</p>
        <div className="input-container">
            <input type="text" placeholder="Fullname"/>
            <input type="email" placeholder="Email"/>
            <input type="text" placeholder="Quick note"/>
        </div>
        <button>Send</button>
    </form>
  )
}

export default ContactUs