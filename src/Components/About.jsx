import React from 'react'
import aboutImage  from '../Img/about.png';


function About() {
  return (
    <div id='about'>
        <div className="about-image">
            <img src={aboutImage} alt = 'about' />
        </div>    
        <div className="about-text">
            <h1>Learn More About us</h1>
            <p>Lorem impsum Lorem impsumLoremLorem impsum Lorem 
                impsumLoremLorem impsum Lorem impsumLoremLorem </p>
            <button>READ MORE</button>
        </div>
    </div>
  )
}

export default About