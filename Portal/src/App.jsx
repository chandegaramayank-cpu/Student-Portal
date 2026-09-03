import {
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import Login from "./pages/Auth/Login";
import Admin from "./pages/Admin";
import Hod from "./pages/HOD/Hod";

import StaffLayout from "./pages/Staff/StaffLayout.jsx";
import StaffDashboard from "./pages/Staff/StaffDashboard.jsx";
import Students from "./pages/Staff/MyStudent.jsx";
import StudentPortal from "./pages/Staff/Studentportal.jsx";


import Student from "./Component/Student/Student.jsx";


function App() {
  return (
    <Routes>

      {/* Default */}
      <Route
        path="/"
        element={<Navigate to="/login" replace />}
      />

      {/* Login */}
      <Route
        path="/login"
        element={<Login />}
      />

      {/* Admin */}
      <Route
        path="/admin"
        element={<Admin />}
      />

      {/* HOD */}
      <Route
        path="/hod"
        element={<Hod />}
      />


      {/* ================= STAFF ================= */}

      <Route
        path="/staff"
        element={<StaffLayout />}
      >

        {/* Staff Dashboard */}
        <Route
          index 
          element={<StaffDashboard />}
        />

      </Route>


      {/* Student */}
      <Route path="/Staff/MyStudent" 
      element={<Students />} />

     
<Route 
path="/studentportal"
 element={<StudentPortal />} />

      {/* Invalid URL */}
      <Route
        path="*"
        element={<Navigate to="/login" replace />}
      />

    </Routes>
  );
}

export default App;