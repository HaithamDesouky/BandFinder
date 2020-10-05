import React from 'react';
import { Styled } from './styles';
import { Box, Flex } from 'rebass/styled-components';

const Landing = () => {
  return (
    <Styled.HomeSection>
      <div>
        <Styled.HomeWrapper>
          <h3>Welcome to BandFinder</h3>
          <h1>
            Connecting artists and cultivating a community for creatives to
            meet, collaborate and grow.
          </h1>
        </Styled.HomeWrapper>
      </div>
    </Styled.HomeSection>
  );
};

export default Landing;
