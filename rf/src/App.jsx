import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GetStarted from "./getstarted.jsx";
import Login from "./login.jsx";
import Signin from  "./signin.jsx";
import Team from "./team.jsx";
import TeamDash from "./teamdash.jsx"; // New dashboard
import Navbar from './components/navbar.jsx';
import "./getstarted.css";
import "./login.css";
import "./signin.jsx"
import "./team.css";
import "./teamdash.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<GetStarted />} />
        <Route path="/login" element={<Login />} />
        <Route path="signin" element={<Signin/>} />
        <Route path="/team" element={<Team />} />
        <Route path="/teamdash/:teamName" element={<TeamDash />} />
      </Routes>
    </Router>
  );
}

export default App;
