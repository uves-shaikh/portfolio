import React from 'react'
import './Portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'

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
        </article>
      </div>
    </section>
  )
}

export default Portfolio