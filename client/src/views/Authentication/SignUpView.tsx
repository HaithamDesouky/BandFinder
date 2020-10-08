import React, { useState } from 'react';
import { signUp } from './../../services/authentication';
import { useHistory } from 'react-router-dom';
import { UserModel } from '../../models/user';
import { Styled } from './styles';
import { Box, Flex } from 'rebass/styled-components';

interface UserProps {
  updateUser(user: UserModel): void;
}

const AuthenticationSignUpView: React.FC<UserProps> = ({ updateUser }) => {
  let history = useHistory();
  let [errorMessage, setError] = useState(false);

  const [instruments, setInstruments] = useState<string[]>([]);
  let photo: File;
  const handleFormSubmission = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formInputs = e.currentTarget.elements;
    const email = formInputs.namedItem('input-email') as HTMLInputElement;
    const password = formInputs.namedItem('input-password') as HTMLInputElement;
    const userType = formInputs.namedItem(
      'input-user-type'
    ) as HTMLInputElement;
    const name = formInputs.namedItem('input-name') as HTMLInputElement;

    const body = {
      email: email.value,
      password: password.value,
      instruments: instruments,
      userType: userType.value,
      name: name.value,
      photo
    };

    console.log(body);

    try {
      const user = await signUp(body);
      updateUser(user);
      localStorage.setItem('user', JSON.stringify(user.user));
      history.push('/');
    } catch (error) {
      const serverError = error.response.data.error;

      setError(serverError.message);
    }
  };

  const handlePhotoInputChange = (e: React.FormEvent<HTMLInputElement>) => {
    const file = e.currentTarget.files![0];

    photo = file;
  };

  const handleInstrumentInput = (e: React.FormEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;

    let indexOfInstrument = instruments.indexOf(value);
    if (indexOfInstrument === -1) {
      instruments.push(value);
    } else {
      instruments.splice(indexOfInstrument, 1);
    }
  };
  return (
    <Styled.FormContainer>
      <Styled.FormWrapper>
        <form onSubmit={handleFormSubmission}>
          <h2>Join our community!</h2>
          <label htmlFor="input-name">Name: </label>
          <input
            id="input-name"
            type="text"
            name="name"
            placeholder="Full Name"
            required
          />

          <label htmlFor="input-email">Email:</label>
          <input
            id="input-email"
            type="email"
            name="email"
            placeholder="Email"
            required
          />

          <label htmlFor="input-userType">Are you a band, artist or fan?</label>

          <select id="input-user-type" name="userType" required>
            <option value="Band">Band</option>
            <option value="Artist">Artist</option>
            <option value="Fan">Fan</option>
          </select>

          <Styled.InstrumentsSelection>
            <label htmlFor="input-instruments">
              Which instrument would you like to play?
            </label>

            <Flex flexWrap="wrap" mx={-3}>
              <Box width={[6 / 12, 6 / 12, 3 / 12, 4 / 12]} px={3}>
                <label htmlFor="guitar"> Guitar</label>
                <input
                  id="input-instruments"
                  type="checkbox"
                  name="guitar"
                  value="Guitar"
                  onChange={handleInstrumentInput}
                />
              </Box>

              <Box width={[6 / 12, 6 / 12, 4 / 12, 4 / 12]} px={3}>
                <label htmlFor="piano"> Piano</label>
                <input
                  id="input-instruments"
                  type="checkbox"
                  name="piano"
                  value="Piano"
                  onChange={handleInstrumentInput}
                />
              </Box>
              <Box width={[6 / 12, 6 / 12, 4 / 12, 4 / 12]} px={3}>
                <label htmlFor="drums"> Drums</label>
                <input
                  id="input-instruments"
                  type="checkbox"
                  name="drums"
                  value="Drums"
                  onChange={handleInstrumentInput}
                />
              </Box>
              <Box width={[6 / 12, 6 / 12, 4 / 12, 4 / 12]} px={3}>
                <label htmlFor="singer"> Singer</label>
                <input
                  id="input-instruments"
                  type="checkbox"
                  name="singer"
                  value="Singer"
                  onChange={handleInstrumentInput}
                />
              </Box>
              <Box width={[6 / 12, 6 / 12, 4 / 12, 4 / 12]} px={3}>
                <label id="input-instruments" htmlFor="producer">
                  {' '}
                  Producer
                </label>
                <input
                  id="input-instruments"
                  type="checkbox"
                  name="producer"
                  value="Producer"
                  onChange={handleInstrumentInput}
                />
              </Box>
              <Box width={[6 / 12, 6 / 12, 4 / 12, 4 / 12]} px={3}>
                <label htmlFor="other"> Other</label>
                <input
                  id="input-instruments"
                  type="checkbox"
                  name="other"
                  value="Other"
                  onChange={handleInstrumentInput}
                />
              </Box>
            </Flex>
          </Styled.InstrumentsSelection>
          <label htmlFor="input-password">Password: </label>
          <input
            id="input-password"
            type="password"
            name="password"
            placeholder="Password"
            required
          />
          <label htmlFor="input-photo">Profile Photo</label>
          <input
            type="file"
            name="input-photo"
            onChange={handlePhotoInputChange}
          />
          {errorMessage && (
            <div className="error-block">
              <p>There was an error submiting the form:</p>
              <p>{errorMessage}</p>
            </div>
          )}

          <Styled.SubmissionButton>Sign Up</Styled.SubmissionButton>
        </form>
      </Styled.FormWrapper>
    </Styled.FormContainer>
  );
};

export default AuthenticationSignUpView;
