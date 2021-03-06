'use strict';

const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const GitHubStrategy = require('passport-github').Strategy;

const User = require('./models/user');
const bcryptjs = require('bcryptjs');

passport.serializeUser((user, callback) => {
  callback(null, user._id);
});

passport.deserializeUser((id, callback) => {
  User.findById(id)
    .then(user => {
      callback(null, user);
    })
    .catch(error => {
      callback(error);
    });
});

passport.use(
  'local-sign-up',
  new LocalStrategy(
    {
      usernameField: 'email',
      passReqToCallback: true
    },
    (req, email, password, callback) => {
      let url;
      if (req.file) {
        url = req.file.path;
      }

      const { name, instruments, userType } = req.body;
      User.findOne({
        email
      })
        .then(document => {
          if (document) {
            return Promise.reject(new Error('This email already exists'));
          } else {
            bcryptjs
              .hash(password, 10)
              .then(hash => {
                return User.create({
                  name,
                  email,
                  passwordHash: hash,
                  photo: url,
                  instruments: instruments.split(','),
                  userType
                });
              })
              .then(user => {
                console.log(user);
                callback(null, user);
              })
              .catch(error => {
                console.log(error);
                callback(error);
              });
          }
        })
        .catch(error => {
          console.log(error);
          callback(error);
        });

      console.log('should');
    }
  )
);

passport.use(
  'local-sign-in',
  new LocalStrategy({ usernameField: 'email' }, (email, password, callback) => {
    let user;
    User.findOne({
      email
    })
      .then(document => {
        if (!document) {
          return Promise.reject(new Error("There's no user with that email."));
        }
        user = document;
        return bcryptjs.compare(password, user.passwordHash);
      })
      .then(passwordMatchesHash => {
        if (passwordMatchesHash) {
          callback(null, user);
        } else {
          callback(
            new Error('It seems the password is incorrect. Please try again')
          );
        }
      })
      .catch(error => {
        callback(error);
      });
  })
);

// passport.use(
//   'github',
//   new GitHubStrategy(
//     {
//       clientID: process.env.GITHUB_CLIENT_ID,
//       clientSecret: process.env.GITHUB_CLIENT_SECRET,
//       callbackURL: 'http://localhost:3000/authentication/github-callback',
//       scope: 'user:email'
//     },
//     (accessToken, refreshToken, profile, callback) => {
//       const {
//         displayName: name,
//         emails,
//         photos: [{ value: photo } = {}] = []
//       } = profile;
//       const primaryEmail = emails.find(email => email.primary).value;
//       User.findOne({ email: primaryEmail })
//         .then(user => {
//           if (user) {
//             return Promise.resolve(user);
//           } else {
//             return User.create({
//               email: primaryEmail,
//               photo,
//               name,
//               githubToken: accessToken
//             });
//           }
//         })
//         .then(user => {
//           callback(null, user);
//         })
//         .catch(error => {
//           callback(error);
//         });
//     }
//   )
// );
