import React from "react";
import { Outlet } from "react-router-dom";

import StaffSidebar from "../../Component/StaffSidebar/StaffSidebar";

import "./StaffLayout.css";

const StaffLayout = () => {
  return (
    <div className="staff-layout">

      {/* SIDEBAR */}
      <StaffSidebar />

      {/* PAGE CONTENT */}
      <main className="staff-main">
        <Outlet />
      </main>

    </div>
  );
};

export default StaffLayout;