'use strict';

const mongoose = require('mongoose');

const schema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true
    },
    userType: {
      type: String,
      enum: ['Artist', 'Band', 'Fan']
    },
    instruments: [String],
    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
      unique: true
    },
    admin: {
      type: Boolean,
      default: false
    },
    address: String,
    phone: String,
    authenticated: { type: Boolean, default: false },
    photo: String,
    passwordHash: {
      type: String
    },
    comments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment'
      }
    ],
    posts: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post'
      }
    ],
    feed: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post'
      }
    ],
    followers: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
      }
    ],
    following: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
      }
    ],

    githubToken: {
      type: String
    }
  },

  {
    timestamps: {
      createdAt: 'creationDate'
    }
  }
);

module.exports = mongoose.model('User', schema);
