// Dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux';

import registerServiceWorker from './registerServiceWorker';
import './assets/styles/base.scss';
import Main from './pages/Main';
import configureStore from './config/configureStore';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <Main />
    </HashRouter>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
