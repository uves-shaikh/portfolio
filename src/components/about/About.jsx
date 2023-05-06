import React from 'react'
import './About.css'
import ME from '../../assets/about_me.jpg'
import {BsAward} from 'react-icons/bs'
import {BsFolderPlus} from 'react-icons/bs'
import {FiUsers} from 'react-icons/fi'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <BsAward className='about__icon'/>
              <h5>Experience</h5>
              <small>Fresher</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>Ready to fill this space</small>
            </article>

            <article className='about__card'>
              <BsFolderPlus className='about__icon'/>
              <h5>Projects</h5>
              {/* <small>Portfolio</small>
              <br />
              <small>E-commerse website</small> */}
              <small>
              <ul>
                <li>Portfolio</li>
                <li>E-commerse website</li>
              </ul>
              </small>
            </article>
          </div>

          <p>
          Hi! I'm Uves from city of Sun(Surat). I'm studying at C.K.Pithawaala College of Engineering and Technology, and about to get my degree in Computer Engineering. 
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About