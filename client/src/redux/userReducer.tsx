import { UPDATE_USER, LOG_OUT, AuthenticationTypes } from './actions';

export interface UserState {
  user: any;
}

const initialState = {
  user: null
};

export const userReducer = (
  state: UserState = initialState,
  action: AuthenticationTypes
) => {
  switch (action.type) {
    case UPDATE_USER: {
      return { user: action.payload };
    }
    case LOG_OUT:
      console.log('should be null');
      return { user: null };
    default:
      return state;
  }
};
