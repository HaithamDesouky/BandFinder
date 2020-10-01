import { composeWithDevTools } from 'redux-devtools-extension';

import { createStore } from 'redux';

import { userReducer } from './userReducer';

export const store = createStore(userReducer, composeWithDevTools());
