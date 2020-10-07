import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { LoggedInMenuItems, NotLoggedInMenuItems } from './MenuItems';
import { Button } from '../Button/Button';
import './NavBar.scss';
import { store } from '../../redux/store';

import { logOut } from '../../redux/actions';
import { signOut } from './../../services/authentication';

const Navbar = () => {
  const user = store.getState().user;
  const [isClicked, setClicked] = useState(false);
  let history = useHistory();

  const handleClick = () => {
    setClicked(!isClicked);
  };

  const onSignOut = () => {
    signOut()
      .then(() => {
        console.log(logOut(user));
        logOut(user);
      })
      .catch(error => {
        console.log(error);
      });
    window.location.reload();
  };

  return (
    <nav className="NavbarItems">
      <h1 className="navbar-logo">BANDFINDER</h1>
      <div className="menu-icon" onClick={handleClick}>
        <i className={isClicked ? 'fas fa-times' : 'fas fa-bars'}></i>
      </div>
      <ul className={isClicked ? 'nav-menu active' : 'nav-menu'}>
        {(user && (
          <>
            {LoggedInMenuItems.map((item, index) => {
              return (
                <>
                  <li key={index}>
                    <Link
                      onClick={handleClick}
                      className={item.cName}
                      to={item.url}
                    >
                      {item.title}
                    </Link>
                  </li>
                </>
              );
            })}
            <li id="signout">
              <button id="signout" onClick={onSignOut}>
                <span>Sign Out</span>
              </button>
            </li>
          </>
        )) ||
          NotLoggedInMenuItems.map((item, index) => {
            return (
              <li key={index}>
                <Link
                  onClick={handleClick}
                  className={item.cName}
                  to={item.url}
                >
                  {item.title}
                </Link>
              </li>
            );
          })}
      </ul>
    </nav>
  );
};

export default Navbar;
// <Navbar
//   isOpen={this.state.menuOpen}
//   onStateChange={state => this.handleStateChange(state)}
//   {...this.props}
// >
//   {/* <Link to="/" class="home">
//   IronLootBox
// </Link> */}
//   <Link onClick={() => this.closeMenu()} to="/" class="home">
//     Home
//   </Link>
//   <Link onClick={() => this.closeMenu()} to="/shop">
//     Shop
//   </Link>
//   <Link onClick={() => this.closeMenu()} to="/social/newsfeed">
//     Social Area
//   </Link>

//   {(this.props.user && (
//     <>
//       <Link onClick={() => this.closeMenu()} to="/post/create">
//         Create a post
//       </Link>
//       <Link onClick={() => this.closeMenu()} to="/credits">
//         Credits: {this.props.user.credits}
//       </Link>
//       <Link onClick={() => this.closeMenu()} to="/checkout">
//         Checkout
//       </Link>

//       {this.props.user.admin && (
//         <Link onClick={() => this.closeMenu()} to="/admin">
//           Admin
//         </Link>
//       )}
//       <>
//         <Link
//           onClick={() => this.closeMenu()}
//           to={`/user/${this.props.user._id}`}
//         >
//           {this.props.user.name}
//         </Link>
//         <button id="signout" onClick={this.props.onSignOut}>
//           <span>Sign Out</span>
//         </button>
//       </>
//     </>
//   )) || (
//     <>
//       <Link to="/authentication/sign-up">Sign Up</Link>
//       <Link to="/authentication/sign-in">Sign In</Link>
//     </>
//   )}
// </Navbar>
