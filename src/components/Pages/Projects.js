import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';

import mantau from '../../assets/images/man-tau.jpg';
import portfolio from '../../assets/images/portfolio.jpg'
import budget from '../../assets/images/budget.jpg'

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
                                <p className={`projects__heading ${hover ? 'moveInLeft' : ''}`}>Man Tau</p><hr className="projects__line"></hr>
                                <p className={`projects__description ${hover ? 'moveInRight' : ''}`}>Home page of a musician (Mobile Responsive).<br></br>Built with: HTML, Sass, JavaScript, PHP<br></br><br></br><span className="projects__heading-visit">Click to visit website</span></p>
                            </a>
                        </figure>
                        <span className="projects__code"><a className="link" href="https://github.com/adrianfuzi/the-man-tau" target="_blank">&lt; Check out the code on GitHub &#47;&gt;</a></span>
                    </div>

                    <div className="projects">
                        <figure className="projects__item">
                            <img src={budget} alt="Budget App" className="projects__photo"></img>
                            <a href="https://adrianfuzi-budget.netlify.com/" target="_blank" className="projects__overlay" onMouseEnter={toggleHover} onMouseLeave={toggleHover}>
                                <p className={`projects__heading ${hover ? 'moveInLeft' : ''}`}>Budget App</p><hr className="projects__line"></hr>
                                <p className={`projects__description ${hover ? 'moveInRight' : ''}`}>A simple budget app (Desktop App).<br></br>Built with: Bootstrap, JavaScript<br></br><br></br><span className="projects__heading-visit">Click to visit website</span></p>
                            </a>
                        </figure>
                        <span className="projects__code"><a className="link" href="https://github.com/adrianfuzi/budget_app" target="_blank">&lt; Check out the code on GitHub &#47;&gt;</a></span>
                    </div>

                    <div className="projects">
                        <figure className="projects__item">
                            <img src={portfolio} alt="Portfolio Website" className="projects__photo"></img>
                            <a href="https://adrianfuzi-portfolio.netlify.com/" target="_blank" className="projects__overlay" onMouseEnter={toggleHover} onMouseLeave={toggleHover}>
                                <p className={`projects__heading ${hover ? 'moveInLeft' : ''}`}>Portfolio Website Template</p><hr className="projects__line"></hr>
                                <p className={`projects__description ${hover ? 'moveInRight' : ''}`}>A portfolio design template (Mobile Responsive).<br></br>Built with: HTML, Sass, JavaScript<br></br><br></br><span className="projects__heading-visit">Click to visit website</span></p>
                            </a>
                        </figure>
                        <span className="projects__code"><a className="link" href="https://github.com/adrianfuzi/portfolio" target="_blank">&lt; Check out the code on GitHub &#47;&gt;</a></span>
                    </div>

                    <NavLink to={props.navTo} className="btn btn-projects" onClick={props.click} >{props.navName}</NavLink>

                </div>
            </main>
        )
}

export default Projects;