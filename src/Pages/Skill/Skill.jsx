import React from 'react';
import PageHeaderContent from '../../PageHeaderContent/PageHeaderContent';
import { GiSkills } from 'react-icons/gi'
import './Skill.scss'
import { Animate ,AnimateKeyframes } from 'react-simple-animate';
import skillApi from './skill';
import { Line } from 'rc-progress';


const Skill = () => {
  return (
    <section id='skills' className='skills'>
      <PageHeaderContent headerText ='My Skills' icon={<GiSkills size={40}/>}></PageHeaderContent>
      
      <div className='skills__content__wrapper'>
        {
          skillApi.map((item , i)=>(
            <div key={i} className='skills__content__wrapper__inner-content'>
                <Animate 
                play
                duration={1}
                delay={0.3}
                start={{
                  transform : 'translateX(-200px)'
                }}
                end={{
                  transform : 'translateX(0px)'
                }}
                >
 
                  <h3 className='skills__content__wrapper__inner-content__category-text'>{item.label}</h3>
                  
                  <div className='skills__content__wrapper__inner-content__progressbar-container'>
                 {
                   item.data.map((skillItem,j)=>(
                     <AnimateKeyframes
                     play
                     duration={1}
                     keyframes={["opacity : 1" , "opacity : 0"]}
                     iterationCount = "1"
                      >
                       <div className='progressbar-wrapper' key={j}>
                         <p>{skillItem.skillName}</p>
                         <Line
                         percent = {skillItem.percentage}
                         strokeWidth='2'
                         strokeColor='var(--yellow-theme-main-color)'
                          trailWidth="2"
                          strokeLinecap='square'
                         ></Line>
                       </div>
                     </AnimateKeyframes>
                   ))
                 }
               </div>
                
             </Animate>
            </div>
          ))
        }
      </div>
    </section>
  );
};

export default Skill;