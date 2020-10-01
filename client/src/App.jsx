import React, { useState, useMemo } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { loadMe, signOut } from './services/authentication';
import NewsFeed from './views/NewsFeed';
import SinglePostView from './views/Post/SingleView';
import PostEditView from './views/Post/EditView';
import PostCreationView from './views/Post/CreationView';
import AuthenticationSignUpView from './views/Authentication/SignUpView';
import AuthenticationSignInView from './views/Authentication/SignInView';
import CheckoutView from './views/Credits/CheckoutView';
import BuyCreditsView from './views/Credits/BuyCreditsView';
import ErrorView from './views/ErrorView';
import HomeView from './views/Home/HomeView';
import ShopView from './views/Shop/ShopView';
import ItemCreationView from './views/Admin/ItemCreationView';
import Navbar from './components/Navbar/NavBar';
import ProtectedRoute from './components/ProtectedRoute';
import AdminRoute from './components/AdminRoute';
import OrderView from './views/OrderView';

import AllItemsView from './views/Admin/AllItemsView';
import AdminArea from './views/Admin/AdminArea';
import UserProfile from './views/Social/UserProfile';
import { UserContextProvider } from './UserContext';

import './App.scss';

import { BrowserRouter } from 'react-router-dom';

const App = () => {
  const [userData, setUserData] = useState({
    user: undefined
  });

  return (
    <UserContextProvider>
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route path="/" component={HomeView} exact />
            <NewsFeed path="/social/newsfeed" exact />

            <AdminRoute
              path="/admin/items/list"
              component={AllItemsView}
              // authorized={user}
              redirect="/error"
              exact
            />
            <AdminRoute
              path="/admin/create-item"
              render={() => <ItemCreationView />}
              // authorized={user}
              redirect="/error"
              exact
            />
            <AdminRoute
              path="/admin"
              render={() => <AdminArea />}
              // authorized={user}
              redirect="/error"
              exact
            />
            <Route
              path="/credits"
              render={props => (
                <BuyCreditsView
                  {...props}
                  loadUser={this.loadUser}
                  basket={this.state.basket}
                  onChangeQuantity={this.handleChangeInQuantity}
                />
              )}
            />
            <ProtectedRoute
              path="/checkout"
              render={props => (
                <CheckoutView
                  {...props}
                  loadUser={this.loadUser}
                  basket={this.state.basket}
                  onChangeQuantity={this.handleChangeInQuantity}
                />
              )}
              // authorized={user}
              redirect="/error"
              exact
            />
            <AdminRoute
              path="/admin/items/list"
              component={AllItemsView}
              // authorized={user}
              redirect="/error"
              exact
            />
            <Route path="/news-feed" component={NewsFeed} exact />
            {/* <Route path="/shop" component={ShopView} exact /> */}
            <Route
              path="/shop"
              render={props => (
                <ShopView
                  classname="Shop"
                  {...props}
                  basket={this.state.basket}
                  onChangeQuantity={this.handleChangeInQuantity}
                />
              )}
              exact
            />

            <ProtectedRoute
              path="/post/create"
              component={PostCreationView}
              // authorized={user}
              redirect="/authentication/sign-in"
            />

            <ProtectedRoute
              path="/user/:id"
              exact
              component={UserProfile}
              // authorized={user}
              redirect="/authentication/sign-in"
            />
            <ProtectedRoute
              path="/order/:id"
              exact
              component={OrderView}
              // authorized={user}
              redirect="/authentication/sign-in"
            />
            <ProtectedRoute
              path="/post/:id/edit"
              component={PostEditView}
              // authorized={user}
              redirect="/authentication/sign-in"
            />
            <Route
              path="/post/:id"
              render={props => <SinglePostView {...props} />}
              exact
            />
            <ProtectedRoute
              path="/authentication/sign-up"
              render={props => <AuthenticationSignUpView {...props} />}
              // authorized={!user}
              redirect="/"
            />

            <Route
              path="/authentication/sign-in"
              component={AuthenticationSignInView}
            />

            <Route path="/error" component={ErrorView} />
            <Redirect from="/" to="/error" />
          </Switch>
          {/* )) || (
          <div className="loading">
            <h1>Your page is loading! Thank you for your patience!</h1>
          </div> */}
        </div>
      </BrowserRouter>
    </UserContextProvider>
  );
};

export default App;
