import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'

import IMG3 from '../../assets/portfolio3.jpg'




const Portfolio = () => {
  return (
   <section id="portfolio">
    <h5>My Recent Work</h5>
    <h2>Portfolio</h2>

    <div className="container portfolio__container">
      <article className='portfolio__item'>
        <div className="portfolio__item-image">
        <img src={IMG1} alt="" />
        </div>
        <h3>Banking Website</h3>
        <div className="portfolio__items-cta">
          <a href="https://github.com/sarthak2908/Sparks.github.io" className='btn' target='_blank'>Github</a>
        <a href="https://transfermoney123.000webhostapp.com/"className='btn btn-primary' target='_blank'>Live Demo</a>
        </div>

      </article>
      

      
      < article className='portfolio__item'>
        <div className="portfolio__item-image">
        <img src={IMG3} alt="" />
        </div>
        <h3>Email-verification</h3>
        <div className="portfolio__items-cta">
          <a href="https://github.com/sarthak2908/email-verification" className='btn' target='_blank'>Github</a>
        
        </div>

      
      

      </article>
    </div>
   </section>
  )
}

export default Portfolio
