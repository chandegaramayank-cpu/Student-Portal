import localStorageDB from './localStorageDB';

const STUDENTS_KEY = 'students';

export const getStudents = () => localStorageDB.get(STUDENTS_KEY, []);

export const saveStudents = (students) => localStorageDB.set(STUDENTS_KEY, students);

export default {
  getStudents,
  saveStudents,
};
