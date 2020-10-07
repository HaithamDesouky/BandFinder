import React from 'react';
import { Link } from 'react-router-dom';
import { Styled } from './styles';
import { Box, Flex } from 'rebass/styled-components';

export default function About() {
  return (
    <Styled.AboutSection>
      <Flex flexWrap="wrap" mx={-3}>
        <Box width={[12 / 12, 6 / 12, 5 / 12, 5 / 12]} px={3}>
          <div>
            <img src={require('./images/guitarist.jfif')} alt="about image" />

            <h4>Looking for an artist or band?</h4>
            <p>
              In our community we have various artists and bands willing to
              share their talents with other artists. Click below to view our
              members who are looking for people to collaborate with!
            </p>
            <Link to="#">View Our Artists</Link>
          </div>
        </Box>

        <Box width={[12 / 12, 6 / 12, 7 / 12, 7 / 12]} px={3}>
          <Styled.LeftSideAbout>
            <div>
              <h3>join our community today</h3>
              <h2>
                Take advantage of our active community, not only to find the
                band you're looking for but for so much more!
              </h2>
            </div>
            <div>
              {/* <h4>With us you can:</h4> */}
              <ul>
                <li>
                  <i className="fas fa-music"></i> Show off your music
                </li>
                <li>
                  <i className="fas fa-thumbs-up"></i> Share posts and photos
                  with your fans{' '}
                </li>
                <li>
                  <i className="fas fa-guitar"></i> Find artists for your band
                </li>
                <li>
                  <i className="fas fa-users"></i> Find a band to play with
                </li>
                <li>
                  <i className="fas fa-calendar-alt"></i> Tell your fans about
                  your concerts
                </li>
                <li>
                  <i className="fas fa-store-alt"></i> Share exclusive
                  merchandise with your fans
                </li>
              </ul>
            </div>
          </Styled.LeftSideAbout>
        </Box>
      </Flex>
    </Styled.AboutSection>
  );
}
