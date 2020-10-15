import React from 'react';

import { Styled } from './styles';
import ProfileCard from './ProfileCard';

// import { Link } from 'react-router-dom';
// import { UserModel } from '../../models/user';
// import { store } from '../../redux/store';

// interface User {
//   user: string;
// }

const UserProfile = () => {
  const userInStorage = localStorage.getItem('user');
  let user = JSON.parse(userInStorage!);

  return (
    <Styled.ProfileContainer>
      <Styled.BackgroundImage>
        <img src={user.photo} alt="UserPhoto" />
      </Styled.BackgroundImage>
      <ProfileCard user={user} />
    </Styled.ProfileContainer>
  );
};

export default UserProfile;
