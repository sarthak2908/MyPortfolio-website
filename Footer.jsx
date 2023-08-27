import React from 'react'
import './footer.css'
import {GrLinkedin} from 'react-icons/gr'
import {ImGithub} from 'react-icons/im'
import {SiLeetcode} from 'react-icons/si'
const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Sarthak Gupta</a>
      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfoli">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/sarthak-gupta-249914211/"><GrLinkedin/></a>
        <a href="https://github.com/sarthak2908"><ImGithub/></a>
        <a href="https://leetcode.com/sarthak2908/"><SiLeetcode/></a>
       
      </div>
      <div className="footer__copyright">
        <small>&copy; Sarthak Gupta's Portfolio.All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer
