import React, { useRef, useEffect } from "react";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./components/navbar";
import Lottie from "lottie-react";
import animationData from "./assets/login.json";

function Login() {
  const navigate = useNavigate();
  const lottieRef = useRef(null);

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/team");
  };

  useEffect(() => {
    const startFrame = 60;
    const endFrame = 200;

    const timeout = setTimeout(() => {
      if (lottieRef.current && lottieRef.current.playSegments) {
        lottieRef.current.playSegments([startFrame, endFrame], true);
        lottieRef.current.loop = true;
      }
    }, 300);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="login-container">
      <Navbar />
      <div className="login-content">
        <div className="login-box">
          <h2>Login</h2>
          <form onSubmit={handleLogin}>
            <input type="text" placeholder="Username" required />
            <input type="password" placeholder="Password" required />
            <button type="submit">Login</button>
            <p className="redirect-text">
              Don’t have an account?{" "}
              <Link to="/signin" className="link-text">
                Sign Up
              </Link>
            </p>
          </form>
        </div>

        <Lottie
          lottieRef={lottieRef}
          animationData={animationData}
          className="login-animation"
          loop={false}
          autoplay={false}
        />
      </div>

      <footer className="footer">
        <p>© 2025 TeamCodex | All Rights Reserved</p>
      </footer>
    </div>
  );
}

export default Login;
