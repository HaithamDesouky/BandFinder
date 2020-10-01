export type Action = { type: 'UPDATE_USER'; payload: string };

export const updateUser = (user: any): Action => ({
  type: 'UPDATE_USER',
  payload: user
});
