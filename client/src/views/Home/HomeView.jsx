import React from 'react';
import guitarist from './images/guitarist.jfif';

import { Styled } from '../../styles/common';
import { Box, Flex } from 'rebass/styled-components';

import Landing from './Landing';
import About from './About';
import Community from './Community';

import './HomeView.scss';

const HomeView = () => {
  return (
    <div className="container">
      <Landing />

      <Styled.Container>
        <About />
        <Community />
      </Styled.Container>
    </div>
  );
};

export default HomeView;
