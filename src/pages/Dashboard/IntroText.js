import React from 'react';
import './styles.css';

const IntroText = () => (
  <div className="card intro-text text-center">
    <div className="content row">
      <div className="col-sm-12 col-md-9">
        <h3>Thanks for stopping by!</h3>
        <p>My name is Sandra. I really <strong><span className="blue-text">love</span></strong> Javascript.</p>
        <p>I'm improving my skills every day coding out projects and doing <a href="https://www.codewars.com/users/sanlouise">Codewars</a>. Feel free to check out my projects and <a href="https://github.com/sanlouise">Github</a> profile.</p>
        <p>Any questions? Need a website or an app built? Let's talk!</p>
        
      </div>

      <div className="col-sm-12 col-md-3 skills">
        <h3>Skills</h3>
        <ul>
          <li>React</li>
          <li>Node.js</li>
          <li>Javascript</li>
          <li>Ruby on Rails</li>
          <li>SQL</li>
          <li>Postgresql</li>
          <li>HTML</li>
          <li>CSS</li>
        </ul>
      </div>

    </div>
  </div>
);


export default IntroText;
