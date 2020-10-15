import styled from 'styled-components';
import media from 'styled-media-query';

const ProfileContainer = styled.div`
  position: relative;
  width: 100vw;
  min-height: 82vh;
`;

const ProfileCard = styled.div`
  position: absolute;
  background-color: red;
  width: 250px;
  height: 500px;

  img {
    width: 100px;
  }
  ${media.lessThan('large')`

    `}
`;

const BackgroundImage = styled.div`
  width: 100%;
  height: 200px;
  background-color: green;
`;

export const Styled = { ProfileContainer, ProfileCard, BackgroundImage };
