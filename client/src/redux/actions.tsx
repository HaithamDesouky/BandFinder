export const UPDATE_USER = 'UPDATE_USER';
export const LOG_OUT = 'LOG_OUT';

interface LogInAction {
  type: typeof UPDATE_USER;
  payload: string;
}
interface LogOutAction {
  type: typeof LOG_OUT;
  payload: string;
}

export type AuthenticationTypes = LogInAction | LogOutAction;

export const updateUser = (user: any): AuthenticationTypes => ({
  type: UPDATE_USER,
  payload: user
});

export const logOut = (user: any): AuthenticationTypes => ({
  type: LOG_OUT,
  payload: user
});
