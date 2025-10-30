import React from "react";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import { color } from "chart.js/helpers";

function Login() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/team");
  };

  return (
    <div className="login-container">
      <header className="header">
        <h1 className="titleP">TEAMCODEX</h1>
      </header>

      <div className="login-box">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <input type="text" placeholder="Username" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Login</button>
          <p className="redirect-text">
          Don’t have an account?{" "}
          <Link to="/signin" className="link-text">Sign Up</Link>
          </p>
        </form>
      </div>

      <footer className="footer">
        <p>© 2025 TeamCodex | All Rights Reserved</p>
      </footer>
    </div>
  );
}

export default Login;