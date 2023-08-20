import React from 'react';
import { FaBeer } from 'react-icons/fa';


const data = [
  {
    label : 'Home',
    to: '/'
  },
  {
    label : 'About Me',
    to: '/about'
  },
  {
    label : 'Skill',
    to: '/skill'
  },
  {
    label : 'Resume',
    to: '/resume'
  },
  {
    label : 'Portfolio',
    to: '/portfolio'
  },
  {
    label : 'Contact',
    to: '/contact'
  }
]

const Navbar = () => {
  return (
    <div>
    <div className='navbar'>
      <div className='navbar__container'>
         
      </div>
    </div>
    </div>
  );
};

export default Navbar;