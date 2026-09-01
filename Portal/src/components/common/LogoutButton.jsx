import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const LogoutButton = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    localStorage.removeItem('currentUser');
    localStorage.removeItem('Islogin');
    navigate('/');
  };

  return <button onClick={handleLogout}>LogOut</button>;
};

export default LogoutButton;

