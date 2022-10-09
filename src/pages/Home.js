import React from 'react'
import {FaEnvelope} from 'react-icons/fa'
import {FaLinkedinIn} from 'react-icons/fa'
import {FaGithub} from 'react-icons/fa'
import "../styles/Home.css"

function Home() {
  return (
    <div className='home'>
      <div className='about'>
        <h2> HI, me aroni</h2>
        <div className='prompt'> 
         <p>
           me this with this this abilities
         </p>
         <FaEnvelope/>
         <FaLinkedinIn/>
         <FaGithub/>
        </div>
      </div>
      <div className='skills'>
        <h1> Skills</h1>
        <ol className='list'>
          <li className='item'>
            <h2> Front-End</h2>
            <span>
              ReactJS, BootStrap, HTML, CSS, NPM
            </span>
          </li>
          <li className='item'>
            <h2> Back-End</h2>
            <span>
              NodeJS, ExpressJs, MongoDB, MySQL
            </span>
          </li>
          <li className='item'>
            <h2> Languages</h2>
            <span>
              C++, JavaScript, Python, Java
            </span>
          </li>
        </ol>
      </div>
    </div>
  )
}

export default Home