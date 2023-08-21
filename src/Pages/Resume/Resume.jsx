import React from 'react';
import PageHeaderContent from '../../PageHeaderContent/PageHeaderContent';
import { GrDocument } from 'react-icons/gr'

const Resume = () => {
  return (
    <section id='resume' className='resume'>
      <PageHeaderContent headerText ='My Resume' icon={<GrDocument size={40}/>}></PageHeaderContent>
      
    </section>
  );
};

export default Resume;