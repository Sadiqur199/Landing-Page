import React from 'react';
import PageHeaderContent from '../../PageHeaderContent/PageHeaderContent';
import { IoMdContact } from 'react-icons/io'
const Contact = () => {
  return (
    <section id='contact' className='contact'>
      <PageHeaderContent headerText ='Contact Me' icon={<IoMdContact size={40}/>}></PageHeaderContent>
      
    </section>
  );
};

export default Contact;