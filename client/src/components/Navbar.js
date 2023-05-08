import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { navLinks } from '../constants';
import logo from '../assets/logo.png'

const Navbar = () => {
  const [ active , setActive ] = useState("");

  return (
    <nav>
      <div style={{ display: 'flex'}}>
        <Link to='/' onClick={() => {
          setActive("");
          window.scrollTo(0,0);
        }}>
            <img src={logo} height="100px" width="100px"/>
        </Link>
        <ul style={{ display: 'flex'}}>
          {
            navLinks.map((link) => {
              return <li key={link.id} onClick={() => setActive(link.title)}style={{
                marginRight: '30px'
              }}>
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            })
          }
        </ul>
      </div> 
    </nav>
  )
}

export default Navbar