import styled from 'styled-components';
import { Box } from 'rebass/styled-components';

const Container = styled(Box)`
  max-width: 80rem;
  margin-left: auto;
  margin-right: auto;
  padding: 0 16px;
`;

const Content = styled.section`
  padding-bottom: 32px;
`;

export const Styled = { Content, Container };
