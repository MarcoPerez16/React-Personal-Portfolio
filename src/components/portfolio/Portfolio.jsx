import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/web_page.jpg'
import IMG2 from '../../assets/ip.jpg'
import IMG3 from '../../assets/quick_sort.jpg'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Web Page of BoomPercussion',
    github: 'https://github.com/MarcoPerez16/Django-BoomPercussion.git',
    demo: 'https://github.com/MarcoPerez16/Django-BoomPercussion.git'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Ip access database',
    github: 'https://github.com/MarcoPerez16/Django-BoomPercussion.git',
    demo: 'https://github.com/MarcoPerez16/Django-BoomPercussion.git'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Recommender of Movies',
    github: 'https://github.com/MarcoPerez16/Django-BoomPercussion.git',
    demo: 'https://github.com/MarcoPerez16/Django-BoomPercussion.git'
  }
];

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className="btn">Github</a>
                  <a href={demo} className='btn btn-primary'>Demo</a>
                </div>
              </article>
            )
          }
          )
        }
      </div>
    </section>
  )
}

export default Portfolio