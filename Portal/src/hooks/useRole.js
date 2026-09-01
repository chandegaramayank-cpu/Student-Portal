import { useAuth } from './useAuth';
import { hasAccess } from '../utils/roleCheck';

export const useRole = (requiredRole) => {
  const { currentUser } = useAuth();
  const userRole = currentUser?.role;

  return hasAccess(userRole, requiredRole);
};

export default useRole;
