import React from "react";

import "./StaffDashboard.css";

const StaffDashboard = () => {

  return (
    <div>

      {/* HEADER */}

      <div className="dashboard-header">

        <div>
          <h1>Staff Dashboard</h1>

          <p>
            Welcome back! Manage your students and academic activities.
          </p>
        </div>

        <div className="staff-profile">
          👨‍🏫
          <div>
            <strong>Staff Member</strong>
            <span>Faculty</span>
          </div>
        </div>

      </div>


      {/* CARDS */}

      <div className="dashboard-cards">

        <div className="dashboard-card">

          <div className="card-icon">
            👨‍🎓
          </div>

          <div>
            <p>Total Students</p>
            <h2>120</h2>
          </div>

        </div>


        <div className="dashboard-card">

          <div className="card-icon">
            📋
          </div>

          <div>
            <p>Attendance</p>
            <h2>92%</h2>
          </div>

        </div>


        <div className="dashboard-card">

          <div className="card-icon">
            📝
          </div>

          <div>
            <p>Marks Entered</p>
            <h2>85%</h2>
          </div>

        </div>


        <div className="dashboard-card">

          <div className="card-icon">
            🎓
          </div>

          <div>
            <p>Courses</p>
            <h2>5</h2>
          </div>

        </div>

      </div>


      {/* QUICK ACTIONS */}

      <div className="quick-section">

        <h2>Quick Actions</h2>

        <div className="quick-actions">

          <div className="quick-card">
            <span>👨‍🎓</span>
            <h3>My Students</h3>
            <p>View and manage students.</p>
          </div>

          <div className="quick-card">
            <span>📋</span>
            <h3>Attendance</h3>
            <p>Mark student attendance.</p>
          </div>

          <div className="quick-card">
            <span>📝</span>
            <h3>Marks</h3>
            <p>Enter and manage marks.</p>
          </div>

        </div>

      </div>

    </div>
  );
};

export default StaffDashboard;