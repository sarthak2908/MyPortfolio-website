import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
   <section id="experience">
    <h5>What Skills I Have</h5>
    <h2>My Experience</h2>

    <div className='container experience__container'>
      <div className="experience__frontend">
      <h3>Frontend Development</h3>
      <div className="experience_content">
        <article className='experience__details'>
      <BsPatchCheckFill/>
      <h4>HTML</h4>
      <small className='text-light'>Intermediate</small>

        </article>
        <article className='experience__details'>
      <BsPatchCheckFill/>
      <h4>CSS</h4>
      <small className='text-light'>Intermediate</small>

        </article>
        <article className='experience__details'>
      <BsPatchCheckFill/>
      <h4>Javascript</h4>
      <small className='text-light'>Intermediate</small>

        </article>
        <article className='experience__details'>
      <BsPatchCheckFill/>
      <h4>Bootstrap</h4>
      <small className='text-light'>Intermediate</small>

        </article>
      
        <article className='experience__details'>
      <BsPatchCheckFill/>
      <h4>React</h4>
      <small className='text-light'>Intermediate</small>

        </article>

      </div>
      </div>
      <div className="experience__backend">
        <h3>Backend Development</h3>
      <div className="experience_content">
        <article className='experience__details'>
      <BsPatchCheckFill/>
      <h4>PHP</h4>
      <small className='text-light'>Intermediate</small>

        </article>
        <article className='experience__details'>
      <BsPatchCheckFill/>
      <h4>MYSQL</h4>
      <small className='text-light'>Intermediate</small>

        </article>
        <article className='experience__details'>
      <BsPatchCheckFill/>
      <h4>Nodejs</h4>
      <small className='text-light'>Beginner</small>

        </article>
        

      </div>
      </div>

      </div>
  

   </section>
  )
}

export default Experience
