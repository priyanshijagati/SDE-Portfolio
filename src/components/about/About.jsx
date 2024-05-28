import React from 'react';
import './About.css';
import Image from '../../assets/me(uniform).jpg';
import Resume from '../../assets/resume.pdf';
import AboutBox from './AboutBox';

const About = () => {
    const downloadResume = async () => {
        window.open(Resume, '_blank');
    }


    return (
        <section className="about container section" id="about">
            <h2 className="section__title">About Me </h2>

            <div className="about__container grid">
                <img src={Image} alt="" className='about__img' />

                <div className="about__data grid">
                    <div className="about__info">
                        <p className="about__description">
                            Hello! I'm Priyanshi, a pre-final year student at Jaypee University of Engineering and Technology,Guna, where I am pursuing Bachelors degree in Computer Science.<br /><br />
                            A passionate computer science student who loves exploring new technologies and solving complex problems. and I hope to grow even further as Software Engineer. With a strong foundation in programming and frontend development, I'm constantly striving to learn and improve my skills.<br /><br />
                            Here are a few technologies I’ve been working with recently:
                        </p>
                        <ul className="about__list">
                            <li>SAP HANA</li>
                            <li>ABAP</li>
                            <li>JavaScript (ES6+)</li>
                            <li>SQL</li>
                            <li>React</li>
                            <li>Node.js</li>
                            <li>Tailwind</li>
                            <li>Java</li>
                        </ul>
                        <button className="btn" onClick={downloadResume}>Donwload CV</button>
                    </div>

                    {/* <div className="about__skills grid">
                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Development</h3>
                                <span className="skills__number">90%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage development">

                                </span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">UI/UX Design</h3>
                                <span className="skills__number">80%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage ui__design">

                                </span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Photography</h3>
                                <span className="skills__number">60%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage photography">

                                </span>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>

            <AboutBox />
        </section>
    )
}

export default About