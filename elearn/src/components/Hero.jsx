import React from 'react'
import heroImg from '../assets/heroImg.png'

const Hero = () => {
  return (
    <div className='grid grid-cols-2 max-w-[1360px] px-4 mx-0'>
        <div>
          <h1>Learn New Skill Gain More Education</h1>
          <p>eLearn is an interesting platform that will tech you in more an interactive way</p>
          <div>
            <button>Join for free</button>
            <a href="/">Watch how it works</a>
          </div>
        </div>

        <div>
          <img src={heroImg} alt="/" />
        </div>
    </div>
  )
}

export default Hero