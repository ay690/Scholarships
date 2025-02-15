import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import {
  Login,
  ProtectedRoute,
  Register,
  DashboardLayout,
  Home,
  ScholarshipSearch,
} from "./components";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Protected routes with Navbar */}
        <Route element={<ProtectedRoute />}>
          <Route element={<DashboardLayout />}>
            <Route path="/home" element={<Home />} />
            <Route path="/search" element={<ScholarshipSearch />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
