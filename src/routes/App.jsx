import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import '@styles/_main.scss';

import routes from './routes';


const App = () => {
  const getRoutes = () =>
    routes.map(({ key, exact, path, component, privateRoute, role }) => (
      <Route key={key} exact={exact} path={path} component={component} />
      ));

  return (
    <BrowserRouter>
      <Switch>{getRoutes()}</Switch>
    </BrowserRouter>
  );
};

export default App;
