import React, { useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import './stylesheets/main.scss';

import Sidebar from './components/Sidebar';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

import ScrollToTop from './components/ScrollToTop';

import Home from './components/Pages/Home';
import About from './components/Pages/About';
import Projects from './components/Pages/Projects';
import Contact from './components/Pages/Contact';


const App = () => {
  const [ activeState, setActiveState ] = useState({
      homeActive: false,
      aboutActive: false,
      projectsActive: false,
      contactActive: false
    });

    const projectsActiveHandler = () => {
      setActiveState({homeActive: false, aboutActive: false, projectsActive: true, contactActive: false});
    }

    const aboutActiveHandler = () => {
      setActiveState({homeActive: false, aboutActive: true, projectsActive: false, contactActive: false});
    }

    const contactActiveHandler = () => {
      setActiveState({homeActive: false, aboutActive: false, projectsActive: false, contactActive: true});
    }

    const activeStateHandler = () => {
      const currentPage = window.location.pathname;

      if (currentPage === '/home') {
        setActiveState({homeActive: true, aboutActive: false, projectsActive: false, contactActive: false});
      } else if (currentPage === '/about') {
        setActiveState({homeActive: false, aboutActive: true, projectsActive: false, contactActive: false});
      } else if (currentPage === '/projects') {
        setActiveState({homeActive: false, aboutActive: false, projectsActive: true, contactActive: false});
      } else if (currentPage === '/contact') {
        setActiveState({homeActive: false, aboutActive: false, projectsActive: false, contactActive: true});
      } else {
        setActiveState({homeActive: false, aboutActive: false, projectsActive: false, contactActive: false});
      }
    }

  return (

    window.onload = activeStateHandler,

    <div className="container">
      <div className="content-area">
        <Sidebar 
          home={<Navigation 
            class={`side-nav__item ${activeState.homeActive ? 'side-nav__item--active' : ''}`} 
            navTo='./home' 
            linkClass='side-nav__link' 
            navName='Home' click={activeStateHandler}/>}

          about={<Navigation 
            class={`side-nav__item ${activeState.aboutActive ? 'side-nav__item--active' : ''}`} 
            navTo='./about' 
            linkClass='side-nav__link' 
            navName='About' 
            click={activeStateHandler}/>}

          projects={<Navigation 
            class={`side-nav__item ${activeState.projectsActive ? 'side-nav__item--active' : ''}`} 
            navTo='./projects' 
            linkClass='side-nav__link' 
            navName='Projects' 
            click={activeStateHandler}/>}

          contact={<Navigation 
            class={`side-nav__item ${activeState.contactActive ? 'side-nav__item--active' : ''}`} 
            navTo='./contact' 
            linkClass='side-nav__link' 
            navName='Contact' 
            click={activeStateHandler}/>}
            />

        <ScrollToTop>
          <Switch>
            <Route path="/home" render={(props) => <Home {...props} 
              // Button to projects
              navTo='./projects' 
              navName='See some of my works' 
              click={projectsActiveHandler} 

              // Learn more link
              link={'./about'} 
              clickLink={aboutActiveHandler}
              linkName={' Learn more about me.'}/>}/>

            <Route path="/about" render={(props) => <About {...props} 
              // Button to projects
              navTo='./projects' 
              navName='My Projects' 
              click={projectsActiveHandler}
              
              link={'./contact'} 
              clickLink={contactActiveHandler}
              linkName={' contact me'}/>}/>/>}/>

            <Route path="/projects" render={(props) => <Projects {...props} 
              // Button to contact
              navTo='./contact' 
              navName='Get in touch' 
              click={contactActiveHandler}/>}
              />

            <Route path="/contact" component={Contact} />

            <Redirect from="/" to="/home" />
          </Switch>
        </ScrollToTop>
        
        <Footer />
      </div>
    </div>

  );
}

export default App;