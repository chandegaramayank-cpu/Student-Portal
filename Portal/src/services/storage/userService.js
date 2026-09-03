import localStorageDB from './localStorageDB';

const USERS_KEY = 'users';

export const getUsers = () => localStorageDB.get(USERS_KEY, []);

export const saveUsers = (users) => localStorageDB.set(USERS_KEY, users);

export const addUser = (user) => {
  const users = getUsers();
  const next = [...users, user];
  saveUsers(next);
  return next;
};

export default {
  getUsers,
  saveUsers,
  addUser,
};
