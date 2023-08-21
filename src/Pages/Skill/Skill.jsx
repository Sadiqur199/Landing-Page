import React from 'react';
import PageHeaderContent from '../../PageHeaderContent/PageHeaderContent';
import { GiSkills } from 'react-icons/gi'

const Skill = () => {
  return (
    <section id='skill' className='skill'>
      <PageHeaderContent headerText ='My Skill' icon={<GiSkills size={40}/>}></PageHeaderContent>
      
    </section>
  );
};

export default Skill;