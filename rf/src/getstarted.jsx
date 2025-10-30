import React from "react";
import { useNavigate } from "react-router-dom";
import "./getstarted.css";

function GetStarted() {
  const navigate = useNavigate();

  return (
    <div className="getstarted-container">
      <header className="header">
        <h1>TEAMCODEX</h1>
      </header>

      <main className="main-content">
        <div className="hero">
          <h2>Welcome to</h2>
          <h1 className="highlight">TEAMCODEX</h1>
          <p className="tagline">code. conquer. collaborate.</p>
          <button
            className="getstarted-btn"
            onClick={() => navigate("/login")}
          >
            Get Started
          </button>
        </div>

        <section className="description">
          <h2>OUR CODING PLATFORM</h2>
          <p>
            TEAMCODEX is a unified platform designed to address the common problem   
        of fragmented progress data for coding teams and students It centralizes  
        and automates the tracking of contributions from various services,   
        including LeetCode, college portal which are typically managed manually  
        and disconnectedly. A key feature is a browser extension that automatically  
        collects data from thes platforms and feeds it to a central dashboard in   
        real time system allows teams to set goals, monitor individual and collective   
        progress, and gain a clear, unified view of everyone's achievements.  
        By eliminating the need for manual tracking and providing transparent   
        visibility into performance, TEAMCODEX aims to boost motivation,   
        enhance productivity, and foster a more collaborative and efficient coding environment.  
        It is a web-based platform designed to solve the problem of scattered progress data.  
        It provides a dedicated space where students and coding teams can connect, manage projects,  
        and monitor their collective and individual progress. By acting as a single source of truth,  
        it helps everyone on the team stay aligned and informed without needing to manually check multiple websites.  

          </p>
        </section>
      </main>

      <footer className="footer">
        <p>© 2025 TeamCodex | All Rights Reserved</p>
      </footer>
    </div>
  );
}

export default GetStarted;