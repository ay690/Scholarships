import React from "react";
import { Outlet } from "react-router-dom";
import { NavBar, Footer } from "./index";

const DashboardLayout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
};

export default DashboardLayout;
