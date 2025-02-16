import React, { Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./theme";
import { Loader } from "./components";

//Lazy Loading
const Login = lazy(() => import("./components/Login"));
const Register = lazy(() => import("./components/Register"));
const ProtectedRoute = lazy(() => import("./components/ProtectedRoute"));
const DashboardLayout = lazy(() => import("./components/DashboardLayout"));
const Home = lazy(() => import("./components/Home"));
const ScholarshipSearch = lazy(() => import("./components/ScholarshipSearch"));

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Suspense fallback={<Loader />}>
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
        </Suspense>
      </Router>
    </ThemeProvider>
  );
}

export default App;
