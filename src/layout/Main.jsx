import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import { Outlet, useLocation } from 'react-router-dom';
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import MyParticles from '../Utils.js/Particles';
import './Main.scss'
const Main = () => {
const location = useLocation()

  const handleInit = async (main)=>{
    await loadFull(main)
  }

  const renderParticleJsInHomepage = location.pathname ==='/'

  return (
    <div className='Main'>
      {
        renderParticleJsInHomepage &&
        <Particles id='particles' options={MyParticles} init={handleInit}></Particles>
      }

      <Navbar></Navbar>
      <div className='Main__page-content'>
      <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Main;