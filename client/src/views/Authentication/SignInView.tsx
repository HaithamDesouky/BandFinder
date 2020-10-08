import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { signIn } from '../../services/authentication';
import { UserModel } from '../../models/user';
import { Styled } from './styles';
import { Box, Flex } from 'rebass/styled-components';

interface UserProps {
  updateUser(user: UserModel): void;
}

const AuthenticationSignInView: React.FC<UserProps> = ({ updateUser }) => {
  let [errorMessage, setError] = useState(false);
  let history = useHistory();

  const handleFormSubmission = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formInputs = e.currentTarget.elements;
    const email = formInputs.namedItem('input-email') as HTMLInputElement;
    const password = formInputs.namedItem('input-password') as HTMLInputElement;

    try {
      const body = { email: email.value, password: password.value };
      const user = await signIn(body);

      updateUser(user.user);
      localStorage.setItem('user', JSON.stringify(user.user));

      if (user) {
        history.push('/');
      }
    } catch (error) {
      const serverError = error.response.data.error;

      setError(serverError.message);
    }
  };

  return (
    <Styled.FormContainer>
      <Styled.FormWrapper>
        <form onSubmit={handleFormSubmission}>
          <h2>Sign In</h2>

          <label htmlFor="input-email">Email: </label>
          <input
            id="input-email"
            type="email"
            name="email"
            placeholder="Email"
            required
          />

          <label htmlFor="input-password">Password: </label>
          <input
            className="form"
            id="input-password"
            type="password"
            name="password"
            placeholder="Password"
            required
          />
          {errorMessage && (
            <div className="error-block">
              <p>There was an error submiting the form:</p>
              <p>{errorMessage}</p>
            </div>
          )}

          <Styled.SubmissionButton>Sign In</Styled.SubmissionButton>
        </form>
      </Styled.FormWrapper>
    </Styled.FormContainer>
  );
};

export default AuthenticationSignInView;

// import React, { Component } from 'react';
// import { signIn } from './../../services/authentication';
// import './SignUpView.scss';
// import './SignUpView.scss';

// class AuthenticationSignInView extends Component {
//   constructor() {
//     super();
//     this.state = {
//       email: '',
//       password: '',
//       error: null
//     };
//   }

//   handleInputChange = event => {
//     const { name, value } = event.target;
//     this.setState({
//       [name]: value
//     });
//   };

//   handleFormSubmission = event => {
//     event.preventDefault();
//     const { email, password } = this.state;
//     const body = { email, password };
//     signIn(body)
//       .then(data => {
//         const { user } = data;
//         this.props.onUserUpdate(user);
//         this.props.history.push('/');
//       })
//       .catch(error => {
//         const serverError = error.response.data.error;
//         this.setState({
//           error: serverError
//         });
//       });
//   };

//   render() {
//     return (
//       <div className="form-box">
//         <div className="form-div">
//           <h2>Sign In</h2>
//           <form
//             className="
// form-signup"
//             onSubmit={this.handleFormSubmission}
//           >
//             <label htmlFor="input-email">Email: </label>
//             <input
//               className="form"
//               id="input-email"
//               type="email"
//               name="email"
//               placeholder="Email"
//               value={this.state.email}
//               onChange={this.handleInputChange}
//               required
//             />

//             <label htmlFor="input-password">Password: </label>
//             <input
//               className="form"
//               id="input-password"
//               type="password"
//               name="password"
//               placeholder="Password"
//               value={this.state.password}
//               onChange={this.handleInputChange}
//               required
//               minLength="1"
//             />

//             {this.state.error && (
//               <div className="error-block">
//                 <p>There was an error submiting the form:</p>
//                 <p>{this.state.error.message}</p>
//               </div>
//             )}
//             <div className="buttons">
//               <button class="btn-form">Sign In</button>
//             </div>
//           </form>
//         </div>
//       </div>
//     );
//   }
// }

// export default AuthenticationSignInView;
