import React from 'react';
import photo from './default.png';
import { UserModel } from '../../models/user';
import { Styled } from './styles';

interface Props {
  user: UserModel;
}

export default function MoreUserInfo({ user }: Props) {
  return (
    <Styled.MoreInfoBox>
      <h1>Welcome, {user.name}</h1>
      {(user.photo && <img src={user.photo} alt="UserPhoto" />) || (
        <img src={photo} alt="UserPhoto" />
      )}
    </Styled.MoreInfoBox>
  );
}
