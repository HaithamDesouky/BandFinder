import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './HomeView.scss';
import game from './game.png';
import movie from './movie.png';
import clothes from './clothes.png';
// import { listProducts } from '../services/product';

// import ProductItem from '../components/ProductItem';

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
        <div class="container">
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
          </div>
        </div>

        <div className="second">
          <div className="items">
            <img src={game} alt="" /> Magnetic Katamari Damacy Figure
          </div>
          <div className="items">
            <img src={movie} alt="" />
            Aliens Pencil Sharpener
          </div>
          <div className="items">
            <img src={clothes} alt="" />
            Spider-Man T-shirt
          </div>
        </div>

        <div className="third">
          <Link to="/social/newsfeed" className="home-links" id="lone-link">
            See what other members won!
          </Link>
        </div>
      </div>
    );
  }
}

export default HomeView;
