import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./StaffSidebar.css";

const StaffSidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("Islogin");
    localStorage.removeItem("currentUser");

    navigate("/login");
  };

  return (
    <aside className="staff-sidebar">

      {/* Logo */}
      <div className="staff-logo">
        <div className="staff-logo-icon">🎓</div>
        <h2>EduManage</h2>
      </div>

      {/* Menu */}
      <nav className="staff-menu">

        <p className="menu-title">MAIN MENU</p>

        <NavLink
          to="/Staff"
          end
          className={({ isActive }) =>
            isActive ? "staff-link active" : "staff-link"
          }
        >
          <span>🏠</span>
          Dashboard
        </NavLink>

        <NavLink
          to="/Staff/MyStudent"
          className={({ isActive }) =>
            isActive ? "staff-link active" : "staff-link"
          }
        >
          <span>👨‍🎓</span>
          My Students
        </NavLink>

        <NavLink
          to="/staff/attendance"
          className={({ isActive }) =>
            isActive ? "staff-link active" : "staff-link"
          }
        >
          <span>📋</span>
          Attendance
        </NavLink>

        <NavLink
          to="/staff/marks"
          className={({ isActive }) =>
            isActive ? "staff-link active" : "staff-link"
          }
        >
          <span>📝</span>
          Marks
        </NavLink>

        <NavLink
          to="/staff/Studentportal"
          className={({ isActive }) =>
            isActive ? "staff-link active" : "staff-link"
          }
        >
          <span>👤</span>
          Student Portal
        </NavLink>

        <p className="menu-title settings-title">ACCOUNT</p>

        <button className="logout-btn" onClick={handleLogout}>
          <span>🚪</span>
          Logout
        </button>

      </nav>

      {/* Sidebar Bottom */}
      <div className="sidebar-footer">
        <p>© 2026 EduManage</p>
      </div>

    </aside>
  );
};

export default StaffSidebar;