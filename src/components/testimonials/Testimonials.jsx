import React from 'react'
import './testimonials.css'
import MAN1 from '../../assets/man1.jpg'
import MAN2 from '../../assets/man2.jpg'
import WOMAN1 from '../../assets/woman1.jpg'

import { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react'
import 'swiper/swiper.min.css'
import 'swiper/modules/pagination/pagination.min.css'

const data = [ 
  {
    avatar: MAN1,
    name: 'Carlos Pérez',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe aliquid veniam dolor.'
  },
  {
    avatar: MAN2,
    name: 'Issac Gutiérrez',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe aliquid veniam dolor.'
  },
  {
    avatar: WOMAN1,
    name: 'Mariana Gómez',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe aliquid veniam dolor.'
  }

];
const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from People</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{clickable: true}}>
        {
          data.map(({avatar, name, review}, index) => {
            return(
              <SwiperSlide  key={index} className="testimonial">
                <div className="client__avatar">
                  <img src={avatar} alt="man1" />
                </div>
                <h5 className="client__name">{name}</h5>
                <small className="client__review">
                  {review}
                </small>
              </SwiperSlide >
            )
          })
        }
      </Swiper>

    </section>
  )
}

export default Testimonials