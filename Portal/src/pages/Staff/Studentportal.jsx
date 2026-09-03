import React from "react";
import "./StudentPortal.css";

const StudentPortal = () => {
  const students = [
    {
      id: 1,
      name: "Rahul Sharma",
      rollNo: "ST001",
      course: "BCA",
      semester: "5th",
      attendance: "92%",
      marks: "85%",
    },
    {
      id: 2,
      name: "Priya Patel",
      rollNo: "ST002",
      course: "BCA",
      semester: "5th",
      attendance: "88%",
      marks: "91%",
    },
    {
      id: 3,
      name: "Amit Kumar",
      rollNo: "ST003",
      course: "BCA",
      semester: "5th",
      attendance: "95%",
      marks: "78%",
    },
    {
      id: 4,
      name: "Neha Joshi",
      rollNo: "ST004",
      course: "BCA",
      semester: "5th",
      attendance: "90%",
      marks: "89%",
    },
  ];

  return (
    <div className="student-portal">

      {/* Header */}
      <div className="portal-header">
        <div>
          <h1>Student Portal</h1>
          <p>View student academic information and performance.</p>
        </div>

        <div className="portal-icon">
          👨‍🎓
        </div>
      </div>

      {/* Statistics */}
      <div className="portal-cards">

        <div className="portal-card">
          <span>👨‍🎓</span>
          <div>
            <p>Total Students</p>
            <h2>{students.length}</h2>
          </div>
        </div>

        <div className="portal-card">
          <span>📊</span>
          <div>
            <p>Average Attendance</p>
            <h2>91%</h2>
          </div>
        </div>

        <div className="portal-card">
          <span>📝</span>
          <div>
            <p>Average Marks</p>
            <h2>86%</h2>
          </div>
        </div>

        <div className="portal-card">
          <span>🎓</span>
          <div>
            <p>Course</p>
            <h2>BCA</h2>
          </div>
        </div>

      </div>

      {/* Student Table */}
      <div className="student-table-section">

        <div className="table-header">
          <h2>Student Information</h2>

          <input
            type="text"
            placeholder="Search student..."
            className="student-search"
          />
        </div>

        <div className="table-container">
          <table>

            <thead>
              <tr>
                <th>#</th>
                <th>Student Name</th>
                <th>Roll No</th>
                <th>Course</th>
                <th>Semester</th>
                <th>Attendance</th>
                <th>Marks</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {students.map((student) => (
                <tr key={student.id}>

                  <td>{student.id}</td>

                  <td>
                    <div className="student-name">
                      <div className="student-avatar">
                        {student.name.charAt(0)}
                      </div>

                      <strong>{student.name}</strong>
                    </div>
                  </td>

                  <td>{student.rollNo}</td>

                  <td>{student.course}</td>

                  <td>{student.semester}</td>

                  <td>
                    <span className="attendance">
                      {student.attendance}
                    </span>
                  </td>

                  <td>
                    <span className="marks">
                      {student.marks}
                    </span>
                  </td>

                  <td>
                    <span className="status">
                      Active
                    </span>
                  </td>

                </tr>
              ))}
            </tbody>

          </table>
        </div>

      </div>

    </div>
  );
};

export default StudentPortal;