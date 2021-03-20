import React from 'react';
import {
  Switch,
  BrowserRouter as Router
} from 'react-router-dom';
import Launches from './views/Launches';
import AppRoute from './components/AppRoute';

const Routes = () => (
  <div>
    <Router>
      <Switch>
        <AppRoute path="/" component={Launches}/>
      </Switch>
    </Router>
  </div>
);

export default Routes;
