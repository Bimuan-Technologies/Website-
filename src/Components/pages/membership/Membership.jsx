import React from 'react'
import './MembershipForm.css'

const MembershipForm = () => {
  return (
    <form>
        <h1>Welcome to Bimuan</h1>
        <p>Membership Form</p>
        <div className="input-container">
            <input type="text" placeholder="Fullname"/>
            <input type="email" placeholder="Email"/>
            <input type="text" placeholder="Stack"/>
            <input type="text" placeholder="Reason for joining Bimuan"/>
        </div>
        <button>Send</button>
    </form>
  )
}

export default MembershipForm