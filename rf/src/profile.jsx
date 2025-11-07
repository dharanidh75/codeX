import React from 'react'
import"./profile.css"
import Navbar from "./components/navbar.jsx"
import Footer from"./components/footer.jsx"
import { useNavigate } from 'react-router-dom';
function profile() {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <div className='main-content'>
        <div className='content-left'>
          <img src="src/assets/profileLogo.png" alt="Profile Logo" className='profileLogo'/>
        </div>
        <div className='content-right'>
          <h1 className='profile-head'>Profile</h1>
            <p><strong>Name:</strong> Karthik</p>
            <p><strong>Username:</strong> karthik@123</p>
            <p><strong>Email:</strong>karthik12@gmail.com</p>
            <p><strong>Team:</strong>TeamX</p>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default profile
