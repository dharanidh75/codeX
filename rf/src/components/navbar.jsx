import React from 'react'
import { Link, useNavigate, useLocation} from 'react-router-dom'
import"./navbar.css"

const navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handlepathT = () => {
    if (location.pathname === "/" || location.pathname === "/login") {
      navigate("/login");
    }
    else if (location.pathname === "/signin") {
      navigate("/signin"); 
    }
    else if(location.pathname === "/teamdash/:teamName"){
      navigate("/teamdash/:teamName");
    }
  };
  const handlepathP = () => {
    if (location.pathname === "/" || location.pathname === "/login") {
      navigate("/login");
    }
    else if (location.pathname === "/signin") {
      navigate("/signin"); 
    }
    else if(location.pathname === "/teamdash/:teamName"){
      navigate("/profile");
    }
    else if(location.pathname === "/team"){
      navigate("/profile");
    }
  };
  const handlepathH = () => {
    if(location.pathname === "/" || location.pathname === "/login" || location.pathname === "/signin"){
      navigate("/");
    }
    else if(location.pathname === "/team"){
      navigate("/team");
    }
    else{
      navigate("/teamdash/:teamName");
    }
  }
  const handlepatht = () => {
    if(location.pathname === '/' || location.pathname === '/login' || location.pathname === '/signin'){
      navigate("/");
    }
  }

  return (
    <div>
      <header className="header">
        <div className="left" onClick={handlepatht}>TEAMCODEX</div>
        <div className="center">
          <span onClick={handlepathH}>Home</span>
          <span onClick={handlepathT}>Team</span>
          <span onClick={handlepathP}>Profile</span>
        </div>
      </header>
    </div>
  )
};
export default navbar
