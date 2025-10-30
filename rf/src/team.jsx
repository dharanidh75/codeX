import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./team.css";

function Team() {
  const navigate = useNavigate();
  const [showCreate, setShowCreate] = useState(false);
  const [showJoin, setShowJoin] = useState(false);
  const [teamName, setTeamName] = useState("");
  const [teamMembers, setTeamMembers] = useState("");
  const [teamCode, setTeamCode] = useState("");
  const [showCode, setShowCode] = useState(false);
  const [joinCode, setJoinCode] = useState("");
  const [joinTeamName, setJoinTeamName] = useState("");
  const [username, setUsername] = useState("");

  // ✅ Check login before entering team page
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
      alert("Please login first!");
      navigate("/login");
    } else {
      setUsername(user.username);
    }
  }, [navigate]);

  // ✅ Generate random team code
  const generateTeamCode = () => {
    if (!teamName) {
      alert("Please enter a team name!");
      return;
    }
    const code = Math.random().toString(36).substring(2, 8).toUpperCase();
    setTeamCode(code);
    setShowCode(true);
  };

  // ✅ Copy team code and navigate to dashboard
  const copyCode = () => {
    navigator.clipboard.writeText(teamCode);
    alert(`Team code copied: ${teamCode}`);
    navigate(`/teamdash/${teamName}`);
  };

  // ✅ Close all popups
  const closePopups = () => {
    setShowCreate(false);
    setShowJoin(false);
    setShowCode(false);
  };

  // ✅ Handle join team logic
  const handleJoin = () => {
    if (joinCode.trim() === "" || joinTeamName.trim() === "") {
      alert("Please fill in both team name and code!");
      return;
    }
    alert(`${username} joined team ${joinTeamName}!`);
    closePopups();
    navigate(`/teamdash/${joinTeamName}`);
  };

  return (
    <div className="team-container">
      {/* Header */}
      <header className="header">
        <h1>TEAMCODEX</h1>
      </header>

      {/* Main */}
      <main className={`team-main ${showCreate || showJoin ? "blurred" : ""}`}>
        <h2 className="team-title">Let's collaborate together</h2>
        <h3 className="team-subtitle">MY TEAM</h3>

        <div className="team-buttons">
          <button onClick={() => setShowCreate(true)}>Create Team</button>
          <button onClick={() => setShowJoin(true)}>Join Team</button>
        </div>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 TeamCodex | All Rights Reserved</p>
      </footer>

      {/* CREATE TEAM POPUP */}
      {showCreate && (
        <div className="popup-overlay" onClick={closePopups}>
          <div className="popup" onClick={(e) => e.stopPropagation()}>
            <h2>Create Your Team</h2>
            <input
              type="text"
              placeholder="Enter team name"
              value={teamName}
              onChange={(e) => setTeamName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Enter team members (comma-separated)"
              value={teamMembers}
              onChange={(e) => setTeamMembers(e.target.value)}
            />

            {!showCode ? (
              <button onClick={generateTeamCode}>
                Generate Code & Create Team
              </button>
            ) : (
              <div className="code-display">
                <p>
                  <strong>Team Code:</strong> {teamCode}
                </p>
                <button onClick={copyCode}>Copy & Go to Dashboard</button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* JOIN TEAM POPUP */}
      {showJoin && (
        <div className="popup-overlay" onClick={closePopups}>
          <div className="popup" onClick={(e) => e.stopPropagation()}>
            <h2>Join Team</h2>
            <input
              type="text"
              placeholder="Enter your username"
              value={username}
              readOnly // Username comes from logged-in user
            />
            <input
              type="text"
              placeholder="Enter team name"
              value={joinTeamName}
              onChange={(e) => setJoinTeamName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Enter team code"
              value={joinCode}
              onChange={(e) => setJoinCode(e.target.value)}
            />
            <button onClick={handleJoin}>Join Team & Go to Dashboard</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Team;
