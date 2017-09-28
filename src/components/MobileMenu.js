// React/Redux Dependencies
import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

// Externals
import ReactSpinningLogo from '../assets/images/svgs/ReactSpinning';
import github from '../assets/images/github-icon.png';

// Internals
import './styles.css';

const MobileMenu = ({
  location,
}) => (
  <div>
    <div className="mobile-nav collapse navbar-collapse has-image">
      <div className="logo">
        <a href="/" className="simple-text">
          Sandra Hallie
          <ReactSpinningLogo className="App-logo text-center" alt="react logo" />
        </a>
      </div>
      <ul className="nav navbar-nav">
        <li className={location.pathname === '/' ? 'active' : null}>
          <Link to="/">
            <i className="pe-7s-user"></i>
            <p>About Me</p>
          </Link>
        </li>
        <li className={location.pathname === '/projects' ? 'active' : null}>
          <Link to="/projects">
            <i className="pe-7s-science"></i>
            <p>Projects</p>
          </Link>
        </li>
        <li>
          <a href="https://resume.creddle.io/resume/ijhfjyvpew8">
            <i className="pe-7s-note2"></i>
            <p>Resume</p>
          </a>
        </li>
        <li>
          <a href="https://github.com/sanlouise">
            <i><img className="github" src={github} alt="github logo"/></i>
            <p>Github</p>
          </a>
        </li>
      </ul>
    </div>
  </div>
);



export default withRouter(connect()(MobileMenu));
