import React from 'react'
import Group_img from './images/Group 77.png'
function Hero() {
  return (
    <div className='Hero--parent'>
        <div className="Hero--component">
            <img className='Hero--image' src={Group_img} alt="" />
        </div>
        <section className='Hero--content'>
        <h1>Online Experiences</h1>
        <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
</p></section>
    </div>
  )
}

export default Hero