import React from 'react'

import profile from '../assets/images/profile.jpg'

const sidebar = (props) => {
        return (
            <nav className="sidebar">
                <header className="header">
                    <img src={profile} alt="portrait" className="header__portrait"/>
                    <div className="header__title">Adrian Füzi</div>
                </header>

                <ul className="side-nav">
                    {props.home}
                    {props.about}
                    {props.projects}
                    {props.contact}
                </ul>

                <a className="resume" href="../../assets/cv_adrian_fuzi.pdf" download><svg className="resume__icon" width="36" height="44" viewBox="0 0 36 44" fill="none">
                            <path d="M18 37L29.2583 20.5H6.74167L18 37Z" stroke="#ccc"/>
                            <rect x="0.5" y="0.5" width="35" height="43" rx="1.5" stroke="#ccc"/>
                            <line x1="5" y1="6.5" x2="31" y2="6.5" stroke="#ccc"/>
                            <line x1="5" y1="10.5" x2="31" y2="10.5" stroke="#ccc"/>
                            <line x1="5" y1="14.5" x2="31" y2="14.5" stroke="#ccc"/>
                        </svg>Download CV
                </a>
                <ul className="social">

                    {/* <li className="social__item">
                        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                            <svg className="social__item-svg" viewBox="0 0 512 512"><path d="M426.8 64H85.2C73.5 64 64 73.5 64 85.2v341.6c0 11.7 9.5 21.2 21.2 21.2H256V296h-45.9v-56H256v-41.4c0-49.6 34.4-76.6 78.7-76.6 21.2 0 44 1.6 49.3 2.3v51.8h-35.3c-24.1 0-28.7 11.4-28.7 28.2V240h57.4l-7.5 56H320v152h106.8c11.7 0 21.2-9.5 21.2-21.2V85.2c0-11.7-9.5-21.2-21.2-21.2z"/></svg>
                        </a>
                    </li> */}
                    
                    <li className="social__item">
                        <a href="https://www.linkedin.com/in/adrian-f%C3%BCzi-bb7384190/" target="_blank" rel="noopener noreferrer">
                            <svg className="social__item-svg" viewBox="0 0 30 30"><path class="st2" d="M23.923,3.885c2.209,0,4,1.791,4,4v15.847c0,2.209-1.791,4-4,4H8.077c-2.211,0-4-1.791-4-4V7.885   c0-2.209,1.789-4,4-4H23.923 M23.923,2.885H8.077c-2.758,0-5,2.243-5,5v15.847c0,2.757,2.242,5,5,5h15.846c2.756,0,5-2.243,5-5   V7.885C28.923,5.128,26.679,2.885,23.923,2.885L23.923,2.885z"/><path class="st4" d="M11.723,25.827V14.933H8.101v10.895H11.723L11.723,25.827z M9.911,13.443c1.263,0,2.05-0.838,2.05-1.883  c-0.022-1.069-0.787-1.882-2.025-1.882c-1.239,0-2.049,0.812-2.049,1.882c0,1.045,0.785,1.883,2.002,1.883H9.911L9.911,13.443z"/><path class="st4" d="M13.727,25.827h3.621v-6.085c0-0.326,0.024-0.651,0.12-0.884c0.262-0.651,0.856-1.325,1.856-1.325  c1.312,0,1.836,1,1.836,2.466v5.828h3.623V19.58c0-3.348-1.787-4.905-4.171-4.905c-1.954,0-2.812,1.093-3.288,1.837l-0.063,0.292  l0.087-1.871h-3.621C13.774,15.954,13.727,25.827,13.727,25.827L13.727,25.827z"/></svg>
                        </a>
                    </li>

                    <li className="social__item">
                        <a href="https://github.com/adrianfuzi" target="_blank" rel="noopener noreferrer">
                            <svg className="social__item-svg" viewBox="0 0 512 512"><path d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9 1.4.3 2.6.4 3.8.4 8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1-8.4 1.9-15.9 2.7-22.6 2.7-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1 10.5 0 20-3.4 25.6-6 2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8 0 0 1.6-.5 5-.5 8.1 0 26.4 3.1 56.6 24.1 17.9-5.1 37-7.6 56.1-7.7 19 .1 38.2 2.6 56.1 7.7 30.2-21 48.5-24.1 56.6-24.1 3.4 0 5 .5 5 .5 12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5 1.2 0 2.6-.1 4-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z"/></svg>
                        </a>
                    </li>

                </ul>
            <div className="legal">&copy; 2019 Adrian Füzi</div>
        </nav>
        )
};

export default sidebar;