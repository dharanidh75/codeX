import React from 'react'
import"./profile.css"
import Navbar from "./components/navbar.jsx"
import { useNavigate } from 'react-router-dom';
function profile() {
  return (
    <div>
      <header>
        <Navbar />
      </header>
    </div>
  )
}

export default profile
