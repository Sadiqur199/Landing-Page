import React from 'react';
import './Home.scss'
import { useNavigate } from 'react-router-dom';
import { Animate } from 'react-simple-animate';

const Home = () => {
const navigate = useNavigate()
  const handleClick = ()=>{
     navigate('/contact')
  }

  return (
    <section id='home' className='home'>
      <div className='home__text-wrapper'>
        <h1>Hello I'm Sadiqur Rahman
          <br></br>
          Web Developer
        </h1>
      </div>
       <Animate
       play
       duration={1.5}
       delay={1}
       start={{
        transform : 'translateY(550px)'
       }}

       end={{
         transform : 'translateX(0px)'
       }}
       >
       <div className='home__contact-me'>
        <button onClick={handleClick}>Hire Me</button>
      </div>
       </Animate>
    </section>
  );
};

export default Home;