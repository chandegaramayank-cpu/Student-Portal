import React from "react";
import "./StaffPages.css";

const MyStudents = () => {
  const students = [
    {
      id: 1,
      name: "Rahul Sharma",
      rollNo: "ST101",
      course: "BCA",
      semester: "5th",
      email: "rahul@gmail.com",
    },
    {
      id: 2,
      name: "Priya Patel",
      rollNo: "ST102",
      course: "BCA",
      semester: "5th",
      email: "priya@gmail.com",
    },
    {
      id: 3,
      name: "Amit Kumar",
      rollNo: "ST103",
      course: "BCA",
      semester: "5th",
      email: "amit@gmail.com",
    },
    {
      id: 4,
      name: "Neha Singh",
      rollNo: "ST104",
      course: "BCA",
      semester: "5th",
      email: "neha@gmail.com",
    },
  ];

  return (
    <div className="staff-page">
      <div className="page-header">
        <h1>My Students</h1>
        <p>View and manage your assigned students</p>
      </div>

      <div className="table-card">
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Student Name</th>
              <th>Roll No</th>
              <th>Course</th>
              <th>Semester</th>
              <th>Email</th>
            </tr>
          </thead>

          <tbody>
            {students.map((student, index) => (
              <tr key={student.id}>
                <td>{index + 1}</td>
                <td>{student.name}</td>
                <td>{student.rollNo}</td>
                <td>{student.course}</td>
                <td>{student.semester}</td>
                <td>{student.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyStudents;