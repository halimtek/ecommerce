import React from 'react'
import './Hero.css'
import hand_icon from '../Assets/hand_icon.png'
import arrow_icon from '../Assets/arrow.png'
import hero_image from '../Assets/computer.png'

const Hero = () => {
  return (
    <div className='hero'>

      {/* LEFT SIDE */}
      <div className="hero-left">

        <h2>NEW ARRIVALS ONLY</h2>

        <div className="hero-main-text">

          <div className="hero-hand-icon">
            <p>New</p>
            <img src={hand_icon} alt="hand icon" />
          </div>

          <p>Collections</p>
          <p>For Everyone</p>

        </div>

        {/* CTA BUTTON */}
        <div className="hero-latest-btn">
          <span>Latest Collection</span>
          <img src={arrow_icon} alt="arrow icon" />
        </div>

      </div>

      {/* RIGHT SIDE */}
      <div className="hero-right">
        <img src={hero_image} alt="hero banner" />
      </div>

    </div>
  )
}

export default Hero