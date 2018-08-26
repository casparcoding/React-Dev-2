import 'core-js/es6/map';
import 'core-js/es6/set';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import 'raf/polyfill';
import { Router } from 'react-router';

import store, { history } from 'store';
import Routes from 'routes/index';
import registerServiceWorker from 'registerServiceWorker';
import 'style/app.css';

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <Router history={history}>
        <Routes />
      </Router>
    </Provider>
  </BrowserRouter>,
  document.getElementById('root'),
);
registerServiceWorker();
