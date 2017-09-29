import React from 'react';
import github from '../../assets/images/github-icon.png';
import linkedin from '../../assets/images/linkedin.png';

const Footer = () => (
  <footer className="footer">
    <div className="container-fluid">
      <p className="copyright text-center">
        © 2017 Sandra Hallie
        <a href="https://www.codewars.com/users/sanlouise">
          <img src="https://www.codewars.com/users/sanlouise/badges/small" alt="codewars"/>
        </a>
        <a href="https://github.com/sanlouise"><img className="github" src={github} alt="github"/></a>
        <a href="https://linkedin.com/in/sanlouise"><img className="github" src={linkedin} alt="linkedin"/></a>
      </p>
    </div>
  </footer>
);

export default Footer;
