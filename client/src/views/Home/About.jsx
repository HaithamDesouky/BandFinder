import React from 'react';
import { Link } from 'react-router-dom';
import guitarist from './images/guitarist.jfif';

export default function About() {
  return (
    <section id="about">
      <div className="about-left-side">
        <img src={guitarist} alt="about image" />

        <h4>Looking for an artist or band?</h4>
        <p>
          In our community we have various artists and bands willing to share
          their talents with other artists. Click below to view our members who
          are looking for people to collaborate with!
        </p>
        <Link to="#">View Our Artists</Link>
      </div>

      <div className="about-right-side">
        <div className="about-thumb">
          <div>
            <h3>join our community today</h3>
            <h2>
              Take advantage of our active community, not only to find the band
              you're looking for but for so much more!
            </h2>
          </div>
          <div>
            {/* <h4>With us you can:</h4> */}
            <ul>
              <li>
                <i className="fas fa-music"></i> Show off your music
              </li>
              <li>
                <i class="fas fa-thumbs-up"></i> Share posts and photos with
                your fans{' '}
              </li>
              <li>
                <i class="fas fa-guitar"></i> Find artists for your band
              </li>
              <li>
                <i class="fas fa-users"></i> Find a band to play with
              </li>
              <li>
                <i class="fas fa-calendar-alt"></i> Tell your fans about your
                concerts
              </li>
              <li>
                <i class="fas fa-store-alt"></i> Share exclusive merchandise
                with your fans
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
