import React from 'react';
import guitarist from './images/guitarist.jfif';

export default function Community() {
  return (
    <section id="community">
      <div class="community-header">
        <div>
          <h2>Our Community</h2>
          <p>
            Here are some of the cool things our members, both artists and
            bands, have shared in the past. Check them out and don't be afraid
            to share something yourself!
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
  );
}
