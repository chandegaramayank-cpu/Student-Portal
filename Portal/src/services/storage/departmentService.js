import localStorageDB from './localStorageDB';

const DEPARTMENTS_KEY = 'departments';

export const getDepartments = () => localStorageDB.get(DEPARTMENTS_KEY, []);

export const saveDepartments = (departments) => localStorageDB.set(DEPARTMENTS_KEY, departments);

export default {
  getDepartments,
  saveDepartments,
};
