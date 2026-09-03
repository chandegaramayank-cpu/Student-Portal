import localStorageDB from './localStorageDB';

const ATTENDANCE_KEY = 'attendance';

export const getAttendance = () => localStorageDB.get(ATTENDANCE_KEY, []);

export const saveAttendance = (attendance) => localStorageDB.set(ATTENDANCE_KEY, attendance);

export default {
  getAttendance,
  saveAttendance,
};
