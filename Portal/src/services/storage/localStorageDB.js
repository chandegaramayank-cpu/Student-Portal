export const localStorageDB = {
  get: (key, fallback = null) => {
    try {
      const value = localStorage.getItem(key);
      return value ? JSON.parse(value) : fallback;
    } catch {
      return fallback;
    }
  },

  set: (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  },

  update: (key, updater) => {
    const current = localStorageDB.get(key, []);
    const next = typeof updater === 'function' ? updater(current) : updater;
    localStorageDB.set(key, next);
    return next;
  },

  remove: (key) => {
    localStorage.removeItem(key);
  },

  delete: (key) => {
    localStorage.removeItem(key);
  },
};

export default localStorageDB;
