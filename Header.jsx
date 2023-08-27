import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.jpg'
import HeaderSocial from './HeaderSocials'
const Header = () => {
  return (
   <header>
    <div className="container header_container">
      <h5>Hello I'm</h5>
      <h1>Sarthak Gupta</h1>
      <h5 className="text-light">FullStack Developer</h5>
      <CTA />
      <HeaderSocial/>
      
        <img src={ME} alt="" className='me'/>
      
      <a href="#contact"className='scroll__down'>Scroll Down</a>
    </div>
   </header>
  )
}

export default Header
