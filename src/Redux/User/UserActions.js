import { SET_USER, CLEAR_USER, UPDATE_USER } from './UserTypes';

export const setUser = (token, username, id) => ({
  type: SET_USER,
  token,
  username,
  id,
});

export const clearUser = () => ({
  type: CLEAR_USER,
});

export const updateUser = (username) => ({
  type: UPDATE_USER,
  username,
});
