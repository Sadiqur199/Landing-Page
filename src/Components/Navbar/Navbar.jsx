import React, { useState } from 'react';
import { FcBusinessman } from 'react-icons/fc';
import {FaBars} from 'react-icons/fa';
import { HiX } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import './Navbar.scss'
import image1 from '../../images/portfolio.jpg'


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
const [toggleIcon , setToggleIcon] = useState(false)
  const handleClick = ()=>{
   setToggleIcon(!toggleIcon)
  }
  return (
    <div>
    <div className='navbar'>
      <div className='navbar__container'>
         <Link to={'/'} className='navbar__container__logo'> <img src={image1} className='navbar__container__logo__image' alt="" /> </Link>
      </div>
      <ul className={`navbar__container__menu ${toggleIcon ? 'active' : ''}`}>
        {
          data.map((item ,key)=>(
            <li key={key} className='navbar__container__menu__item'>
              
              <Link className='navbar__container__menu__item__links' to={item.to}>
                {item.label}
              </Link>
            </li>
          ))
        }
      </ul>

      <div className='nav-icon' onClick={handleClick}>
        {
          toggleIcon ? <HiX size={30}></HiX> : <FaBars size={30}></FaBars>
        }
      </div>
    </div>
    </div>
  );
};

export default Navbar;