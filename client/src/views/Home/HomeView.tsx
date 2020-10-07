import React from 'react';

import { Styled } from '../../styles/common';

import Landing from './Landing';
import About from './About';
import Community from './Community';

const HomeView = () => {
  return (
    <div>
      <Landing />

      <Styled.Container>
        <About />
        <Community />
      </Styled.Container>
    </div>
  );
};

export default HomeView;
