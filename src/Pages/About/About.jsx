import React from 'react';
import PageHeaderContent from '../../PageHeaderContent/PageHeaderContent';
import { BsInfoCircleFill } from 'react-icons/bs'
import { Animate } from 'react-simple-animate';
import './About.scss'
import {DiApple , DiAndroid} from 'react-icons/di'
import {FaDev , FaDatabase} from 'react-icons/fa'

const personalDetails = [
  {
    label : 'Name',
    value : 'Sadiqur Rahman'
  },
  {
    label : 'Age',
    value : '22'
  },
  {
    label : 'Education',
    value : 'B.SC IN CSE'
  },
  {
    label : 'Expert',
    value : 'Full Stack Web Developer'
  },
  {
    label : 'Address',
    value : 'Dhaka,Bangladesh'
  },
  {
    label : 'Mail',
    value : 'sadiqurrhaman199@gmail.com'
  },
  {
    label : 'Contact',
    value : '+8801775070762'
  }
]

const jobSummery = 'To seek for a challenging career in a growing organization where my knowledge and skills can blend with my creative approach where I can contribute to its long-term goals thereby helping to strengthen my professional skills I’ve acquired throughout my career. In search for a position where I can use my educational and teamwork skills to help the company meet and surpass its goals. '

const About = () => {
  return (
    <section id='about' className='about'>
      <PageHeaderContent headerText ='About Me' icon={<BsInfoCircleFill size={40}/>}></PageHeaderContent>
      
      <div className='about__content'>
        <div className='about__content__PersonalWrapper'>

        <Animate
       play
       duration={1}
       delay={0.5}
       start={{
        transform : 'translateX(-900px)'
       }}

       end={{
         transform : 'translateX(0px)'
       }}
       >
       <h3>Web Developer</h3>
       <p>{jobSummery}</p>

       </Animate>
       
       <Animate
       play
       duration={1.5}
       delay={1}
       start={{
        transform : 'translateX(400px)'
       }}

       end={{
         transform : 'translateX(0px)'
       }}
       >
       <h3 className='personalInfo'>Personal Information</h3>
       <ul>
          {
            personalDetails.map((item,i)=>(
              <li key={i}>
                <span className='title'>{item.label}</span>
                <span className='value'>{item.value}</span>
              </li>
            ))
          } 
       </ul>
       </Animate>

        </div>

        
        <div className='about__content__ServicesWrapper'>
        <Animate
       play
       duration={1.5}
       delay={1}
       start={{
        transform : 'translateX(600px)'
       }}

       end={{
         transform : 'translateX(0px)'
       }}
       >
          <div className='about__content__ServicesWrapper__innerContent'>
          <div><FaDev size={60} color='var(--yellow-theme-main-color)'/></div>
          <div><DiAndroid size={60} color='var(--yellow-theme-main-color)'/></div>
          <div><FaDatabase size={60} color='var(--yellow-theme-main-color)'/></div>
          <div><DiApple size={60} color='var(--yellow-theme-main-color)'/></div>
          </div>
          </Animate>
        </div>
      </div>
    </section>
  );
};

export default About;