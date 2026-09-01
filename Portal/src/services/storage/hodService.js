import localStorageDB from './localStorageDB';

const HODS_KEY = 'hods';

export const getHods = () => localStorageDB.get(HODS_KEY, []);

export const saveHods = (hods) => localStorageDB.set(HODS_KEY, hods);

export default {
  getHods,
  saveHods,
};
