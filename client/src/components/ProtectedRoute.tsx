import React, { useState, useEffect } from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';
import { UserModel } from '../models/user';

import { store } from '../redux/store';

interface ProtectedRouteProps extends RouteProps {
  component: any;
  user: any;
}

const ProtectedRoute = (props: ProtectedRouteProps) => {
  const { component: Component, ...rest } = props;
  const userInStorage = localStorage.getItem('user');
  let user = JSON.parse(userInStorage!);

  return (
    <Route
      {...rest}
      render={routeProps =>
        user ? (
          <Component {...routeProps} user={user} />
        ) : (
          <Redirect
            to={{
              pathname: '/error',
              state: {
                from: routeProps.location,
                message: 'You are not signed in.'
              }
            }}
          />
        )
      }
    />
  );
};

export default ProtectedRoute;
