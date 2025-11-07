import React from 'react'
import Navbar from './components/navbar'
import Footer from './components/footer'

const teamdash = () => {
  return (
    <div className='container'>
      <Navbar />
      <div className='main-content'>
        <div className='content'>
          <div className='team-members'>
            <h1 className='name'>Team members:</h1>
            <ol>
              <li>Aishvarya</li>
              <li>Dhanushree</li>
              <li>Dharanidharan</li>
              <li>Aravind</li>
              <li>Karthi</li>
              <li>Kamalesh</li>
            </ol>
          </div>
          <div className='weekly-task'>
            <h1 className='week'>Weekly task</h1>
            <div className='emptyBox'>#BARGRAPH</div>
            <button className='b'>/Update weekly task</button>
            </div>
          </div>
      </div>
      <div className='foot'>
        <Footer />
      </div>
    </div>
  )
}

export default teamdash
