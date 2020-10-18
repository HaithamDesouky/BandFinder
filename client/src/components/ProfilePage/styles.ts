import styled from 'styled-components';
import media from 'styled-media-query';

const BackgroundImage = styled.div<{ bgImage: string }>`
  background: ${({ bgImage }) => bgImage} 50% 0 no-repeat;
  background-size: cover;
  background-position: center;
  width: 90%;
  height: 300.07px;
  left: calc(50% - 1300.8px / 2 - 0.4px);
  margin: auto;

  img {
    max-height: 350px;
    width: 100%;
  }
`;

const ProfileCardContainer = styled.div`
  flex-direction: column;
  position: absolute;
  width: 250px;
  height: 338px;
  left: 27px;
  top: 193px;
  background: ${props => props.theme.colors.white};
  border-left: 3px solid ${props => props.theme.colors.orange};

  box-shadow: -5px -5px 10px rgba(255, 255, 255, 0.9), 5px 5px 10px black;
  border-radius: 20px;

  ${media.lessThan('large')`

    `}
`;

const ProfileCardContent = styled.div`
  margin: 0 auto;
  margin-left: 16px;
  padding: 16px;
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
  ProfileCardContainer,
  ProfileCardContent,
  BackgroundImage,
  MoreInfoBox,
  ProfileImage
};
