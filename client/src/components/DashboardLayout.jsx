import React from "react";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import { NavBar, Footer } from "./index";

const DashboardLayout = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <NavBar />
      <Box sx={{ flex: 1, mt: 8 }}>
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
};

export default DashboardLayout;
