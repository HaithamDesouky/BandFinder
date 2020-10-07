import React from 'react';
import { Styled } from './styles';
import { Box, Flex } from 'rebass/styled-components';

// import  from './images/guitarist.jfif';
const guitarist = require('./images/guitarist.jfif');

export default function Community() {
  return (
    <Styled.CommunitySection>
      <Styled.CommunityHeader>
        <h2>Our Community</h2>
        <p>
          Here are some of the cool things our members, both artists and bands,
          have shared in the past. Check them out and don't be afraid to share
          something yourself!
        </p>
      </Styled.CommunityHeader>

      <Flex flexWrap="wrap" mx={-3}>
        <Box width={[12 / 12, 6 / 12, 3 / 12, 3 / 12]} px={3}>
          <Styled.CommunityBoxes>
            <img src={guitarist} class="img-responsive" alt="Fine Arts" />

            <h4>artist 1</h4>
          </Styled.CommunityBoxes>
        </Box>

        <Box width={[12 / 12, 6 / 12, 3 / 12, 3 / 12]} px={3}>
          <Styled.CommunityBoxes>
            <img src={guitarist} class="img-responsive" alt="artist 1" />
            <h4>artist 1</h4>
          </Styled.CommunityBoxes>
        </Box>

        <Box width={[12 / 12, 6 / 12, 3 / 12, 3 / 12]} px={3}>
          <Styled.CommunityBoxes>
            <img src={guitarist} class="img-responsive" alt="artist 1" />
            <h4>artist 1</h4>
          </Styled.CommunityBoxes>
        </Box>

        <Box width={[12 / 12, 6 / 12, 3 / 12, 3 / 12]} px={3}>
          <Styled.CommunityBoxes>
            <img src={guitarist} class="img-responsive" alt="artist 1" />
            <h4>artist 1</h4>
          </Styled.CommunityBoxes>
        </Box>
      </Flex>
    </Styled.CommunitySection>
  );
}
