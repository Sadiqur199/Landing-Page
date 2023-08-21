import React from 'react';
import PageHeaderContent from '../../PageHeaderContent/PageHeaderContent';
import { IoMdContact } from 'react-icons/io'


const Portfolio = () => {
  return (
    <section id='portfolio' className='portfolio'>
      <PageHeaderContent headerText ='My Portfolio' icon={<IoMdContact size={40}/>}></PageHeaderContent>
      
      <div>

      </div>
    </section>
  );
};

export default Portfolio;