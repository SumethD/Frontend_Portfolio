import React from 'react';
import '../intro/intro.css'
import bg from '../../images/intro.png'

const Intro =() => {
    return (
        <section id = 'intro'>
            <div className='introContent'>
                <span className='hello'>Hello,</span>
                <span className='introtxt'>I'm<span className='introName'> Sumeth</span> <br/> Computer Science Major</span>
                <p className='intopara'>A computer sci major who is still on his 3rd year in uni </p>

            </div>
            <img src={bg} alt='' className='bg'/>

        </section>
    )
}
export default Intro;