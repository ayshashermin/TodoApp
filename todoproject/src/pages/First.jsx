import React from 'react'
import img from '../pages/image/img4.webp'
import '../pages/First.css'
import UserHome from './user page/UserHome'

const First = () => {
  return (
    <div>
        <div className="first-container">
      <div className="image-wrapper">
        <img src={img} alt="Productivity Banner" className="home-image" />
        <div className="overlay-text fade-up">
          <h1>To-Do LIST THAT WILL BOOST YOUR PRODUCTIVITY</h1>
        </div>
      </div>
    </div>
    <UserHome/>
    </div>
  )
}

export default First