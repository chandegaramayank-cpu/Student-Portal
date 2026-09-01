import localStorageDB from './localStorageDB';

const STAFF_KEY = 'staff';

export const getStaff = () => localStorageDB.get(STAFF_KEY, []);

export const saveStaff = (staff) => localStorageDB.set(STAFF_KEY, staff);

export default {
  getStaff,
  saveStaff,
};
