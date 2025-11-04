import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./signin.css";
import Lottie from "lottie-react"
import animationData from "./assets/signup.json"
import Navbar from "./components/navbar";

function Signin() { 
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/team");
  };
  return (
    <div className="signin-container">
      <Navbar />
      <div className="signin-content">
      <div className="signin-box">
        <h2>Sign-in</h2>
        <form onSubmit={handleLogin}>
          <input type="text" placeholder="Name" required />
          <input type="text" placeholder="Username" required />
          <input type="email" placeholder="Email" required /> {/* ✅ email type */}
          <input type="password" placeholder="Password" required />
          <input type="password" placeholder="Repeat Password" required />
          <button type="submit">Sign-in</button>
          <p className="redirect-text">
            Already have an account?{" "}
            <Link to="/login" className="link-text">
              Login
            </Link>
          </p>
        </form>
      </div>  
        <Lottie
          animationData={animationData}
          loop
          autoplay
          className="signin-animation"
        />
      </div>
      <footer className="footer">
        <p>© 2025 TeamCodex | All Rights Reserved</p>
      </footer>
    </div>
  );
}

export default Signin;
