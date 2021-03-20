import React from 'react';
import { Route, useLocation } from 'react-router-dom';

import Layout from '../views/Layout';
import Navigation from './Navigation';

const menu = Navigation();

const NavRoute = ({ exact, path, component: Component }) => {
  const location = useLocation();

  const layoutProps = {
    menu,
    pageName: location.pathname
  };

  return (
    <Route
      exact={exact}
      path={path}
      render={props => (
        <Layout {...layoutProps}>
          <Component {...props} />
        </Layout>
      )}
    />
  );
};

export default NavRoute;
