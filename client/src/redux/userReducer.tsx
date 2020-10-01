import { Action } from './actions';

export interface UserState {
  user: any;
}

const initialState = {
  user: {}
};

export const userReducer = (
  state: UserState = initialState,
  action: Action
) => {
  switch (action.type) {
    case 'UPDATE_USER': {
      return { user: action.payload };
    }
    default:
      return state;
  }
};
