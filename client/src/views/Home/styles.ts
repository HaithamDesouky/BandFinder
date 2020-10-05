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
  margin: 82px 12px 0 0px;
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

export const Styled = {
  HomeSection,
  HomeWrapper
};
