import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Provider } from 'react-redux';
import store from './store/store';
import LoginContainer from './containers/login';
import SignUpContainer from './containers/signup';
import DashboardContainer from './containers/dashboard';
import RequiredBloodContainer from './containers/requiredBlood';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import {
  browserHistory,
  Router,
  Route,
  IndexRoute,
  IndexRedirect,
  Link,
  IndexLink
} from 'react-router';

ReactDOM.render((
  <MuiThemeProvider>
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path="/">
          <IndexRedirect to="/login" />
          <Route path="/dashboard" component={DashboardContainer} />
          <Route path="/requiredBlood" component={RequiredBloodContainer} />
        </Route>
        <Route path="/login" component={LoginContainer}>
        </Route>
        <Route path="/signup" component={SignUpContainer}>
        </Route>
      </Router>
    </Provider>
  </MuiThemeProvider>
),
  document.getElementById('root')
);
