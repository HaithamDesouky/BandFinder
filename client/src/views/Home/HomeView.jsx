import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './HomeView.scss';
import guitarist from './guitarist.jfif';

class HomeView extends Component {
  constructor() {
    super();
    this.state = {
      loaded: true,
      products: []
    };
  }

  render() {
    return (
      <div className="container">
        <div class="row">
          <section id="home" class="parallax-section">
            <div>
              <div class="home-wrapper">
                <h3>Welcome to BandFinder</h3>
                <h1>
                  Connecting artists and cultivating a community for creatives
                  to meet, collaborate and grow.
                </h1>
              </div>
            </div>
          </section>

          <section id="about">
            <div className="about-left-side">
              <img src={guitarist} alt="about image" />

              <h4>Looking for an artist?</h4>
              <p>
                In our community we have various artists willing to share their
                talents with other artists. Click below to view our members who
                are looking for bands to join!
              </p>
              <Link to="#">View Our Artists</Link>
            </div>

            <div className="about-right-side">
              <div className="about-thumb">
                <div>
                  <h3>join our community today</h3>
                  <h2>
                    Take advantage of our active community to find just the band
                    you are looking for
                  </h2>
                </div>
                <div>
                  <p>
                    Here in BandFinder, not only can you find artists and bands
                    you to collaborate with but you can share with your fans
                    your latest news and merchanise.
                  </p>

                  <h4>What you can do with us:</h4>
                  <ul>
                    <li>Show off your music</li>
                    <li>
                      Share posts, concerts and merchandise with your fans
                    </li>
                    <li>Find artists for your band</li>
                    <li>Find a band to play with</li>
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
  }
}

export default HomeView;
