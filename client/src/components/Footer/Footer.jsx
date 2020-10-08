import React from 'react';
import { Styled } from './styles';

export default function Footer() {
  return (
    <Styled.Footer>
      <ul class="social-icon">
        <li> BandFinder </li>
        <li>
          <i className="fab fa-github"></i>
        </li>
        <li>
          <i className="fab fa-react"></i>
        </li>
        <li>
          <i className="fab fa-twitter"></i>
        </li>
        <li>
          <i className="fab fa-instagram"></i>
        </li>
        <li>
          {' '}
          <i className="fab fa-facebook"></i>
        </li>
        <li>
          <i className="fab fa-linkdin-in"></i>
        </li>
      </ul>
    </Styled.Footer>
  );
}
