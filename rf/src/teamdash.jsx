import React from 'react'
import Navbar from './components/navbar'
import Footer from './components/footer'

const teamdash = () => {
  return (
    <div className='container'>
      <Navbar />
      <div className='main-content'>
        <h1>Hello world !!!</h1>
      </div>
      <div className='foot'>
        <Footer />
      </div>
    </div>
  )
}

export default teamdash
