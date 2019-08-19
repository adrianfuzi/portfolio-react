import React from 'react';
import { NavLink } from 'react-router-dom';

const about = (props) => {

        return (
            <main className="page page-about" id="about">
                <div className="content content-about">
                    <div className="content__title">About</div>
                    <p className="content__text">
                        Hi, I'm Adrian Füzi.<br></br><br></br>
                        
                        My passion is to develop excellent websites for the modern web in addition to learning more and more about the latest web technologies. With the endless possibilities of building complex and user friendly web applications, front-end web development has become my main focus of interest in the past couple of years. Recently, I began doing freelance web design and development for projects I find interesting and challenging.<br></br><br></br>
                        
                        I have a solid understanding of the core web technologies including <b>HTML</b>, <b>CSS(Sass)</b>, <b>JavaScript</b>, as well as other tools such as <b>Bootstrap</b> and <b>WordPress</b> to build, host and maintain beautiful, mobile responsive and functional websites. In addition to these technologies, I have a basic grasp of <b>React</b>, with which this website was built. I also possess the fundemantal skills of web design and skills in related technologies such as Adobe <b>Photoshop</b>, <b>Illustrator</b> and Google's design and prototyping tool <b>Figma</b>.<br></br><br></br>

                        My current objective is to use my skills and passion in the corporate environment to provide value on a much larger scale. Although good software can be developed by individuals, I firmly believe that truly great software is developed by teams.<br></br><br></br>

                        Please <NavLink to={props.link} className="link" onClick={props.clickLink} >{props.linkName}</NavLink> if you're considering me working with your team or just want to chat.
                        
                        </p>
                    <NavLink to={props.navTo} className="btn" onClick={props.click} >{props.navName}</NavLink>
                    <a className="download__resume" href="../../assets/cv_adrian_fuzi.pdf" download><svg className="download__resume-icon" width="36" height="44" viewBox="0 0 36 44" fill="none">
                            <path d="M18 37L29.2583 20.5H6.74167L18 37Z" fill="#007180"/>
                            <rect x="0.5" y="0.5" width="35" height="43" rx="1.5" stroke="#007180"/>
                            <line x1="5" y1="6.5" x2="31" y2="6.5" stroke="#007180"/>
                            <line x1="5" y1="10.5" x2="31" y2="10.5" stroke="#007180"/>
                            <line x1="5" y1="14.5" x2="31" y2="14.5" stroke="#007180"/>
                        </svg>Download CV
                    </a>
                </div>
            </main>
        )
}

export default about;
