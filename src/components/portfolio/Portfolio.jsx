import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/1.png'
import IMG2 from '../../assets/3.png'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG1} alt='' />
          </div>
          <h3>Here are a few projects</h3>
          <a href="https://github.com" className='btn' target='_blank'>GItHub</a>
          <a href="https://github.com" className='btn btn-primary' target='_blank'>LiveDemo</a>

        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG2} alt='' />
          </div>
          <h3>Here are a few projects</h3>
          <a href="https://github.com" className='btn' target='_blank'>GItHub</a>
          <a href="https://github.com" className='btn btn-primary' target='_blank'>LiveDemo</a>
        </article>

        {/*
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG1} alt='' />
          </div>
          <h3>Here are a few projects</h3>
          <a href="https://github.com" className='btn' target='_blank'>GItHub</a>
          <a href="https://github.com" className='btn btn-primary' target='_blank'>LiveDemo</a>

        </article> */}
      </div>
    </section>
  )
}

export default Portfolio