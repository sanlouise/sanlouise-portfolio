import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import cx from 'classnames';

// Internals
import Header from './Header';
import Footer from './Footer';

// Externals
import SideBar from '../../components/SideBar';
import MobileMenu from '../../components/MobileMenu';
import Dashboard from '../Dashboard';
import ContactForm from '../ContactForm';
import Projects from '../Projects';
import IosProjects from '../IosProjects';
import { setMobileNavVisibility } from '../../reducers/Layout';

const Main = ({
  mobileNavVisibility,
  hideMobileMenu,
  history
}) => {
  history.listen(() => {
    if (mobileNavVisibility === true) {
      hideMobileMenu();
    }
  });
  return (
    <div className={cx({
      'nav-open': mobileNavVisibility === true
    })}>
      <div className="wrapper">
        <SideBar />

        <div className="main-panel">
          <Header />
            <Switch>
              <Route exact path="/" component={Dashboard} />
              <Route path="/projects" component={Projects} />
              <Route path="/ios-projects" component={IosProjects} />
              <Route path="/contact" component={ContactForm} />
            </Switch>
          <Footer />
        </div>
      </div>
      <MobileMenu />
    </div>
  )
};

const mapStateToProps = state => ({
  mobileNavVisibility: state.Layout.mobileNavVisibility
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  hideMobileMenu: () => dispatch(setMobileNavVisibility(false))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
