import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {RiUserReceivedLine} from 'react-icons/ri'
import {ImStack} from 'react-icons/im'
import {FaRegHandshake} from 'react-icons/fa'
import {TiMessages} from 'react-icons/ti'


const Nav = () => {
  return (
    <nav>
      <a href="#"><AiOutlineHome/></a>
      <a href="#about"><RiUserReceivedLine/></a>
      <a href="#experience"><ImStack/></a>
      <a href="#services"><FaRegHandshake/></a>
      <a href="#contact"><TiMessages/></a>
    </nav>
  )
}

export default Nav