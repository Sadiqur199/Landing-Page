import React from 'react';
import PageHeaderContent from '../../PageHeaderContent/PageHeaderContent';
import { IoMdContact } from 'react-icons/io'
import './Contact.scss'
import { Animate } from 'react-simple-animate';


const Contact = () => {
  return (
    <section id='contact' className='contact'>
      <PageHeaderContent headerText ='Contact Me' icon={<IoMdContact size={40}/>}></PageHeaderContent>
       
       <div className='contact__content'>
        <Animate
        play
        duration={1}
        delay={0}
        start={{
          transform : "translateX(-200px)"
        }}

        end={{
          transform : "translateX(0px)"
        }}
        >

          <h3 className='contact__content__header-text'>Let's Talk</h3>
        </Animate>

        <Animate
        play
        duration={1}
        delay={0}
        start={{
          transform : "translateX(200px)"
        }}
        end={{
          transform : "translateX(0px)"
        }}
        >
          <div className='contact__content__form'>
             <div className='contact__content__form__controlswrapper'>
                <div className='nameWrapper'>
                  <input required type="text" name='name' className='inputName' />
                  <label htmlFor="name" className='nameLabel'>Name</label>
                </div>
                <div className='emailWrapper'>

                <input required type="email" name='email' className='inputEmail' />
                  <label htmlFor="email" className='emailLabel'>Email</label>

                </div>
                <div className='descriptionWrapper'>

                <textarea required type="text" name='description' className='inputDescription'
                rows={5}
                 />
                  <label htmlFor="description" className='descriptionLabel'>Description</label>

                </div>
             </div>
             <button>Submit</button>
          </div>
        </Animate>
       </div>
    </section>
  );
};

export default Contact;