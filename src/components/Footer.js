import React from 'react'
import {FaInstagramSquare} from 'react-icons/fa'
import {FaFacebookSquare} from 'react-icons/fa'
import {FaLinkedinIn} from 'react-icons/fa'
import {FaGithub} from 'react-icons/fa'
import "../styles/Footer.css"

function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
            <FaInstagramSquare />
            <FaFacebookSquare />
            <FaLinkedinIn />
            <FaGithub />
        </div>
    </div>
  )
}

export default Footer