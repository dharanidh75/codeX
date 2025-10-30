import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./signin.css";
import { color } from "chart.js/helpers";

function signin() {
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/team");
  };

  return (
    <div className="signin-container">
      <header className="header">
        <h1 className="titleP">TEAMCODEX</h1>
      </header>

      <div className="signin-box">
        <h2>Sign-in</h2>
        <form onSubmit={handleLogin}>
          <input type="text" placeholder="Username" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Login</button>
          <p className="redirect-text">
          Don’t have an account?{" "}
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