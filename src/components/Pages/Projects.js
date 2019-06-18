import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';

import mantau from '../../assets/images/man-tau.jpg';
import thiswebsite from '../../assets/images/this-website.jpg'

const Projects = (props) => {

    const [ hover, setHover ] = useState(false);
    const toggleHover = () => setHover(!hover);

        return (
            <main className="page page-projects" id="projects">
                <div className="content content-projects">
                    <div className="content__title">Projects</div>

                    <div className="projects">
                        <figure className="projects__item">
                            <img src={mantau} alt="Man Tau" className="projects__photo"></img>
                            <a href="http://the-man-tau.com/" target="_blank" className="projects__overlay" onMouseEnter={toggleHover} onMouseLeave={toggleHover}>
                                <p className={`projects__heading ${hover ? 'moveInLeft' : ''}`}>Man Tau <span className="projects__heading-visit">Visit Website</span></p><hr className="projects__line"></hr>
                                <p className={`projects__description ${hover ? 'moveInRight' : ''}`}>Home page of a musician.<br></br> <br></br>Built with: HTML, Sass, JavaScript, PHP</p>
                            </a>
                        </figure>
                        <span className="projects__code"><a className="link" href="https://github.com/adrianfuzi/the-man-tau" target="_blank">&lt; Check out the code on GitHub &#47;&gt;</a></span>
                    </div>

                    <div className="projects">
                        <figure className="projects__item">
                            <img src={thiswebsite} alt="This Website" className="projects__photo"></img>
                            <a className="projects__overlay" onMouseEnter={toggleHover} onMouseLeave={toggleHover}>
                                <p className={`projects__heading ${hover ? 'moveInLeft' : ''}`}>This Website</p><hr className="projects__line"></hr>
                                <p className={`projects__description ${hover ? 'moveInRight' : ''}`}>My Portfolio<br></br> <br></br>Built with: Sass, React</p>
                            </a>
                        </figure>
                        <span className="projects__code"><a className="link" href="https://github.com/adrianfuzi/portfolio" target="_blank">&lt; Check out the code on GitHub &#47;&gt;</a></span>
                    </div>
                        {/* <div className="projects">
                        <figure className="projects__item">
                            <img src={website} alt="project2" className="projects__photo"></img>
                            <span className="projects__overlay">
                                    <p className="projects__heading">Project 2</p><hr className="projects__line"></hr>
                                    <p className="projects__description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem, sit id, in tenetur quia excepturi eos dolore iste.</p>
                            </span>
                        </figure>
                        <span className="projects__code">&lt; Check out the code on GitHub &#47;&gt;</span>
                    </div> */}
                    {/* <a href="#" className="btn" id="btnGetInTouch">Get in touch</a> */}
                    <NavLink to={props.navTo} className="btn btn-projects" onClick={props.click} >{props.navName}</NavLink>

                </div>
            </main>
        )
}

export default Projects;