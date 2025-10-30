import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import "./teamdash.css";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function TeamDash() {
  const navigate = useNavigate();
  const { teamName } = useParams();
  const [showWeekly, setShowWeekly] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [showMember, setShowMember] = useState(false);
  const [weeklyGoal, setWeeklyGoal] = useState({ type: "", target: "", deadline: "" });
  const [memberName, setMemberName] = useState("");
  const [members] = useState(["Alice", "Bob", "Charlie"]);

  const handleGoalConfirm = () => {
    if (weeklyGoal.type && weeklyGoal.target && weeklyGoal.deadline) {
      alert("Weekly goal set!");
      setShowWeekly(false);
    }
  };

  const sampleData = {
    labels: ["LeetCode", "College Portal"],
    datasets: [
      {
        label: "Progress",
        data: [70, 50],
        backgroundColor: ["#001a33", "#002b5c"],
      },
    ],
  };

  const memberData = {
    
    labels: ["LeetCode", "College Portal"],
    datasets: [
      {
        label: memberName,
        data: [Math.floor(Math.random() * 100), Math.floor(Math.random() * 100)],
        backgroundColor: ["#004080", "#0066cc"],
      },
    ],
  };

  return (
    <div className="teamdash-container">
      {/* Header */}
      <header className="teamdash-header">
        <div className="left" onClick={() => navigate("/")}>TEAMCODEX</div>
        <div className="center">
          <span onClick={() => navigate("/")}>Home</span>
          <span>Team</span>
        </div>
        <div className="right" onClick={() => setShowProfile(true)}>Profile</div>
      </header>

      <main className={`teamdash-main ${showWeekly || showProfile || showMember ? "blurred" : ""}`}>
        <h1>{teamName}</h1>
        <div className="progress-graph">
          <Bar data={sampleData} />
        </div>

        <div className="weekly-btn">
          <button onClick={() => setShowWeekly(true)}>Weekly Activities</button>
        </div>

        <div className="team-members">
          <h3>Team Members</h3>
          <ul>
            {members.map((m, i) => (
              <li key={i} onClick={() => { setMemberName(m); setShowMember(true); }}>
                {m}
              </li>
            ))}
          </ul>
        </div>
      </main>

      {/* Weekly Activities Popup */}
      {showWeekly && (
        <div className="popup-overlay" onClick={() => setShowWeekly(false)}>
          <div className="popup" onClick={(e) => e.stopPropagation()}>
            <h2>Set Your Weekly Goal</h2>
            <input
              type="text"
              placeholder="Goal Type"
              value={weeklyGoal.type}
              onChange={(e) => setWeeklyGoal({ ...weeklyGoal, type: e.target.value })}
            />
            <input
              type="text"
              placeholder="Target"
              value={weeklyGoal.target}
              onChange={(e) => setWeeklyGoal({ ...weeklyGoal, target: e.target.value })}
            />
            <input
              type="date"
              value={weeklyGoal.deadline}
              onChange={(e) => setWeeklyGoal({ ...weeklyGoal, deadline: e.target.value })}
            />
            <button onClick={handleGoalConfirm}>Confirm Goal</button>
          </div>
        </div>
      )}

      {/* Profile Popup */}
      {showProfile && (
        <div className="popup-overlay" onClick={() => setShowProfile(false)}>
          <div className="popup" onClick={(e) => e.stopPropagation()}>
            <h2>Profile</h2>
            <p>Email: user@example.com</p>
            <p>Teams Joined: Team A, Team B</p>
            <p>Password: ••••••••</p>     
          </div>
        </div>
      )}

      {/* Member Progress Popup */}
      {showMember && (
        <div className="popup-overlay" onClick={() => setShowMember(false)}>
          <div className="popup" onClick={(e) => e.stopPropagation()}>
            <h2>{memberName}'s Progress</h2>
            <Bar data={memberData} />
          </div>
        </div>
      )}
    </div>
  );
}

export default TeamDash;
