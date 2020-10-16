import styled from 'styled-components';
import media from 'styled-media-query';

const BackgroundImage = styled.div`
  width: 90%;
  height: 865.07px;
  left: calc(50% - 1300.8px / 2 - 0.4px);
  margin: auto;

  img {
    max-height: 350px;
    width: 100%;
  }
`;

const ProfileCard = styled.div`
  position: absolute;
  width: 304px;
  height: 338px;
  left: 27px;
  top: 193px;
  background: rgb(195, 195, 195);
  background: linear-gradient(
    94deg,
    rgba(195, 195, 195, 1) 75%,
    rgba(255, 255, 255, 1) 100%
  );
  box-shadow: -5px -5px 10px rgba(255, 255, 255, 0.9), 5px 5px 10px black;
  border-radius: 20px;

  ${media.lessThan('large')`

    `}
`;

const ProfileImage = styled.img`
  height: 100px;
  width: 100px;
  border-radius: 50%;
`;

const MoreInfoBox = styled.div`
  position: absolute;
  width: 304px;
  height: 250px;
  top: 600px;
  left: 27px;
  background: rgb(195, 195, 195);
  background: linear-gradient(
    94deg,
    rgba(195, 195, 195, 1) 75%,
    rgba(255, 255, 255, 1) 100%
  );
  box-shadow: -5px -5px 10px rgba(255, 255, 255, 0.9), 5px 5px 10px black;
  border-radius: 20px;

  img {
    width: 100px;
  }
  ${media.lessThan('large')`

    `}
`;

export const Styled = {
  ProfileCard,
  BackgroundImage,
  MoreInfoBox,
  ProfileImage
};
