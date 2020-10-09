import React, { useEffect } from 'react';
import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom';
import { loadMe } from './services/authentication';
import NewsFeed from './views/NewsFeed';
import AuthenticationSignUpView from './views/Authentication/SignUpView';
import AuthenticationSignInView from './views/Authentication/SignInView';
import Footer from './components/Footer/Footer';
import ErrorView from './views/ErrorView';
import HomeView from './views/Home/HomeView';
import ProtectedRoute from './components/ProtectedRoute';
import UserProfile from './views/Social/UserProfile';

import Navbar from './components/Navbar/NavBar';
import './App.scss';

import { useSelector, useDispatch, connect } from 'react-redux';
import { UserState } from './redux/userReducer';
import { updateUser } from './redux/actions';
import { UserModel } from './models/user';

const App = () => {
  const user = useSelector<UserState, UserState>(state => state.user);
  const dispatch = useDispatch();

  console.log(user);
  const onUpdateUser = (user: UserModel) => {
    dispatch(updateUser(user));
  };

  useEffect(() => {
    loadMe()
      .then(data => {
        const user = data.user;
        console.log('load me', data.user);
        onUpdateUser(user);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" component={HomeView} exact />

          <ProtectedRoute
            path="/social/newsfeed"
            user={user}
            component={NewsFeed}
          />

          <ProtectedRoute path="/profile" user={user} component={UserProfile} />

          <Route path="/news-feed" component={NewsFeed} exact />

          <Route
            path="/authentication/sign-in"
            render={() => (
              <AuthenticationSignInView updateUser={onUpdateUser} />
            )}
          />

          <Route
            path="/authentication/sign-up"
            render={() => (
              <AuthenticationSignUpView updateUser={onUpdateUser} />
            )}
          />

          <Route path="/error" component={ErrorView} />
          <Redirect from="/" to="/error" />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
