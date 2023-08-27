import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BsBookHalf} from 'react-icons/bs'
import {AiOutlineMessage} from 'react-icons/ai'
import {useState} from 'react'

const Nav = () => {
  const[activeNav,setActiveNav]=useState('#')
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav==='#'?'active':''}><AiOutlineHome/></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav==='#about'?'active':''}  ><AiOutlineUser/></a>
      <a href="#experience"><BsBookHalf/></a>
      
      <a href="#contact"><AiOutlineMessage/></a>
    </nav>
  )
}

export default Nav
