import React from 'react'
import { NavLink } from 'react-router-dom';

const about = (props) => {

        return (
            <main className="page page-about" id="about">
                <div className="content content-about">
                    <div className="content__title">About</div>
                    <p className="content__text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis, quasi ratione. Illum nihil asperiores error ipsum corporis excepturi pariatur aut eos eum sint, cupiditate nulla ipsam facilis porro quos id. Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae laborum necessitatibus vitae esse odit consequuntur, ut atque totam modi. Ex, facilis accusantium? In ab non atque eius quidem assumenda temporibus?
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis, quasi ratione. Illum nihil asperiores error ipsum corporis excepturi pariatur aut eos eum sint, cupiditate nulla ipsam facilis porro quos id. Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae laborum necessitatibus vitae esse odit consequuntur, ut atque totam modi. Ex, facilis accusantium?<br/><br/> In ab non atque eius quidem assumenda temporibus?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis, quasi ratione. Illum nihil asperiores error ipsum corporis excepturi pariatur aut eos eum sint, cupiditate nulla ipsam facilis porro quos id. Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae laborum necessitatibus vitae esse odit consequuntur, ut atque totam modi. Ex, facilis accusantium? In ab non atque eius quidem assumenda temporibus?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis, quasi ratione. Illum nihil asperiores error ipsum corporis excepturi pariatur aut eos eum sint, cupiditate nulla ipsam facilis porro quos id. Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae laborum necessitatibus vitae esse odit consequuntur, ut atque totam modi. Ex, facilis accusantium? In ab non atque eius quidem assumenda temporibus?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis, quasi ratione. Illum nihil asperiores error ipsum corporis excepturi pariatur aut eos eum sint, cupiditate nulla ipsam facilis porro quos id. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
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
