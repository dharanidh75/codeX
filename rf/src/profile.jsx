import React from 'react';
import './profile.css';
import Navbar from './components/navbar.jsx';
import Footer from './components/footer.jsx';

function Profile() {
  return (
    <div className="page-container">
      <header>
        <Navbar />
      </header>

        <main className="mai-content">
          <div className="content-left">
            <img
              src="src/assets/profileLogo.png"
              alt="Profile Logo"
              className="profileLogo"
            />
            <p className='✏️ changeIcon'>change icon</p>
          </div>
          <div className='line'></div>
          <div className="content-right">
            <h1 className="profile-head">Profile</h1>
            <p className='p'><strong>Name:</strong> Karthik</p>
            <p className='p'><strong>Gender:</strong> Male</p>
            <p className='p'><strong>Username:</strong> karthik@123</p>
            <p className='p'><strong>Email:</strong> karthik12@gmail.com</p>
            <p className='p'><strong>Team:</strong> TeamX</p>
          </div>
      </main>

      <Footer />
    </div>
  );
}

export default Profile;
