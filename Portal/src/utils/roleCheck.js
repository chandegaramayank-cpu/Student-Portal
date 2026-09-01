export const roleHierarchy = {
  ADMIN: 4,
  HOD: 3,
  STAFF: 2,
  STUDENT: 1,
};

export const hasAccess = (userRole, requiredRole) => {
  if (!userRole || !requiredRole) return false;
  return (roleHierarchy[userRole] || 0) >= (roleHierarchy[requiredRole] || 0);
};

export default hasAccess;
