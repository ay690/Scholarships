import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import ScholarshipSearch from "./components/ScholarshipSearch";
import ProtectedRoute from "./components/ProtectedRoute"; 
import DashboardLayout from "./components/DashboardLayout"
import Home from "./components/Home";


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

