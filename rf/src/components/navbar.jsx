import React from 'react'
import { Link, useNavigate, useLocation} from 'react-router-dom'
import"./navbar.css"

const navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handlepath = () => {
    if (location.pathname === "/") {
      navigate("/login");
    } else {
      navigate("/team");
    };
  };
  return (
    <div>
      <header className="header">
        <div className="left" onClick={() => navigate("/")}>TEAMCODEX</div>
        <div className="center">
          <span onClick={() => navigate("/")}>Home</span>
          <span onClick={handlepath}>Team</span>
          <span onClick={handlepath}>Profile</span>
        </div>
      </header>
    </div>
  )
};
export default navbar
