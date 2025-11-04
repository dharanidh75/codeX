import React from "react";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./components/navbar"
import { color } from "chart.js/helpers";

function Login() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/team");
  };

  return (
    <div className="login-container">
      <Navbar />

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
      {/* Lottie animation near the login box */}
<iframe
  src="https://lottie.host/embed/9da4034a-5a8f-45f3-999e-6cfe06ce5c43/8rZRVyC7Mj.lottie"
  className="login-animation"
  title="login-animation"
></iframe>

      <footer className="footer">
        <p>© 2025 TeamCodex | All Rights Reserved</p>
      </footer>
    </div>
  );
}

export default Login;