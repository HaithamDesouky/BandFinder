import React, { useState, useEffect } from 'react';
import photo from './default.png';
import { UserModel } from '../../models/user';
import { Styled } from './styles';
import Moment from 'react-moment';

interface Props {
  user: UserModel;
}

export default function ProfileCard({ user }: Props) {
  const [userPhoto, setPhoto] = useState('');

  useEffect(() => {
    if (user.photo) {
      setPhoto(user.photo);
    } else if (user.userType === 'Band') {
      setPhoto(photo);
    }
  }, []);

  return (
    <Styled.ProfileCardContainer>
      <Styled.ProfileCardContent>
        <Styled.ProfileImage
          src={userPhoto}
          alt="UserPhoto"
        ></Styled.ProfileImage>

        <h4>{user.name}</h4>
        <p>{user.userType}</p>

        <p>
          Joined on <Moment format="DD MM YY">{user.updatedAt}</Moment>
        </p>
        <p>Followers: {user.followers!.length}</p>

        <h4>Instruments:</h4>
        <ul>
          {user.instruments!.length &&
            user.instruments?.map(item => <li>{item}</li>)}
        </ul>
      </Styled.ProfileCardContent>
    </Styled.ProfileCardContainer>
  );
}

// user.updatedAt;
