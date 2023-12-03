import React from 'react';
import './projects.css';
import ML from '../../images/ml.png';
import web3 from '../../images/web3.png';
import FS  from '../../images/fullstack.png';
import website from '../../images/website.png';


const Projects = () => {
  return (
    <section id='works'>
        <h2 className='projTitle'>My Projects</h2>
        <span className='projDesc'>Give a basic overview of the projects you did.</span>
        <div className='projImgs'>
          <div className='projImg'>
            <h2>Machine Learning Project</h2>
            <img src={ML} alt='' className='Img' /></div>
          <div className='projImg'>
            <h2>Web 3 Project</h2>
            <img src={web3} alt='' className='Img' /></div>
          <div className='projImg'>
            <h2>Personal Website Project</h2>
            <img src={website} alt='' className='Img' /></div>
          <div className='projImg'>
            <h2>Full Stack Project</h2>
            <img src={FS} alt=''  className='Img'/></div>
        </div>            
    </section>
  )
}

export default Projects
