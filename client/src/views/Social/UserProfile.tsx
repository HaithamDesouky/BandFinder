import React from 'react';

import './UserProfile.scss';
import photo from './default.png';
import { Link } from 'react-router-dom';
import { UserModel } from '../../models/user';
import { store } from '../../redux/store';
const UserProfile = () => {
  const user = store.getState().user;

  return (
    <div>
      "hi"
      <div>
        <h1>Welcome, {user.name}</h1>
        {(user.photo && (
          <div>
            <img src={user.photo} alt="UserPhoto" />
          </div>
        )) || (
          <div>
            <img src={photo} alt="UserPhoto" />
          </div>
        )}

        <br />
      </div>
    </div>
  );
};

export default UserProfile;
