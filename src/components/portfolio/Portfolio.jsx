import React from 'react'
import './Portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/shoes.png'
import IMG3 from '../../assets/dentist.png'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
      <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>My Portfolio</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/uves-shaikh/portfolio" className='btn' target="_blank">GitHub</a>
            <a href="#" className='btn btn-primary' target="_blank">Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>E-Commerse website for shoes</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/uves-shaikh/Footique" className='btn' target="_blank">GitHub</a>
            <a href="http://footique-frontend.vercel.app" className='btn btn-primary' target="_blank">Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3>Appointment For Dentist</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/uves-shaikh/SuperDental" className='btn' target="_blank">GitHub</a>
            <a href="https://superdentall.000webhostapp.com/index.php" className='btn btn-primary' target="_blank">Live Demo</a>
          </div>
        </article>

        {/* <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>My Portfolio</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/uves-shaikh/portfolio" className='btn' target="_blank">GitHub</a>
            <a href="#" className='btn btn-primary' target="_blank">Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>My Portfolio</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/uves-shaikh/portfolio" className='btn' target="_blank">GitHub</a>
            <a href="#" className='btn btn-primary' target="_blank">Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>My Portfolio</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/uves-shaikh/portfolio" className='btn' target="_blank">GitHub</a>
            <a href="#" className='btn btn-primary' target="_blank">Live Demo</a>
          </div>
        </article> */}
      </div>
    </section>
  )
}

export default Portfolio