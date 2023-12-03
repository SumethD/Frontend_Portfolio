import React, { useRef } from 'react'
import './contact.css'
import facebook from '../../images/facebook.png'
import insta from '../../images/instagram.png'
import linkedin from '../../images/linkedin.png'
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_yu6pvmk', 'template_usslxip', form.current, '1yZqtOGhdZKoNdD0s')
      .then((result) => {
          console.log(result.text);
          e.target.reset();
          alert('Email Sent')
      }, (error) => {
          console.log(error.text);
      });
    };
  return (
    <section id='contact'> 
    <h1 className='contactpgTitle'> Contact Me</h1>
    <span className='contactDesc'>Please fill out the form below  to discuss any work opportunities </span>
    <form className='contactForm' ref={form} onSubmit={sendEmail}>
      <input type='text' className='name' placeholder='Your Name' name='your_name'/>
      <input type='email' className='email' placeholder='Your Email' name='your_email'/>
      <textarea className='msg' name='message' rows={5} placeholder='Your Message'></textarea>
      <button type='submit' value='Send' className='submitBtn'>Submit</button>
      <div className='links'>
        <img src={facebook} alt=''className='link'/>
        <img src={insta} alt=''className='link'/>
        <img src={linkedin} alt=''className='link'/>
      </div>
    </form>
    </section>
  )
}

export default Contact