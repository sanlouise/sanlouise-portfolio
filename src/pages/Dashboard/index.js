import React from 'react';
import InfoCard from './InfoCard';
import IntroText from './IntroText';
import DashboardProjects from './DashboardProjects';

const Dashboard = () => (
  <div className="content home">
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-4">
          <InfoCard />
        </div>
        <div className="col-md-8">
          <IntroText />
        </div>

        <div className="col-sm-12">
          <DashboardProjects />
        </div>
      </div>
    </div>
  </div>
);

export default Dashboard;
