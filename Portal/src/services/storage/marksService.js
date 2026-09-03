import localStorageDB from './localStorageDB';

const MARKS_KEY = 'marks';

export const getMarks = () => localStorageDB.get(MARKS_KEY, []);

export const saveMarks = (marks) => localStorageDB.set(MARKS_KEY, marks);

export default {
  getMarks,
  saveMarks,
};
