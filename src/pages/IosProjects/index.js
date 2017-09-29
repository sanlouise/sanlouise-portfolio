// Dependencies
import React from 'react';
import { Link } from 'react-router-dom';
import Iframe from 'react-iframe';
import map from 'lodash/map';

// Externals
import projects from '../../assets/data/iosprojects.js';
import github from '../../assets/images/github.png';

// Internals
import './styles.css';

const IosProjects = () => (
  <div className="content">
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-12">
          <div className="card projects">
            <div className="header text-center">
              <h2 className="title">Thank you for checking out my projects.</h2>
              <Link to="/projects">
                <button className="btn btn-default">
                  Back to all Projects
                </button>
              </Link>
            </div>
            <div className="content container">
              <div className="row">
                {map(projects, (project) => (
                  <div className="ios-project container" key={project.id}>
                    <hr className="divider"/>
                    <div className="col-xs-12 col-md-7 ios-project-info">
                      <h3 className="title">{project.name}</h3>
                      <p>{project.description}</p>
                      <ul>
                        {map(project.points, (point) => (
                          <li key={point}>{point}</li>
                        ))}
                      </ul>
                      <a href={project.github}>View on Github <img className="github" src={github} alt="github logo"/></a>
                    </div>
                    <div className="col-xs-12 col-md-5 phone text-center">
                      <Iframe url={project.src} width="183px" height="391px"/>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="text-center">
              <Link to="/projects">
                <button className="btn btn-default">
                  Back to all Projects
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default IosProjects;
