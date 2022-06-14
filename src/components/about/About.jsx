import React from 'react'
import './about.css' 
import ME from '../../assets/marco_beach.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {TiFolderOpen} from 'react-icons/ti'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About me</h2>

      <div className="container about__container">

        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="beach" />
          </div>
        </div>
      
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className='about__icon'></FaAward>
              <h5>Experience</h5>
              <small>3+ Years working</small>
            </article>

            <article className="about__card">
              <FiUsers className='about__icon'></FiUsers>
              <h5>Clients</h5>
              <small>10+ clients</small>
            </article>

            <article className="about__card">
              <TiFolderOpen className='about__icon'></TiFolderOpen>
              <h5>Projects</h5>
              <small>30+ Completed</small>
            </article>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse veniam recusandae, accusantium rerum, velit alias beatae nisi eum quasi vitae a, obcaecati consequuntur ex? Ullam ab dolore consequatur fugit ipsa!</p>

            <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About