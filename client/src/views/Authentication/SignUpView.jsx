import React, { Component } from 'react';
import { signUp } from './../../services/authentication';
import './SignUpView.scss';
import { runInThisContext } from 'vm';

class AuthenticationSignUpView extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      password: '',
      photo: '',
      userType: '',
      instruments: []
    };
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleInstrumentInput = event => {
    const { name, value } = event.target;
    let instruments = [...this.state.instruments];
    let indexOfInstrument = instruments.indexOf(value);
    if (indexOfInstrument === -1) {
      instruments.push(value);
    } else {
      instruments.splice(indexOfInstrument, 1);
    }

    this.setState({
      instruments
    });
  };

  handleFormSubmission = event => {
    event.preventDefault();
    const { name, email, password, photo } = this.state;
    const body = { name, email, password, photo };
    console.log(body);
    signUp(body)
      .then(data => {
        const { user } = data;
        this.props.onUserUpdate(user);
        this.props.history.push('/');
      })
      .catch(error => {
        console.log(error);
      });
  };

  handlePhotoInputChange = event => {
    const file = event.target.files[0];

    this.setState({
      photo: file
    });
  };

  render() {
    return (
      <div className="form-box">
        <div className="form-div">
          <h2>Join our community!</h2>
          <form className="form-signup" onSubmit={this.handleFormSubmission}>
            <label htmlFor="input-name">Name: </label>
            <input
              className="form"
              id="input-name"
              type="text"
              name="name"
              placeholder="Full Name"
              value={this.state.name}
              onChange={this.handleInputChange}
              required
            />

            <label htmlFor="input-email">Email:</label>
            <input
              className="form"
              id="input-email"
              type="email"
              name="email"
              placeholder="Email"
              value={this.state.email}
              onChange={this.handleInputChange}
              required
            />

            <label htmlFor="input-userType">
              Are you a band, artist or fan?
            </label>

            <select
              className="form"
              id="input-userType"
              name="userType"
              value={this.state.userType}
              onChange={this.handleInputChange}
              required
            >
              <option value="Band">Band</option>
              <option value="Artist">Artist</option>
              <option value="Fan">Fan</option>
            </select>

            <label htmlFor="userInstrument">
              Which instrument would you like to play?
            </label>

            <div className="instruments">
              <div>
                <label for="guitar"> Guitar</label>
                <input
                  type="checkbox"
                  id="guitar"
                  name="guitar"
                  value="Guitar"
                  onChange={this.handleInstrumentInput}
                />
              </div>

              <div>
                <label for="piano"> Piano</label>
                <input
                  type="checkbox"
                  id="piano"
                  name="piano"
                  value="Piano"
                  onChange={this.handleInstrumentInput}
                />
              </div>
              <div>
                <label for="drums"> Drums</label>
                <input
                  type="checkbox"
                  id="drums"
                  name="drums"
                  value="Drums"
                  onChange={this.handleInstrumentInput}
                />
              </div>
              <div>
                {' '}
                <label for="singer"> Singer</label>
                <input
                  type="checkbox"
                  id="singer"
                  name="singer"
                  value="Singer"
                  onChange={this.handleInstrumentInput}
                />
              </div>
              <div>
                <label for="producer"> Producer</label>
                <input
                  type="checkbox"
                  id="producer"
                  name="producer"
                  value="Producer"
                  onChange={this.handleInstrumentInput}
                />
              </div>
              <div>
                <label for="other"> Other</label>
                <input
                  type="checkbox"
                  id="other"
                  name="other"
                  value="Other"
                  onChange={this.handleInstrumentInput}
                />
              </div>
            </div>

            <label htmlFor="input-password">Password: </label>
            <input
              className="form"
              id="input-password"
              type="password"
              name="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.handleInputChange}
              required
            />
            <label htmlFor="photo">Profile Photo</label>
            <input
              className="form"
              type="file"
              name="photo"
              onChange={this.handlePhotoInputChange}
            />
            <div className="buttons">
              <button
                class="btn-form"
                data-sm-link-text="CLICK"
                target="_blank"
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default AuthenticationSignUpView;
