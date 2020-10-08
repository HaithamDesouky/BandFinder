import styled from 'styled-components';
import media from 'styled-media-query';

const Footer = styled.footer`
  background: #000000;
  height: 9vh;
  display: flex;
  align-items: center;
  justify-content: center;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  padding: 10px;
  height: 50px;

  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    li {
      color: #d7b065;

      padding-left: 1rem;
      list-style: none;

      i {
        font-size: 1.5rem;
      }
    }
  }
`;

export const Styled = {
  Footer
};
