import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './HomeView.scss';
import guitarist from './guitarist.jfif';

const HomeView = () => {
  return (
    <div className="container">
      <div class="row">
        <section id="home">
          <div>
            <div class="home-wrapper">
              <h3>Welcome to BandFinder</h3>
              <h1>
                Connecting artists and cultivating a community for creatives to
                meet, collaborate and grow.
              </h1>
            </div>
          </div>
        </section>

        <section id="about">
          <div className="about-left-side">
            <img src={guitarist} alt="about image" />

            <h4>Looking for an artist or band?</h4>
            <p>
              In our community we have various artists and bands willing to
              share their talents with other artists. Click below to view our
              members who are looking for people to collaborate with!
            </p>
            <Link to="#">View Our Artists</Link>
          </div>

          <div className="about-right-side">
            <div className="about-thumb">
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
                    <i class="fas fa-calendar-alt"></i> Tell your fans about
                    your concerts
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

        <section id="community">
          <div class="community-header">
            <div>
              <h2>Our Community</h2>
              <p>
                Here are some of the cool things our members, both artists and
                bands, have shared in the past. Check them out and don't be
                afraid to share something yourself!
              </p>
            </div>
          </div>
          <div className="user-gallery">
            <div>
              <div class="community-thumb">
                <img src={guitarist} class="img-responsive" alt="Fine Arts" />
              </div>
              <h4>artist 1</h4>
            </div>

            <div>
              <div class="community-thumb">
                <img src={guitarist} class="img-responsive" alt="artist 1" />
              </div>
              <h4>artist 1</h4>
            </div>

            <div>
              <div class="community-thumb">
                <img src={guitarist} class="img-responsive" alt="artist 1" />
              </div>
              <h4>artist 1</h4>
            </div>

            <div>
              <div class="community-thumb">
                <img src={guitarist} class="img-responsive" alt="artist 1" />
              </div>
              <h4>artist 1</h4>
            </div>
          </div>
        </section>

        <footer id="footer">
          <ul class="social-icon">
            <li>Copyright © 2020 BandFinder | Contact us: </li>
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
        </footer>
      </div>
    </div>
  );
};

export default HomeView;
