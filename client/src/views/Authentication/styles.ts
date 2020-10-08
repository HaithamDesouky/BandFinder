import styled from 'styled-components';
import media from 'styled-media-query';

import img from '../../images/homebg.gif';

const FormContainer = styled.div`
  background: url(${img}) 50% 0 repeat-y fixed;
  background-size: cover;
  background-position: center center;
  width: 100vw;
  min-height: 82vh;
  display: flex;
  justify-content: center;
  align-items: center;

  ${media.lessThan('large')`

   min-height: 93vh
    `}
`;

const FormWrapper = styled.div`
  background: rgba(250, 250, 250, 0.8);
  padding: 32px 12px;
  width: 100%;
  height: 100%;
  form {
    width: 50%;
    margin: auto;
    animation: moveInUp 2s;

    ${media.lessThan('medium')`

   width: 75%;
   padding-top: 50px;
    `}

    input,
    select {
      background-color: white;
      border: 1px solid black;
    }

    h2 {
      text-align: center;
    }
  }
`;

const SubmissionButton = styled.button`
  background-color: black;
  color: ${props => props.theme.colors.orange};
  font-size: 1.5rem;
  padding: 0.6rem;
  width: 100%;
  transition: all ease-in 0.2s;

  &:hover {
    background-color: ${props => props.theme.colors.white};
    box-shadow: inset 0 0 0 5px ${props => props.theme.colors.orange};
  }
`;

const InstrumentsSelection = styled.div`
  margin-top: 8px;

  div {
    margin-top: 4px;

    div {
      display: flex;
      justify-content: space-between;
    }
  }
`;

export const Styled = {
  FormContainer,
  FormWrapper,
  SubmissionButton,
  InstrumentsSelection
};
