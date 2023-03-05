import React from 'react'
import './Testimonials.css'
import AVTR1 from '../../assets/avatar1.png'
import AVTR2 from '../../assets/avatar2.png'
import AVTR3 from '../../assets/avatar3.png'
import AVTR4 from '../../assets/avatar4.png'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    avatar: AVTR1,
    name: 'Tina Snow',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, aspernatur ipsa veniam fugiat fuga asperiores qui quas, quod nesciunt et quis molestiae error nam necessitatibus?'
  },
  {
    avatar: AVTR2,
    name: 'Shatta wale',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, aspernatur ipsa veniam fugiat fuga asperiores qui quas, quod nesciunt et quis molestiae error nam necessitatibus?'
  },
  {
    avatar: AVTR3,
    name: 'kwem Despite',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, aspernatur ipsa veniam fugiat fuga asperiores qui quas, quod nesciunt et quis molestiae error nam necessitatibus?'
  },
  {
    avatar: AVTR4,
    name: 'nana ama mcWell',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, aspernatur ipsa veniam fugiat fuga asperiores qui quas, quod nesciunt et quis molestiae error nam necessitatibus?'
  }
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Reviews from Clients</h5>
      <h2>Testimonials</h2>
      <Swiper className="container testimonials__container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}>
        {
          data.map(({ avatar, name, review }, index) => {
            return (
              <SwiperSlide key={index} className='testimonial'>
                <div className="client__name">
                  <img className='client__avatar' src={avatar} alt="" />
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className='client__review'>{review}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials