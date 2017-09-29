// Dependencies
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import map from 'lodash/map';
import filter from 'lodash/filter';
import isEmpty from 'lodash/isEmpty';
// Externals
import PROJECTS from '../../assets/data/projects.js';
import github from '../../assets/images/github.png';
import Options from '../../components/Options';
// Internals
import './styles.css';

const REACT = filter(PROJECTS, ['type', 'React']);
const RAILS = filter(PROJECTS, ['type', 'Ruby on Rails']);

class Projects extends Component {

  constructor(props) {
  super(props);
    this.state = {
      showReact: false,
      showRails: false,
    };
  }

  toggleFilter = (key) => {
    const toggledValue = !this.state[key];
    this.setState({ [key]: toggledValue });
  }

  filterProjects = () => {
    const { showReact, showRails} = this.state;
    let projectsByCategory = [];

    if (showReact) {
      projectsByCategory = projectsByCategory.concat(REACT);
    }
    if (showRails) {
      projectsByCategory = projectsByCategory.concat(RAILS);
    }

    if (isEmpty(projectsByCategory)) {
      projectsByCategory = PROJECTS;
    }

    return projectsByCategory;
  }

  render() {
    const { filterProjects, state, toggleFilter } = this;
    return (

      <div className="container-fluid row">
        <div className="col-sm-12">
          <div className="card projects">
            <div className="header text-center">
              <h2 className="title">Thank you for checking out my projects.</h2>
              <p className="subtitle">I encourage you to also look at my <a href="https://github.com/sanlouise">Github</a> profile.</p>
              <Options
                toggleFilter={toggleFilter}
                options={state}
              />
            </div>

              {map(filterProjects(), (project) => (
                <div className="project-div col-xs-12" key={project.id}>
                  <hr />
                  <div className="col-md-5 col-sm-12 project-info">
                    <h3 className="title">{project.name}</h3>
                    <h5>Built with: <strong>{project.technologies}</strong></h5>
                    <p>{project.description}</p>
                    <ul>
                      {map(project.points, (point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                    <a href={project.github}>View on Github <img className="github" src={github} alt="github logo"/></a>
                  </div>
                  <div className="col-md-4 col-sm-12 project-image">
                    {project.url ? (
                      <a href={project.url}><img src={project.src} alt="project"/></a>
                    ) : (
                      <img src={project.src} alt="project"/>
                    )}
                  </div>
                </div>
              ))}

            <div className="text-center">
              <Link to="/ios-projects">
                <button className="btn btn-default">
                  View My iOS Projects
                </button>
              </Link>
            </div>

          </div>
        </div>
      </div>

    )
  }
};

export default Projects;
