import React from 'react'
import './contact.css'
import {MdOutlineMarkEmailRead} from 'react-icons/md'
import {AiOutlineMessage} from 'react-icons/ai'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const formContact = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_8slj7om', 'template_z1x76sf', formContact.current, 'puxRP0o4zhrIAMb5F')
    
    e.target.reset();
    document.getElementById('myForm').reset();

  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMarkEmailRead className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>mupgutierrez@gmail.com</h5>
            <a href="mailto:mupgutierrez@gmail.com">Send me an email</a>
          </article>
          <article className="contact__option">
            <AiOutlineMessage className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Marco Pérez</h5>
            <a href="https://m.me/100001731238867">Send me a message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+5549043822</h5>
            <a href="https://api.whatsapp.com/send?phone=5549048392">Send me a Wha</a>
          </article>
        </div>
        {/* End of Options */}
        <form id='myForm' ref={formContact} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your message' required></textarea>
          <button type='submit' className="btn btn-primary">Send this message</button>
        </form>
      </div>

    </section>
  )
}

export default Contact