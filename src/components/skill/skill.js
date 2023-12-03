import React from "react";
import './skill.css'
import javapic from '../../images/java.png'
import py from '../../images/py.png'
import cplus from '../../images/c.png'

const Skills = () => {
    return (
        <section id='skills'>
            <span className="skillTitle">What I've Learnt</span>
            <span className="skillDesc">COMPLETE THIS BASED ON WHAT YOU HAVE LEARNT THRU 3 YEARS IN UNI</span>
            <div className="skillBars">
                <div className="skillBar">
                    <img src={py} alt="python" className="skillBarImg"></img>
                    <div className="skillBarText">
                        <h2>Python(Data Analysis and Machine learning)</h2>
                        <p>This a demo text box , complete it with the necessary details later on</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={javapic} alt="java" className="skillBarImg"></img>
                    <div className="skillBarText">
                        <h2>Java(OOP and web dev)</h2>
                        <p>This a demo text box , complete it with the necessary details later on</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={cplus} alt="cplus" className="skillBarImg"></img>
                    <div className="skillBarText">
                        <h2>C++</h2>
                        <p>This a demo text box , complete it with the necessary details later on</p>
                    </div>
                </div>  
            </div>
        </section>

    )
}

export default Skills