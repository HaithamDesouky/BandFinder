import React, { useState } from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';

import { store } from '../redux/store';

interface ProtectedRouteProps extends RouteProps {
  component: any;
  user: any;
}

const ProtectedRoute = (props: ProtectedRouteProps) => {
  const user = store.getState().user;

  const { component: Component, ...rest } = props;
  const [loaded, setLoaded] = useState(false);

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

// const ProtectedRoute = ({ component, isAuthenticated, ...rest }: any) => {
//   const routeComponent = (props: any) =>
//     isAuthenticated ? (
//       React.createElement(component, props)
//     ) : (
//       <Redirect to={{ pathname: '/login' }} />
//     );

//   return <Route {...rest} user={isAuthenticated} render={routeComponent} />;
// };

// const ProtectedRoute = ({ authorized, redirect, ...props }) => {
//   if (authorized) {
//     return <Route {...props} />;
//   } else {
//     return (
//       <Redirect
//         to="/"
//         to={{
//           pathname: '/error',
//           state: { message: 'You are not signed in.' }
//         }}
//       />
//     );
//   }
// };

export default ProtectedRoute;
