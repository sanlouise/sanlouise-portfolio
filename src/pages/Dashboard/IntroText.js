import React from 'react';
import './styles.css';

const IntroText = () => (
  <div className="card intro-text text-center">
    <div className="content row">
      <div className="col-sm-12 col-md-9">
        <h3>Thanks for stopping by!</h3>
        <p>My name is Sandra. I really <strong>love</strong> Javascript.</p>
        <p>When I'm not <a href="https://github.com/sanlouise">building apps</a> on Github for clients, you can find me hacking away on <a href="https://www.codewars.com/users/sanlouise">Codewars</a>.</p>
        <p>Want to talk code? <a href="mailto:sandra.adamshallie@gmail.com" target="_top">Message me!</a></p>

      </div>

      <div className="col-sm-12 col-md-3 skills">
        <h3>Skills</h3>
        <ul>
          <li>React</li>
          <li>Redux</li>
          <li>Node.js</li>
          <li>Express</li>
          <li>JavaScript</li>
          <li>HTML5</li>
          <li>CSS3</li>
        </ul>
      </div>

    </div>
  </div>
);


export default IntroText;
