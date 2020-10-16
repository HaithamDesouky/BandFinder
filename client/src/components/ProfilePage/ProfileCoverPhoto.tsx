import React, { useState, useEffect } from 'react';

import { UserModel } from '../../models/user';
import { Styled } from './styles';
import artistImage from './artist.jpg';
import bandImage from './band.jpg';

interface Props {
  user: UserModel;
}

export default function ProfileCoverPhoto({ user }: Props) {
  const [userPhoto, setPhoto] = useState('');

  useEffect(() => {
    if (user.userType === 'Artist') {
      setPhoto(artistImage);
    } else if (user.userType === 'Band') {
      setPhoto(bandImage);
    }
  }, []);

  console.log(userPhoto);

  return (
    <Styled.BackgroundImage>
      <img src={userPhoto} alt="UserTypeCoverPhoto" />
    </Styled.BackgroundImage>
  );
}
