import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./signin.css";
import Navbar from "./components/navbar"
import { color } from "chart.js/helpers";

function signin() {
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/team");
  };

  return (
    <div className="signin-container">
      <Navbar />
      <div className="signin-box">
        <h2>Sign-in</h2>
        <form onSubmit={handleLogin}>
          <input type="text" placeholder="Name" required />
          <input type="text" placeholder="Username" required />
          <input type="text" placeholder="email" required />
          <input type="password" placeholder="Password" required />
          <input type="password" placeholder="Repeat Password" required />
          <button type="submit">Sign-in</button>
          <p className="redirect-text">
          Already have an?{" "}
          <Link to="/login" className="link-text">login</Link>
          </p>
        </form>
      </div>

      <footer className="footer">
        <p>© 2025 TeamCodex | All Rights Reserved</p>
      </footer>
    </div>
  );
}

export default signin;