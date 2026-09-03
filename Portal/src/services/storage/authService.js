import localStorageDB from './localStorageDB';

const CURRENT_USER_KEY = 'currentUser';

export const getCurrentUser = () => localStorageDB.get(CURRENT_USER_KEY, null);

export const setCurrentUser = (user) => localStorageDB.set(CURRENT_USER_KEY, user);

export const clearCurrentUser = () => localStorageDB.remove(CURRENT_USER_KEY);

export const login = (user) => {
  setCurrentUser(user);
  return user;
};

export const logout = () => {
  clearCurrentUser();
  return null;
};

export default {
  getCurrentUser,
  setCurrentUser,
  clearCurrentUser,
  login,
  logout,
};
