import React from 'react'
import './Portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/shoes.png'
import IMG3 from '../../assets/dentist.png'
import IMG4 from '../../assets/mealmates.png'
import IMG5 from '../../assets/tasteez.png'
import IMG6 from '../../assets/cinesphere.png'


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

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG4} alt="" />
          </div>
          <h3>MealMates</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/uves-shaikh/MealMates" className='btn' target="_blank">GitHub</a>
            <a href="https://mealmates.vercel.app/" className='btn btn-primary' target="_blank">Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG5} alt="" />
          </div>
          <h3>Tasteez</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/uves-shaikh/tasteez" className='btn' target="_blank">GitHub</a>
            <a href="https://tasteez.vercel.app/" className='btn btn-primary' target="_blank">Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG6} alt="" />
          </div>
          <h3>Cinesphere</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/uves-shaikh/CineSphere" className='btn' target="_blank">GitHub</a>
            <a href="https://cine-sphere-ruddy.vercel.app/" className='btn btn-primary' target="_blank">Live Demo</a>
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
        </article> */}
      </div>
    </section>
  )
}

export default Portfolio