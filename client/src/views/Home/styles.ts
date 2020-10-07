import styled from 'styled-components';
import media from 'styled-media-query';

import img from './images/homebg.gif';

const HomeSection = styled.section`
  background: url(${img}) 50% 0 repeat-y fixed;
  background-size: cover;
  background-position: center center;
  border-radius: 5px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  height: 75vh;
  text-align: center;
  position: relative;
`;

const HomeWrapper = styled.div`
  background: rgba(250, 250, 250, 0.8);
  padding: 32px 12px;

  h3 {
    animation: moveInLeft 2s;
  }

  h1 {
    animation: moveInRight 2s;
  }
`;

const AboutSection = styled.section`
  padding-top: 100px;
  padding-left: 0.6rem;
  padding-right: 0.6rem;
  margin-bottom: 3rem;

  a {
    background: #e8e8e8;
    border-radius: 8px;
    color: #000000;
    display: inline-block;
    margin-bottom: 40px;
    margin-top: 10px;
  }

  a:hover {
    background: #000000;
    color: #d7b065;
    padding: 6px 12px;
  }

  img {
    border-radius: 5px;
    margin-bottom: 28px;
  }
`;

const CommunitySection = styled.section``;

const CommunityHeader = styled.section`
  h2,
  p {
    padding-bottom: 1.4rem;
    text-align: center;
    width: 50%;
    margin: 0 auto;
  }

  h2 {
    color: #d7b065;
  }
`;

const LeftSideAbout = styled.div`
  background: #ffffff;
  border-radius: 5px;
  padding: 0 32px;
  height: 100%;
  display: flex;
  flex-direction: column;

  ${media.lessThan('medium')`

   padding: 0
    `}

  h2 {
    font-size: 2rem;

    ${media.lessThan('medium')`

    font-size: 1.5rem
    `}
  }

  h3 {
    ${media.lessThan('medium')`

    text-align: center;
    margin-bottom: 0.5rem;
    `}
  }

  h4,
  h2,
  p {
    margin-bottom: 1rem;
  }
  ul {
    list-style: none;
  }

  li {
    padding: 0.3rem;
  }
`;

const CommunityBoxes = styled.div`
  border-radius: 5px;
  margin-bottom: 15px;
  padding: 1rem;
  overflow: hidden;
  position: relative;

  &:hover {
    box-shadow: 0px 16px 22px 0px rgba(90, 91, 95, 0.3);
    top: -5px;
  }

  img {
    border-radius: 5px;
    cursor: crosshair;
  }
`;

export const Styled = {
  HomeSection,
  HomeWrapper,
  AboutSection,
  LeftSideAbout,
  CommunitySection,
  CommunityHeader,
  CommunityBoxes
};
