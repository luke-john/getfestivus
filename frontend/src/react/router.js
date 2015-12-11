import React from 'react';
import {Router, Route, IndexRoute} from 'react-router';
import {createHistory} from 'history';

import Layout from './layouts/Default.jsx';

import Home from './pages/Home.jsx';
import AirGrievance from './pages/AirGrievance.jsx';
import Grievance from './pages/Grievance.jsx';
import Miracles from './pages/Miracles.jsx';
import NotFound from './pages/NotFound.jsx';

export default (
  <Router history={createHistory()}>
    <Route path='/' component={Layout}>
      <IndexRoute component={Home} />
      <Route path='air-grievance' component={AirGrievance} />
      <Route path='grievance' component={Grievance} />
      <Route path='miracles' component={Miracles} />
      <Route path='*' component={NotFound} />
    </Route>
  </Router>
);
