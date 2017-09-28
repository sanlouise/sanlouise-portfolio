import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

import Rails from '../../assets/images/svgs/Rails';
import Node from '../../assets/images/svgs/Node';
import ReactLogo from '../../assets/images/svgs/React';
import Js from '../../assets/images/svgs/Js';

import dressy from '../../assets/images/projects/dressy.png';
import conscioux from '../../assets/images/projects/conscioux_s.png';
import weather_app from '../../assets/images/projects/weather_api_s.png';

const DashboardProjects = () => (
  <div className="dashboard-projects text-center">
    <div className="row">

      <div className="col-sm-12 col-md-4 dashboard-project">
        <img className="dashboard-project-img" src={dressy} alt="dressy"/>
      </div>

      <div className="col-sm-12 col-md-4 dashboard-project">
        <img className="dashboard-project-img" src={weather_app} alt="weather app"/>
        <Link to="/projects"><h2>View All Projects</h2></Link>
      </div>

      <div className="col-sm-12 col-md-4 dashboard-project" alt="conscioux">
        <img className="dashboard-project-img" src={conscioux} alt="conscioux"/>
      </div>

      <Link to="/projects">
        <div className="dashboard-project-logos col-sm-12">
          <div className="col-sm-3">
            <ReactLogo />
          </div>
          <div className="col-sm-3">
            <Node />
          </div>
          <div className="col-sm-3">
            <Js />
          </div>
          <div className="col-sm-3">
            <Rails />
          </div>
        </div>
      </Link>

    </div>
  </div>
);


export default DashboardProjects;
