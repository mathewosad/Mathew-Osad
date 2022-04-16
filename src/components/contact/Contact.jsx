import React from 'react'
import './contact.css'
import {MdOutlineMarkEmailRead} from 'react-icons/md'
import {SiLinkedin} from 'react-icons/si'
import {SiGithub} from 'react-icons/si'

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact</h2>

      <div className="container contact__container">
        <article className='contact__option'>
          <MdOutlineMarkEmailRead className='contact__option-icon'/>
          <h4>Email</h4>
          <h5>Matthewosad@yahoo.com</h5>
          <a href="mailto:matthewosad@yahoo.com" target="_blank"></a>
        </article>
        <article className='contact__option'>
          <SiLinkedin className='contact__option-icon'/>
          <h4>Linkedin</h4>
          <a href="https://www.linkedin.com/in/mathew-osadolor-848b33177/" target="_blank">Send a message</a>
        </article>
        <article className='contact__option'>
          <SiGithub className='contact__option-icon'/>
          <h4>GitHub</h4>
          <a href="https://github.com/mathewosad" target="_blank">Checkout My Repo</a>
        </article>
      </div>
      {/* Form action */}
      <form action="">
        <input type="text" name= 'name' placeholder="Full Name" required />
        <input type="email" name= 'email' placeholder="Email" required />
        <textarea name="message" id="" cols="30" rows="10" placeholder="Message" required></textarea>
        <button type="submit" className='btn btn-primary'>Send</button>
      </form>
    </section>
  )
}

export default Contact