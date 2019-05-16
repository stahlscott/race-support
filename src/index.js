import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import 'semantic-ui-css/semantic.min.css';
import './index.css';
import * as serviceWorker from './serviceWorker';

import Routes from './routes';

ReactDOM.render(
  <BrowserRouter>
    <Helmet>
      <title>Race Support</title>
    </Helmet>
    <Routes />
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
