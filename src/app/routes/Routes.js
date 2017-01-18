import React        from 'react';
import {
  Route,
  IndexRoute
}                   from 'react-router';
import { App }      from '../containers';
import {
  Home,
  About,
  Components,
  SimonTask
}                   from '../views';

const Routes = () => {
  return (
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="/components" component={Components} />
      <Route path="/about" component={About} />
      <Route path="/simonTask" component={SimonTask} />
    </Route>
  );
};

export default Routes;
