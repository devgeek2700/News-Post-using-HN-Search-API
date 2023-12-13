import React from 'react'
import "../Home.css"

function Hero() {
  return (
    <div>
       <section id="intro">
                <div id="intro-info">
                    <div>
                        <h1>Full Service News Search Company</h1>
                        <div id="intro-tag-btn">
                            <span>Over 100M app downloads across 1500+ projects.</span>
                            <a href="" class="brand-btn">Get Started</a>
                        </div>
                    </div>
                </div>

                <div id="development-img">
                    <img src="https://www.dropbox.com/s/7hwnjccu15vt90e/mobileDevlopment.svg?raw=1" alt="Mobile App Development" title="Mobile App Development" />
                </div>
            </section>
    </div>
  )
}

export default Hero
